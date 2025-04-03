"use client";

import { fetchTypes } from "@/apis/pokemonApi";
import { fetchPokemonData } from "@/features/common/utils/fetchPokemonData";
import { PokemonDetail, PokemonResponse, PokemonType } from "@/types/pokemon";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import PokemonList from "./components/PokemonList";
import TypeFilter from "./components/TypeFilter";

const LIMIT = 24;

export default function Pokemon() {
  const [pokemonData, setPokemonData] = useState<PokemonResponse | null>(null);
  const [pokemonDetails, setPokemonDetails] = useState<PokemonDetail[] | null>(
    null
  );
  const [types, setTypes] = useState<PokemonType[] | null>(null);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const router = useRouter();

  useEffect(() => {
    fetchPokemonData(selectedTypes, currentPage, LIMIT).then(
      ({ pokemonData, pokemonDetails }) => {
        if (pokemonData && pokemonDetails) {
          setPokemonData(pokemonData);
          setPokemonDetails(pokemonDetails);
        }
      }
    );
  }, [selectedTypes, currentPage]);

  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        const [fetchedTypes] = await Promise.all([fetchTypes()]);
        setTypes(fetchedTypes);
      } catch (error) {
        console.error("Error fetching types:", error);
      }
    };

    fetchInitialData();
  }, []);

  useEffect(() => {
    const query = new URLSearchParams({
      type: selectedTypes.join(","),
      page: currentPage.toString(),
    });
    router.push(`?${query.toString()}`);
  }, [selectedTypes, currentPage, router]);

  const handleTypeClick = (type: string) => {
    const updatedSelectedTypes = selectedTypes.includes(type)
      ? selectedTypes.filter((t) => t !== type)
      : [...selectedTypes, type];
    setSelectedTypes(updatedSelectedTypes);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  if (!pokemonData || !pokemonDetails || !types) {
    return <div>Loading...</div>;
  }

  console.log("pokemonData", pokemonData);
  console.log("pokemonDetails", pokemonDetails);

  return (
    <section className="flex flex-col gap-4 px-10">
      <p className="py-4 text-center">Welcome to Pokémon world</p>
      <p>Total count: {pokemonData.count}</p>
      <TypeFilter
        types={types}
        selectedTypes={selectedTypes}
        onTypeClick={handleTypeClick}
      />
      <PokemonList
        totalCount={pokemonData.count}
        data={pokemonDetails}
        limit={LIMIT}
        onPageChange={handlePageChange}
        currentPage={currentPage}
      />
    </section>
  );
}

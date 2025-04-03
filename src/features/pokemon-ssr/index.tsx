import { fetchTypes } from "@/apis/pokemonApi";
import { fetchPokemonData } from "@/features/common/utils/fetchPokemonData";
import PokemonList from "./components/PokemonList";
import TypeFilter from "./components/TypeFilter";

const LIMIT = 24;

export default async function PokemonSSR({
  searchParams = {},
}: {
  searchParams: { type?: string; page?: string };
}) {
  const selectedTypes = searchParams.type ? searchParams.type.split(",") : [];
  const currentPage = searchParams.page ? parseInt(searchParams.page, 10) : 1;

  const [types, { pokemonData, pokemonDetails }] = await Promise.all([
    fetchTypes(),
    fetchPokemonData(selectedTypes, currentPage, LIMIT),
  ]);

  if (!pokemonData || !pokemonDetails || !types) {
    return <div>Loading...</div>;
  }

  return (
    <section className="flex flex-col gap-4 px-10">
      <p className="py-4 text-center">Welcome to Pokémon world</p>
      <p>Total count: {pokemonData.count}</p>
      <TypeFilter types={types} selectedTypes={selectedTypes} />
      <PokemonList
        totalCount={pokemonData.count}
        data={pokemonDetails}
        limit={LIMIT}
        currentPage={currentPage}
        selectedTypes={selectedTypes}
      />
    </section>
  );
}

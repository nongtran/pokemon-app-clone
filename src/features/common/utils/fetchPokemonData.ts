import {
  fetchPokemon,
  fetchPokemonByType,
  fetchPokemonDetails,
} from "@/apis/pokemonApi";
import { PokemonDetail, PokemonResponse } from "@/types/pokemon";

export async function fetchPokemonData(
  selectedTypes: string[],
  page: number,
  pageSize: number
): Promise<{
  pokemonData: PokemonResponse | null;
  pokemonDetails: PokemonDetail[] | null;
}> {
  const offset = (page - 1) * pageSize;

  try {
    let fetchedPokemonDetails: PokemonDetail[];

    if (!selectedTypes || selectedTypes.length === 0) {
      const fetchedPokemon = await fetchPokemon(pageSize, offset);
      fetchedPokemonDetails = await Promise.all(
        fetchedPokemon.results.map((pokemon) =>
          fetchPokemonDetails(pokemon.name)
        )
      );
      return {
        pokemonData: fetchedPokemon,
        pokemonDetails: fetchedPokemonDetails,
      };
    } else {
      const pokemonList = await Promise.all(
        selectedTypes.map((type) => fetchPokemonByType(type))
      );

      const flattenedPokemonList = pokemonList.flat();

      fetchedPokemonDetails = await Promise.all(
        flattenedPokemonList.map((pokemon) => fetchPokemonDetails(pokemon.name))
      );

      fetchedPokemonDetails = fetchedPokemonDetails.filter((detail) =>
        selectedTypes.every((selectedType) =>
          detail.types.some((type) => type.type.name === selectedType)
        )
      );

      fetchedPokemonDetails = Array.from(
        new Map(
          fetchedPokemonDetails.map((detail) => [detail.name, detail])
        ).values()
      );

      return {
        pokemonData: {
          count: fetchedPokemonDetails.length,
          results: [],
          next: null,
          previous: null,
        },
        pokemonDetails:
          fetchedPokemonDetails?.slice(offset, offset + pageSize) || [],
      };
    }
  } catch (error) {
    console.error("Error fetching Pokémon data:", error);
    return { pokemonData: null, pokemonDetails: null };
  }
}

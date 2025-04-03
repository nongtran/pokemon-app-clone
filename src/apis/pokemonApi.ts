import {
  Pokemon,
  PokemonDetail,
  PokemonResponse,
  PokemonType,
} from "@/types/pokemon";

const BASE_URL = "https://pokeapi.co/api/v2";

export async function fetchPokemon(
  limit: number,
  offset: number
): Promise<PokemonResponse> {
  const response = await fetch(
    `${BASE_URL}/pokemon?limit=${limit}&offset=${offset}`
  );
  if (!response.ok) throw new Error("Failed to fetch Pokémon");
  return response.json();
}

export async function fetchTypes(): Promise<PokemonType[]> {
  const response = await fetch(`${BASE_URL}/type`);
  if (!response.ok) throw new Error("Failed to fetch types");
  const data = await response.json();
  return data.results;
}

export async function fetchPokemonByType(type: string): Promise<Pokemon[]> {
  const response = await fetch(`${BASE_URL}/type/${type}`);
  if (!response.ok)
    throw new Error(`Failed to fetch Pokémon for type: ${type}`);
  const data = await response.json();
  return data.pokemon.map((entry: { pokemon: Pokemon }) => entry.pokemon);
}

const pokemonDetailsCache: Record<string, PokemonDetail> = {};

export async function fetchPokemonDetails(
  name: string
): Promise<PokemonDetail> {
  if (pokemonDetailsCache[name]) {
    return pokemonDetailsCache[name];
  }

  const response = await fetch(`${BASE_URL}/pokemon/${name}`);
  if (!response.ok) throw new Error(`Failed to fetch details for ${name}`);
  const data = await response.json();
  pokemonDetailsCache[name] = data; // Cache the result
  return data;
}

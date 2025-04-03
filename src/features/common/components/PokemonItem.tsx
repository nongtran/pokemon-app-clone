"use client";

import { PokemonDetail } from "@/types/pokemon";
import Image from "next/image";

interface Props {
  pokemon: PokemonDetail;
}

export default function PokemonItem({ pokemon }: Props) {
  return (
    <div className="flex flex-col items-center justify-between">
      <h3>{pokemon.name}</h3>
      <Image
        src={
          //pokemon.sprites.front_default ||
          pokemon.sprites.other.showdown.front_default || "/placeholder.png"
        }
        alt={pokemon.name}
        width={35}
        height={53}
        className="w-20 h-20"
        style={{ color: "transparent" }}
      />
      <p>Number: {pokemon.id}</p>
    </div>
  );
}

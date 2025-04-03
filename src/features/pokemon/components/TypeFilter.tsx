"use client";

import { PokemonType } from "@/types/pokemon";

interface Props {
  types: PokemonType[];
  selectedTypes: string[];
  onTypeClick: (type: string) => void;
}

export default function TypeFilter({
  types,
  selectedTypes = [],
  onTypeClick,
}: Props) {
  return (
    <section className="flex flex-wrap items-center gap-x-4 gap-y-2">
      <span>Types:</span>
      {types.map((type) => (
        <button
          key={type.name}
          onClick={() => onTypeClick(type.name)}
          className={`p-4 border border-gray-300 ${
            selectedTypes.includes(type.name)
              ? "bg-blue-500 text-white"
              : "bg-white"
          } hover:bg-blue-100`}
          style={{ padding: "16px" }}
        >
          {type.name}
        </button>
      ))}
    </section>
  );
}

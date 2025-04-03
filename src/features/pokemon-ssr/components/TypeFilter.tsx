import { PokemonType } from "@/types/pokemon";
import { generatePokemonUrl } from "@/features/common/utils/urlHelpers";
import Link from "next/link";

interface Props {
  types: PokemonType[];
  selectedTypes: string[];
}

export default function TypeFilter({ types, selectedTypes = [] }: Props) {
  return (
    <section className="flex flex-wrap items-center gap-x-4 gap-y-2">
      <span>Types:</span>
      {types.map((type) => {
        const isSelected = selectedTypes.includes(type.name);
        const updatedSelectedTypes = isSelected
          ? selectedTypes.filter((t) => t !== type.name)
          : [...selectedTypes, type.name];

        return (
          <Link
            key={type.name}
            href={generatePokemonUrl(updatedSelectedTypes, 1)}
            className={`p-4 border border-gray-300 ${
              isSelected ? "bg-blue-500 text-white" : "bg-white"
            } hover:bg-blue-100`}
          >
            {type.name}
          </Link>
        );
      })}
    </section>
  );
}

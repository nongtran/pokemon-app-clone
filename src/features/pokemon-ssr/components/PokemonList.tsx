import { PokemonDetail } from "@/types/pokemon";
import PokemonItem from "@/features/common/components/PokemonItem";
import { generatePokemonUrl } from "@/features/common/utils/urlHelpers";
import Link from "next/link";

interface Props {
  totalCount: number;
  data: PokemonDetail[];
  limit: number;
  currentPage: number;
  selectedTypes: string[];
}

export default function PokemonList({
  totalCount,
  data = [],
  limit,
  currentPage,
  selectedTypes = [],
}: Props) {
  const totalPages = Math.ceil(totalCount / limit);

  return (
    <section className="flex flex-col justify-center">
      <section className="grid grid-cols-6 gap-16">
        {data.map((pokemon) => (
          <PokemonItem key={pokemon.id} pokemon={pokemon} />
        ))}
      </section>
      <div className="flex justify-center gap-4 py-4">
        <Link
          href={generatePokemonUrl(selectedTypes, currentPage - 1)} // Dynamically generate URL for previous page
          className={`rounded px-4 py-2 text-white ${
            currentPage <= 1 ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500"
          }`}
          style={{ pointerEvents: currentPage <= 1 ? "none" : "auto" }}
        >
          Previous
        </Link>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <Link
          href={generatePokemonUrl(selectedTypes, currentPage + 1)} // Dynamically generate URL for next page
          className={`rounded px-4 py-2 text-white ${
            currentPage >= totalPages
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-500"
          }`}
          style={{ pointerEvents: currentPage >= totalPages ? "none" : "auto" }}
        >
          Next
        </Link>
      </div>
    </section>
  );
}

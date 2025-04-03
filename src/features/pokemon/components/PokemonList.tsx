"use client";

import { PokemonDetail } from "@/types/pokemon";
import PokemonItem from "@/features/common/components/PokemonItem";

interface Props {
  totalCount: number;
  data: PokemonDetail[];
  limit: number;
  onPageChange: (page: number) => void;
  currentPage: number;
}

export default function PokemonList({
  totalCount,
  data = [],
  limit,
  currentPage,
  onPageChange,
}: Props) {
  const totalPages = Math.ceil(totalCount / limit);

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  return (
    <section className="flex flex-col justify-center">
      <section className="grid grid-cols-6 gap-16">
        {data.map((pokemon) => (
          <PokemonItem key={pokemon.id} pokemon={pokemon} />
        ))}
      </section>
      <div className="flex justify-center gap-4 py-4">
        <button
          onClick={handlePrevious}
          disabled={currentPage <= 1}
          className={`rounded px-4 py-2 text-white ${
            currentPage <= 1 ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500"
          }`}
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNext}
          disabled={currentPage >= totalPages}
          className={`rounded px-4 py-2 text-white ${
            currentPage >= totalPages
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-500"
          }`}
        >
          Next
        </button>
      </div>
    </section>
  );
}

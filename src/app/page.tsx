import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 gap-4">
      <h2 className="text-xl font-bold">Exercise Instructions</h2>
      <ol className="list-decimal list-inside mt-4 space-y-2">
        <li>
          Copy one of the Pokemon pages (e.g., <code>/pokemon-ssr</code> or{" "}
          <code>/pokemon</code>).
        </li>
        <li>
          Implement a new page that displays a list of Pokemon with pagination.
        </li>
        <li>Add functionality to filter the Pokemon by type.</li>
        <li>
          Use the API documentation at{" "}
          <a
            href="https://pokeapi.co/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            https://pokeapi.co/
          </a>{" "}
          to fetch the Pokémon data.
        </li>
      </ol>
      <Link
        href="/pokemon-ssr"
        className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto"
      >
        Go to Pokemon (Server-Side Rendering)
      </Link>
      <Link
        href="/pokemon"
        className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto"
      >
        Go to Pokemon (Client-Side Rendering)
      </Link>
    </div>
  );
}

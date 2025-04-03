import PokemonSSR from "@/features/pokemon-ssr";

interface PageProps {
  searchParams: Promise<{ type?: string; page?: string }>;
}

export default async function PokemonSSRPage({ searchParams }: PageProps) {
  const resolvedSearchParams = await searchParams;
  const type = resolvedSearchParams.type || "";
  const page = resolvedSearchParams.page || "1";

  return <PokemonSSR searchParams={{ type, page }} />;
}

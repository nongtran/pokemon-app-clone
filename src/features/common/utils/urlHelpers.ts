export function generatePokemonUrl(
  selectedTypes: string[],
  page: number
): string {
  const typeQuery =
    selectedTypes.length > 0 ? `type=${selectedTypes.join(",")}` : "";
  const pageQuery = `page=${page}`;
  const queryString = [typeQuery, pageQuery].filter(Boolean).join("&");

  return `/pokemon-ssr?${queryString}`; // Ensure the URL is dynamically generated
}

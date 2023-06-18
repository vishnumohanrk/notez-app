export default function SearchPage({
  searchParams: { query },
}: {
  searchParams: { query?: string };
}) {
  return <p>Searched for: {query}</p>;
}

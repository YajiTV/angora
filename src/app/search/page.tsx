type SearchPageProps = {
  searchParams: {
    q?: string; // q peut être undefined si pas présent dans l'URL
  };
};

export default function SearchPage({ searchParams }: SearchPageProps) {
  const query = searchParams.q || "";
  return <h2>Résultats pour : {query}</h2>;
}
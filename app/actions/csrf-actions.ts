

export async function FetchCsrfToken() {
  const res = await fetch("/api/csrf"); 
  return await res.json();
}

export async function publicFetch(url: string, options = {} as RequestInit) {
  const defaultOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await fetch(url, { ...defaultOptions, ...options });
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    return error;
  }
}

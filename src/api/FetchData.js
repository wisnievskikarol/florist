export const fetchDataAutho = async (url, authToken) => {
  const response = await fetch(url, {
    method: "GET",
    headers: {
      Authorization: "Bearer" + authToken,
    },
  });
  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }
  return await response.json();
};

export const fetchDataNoAutho = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }
  return await response.json();
};

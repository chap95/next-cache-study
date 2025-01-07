/* eslint-disable @typescript-eslint/no-empty-object-type */
const BASE_URL = "https://pokeapi.co/api/v2";

export const customFetch = async (endPoint: string, options?: {}) => {
  const response = await fetch(`${BASE_URL}${endPoint}`, options);
  console.log(response.headers);
  return await response.json();
};

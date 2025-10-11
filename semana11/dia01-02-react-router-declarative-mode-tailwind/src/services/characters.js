const BASE_URL = 'https://rickandmortyapi.com/api'

export const fetchCharacters = async () => {
  const url = `${BASE_URL}/character`

  const response = await fetch(url)

  return await response.json()
}
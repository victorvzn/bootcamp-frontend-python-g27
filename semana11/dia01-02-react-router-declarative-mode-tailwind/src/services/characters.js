const BASE_URL = 'https://rickandmortyapi.com/api'

export const fetchCharacters = async () => {
  const url = `${BASE_URL}/character`

  const response = await fetch(url)

  return await response.json()
}

export const getCharacter = async (id) => {
  // https://rickandmortyapi.com/api/character/2
  const url = `${BASE_URL}/character/${id}`

  const response = await fetch(url)

  return await response.json()
}
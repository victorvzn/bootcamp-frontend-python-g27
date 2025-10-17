// TODO: 01 - Renderizar en la ruta home los personajes del api de Dragonball (https://rickandmortyapi.com/). El resultado debe mostrarse en una grilla de 3x3

import { useEffect } from "react"
import { useState } from "react"
import { fetchCharacters } from "../services/characters"
import { Link } from "react-router"

const HomePage = () => {
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    fetchCharacters()
      .then(results => setCharacters(results.results))
  }, [])

  return (
    <main className="m-4">
      <h1 className="text-3xl font-bold text-center">Home Page - Characters</h1>

      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
        {characters.map(character => {
          return (
            <Link
              key={character.id}
              to={`/characters/${character.id}`}
              className="bg-yellow-300 rounded-lg p-3 flex flex-col justify-evenly items-center"
            >
              <img src={character.image} width={100} />
              <div className="font-bold text-2xl">#{character.id}</div>
              <div className="font-bold text-3xl">{character.name}</div>
              <div className="font-bold bg-orange-300 text-slate-800 p-2 rounded-lg uppercase">{character.race}</div>
            </Link>
          )
        })}
      </section>

      <pre className="border p-2 bg-slate-100 mt-4 overflow-x-auto">{JSON.stringify(characters, null, 2)}</pre>
    </main>
  )
}

export default HomePage
import { useEffect, useState } from "react"
import { Link, useParams, useNavigate } from "react-router"

import { getCharacter } from "../services/characters"

const CharacterPage = () => {
  const { id } = useParams()

  const [character, setCharacter] = useState()

  const navigate = useNavigate()

  useEffect(() => {
    getCharacter(id)
      .then(result => setCharacter(result))
  }, [])

  const handleBackHome = () => {
    navigate('/')
  }

  return (
    <main>
      <h1 className="text-2xl font-medium">Character detail #{id}</h1>

      <button onClick={handleBackHome}>⬅ Back home</button>

      <Link to='/' className="text-blue-500 font-medium">⬅ Back home</Link>

      <section className="bg-yellow-300 rounded-lg p-3 flex flex-col justify-evenly items-center gap-2">
        <img src={character?.image} width={100} />
        <div className="font-bold text-3xl">{character?.name}</div>
        <div className="font-bold bg-orange-300 text-slate-800 p-2 rounded-lg uppercase">{character?.species} - {character?.status}</div>
      </section>

      <pre className="border p-2 bg-slate-100 mt-4 overflow-hidden">{JSON.stringify(character, null, 2)}</pre>
    </main>
  )
}

export default CharacterPage
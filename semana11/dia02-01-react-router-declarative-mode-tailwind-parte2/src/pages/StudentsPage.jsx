import { useEffect, useState } from "react"
import { fetchStudents } from "../services/students"
import { supabase } from "../lib/supabase"

const StudentsPage = () => {
  const [students, setStudents] = useState([])

  const [firstName, setFirstName]= useState('')
  const [lastName, setLastName]= useState('')

  useEffect(() => {
    fetchStudents()
      .then(response => setStudents(response.data))
  }, [])

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const form = { 'first_name': firstName, 'last_name': lastName }

    console.log(form)

    const { data, error } = await supabase
      .from('students')
      .insert([form])
    
    if (error) {
      console.log(error)
      return
    }

    console.log('Datos guardados correctamente.', data)

    setFirstName('')
    setLastName('')

    fetchStudents()
      .then(response => setStudents(response.data))
  }

  return (
    <section>
      <h2>StudentsPage</h2>

      <ul>
        {students.map(student => {
          return <li key={student.id}>{student.first_name} {student.last_name}</li>
        })}
      </ul>

      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(event) => setFirstName(event.target.value) } placeholder="First name" />
        <input type="text" onChange={(event) => setLastName(event.target.value) } placeholder="Last name" />

        <input type="submit" value="Save" />
      </form>
    </section>
  )
}

export default StudentsPage
import { useEffect, useState } from "react"
import { fetchStudents } from "../services/students"

const StudentsPage = () => {
  const [students, setStudents] = useState([])

  const [firstName, setFirstName]= useState('')
  const [lastName, setLastName]= useState('')

  useEffect(() => {
    fetchStudents()
      .then(response => setStudents(response.data))
  }, [])

  return (
    <section>
      <h2>StudentsPage</h2>

      <ul>
        {students.map(student => {
          return <li key={student.id}>{student.first_name} {student.last_name}</li>
        })}
      </ul>

      <form>
        <input type="text" onChange={(event) => setFirstName(event.target.value) } placeholder="First name" />
        <input type="text" onChange={(event) => setLastName(event.target.value) } placeholder="Last name" />

        <input type="submit" value="Save" />
      </form>
    </section>
  )
}

export default StudentsPage
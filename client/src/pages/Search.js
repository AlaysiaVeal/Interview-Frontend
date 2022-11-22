import { useMemo, useState, useEffect } from 'react'
import Client from '../services/api'
import StudentCard from '../components/StudentCard'
import { Link } from 'react-router-dom'

const Search = () => {
  const [students, setStudents] = useState([])
  const [query, setQuery] = useState('')

  const filteredList = useMemo(() => {
    return students.filter((student) => {
      return student.name.toLowerCase().includes(query.toLowerCase())
    })
  }, [students, query])

  const getStudents = async () => {
    const response = await Client.get(`/students`)
    setStudents(response.data)
  }

  useEffect(() => {
    getStudents()
  }, [0])

  return (
    <div>
      <div className="search-input">
        Search:
        <input onChange={(e) => setQuery(e.target.value)} type="search" />
      </div>
      <div className="search-field">
        <section>
          {filteredList?.map((student) => (
            <div>
              <Link to={`/students/details/${student.id}`}>{student.name}</Link>
              {/* <StudentCard
                id={student?.id}
                key={student?.id}
                studentName={student?.name}
                grade={student?.grade}
              /> */}
            </div>
          ))}
        </section>
      </div>
    </div>
  )
}
export default Search

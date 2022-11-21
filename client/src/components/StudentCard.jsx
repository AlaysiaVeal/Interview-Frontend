import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Client from '../services/api'

const StudentCard = ({id, student }) => {
  const [students, setStudents] = useState([])
  useEffect(() => {
    const apiCall = async () => {
      const response = await Client.get(`/students`)
      setStudents(response.data)
    }
    apiCall()
  }, [])

  return (
    <div>
      {students.map((student)=>(
        <Link to={`/students/details/${student.id}`}>
    <div className='student-card' key={student.id}>
      <h2 id="student-name">{student.name}</h2> 
    </div>
    </Link>
    ))}
    
    </div>
  )
}

export default StudentCard
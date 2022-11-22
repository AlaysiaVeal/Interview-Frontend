import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect, useCallback } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import StudentCard from '../components/StudentCard'
import Client from '../services/api'

const StudentDetails = ({ id }) => {
  const { studentId } = useParams()
  const [students, setStudents] = useState({})

  const getStudents = useCallback(async () => {
    const response = await Client.get(`/students/details/${studentId}`)
    setStudents(response.data[0])
    console.log(response.data)
  }, [])

  useEffect(() => {
    getStudents()
  }, [])

  return students(
    /*  !== null ? */ <div className="student-details-container">
      <section>
        {students?.map((student) => (
          <div className="studentDetails" key={student.id} id={student.id}>
            <h2 className="student-details-title"> {student?.name} </h2>
            <h3 className="student-details-text"> {student?.email} </h3>
          </div>
        ))}
      </section>
      <h1>Course Info</h1>
      <section>
        {students?.map((student) => (
          <StudentCard
            id={student?.id}
            key={student?.id}
            studentName={student?.name}
            grade={student?.letter}
          />
        ))}
      </section>
      <Link type="button" to={``}>
        <button className="add-student-button">Add A Student</button>
      </Link>
    </div>
  ) /* : null */
}

export default StudentDetails

import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect, useCallback } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import StudentCard from '../components/StudentCard'
import Client from '../services/api'

const StudentDetails = ({ user }) => {
  const { studentId } = useParams()
  const [students, setStudents] = useState(' ')

  const getStudents = useCallback(async () => {
    const response = await Client.get(`/students`)
    setStudents(response.data)
  }, [studentId])

  useEffect(() => {
    getStudent()
  }, [getStudents, user])

  return students !== null ? (
    <div className="student-details-container">
      <section>
        <div className="studentDetails" key={students.id} id={students.id}>
          <h2 className="student-details-title"> {students.name} </h2>
          <h3 className="student-details-text"> {students.grade} </h3>
        </div>
      </section>
      <h1>Course Info</h1>
      <section>
        {students?.map((student) => (
          <StudentCard
            id={student?.id}
            key={student?.id}
            studentName={student?.name}
            grade={student?.grade}
          />
        ))}
      </section>
      <Link type="button" to={``}>
        <button className="add-student-button">Add A Student</button>
      </Link>
    </div>
  ) : null
}

export default StudentDetails

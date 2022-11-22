import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect, useCallback } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import StudentDetails from '../pages/StudentDetails'
import Client from '../services/api'

const StudentCard = ({ user }) => {
  let navigate = useNavigate()
  const { studentId } = useParams()
  const [students, setStudents] = useState([])

  const getStudent = useCallback(async () => {
    const response = await Client.get(`/students`)
    setStudents(response.data)
  }, [studentId])

  useEffect(() => {
    getStudent()
  }, [getStudent, user])

  return students !== null ? (
    <div className="student-details-container">
      <section>
        <div className="studentDetails" key={students.id} id={students.id}>
          <h2 className="student-details-title"> {students.name} </h2>
          <h3 className="student-details-text"> {students.description} </h3>
        </div>
      </section>
      <section>
      {students?.map((student) => (
          // <Link to={`/students/details/${student.id}`} key={student.id}>
      <p className="student-link" onClick={() => navigate(`/students/details/${student.id}`)}>{student?.name} - GPA: {student.score} </p>
      // </Link>
      ))}
      </section>
      <Link to='/students/new_student_form'>
      <button className="add-student-button">Add A Student</button>
      </Link>
    </div>
  ) : null
}

export default StudentCard
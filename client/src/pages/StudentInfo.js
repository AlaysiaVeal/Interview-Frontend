import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Client from '../services/api'
import { Link } from 'react-router-dom'

const StudentInfo = ({ user }) => {
  let { student_id } = useParams()

  const [student, setStudent] = useState({})

  const getStudentInfo = async () => {
    let response = await Client.get(`/students/details/${student_id}`)
    setStudent(response.data[0])
  }

  useEffect(() => {
    getStudentInfo()
  }, [user])
  return (
    <div>
      <h1>Student Info</h1>
      <p>Name: {student?.name}</p>
      <p>Email: {student?.email}</p>
      <p>GPA: {student?.score}</p>
      <p>Letter: {student?.letter}</p>
    </div>
  )
}
export default StudentInfo

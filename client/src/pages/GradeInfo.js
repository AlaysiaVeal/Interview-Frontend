import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Client from '../services/api'

const GradeInfo = ({ user }) => {
  let { student_id } = useParams()

  const [student, setStudent] = useState({})

  const getGrade = async () => {
    let response = await Client.get(`/grade/${student_id}`)
    console.log(response.data)
    setStudent(response.data)
  }

  useEffect(() => {
    getGrade()
  }, [user])
  return (
    <div>
      <p>{student?.name}</p>
      <p>{student?.description}</p>
    </div>
  )
}
export default GradeInfo

import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Client from '../services/api'

const CourseInfo = ({ user }) => {
  let { course_id } = useParams()

  const [course, setCourse] = useState({})

  const getClassInfo = async () => {
    let response = await Client.get(`/course/${course_id}`)
    setCourse(response.data[0])
  }

  useEffect(() => {
    getClassInfo()
  }, [user])
  return (
    <div>
      <p>{course?.name}</p>
      <p>{course?.description}</p>
    </div>
  )
}
export default CourseInfo

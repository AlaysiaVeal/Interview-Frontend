import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import CourseDetails from '../components/CourseDetails'
import Client from '../services/api'

const CourseCard = ({ user }) => {
  const BASE_URL = ' https://admin--app-backend.herokuapp.com/api'
  const { courseId } = useParams()
  const [courses, setCourses] = useState([])

  const getCourse = useCallback(async () => {
    const response = await Client.get(`/course`)
    console.log(response.data)
    setCourses(response.data)
  }, [courseId])

  useEffect(() => {
    getCourse()
  }, [getCourse, user])

  return courses !== null ? (
    <div className="course-details-container">
      <section>
        <div className="courseDetails" key={courses.id} id={courses.id}>
          <h2 className="course-details-title"> {courses.name} </h2>
          <h3 className="course-details-text"> {courses.description} </h3>
        </div>
      </section>
      <h1>Course Info</h1>
      <section>
        {courses?.map((course) => (
          <Link to={`${BASE_URL}/course/details/${course.id}`} key={course.id}>
            <CourseDetails
              id={course?.id}
              key={course?.id}
              courseName={course?.name}
            />
          </Link>
        ))}
      </section>
      <Link type="button" to={`${BASE_URL}/courses/add_new_course`}>
        <button className="add-course-button">Add A Course</button>
      </Link>
    </div>
  ) : null
}

export default CourseCard

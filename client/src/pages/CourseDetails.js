import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect, useCallback } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import CourseCard from '../components/CourseCard'
import Client from '../services/api'

const CourseDetails = ({ user }) => {
  const { courseId } = useParams()
  const [courses, setCourses] = useState([])

  const getCourse = useCallback(async () => {
    const response = await Client.get(`/course`)
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
          <Link to={`/course/details/${course?.id}`} key={course?.id}>
            <CourseCard
              id={course?.id}
              key={course?.id}
              courseName={course?.name}
            />
          </Link>
        ))}
      </section>
      <Link type="button" to={`/courses/new_course_form`}>
        <button className="add-course-button">Add A Course</button>
      </Link>
    </div>
  ) : null
}

export default CourseDetails

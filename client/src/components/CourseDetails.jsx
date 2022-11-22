import React from 'react'
import { useParams } from 'react-router-dom'
const CourseDetails = ({id, courseName }) => {
  return (
    <div className='course-card' key={id}>
      <h2 id="course-name">{courseName}</h2> 
    </div>
  )
}

export default CourseDetails
import React from 'react'

const CourseCard = ({id, courseName }) => {
  return (
    <div className='course-card' key={id}>
      <h2 id="zodiac-name">{courseName}</h2> 
    </div>
  )
}

export default CourseCard
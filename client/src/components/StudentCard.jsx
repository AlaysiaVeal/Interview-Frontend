import React from 'react'

const StudentCard = ({id, studentName }) => {
  return (
    <div className='student-card' key={id}>
      <h2 id="student-name">{studentName}</h2> 
    </div>
  )
}

export default StudentCard
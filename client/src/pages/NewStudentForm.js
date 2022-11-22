import { useState } from 'react'
import Client from '../services/api'
import { useNavigate } from 'react-router-dom'

const NewStudentForm = ({ user, authenticated }) => {
  const navigate = useNavigate()
  const formValues = {
    name: '',
    email: '',
    score: '',
    letter: ''
    // courses: []
  }

  const [studentFormValues, setStudentFormValues] = useState(formValues)

  const submitHandleClick = async (e) => {
    e.preventDefault()
    try {
      await Client.post('/students/', studentFormValues)
      setStudentFormValues(formValues)
      navigate('/students')
    } catch (error) {
      throw error
    }
  }

  const handleChange = (e) => {
    setStudentFormValues({
      ...studentFormValues,
      [e.target.name]: e.target.value
      // userId: user.id
    })
  }
  // user && authenticated ?
  return (
    <div className="mainroom-container">
      <form className="form-container" onSubmit={submitHandleClick}>
        <h3 className="roomform-text">Add New Student</h3>
        <input
          className="student-input"
          type="text"
          onChange={handleChange}
          value={studentFormValues.name}
          placeholder="Student name"
          name="name"
          required
        />

        <textarea
          className="student-input"
          onChange={handleChange}
          type="email"
          value={studentFormValues.email}
          placeholder="Student email"
          name="email"
        ></textarea>
        <textarea
          className="student-input"
          onChange={handleChange}
          type="number"
          value={studentFormValues.score}
          placeholder="Student gpa"
          name="score"
        ></textarea>
        <textarea
          className="student-input"
          onChange={handleChange}
          type="text"
          value={studentFormValues.letter}
          placeholder="Student letter-grade"
          name="letter"
        ></textarea>
        <button className="roomform-submitbtn" onSubmit={submitHandleClick}>
          Submit
        </button>
      </form>
    </div>
  )
  //  : (
  //   <div className="protected">
  //     <h3>Oops! You must be logged in to have access to the community!</h3>

  //     <button onClick={() => navigate('/login')}>Login</button>
  //   </div>
  // )
}

export default NewStudentForm

import { useState } from 'react'
import Client from '../services/api'

const NewStudentForm = ({ user, authenticated }) => {
  const formValues = {
    name: '',
    courses: []
  }

  const [studentFormValues, setStudentFormValues] = useState(formValues)

  const submitHandleClick = async (e) => {
    e.preventDefault()
    try {
      await Client.post('/', { studentFormValues })
      setStudentFormValues(formValues)
    } catch (error) {
      throw error
    }
  }

  const handleChange = (e) => {
    setStudentFormValues({
      ...studentFormValues,
      [e.target.name]: e.target.value,
      userId: user.id
    })
  }

  return user && authenticated ? (
    <div className="mainroom-container">
      <form className="form-container" onSubmit={submitHandleClick}>
        <h4 className="roomform-text">-Add New Student-</h4>
        <select
          className="course-input"
          onChange={handleChange}
          name="courseId"
          value={studentFormValues.classId}
          required
        >
          <option value="" disabled>
            - Select Room -
          </option>
          {roomList.map((room) => (
            <option name="roomId" value={room.id} key={room.id}>
              {room.name}
            </option>
          ))}
        </select>
        <input
          className="student-input"
          type="text"
          onChange={handleChange}
          value={studentFormValues.name}
          placeholder="Plant name (required)"
          id="plantname-input"
          name="name"
          required
        />

        <textarea
          className="student-input"
          onChange={handleChange}
          type="text"
          value={studentFormValues.details}
          placeholder="Plant description"
          id="description-input"
          name="details"
        ></textarea>
        <button className="roomform-submitbtn">Submit</button>
      </form>
    </div>
  ) : (
    <div className="protected">
      <h3>Oops! You must be logged in to have access to the community!</h3>

      <button onClick={() => navigate('/login')}>Login</button>
    </div>
  )
}

export default NewStudentForm

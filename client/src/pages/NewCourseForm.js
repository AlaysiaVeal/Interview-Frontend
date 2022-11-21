import { useState } from 'react'
import Client from '../services/api'

const NewCourseForm = ({ user, authenticated }) => {
  const formValues = {
    name: '',
    desciption: ''
  }

  const [courseFormValues, setCourseFormValues] = useState(formValues)

  const submitHandleClick = async (e) => {
    e.preventDefault()
    try {
      await Client.post('/', { courseFormValues })
      setStudentFormValues(formValues)
    } catch (error) {
      throw error
    }
  }

  const handleChange = (e) => {
    setCourseFormValues({
      ...courseFormValues,
      [e.target.name]: e.target.value,
      userId: user.id
    })
  }

  return user && authenticated ? (
    <div className="mainroom-container">
      <form className="form-container" onSubmit={submitHandleClick}>
        <h4 className="roomform-text">-Add New Course-</h4>
        <select
          className="course-input"
          onChange={handleChange}
          name="courseId"
          value={courseFormValues.courseId}
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
          value={courseFormValues.name}
          placeholder="Course name (required)"
          id="coursename-input"
          name="name"
          required
        />

        <textarea
          className="student-input"
          onChange={handleChange}
          type="text"
          value={courseFormValues.desciption}
          placeholder="course description"
          id="description-input"
          name="description"
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

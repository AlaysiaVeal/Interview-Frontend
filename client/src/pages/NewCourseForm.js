import { useState } from 'react'
import Client from '../services/api'
import { useNavigate } from 'react-router-dom'

const NewCourseForm = ({ user, authenticated }) => {
  const BASE_URL = ' https://admin--app-backend.herokuapp.com/api'
  let navigate = useNavigate()
  const formValues = {
    name: '',
    description: ''
  }

  const [courseFormValues, setCourseFormValues] = useState(formValues)

  const submitHandleClick = async (e) => {
    e.preventDefault()
    try {
      await Client.post('/course/', courseFormValues)
      setCourseFormValues(formValues)
      navigate(`${BASE_URL}/courses`)
    } catch (error) {
      throw error
    }
  }

  const handleChange = (e) => {
    setCourseFormValues({
      ...courseFormValues,
      [e.target.name]: e.target.value
      // userId: user.id
    })
  }
  // user && authenticated ?
  return (
    <div className="mainroom-container">
      <form className="form-container" onSubmit={submitHandleClick}>
        <h3 className="roomform-text">Add New Course</h3>
        <label
          className="course-input"
          onChange={handleChange}
          name="courseId"
          value={courseFormValues.courseId}
          required
        >
          {/* <option value="" disabled>
            - Select Room -
          </option>
          {roomList.map((room) => (
            <option name="roomId" value={room.id} key={room.id}>
              {room.name}
            </option> */}
          {/* ))} */}
        </label>
        <input
          className="student-input"
          type="text"
          onChange={handleChange}
          value={courseFormValues.name}
          placeholder="Course name"
          id="coursename-input"
          name="name"
          required
        />

        <textarea
          className="student-input"
          onChange={handleChange}
          type="text"
          value={courseFormValues.description}
          placeholder="course description"
          id="description-input"
          name="description"
        ></textarea>
        <button className="roomform-submitbtn">Submit</button>
      </form>
    </div>
  )
  // : (
  //   <div className="protected">
  //     <h3>Oops! You must be logged in to have access to the community!</h3>

  //     <button onClick={() => navigate('/login')}>Login</button>
  //   </div>
  // )
}

export default NewCourseForm

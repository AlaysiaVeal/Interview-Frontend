import { useState } from 'react'
import Client from '../services/api'

const NewStudentForm = ({ user }) => {
  const formValues = {}

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

  return (
    <div className="mainroom-container">
      <form className="form-container" onSubmit={submitHandleClick}>
        <h4 className="roomform-text">-Add New Student-</h4>
        <select
          className="room-plant-input"
          onChange={handleChange}
          name="roomId"
          value={studentFormValues.roomId}
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
          className="room-plant-input"
          onChange={handleChange}
          type="text"
          src="./uploadimage.png"
          value={studentFormValues.image}
          placeholder="image url"
          id="image-input"
          name="image"
        />

        <input
          className="room-plant-input"
          type="text"
          onChange={handleChange}
          value={studentFormValues.name}
          placeholder="Plant name (required)"
          id="plantname-input"
          name="name"
          required
        />

        <textarea
          className="room-plant-input"
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
  )
}

export default NewStudentForm

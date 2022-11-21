import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { RegisterUser } from '../services/Auth'

const Register = () => {
  const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  }

  const [formValues, setFormValues] = useState(initialState)

  let navigate = useNavigate()

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await RegisterUser({
      firstName: formValues.firstName,
      lastName: formValues.lastName,
      email: formValues.email,
      username: formValues.username,
      password: formValues.password
    })

    setFormValues(initialState)

    navigate('/login')
  }

  return (
    <div className="register-container">
      <form className="form-items" onSubmit={handleSubmit}>
        <section className="section-container top-section">
          <div className="field-container">
            <div className="field-text">
              <label htmlFor="firstName">First Name:</label>
            </div>
            <input
              onChange={handleChange}
              name="firstName"
              type="text"
              placeholder="First Name"
              value={formValues.firstName}
              className="text-input"
              required
            />
          </div>
          <div className="field-container">
            <div className="field-text">
              <label htmlFor="lastName">Last Name: </label>
            </div>
            <input
              onChange={handleChange}
              name="lastName"
              type="text"
              placeholder="Last Name"
              value={formValues.lastName}
              className="text-input"
              required
            />
          </div>
        </section>
        <section className="section-container">
          <div className="field-container">
            <div className="field-text">
              <label htmlFor="email">Email Address</label>
            </div>
            <input
              onChange={handleChange}
              name="email"
              type="text"
              placeholder="Email"
              value={formValues.email}
              className="text-input"
              required
            />
          </div>
        </section>
        <section className="section-container">
          <div className="field-container">
            <div className="field-text">
              <label htmlFor="username">Username</label>
            </div>
            <input
              onChange={handleChange}
              name="username"
              type="text"
              placeholder="username"
              value={formValues.username}
              className="text-input"
              required
            />
          </div>
        </section>
        <section className="section-container">
          <div className="field-container">
            <div className="field-text">
              <label htmlFor="password">Password</label>
            </div>
            <input
              onChange={handleChange}
              name="password"
              type="password"
              placeholder="Password"
              value={formValues.password}
              className="text-input"
              required
            />
          </div>
          <div className="field-container">
            <div className="field-text">
              <label htmlFor="confirmPassword">Confirm Password</label>
            </div>
            <input
              onChange={handleChange}
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formValues.confirmPassword}
              className="text-input"
              required
            />
          </div>
        </section>

        <div className="submit-button-container">
          <button
            type="submit"
            className="submit-button"
            disabled={
              !formValues.email ||
              (!formValues.password &&
                formValues.confirmPassword === formValues.password)
            }
          >
            Submit
          </button>
          <Link to="/login">
            <h3>Login Here</h3>
          </Link>
        </div>
      </form>
    </div>
  )
}

export default Register

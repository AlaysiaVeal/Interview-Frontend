import React from 'react'
import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { SignInUser } from '../services/Auth'

const Login = ({ toggleAuthenticated, setUser }) => {
  const navigate = useNavigate()
  const [formValues, setFormValues] = useState({ email: '', password: '' })

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    const payload = await SignInUser(formValues)
    setFormValues({ email: '', password: '' })
    setUser(payload)
    toggleAuthenticated(true)
    navigate('/')
  }
  return (
    <div className="login-container" id="login-container">
      <div className="card-overlay">
        <form onSubmit={handleSubmit} className="login-form">
          <div className="input-wrapper">
            <label htmlFor="email">Email</label>
            <input
              onChange={handleChange}
              name="email"
              type="email"
              placeholder="Email"
              value={formValues.email}
              className="input"
              required
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              onChange={handleChange}
              type="password"
              name="password"
              placeholder="*********"
              value={formValues.password}
              className="input"
              required
            />
          </div>
          <button
            disabled={!formValues.email || !formValues.password}
            className="form-button"
          >
            Login
          </button>
          <span id="register-container">
            <h3>Haven't made an account yet? &nbsp;</h3>
            <Link to="/register">
              <h3>Register Here</h3>
            </Link>
          </span>
        </form>
      </div>
    </div>
  )
}

export default Login

import { Link, useNavigate } from 'react-router-dom'
import React from 'react'

const Nav = ({ user, handleLogOut, authenticated }) => {
  let navigate = useNavigate()
  let authenticatedOptions
  if (user) {
    authenticatedOptions = (
      <nav>
        <div className="welcome-container">
          <h3 className="welcome-note">Welcome {user.email}!</h3>
        </div>
        <Link to={`/`}>
        <img src='https://imgs.search.brave.com/IXl-ZwA-zmUrWw9DZ3UcPrNCnBG0sr1j4QXh4Duxces/rs:fit:1200:1200:1/g:ce/aHR0cDovL3d3dy5j/bGlwYXJ0YmVzdC5j/b20vY2xpcGFydHMv/UlRHL0Vrci9SVEdF/a3JvZ2MucG5n' className='school-logo'/>
        </Link>
        <Link to = '/' className="nav-link">Home</Link>
        <Link to="/search">Search</Link>
        <Link to="/courses">Courses</Link>
        <Link to="/students">Students</Link>
        <Link onClick={handleLogOut} to="/login">
          Sign Out
        </Link>
      </nav>
    )
  }

  const publicOptions = (
    <nav>
      <Link to="/register">Register</Link>
      <Link to="/login">Sign In</Link>
    </nav>
  )

  return (
    <header>
      {authenticated && user ? authenticatedOptions : publicOptions}
    </header>
  )
}

export default Nav

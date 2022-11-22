import './App.css'
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import { useState, useEffect } from 'react'
import { CheckSession } from './services/Auth'
import CourseDetails from './pages/CourseDetails'
import CourseInfo from './pages/CourseInfo'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import StudentCard from './components/StudentCard'
import StudentDetails from './pages/StudentDetails'
import GradeInfo from './pages/GradeInfo'

const App = () => {
  const [authenticated, toggleAuthenticated] = useState(false)
  const [user, setUser] = useState(null)

  const checkToken = async () => {
    const user = await CheckSession()
    setUser(user)
    toggleAuthenticated(true)
  }

  const handleLogOut = () => {
    setUser(null)
    toggleAuthenticated(false)
    localStorage.clear()
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      checkToken()
    }
  }, [])

  return (
    <div>
      <div className="nav-container">
        <Nav
          user={user}
          handleLogOut={handleLogOut}
          authenticated={authenticated}
        />
      </div>
      <header className="App-header">
        <Routes>
          <Route
            index
            element={<Home user={user} authenticated={authenticated} />}
          />
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/courses" element={<CourseDetails user={user} />} />
          <Route
            path="/course/details/:course_id"
            element={<CourseInfo user={user} />}
          />
          <Route path="/students" element={<StudentCard />} />
          <Route path="/students/details/:student_id" element={<GradeInfo />} />
          {/* <Route path="/grade/:student_id" element={<GradeInfo />} /> */}
        </Routes>
      </header>
    </div>
  )
}

export default App

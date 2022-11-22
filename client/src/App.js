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
import Search from './pages/Search'
import StudentInfo from './pages/StudentInfo'
import NewCourseForm from './pages/NewCourseForm'
import NewStudentForm from './pages/NewStudentForm'

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
          <Route
            path="/login"
            element={
              <Login
                setUser={setUser}
                toggleAuthenticated={toggleAuthenticated}
              />
            }
          />
          <Route path="/search" element={<Search />} />
          <Route path="/register" element={<Register />} />
          <Route path="/courses" element={<CourseDetails user={user} />} />
          <Route
            path="/course/details/:course_id"
            element={<CourseInfo user={user} />}
          />
          <Route path="/courses/new_course_form" element={<NewCourseForm />} />
          <Route path="/students" element={<StudentCard />} />
          <Route
            path="/students/new_student_form"
            element={<NewStudentForm />}
          />
          <Route
            path="/students/details/:student_id"
            element={<StudentInfo />}
          />
          {/* <Route path="/grade/:student_id" element={<GradeInfo />} /> */}
        </Routes>
      </header>
    </div>
  )
}

export default App

import './App.css'
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'

const App = () => {
  const [authenticated, toggleAuthenticated] = useState(false)
  const [user, setUser] = useState(null)

  const checkToken = async () => {
    const user = await CheckSession()
    setUser(user)
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
        <Nav user={user} handleLogOut={handleLogOut} />
      </div>
      <header className="App-header">
        <Routes>
          <Route path="/:course_id" element={<CourseDetails user={user} />} />
        </Routes>
      </header>
    </div>
  )
}

export default App

import './index.css'
import Timer from './components/Timer'
import NavBar from './components/NavBar'
import Pomodoro from './components/Pomodoro'
import ToStudy from './components/ToStudy'
import Footer from './components/Footer'
function App() {
  return (
    <div className="overflow-hidden">
      <NavBar />
      <Timer />
      <Pomodoro />
      <ToStudy />
      <Footer />
    </div>
  )
}

export default App

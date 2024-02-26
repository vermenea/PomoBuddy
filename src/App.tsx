import './index.css'
import Timer from './components/Timer'
import NavBar from './components/NavBar'
import Pomodoro from './components/Pomodoro'
import ToStudy from './components/ToStudy'
import Footer from './components/Footer'
function App() {
  return (
    <main className="overflow-hidden">
      <NavBar href={''} text={''} />
      <Timer />
      <Pomodoro />
      <ToStudy />
      <Footer />
    </main>
  )
}

export default App

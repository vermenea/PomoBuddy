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
      <ToStudy />
      <Pomodoro />
     
      <Footer />
    </main>
  )
}

export default App

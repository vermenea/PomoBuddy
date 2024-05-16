import Timer from './components/Timer';
import NavBar from './components/NavBar';
import Pomodoro from './components/Pomodoro';
import ToStudy from './components/ToStudy';
import Footer from './components/Footer';
function App() {
	return (
		<>
			<NavBar />
			<main className='overflow-hidden'>
				<Timer />
				<ToStudy />
				<Pomodoro />
			</main>
			<Footer />
		</>
	);
}

export default App;

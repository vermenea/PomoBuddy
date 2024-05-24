'use client';
import Timer from './components/main/Timer';
import NavBar from './components/nav/NavBar';
import Pomodoro from './components/main/Pomodoro';
import ToStudy from './components/main/ToStudy';
import Footer from './components/footer/Footer';
import Resources from './components/main/Resources';

function App() {
	return (
		<>
			<NavBar />
			<main className='overflow-hidden'>
				<Timer />
				<ToStudy />
				<Pomodoro />
				<Resources />
			</main>
			<Footer />
		</>
	);
}

export default App;

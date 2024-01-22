import './index.css';
import Timer from './components/Timer';
import NavBar from './components/NavBar';
import Pomodoro from './components/Pomodoro';
import ToStudy from './components/ToStudy';

function App() {
	return (
		<>
			<NavBar />
			<Timer />
			<Pomodoro title='what is a pomodoro?' />
			<ToStudy title='create a tostudy' />
		</>
	);
}

export default App;

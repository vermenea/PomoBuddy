import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './index.css';
import Timer from './components/Timer/Timer';
import NavBar from './components/NavBar/NavBar';
import Pomodoro from './components/Pomodoro/Pomodoro';

function App() {
	return (
		<>
			<NavBar />
			<Timer />
			<Pomodoro />
		</>
	);
}

export default App;

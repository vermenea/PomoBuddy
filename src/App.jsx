import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './index.css';
import Timer from './components/Timer/Timer';
import NavBar from './components/NavBar/NavBar';
import Pomodoro from './components/Pomodoro/Pomodoro';
import ToStudy from './components/ToStudy/ToStudy';

function App() {
	return (
		<>
			<NavBar />
			<Timer />
			<Pomodoro />
			<ToStudy />
		</>
	);
}

export default App;

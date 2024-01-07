import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './index.css';
import Timer from './components/Timer/Timer';
import NavBar from './components/NavBar/NavBar';

function App() {
	return (
		<>
			<NavBar />
			<Timer />
		</>
	);
}

export default App;

import { useState, useRef } from 'react';
import './Timer.css';
export default function Timer() {
	const [time, setTime] = useState('25:00');
	const [isRunning, setIsRunning] = useState(false);
	const currentTime = useRef(null);

	function handleStart() {
		setIsRunning(true);
		const intervalId = setInterval(() => {
			setTime((prevTime) => {
				let [minutes, seconds] = prevTime.split(':');
				minutes = parseInt(minutes, 10);
				seconds = parseInt(seconds, 10) - 1;

				if (seconds < 0) {
					seconds = 59;
					minutes -= 1;
				}
				return `${minutes.toString().padStart(2, '0')}:${seconds
					.toString()
					.padStart(2, '0')}`;
			});
		}, 1000);
		currentTime.current = intervalId;
	}
	function handleStop() {
		setIsRunning(false);
		clearInterval(currentTime.current);
		currentTime.current = null;
	}

	return (
		<div className='container'>
			<div className='timer-box'>
				<div className='time'>{time}</div>
				<button
					onClick={isRunning ? handleStop : handleStart}
					className='startBtn'
				>
					{isRunning ? 'stop' : 'start'}
				</button>
			</div>
		</div>
	);
}

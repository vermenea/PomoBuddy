import { useState, useRef } from 'react';
import './Timer.css';
import endSound from '../../../public/ring.mp3';
import startSound from '../../../public/start.wav';

export default function Timer() {
	const [time, setTime] = useState('25:00');
	const [isRunning, setIsRunning] = useState(false);
	const currentTime = useRef(null);
	const endAudioRef = useRef(new Audio(endSound));
	const startAudioRef = useRef(new Audio(startSound));

	function handleStart() {
		setIsRunning(true);
		startAudioRef.current.play();

		const intervalId = setInterval(() => {
			setTime((prevTime) => {
				let [minutes, seconds] = prevTime.split(':');
				minutes = parseInt(minutes, 10);
				seconds = parseInt(seconds, 10) - 1;

				if (seconds < 0) {
					if (minutes === 0) {
						setIsRunning(false);
						clearInterval(intervalId);
						return '25:00';
					}

					seconds = 59;
					minutes -= 1;
				}

				if (minutes === 0 && seconds === 6) {
					endAudioRef.current.play();
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
		<>
			<div className='container' id='container'>
				<div className='timer-box'>
					<div className='time'>{time}</div>
					<button
						onClick={isRunning ? handleStop : handleStart}
						className='startBtn'
					>
						{isRunning ? 'stop' : 'start'}
					</button>
				</div>
				<button className='addstudy'>create a new toStudy</button>
			</div>
		</>
	);
}

import { useState, useRef } from 'react';
import endSound from '../../public/ring.mp3';
import startSound from '../../public/start.wav';

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
				<div className='timer-box grid grid-cols-4 grid-rows-3 col-start-3 col-end-5 row-start-3 row-end-5 w-350 p-20 m-4 bg-opacity-20 bg-white rounded-lg shadow-xl backdrop-filter backdrop-blur-5.8 border-1 border-opacity-30'>
					<div className='time col-span-2 row-span-2 place-items-center text-6xl font-bold font-oswald text-red-600'>
						{time}
					</div>
					<button
						onClick={isRunning ? handleStop : handleStart}
						className='startBtn col-span-2 row-span-1 text-uppercase font-oswald border-none rounded-12 bg-opacity-70 text-white transition-all hover:bg-opacity-100 active:transform active:scale-80'
					>
						{isRunning ? 'stop' : 'start'}
					</button>
				</div>
				<button className='addstudy tostudy col-span-2 row-span-1 text-uppercase font-oswald text-1.6rem rounded-12 p-4 text-white bg-opacity-70 transition-all hover:bg-opacity-100 shadow-lg'>
					create a new toStudy
				</button>
			</div>
		</>
	);
}

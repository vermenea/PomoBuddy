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
			<div
				className='grid grid-rows-4 grid-cols-4 place-items-center bg-[background-img] bg-contain h-screen'
				id='container'
			>
				<div className='flex flex-col items-center justify-evenly row-start-2 row-end-4 col-start-2 col-end-4 text-center bg-opacity-50 backdrop-blur-sm bg-white rounded-lg shadow-xl backdrop-filter backdrop-blur-6 border-1 border-opacity-30 w-full h-full'>
					<div className='text-8xl font-bold font-oswald text-red-600'>
						{time}
					</div>
					<button
						onClick={isRunning ? handleStop : handleStart}
						className='uppercase font-oswald border-none bg-gray-300 bg-opacity-90 transition-all hover:bg-opacity-100 shadow-lg rounded-md py-3 px-8'
					>
						{isRunning ? 'stop' : 'start'}
					</button>
				</div>
				<button className='row-start-4 row-end-5 col-start-2 col-end-4 uppercase font-oswald text-1.6rem rounded-12 p-4 bg-gray-300 bg-opacity-80 transition-all hover:bg-opacity-100 shadow-lg rounded-md'>
					create a new toStudy
				</button>
			</div>
		</>
	);
}

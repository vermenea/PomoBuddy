'use client';
import { useState, useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
// import endSound from '../public/ring.mp3';
// import startSound from '../public/start.wav';
import CreateToStudyButton from './CreateToStudyButton';
import { displayContent } from '@/app/animations/animations';

export default function Timer() {
	const [time, setTime] = useState<string>('25:00');
	const [isRunning, setIsRunning] = useState<boolean>(false);
	const intervalIdRef = useRef<NodeJS.Timeout | null>(null);
	const [isShortBreak, setIsShortBreak] = useState<boolean>(false);
	const [isLongBreak, setIsLongBreak] = useState<boolean>(false);
	// const endAudioRef = useRef<HTMLAudioElement>(new Audio('/ring.mp3'));
	// const startAudioRef = useRef<HTMLAudioElement>(new Audio('/start.wav'));
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });
	const displayAnimation = displayContent(isInView);

//setting time on window browser
	useEffect(() => {
		if (isRunning) {
			document.title = time;
		} else {
			document.title = 'PomoBuddy';
		}
	}, [time, isRunning]);

	useEffect(() => {
		if (isShortBreak) {
			const timeoutId = setTimeout(() => {
				handleStop();
				handleReturnTime();
				setIsShortBreak(false);
			}, 300000); 

			return () => clearTimeout(timeoutId);
		}
	}, [isShortBreak]);

	useEffect(() => {
		if (isLongBreak) {
			const timeoutId = setTimeout(() => {
				handleReturnTime();
				setIsLongBreak(false);
			}, 900000); 

			return () => clearTimeout(timeoutId);
		}
	}, [isLongBreak]);

//time, start, stop calc
	function handleStart() {
		setIsRunning(true);
		// startAudioRef.current.play();
		const intervalId = setInterval(() => {
			setTime((prevTime: string) => calculateTime(prevTime));
		}, 1000);

		intervalIdRef.current = intervalId;
	}

	function calculateTime(prevTime: string): string {
		const [minutesStr, secondsStr] = prevTime.split(':');
		let minutes: number = parseInt(minutesStr, 10);
		let seconds: number = parseInt(secondsStr, 10) - 1;

		if (seconds < 0) {
			if (minutes === 0) {
				setIsRunning(false);
				clearInterval(intervalIdRef.current as NodeJS.Timeout);
				handleShortBreak();
			}
			seconds = 59;
			minutes -= 1;
		}

		if (minutes === 0 && seconds === 6) {
			// endAudioRef.current.play();
		}

		return `${minutes.toString().padStart(2, '0')}:${seconds
			.toString()
			.padStart(2, '0')}`;
	}

	function handleStop() {
		setIsRunning(false);
		clearInterval(intervalIdRef.current as NodeJS.Timeout);
		intervalIdRef.current = null;
	}

	function handleReturnTime() {
		setTime('25:00');
	}
//breaks
	function handleShortBreak() {
		setTime('05:00');
		setIsRunning(false);
		clearInterval(intervalIdRef.current as NodeJS.Timeout);
		intervalIdRef.current = null;
		setIsShortBreak(true);
	}

	function handleLongBreak() {
		setTime('15:00');
		setIsRunning(false);
		clearInterval(intervalIdRef.current as NodeJS.Timeout);
		intervalIdRef.current = null;
		setIsLongBreak(true);
	}

	return (
		<>
			<div
				className='grid grid-rows-4 grid-cols-4 place-items-center bg-[background-img] bg-contain h-screen'
				id='container'
			>
				<motion.div
					className='flex flex-col items-center justify-evenly row-start-2 row-end-4 col-start-2 col-end-4 text-center bg-opacity-50 backdrop-blur-sm bg-white rounded-lg shadow-xl backdrop-filter backdrop-blur-6 border-1 border-opacity-30 w-80 md:w-full lg:w-2/3 md:h-full lg:h-full max-h-96 p-10'
					ref={ref}
					style={displayAnimation}
				>
					<div className='text-6xl md:text-8xl lg:text-8xl font-Oswald text-red-600 p-5'>
						<div className='flex justify-between text-xs'>
							<button
								onClick={handleShortBreak}
								className='uppercase  text-white border-none bg-zinc-800 bg-opacity-60 transition-all hover:bg-opacity-100 shadow-lg rounded-md py-2 px-6 m-2'
							>
								short break
							</button>
							<button onClick={handleReturnTime} className='uppercase text-white border-none bg-zinc-800 bg-opacity-60 transition-all hover:bg-opacity-100 shadow-lg rounded-md py-2 px-6 m-2'>
								reset
							</button>
							<button
								onClick={handleLongBreak}
								className='uppercase text-white border-none bg-zinc-800 bg-opacity-60 transition-all hover:bg-opacity-100 shadow-lg rounded-md py-2 px-6 m-2'
							>
								long break
							</button>
						</div>
						<div className='font-bold p-5 font-oswald'>{time}</div>
					</div>
					<button
						onClick={isRunning ? handleStop : handleStart}
						className='uppercase text-white border-none bg-zinc-800 bg-opacity-90 transition-all hover:bg-opacity-100 shadow-lg rounded-md py-2 px-6'
					>
						{isRunning ? 'stop' : 'start'}
					</button>
				</motion.div>
				<CreateToStudyButton />
			</div>
		</>
	);
}

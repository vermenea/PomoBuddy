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
          className='flex flex-col items-center justify-evenly row-start-2 row-end-4 col-start-2 col-end-4 text-center bg-opacity-80 backdrop-blur-xl backdrop-blur-6  bg-zinc-800 rounded-lg shadow-xl backdrop-filter border-1 border-gray-600 w-80 md:w-full lg:w-2/3 md:h-full lg:h-full max-h-96 p-10'
          ref={ref}
          style={displayAnimation}
        >
          <div className='font-Oswald text-gray-800 p-2 md:p-5 w-full'>
            <div className='flex justify-center space-x-4 text-xs md:text-sm mb-2 md:mb-4'>
              <button
                onClick={handleShortBreak}
                className='flex items-center justify-center uppercase text-slate-100 border border-slate-100 transition-all hover:bg-slate-100 hover:text-zinc-800 shadow-lg rounded-md py-2 px-4'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-5 w-5 mr-2'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M13 10V3L4 14h7v7l9-11h-7z'
                  />
                </svg>
                short break
              </button>

              <button
                onClick={handleLongBreak}
                className='flex items-center justify-center uppercase text-slate-100 border border-slate-100 transition-all hover:bg-slate-100 hover:text-zinc-800 shadow-lg rounded-md py-2 px-4'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-5 w-5 mr-2'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <path d='M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z' />
                  <path d='M12 8v4l3 3' />
                  <circle cx='12' cy='12' r='1' />
                </svg>
                long break
              </button>
            </div>

            <div className='font-bold p-5 font-oswald text-6xl md:text-8xl lg:text-8xl text-slate-100'>
              {time}
            </div>
          </div>
          <div className='flex space-x-4'>
            <button
              onClick={isRunning ? handleStop : handleStart}
              className='uppercase text-white bg-red-600 transition-all hover:bg-red-700 shadow-lg rounded-md py-2 px-6 text-xs'
            >
              {isRunning ? 'stop' : 'start'}
            </button>
            <button
              onClick={handleReturnTime}
              className='uppercase text-white bg-red-600 transition-all hover:bg-red-700 shadow-lg rounded-md py-2 px-6 text-xs'
            >
              reset
            </button>
          </div>
        </motion.div>
        <CreateToStudyButton />
      </div>
    </>
  );
}

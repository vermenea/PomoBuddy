'use client';
import Header from './Header';
import TextComponent from './TextComponent';
import Step from './Step';
import ImageComponent from './ImageComponent';
import studyImg from '../studying.jpg';
import studyImgTwo from '../studying2.jpg';
import { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { slideAnimation } from '../animations/animations';

const Pomodoro: React.FC = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });
	const stepAnimation = slideAnimation(isInView);

	useEffect(() => {
		console.log('Element is in view: ', isInView);
	}, [isInView]);

	return (
		<section
			id='pomodoro'
			className='font-Oswald max-w-4xl mx-auto p-10 md:px-16 lg:px-20 xl:px-20 scroll-smooth'
		>
			<Header title='what is a pomorodo?' />
			<TextComponent>
				The Pomodoro Technique is a time management method developed by
				Francesco Cirillo in the late 1980s. The technique is named after the
				Italian word for "tomato" (pomodoro) because Cirillo initially used a
				tomato-shaped kitchen timer to track his work intervals. The technique
				is designed to improve focus, productivity, and time management by
				breaking work into short, focused intervals, called "Pomodoros,"
				typically lasting 25 minutes, followed by a short break of 5 minutes.
			</TextComponent>
			<Header title='science behind pomodoro' />
			<div className='flex flex-col md:flex-row justify-center align-center'>
				<div className='flex flex-col justify-around md:mr-5'>
					<TextComponent>
						It's effectiveness lies in principles like{' '}
						<span className='text-red-600'>
							{' '}
							managing cognitive load, leveraging flow psychology, and aligning
							with ultradian rhythms.
						</span>{' '}
						Breaking work into focused intervals with short breaks helps prevent
						mental fatigue, enhances concentration, and aligns with the
						psychological concept of flow. The method also encourages task
						chunking and goal setting, making it a practical approach to time
						management based on well-established principles from cognitive
						psychology and productivity research.
					</TextComponent>
					<ImageComponent
						src={studyImg.src}
						alt='Student is studing on his laptop and is surounded with books'
						align='right'
					/>
					<TextComponent>
						The capacity for sustained focus, known as
						<span className='text-red-600'> attention span</span>, is crucial
						for concentrating on a single task. Research suggests this
						concentration window typically spans around 20 minutes. While
						distractions may naturally arise in the pursuit of new information,
						it is also feasible to reestablish focus by rejuvenating the
						attention span, as indicated in a recent study.
					</TextComponent>
					<ImageComponent
						src={studyImgTwo.src}
						alt='Student is studing on his laptop and is surounded with books'
						align='right'
					/>
				</div>
			</div>

			<Header title='The basic steps of the Pomodoro Technique include:' />
			<motion.ol
				className='mt-20 mb-20 text-xl list-decimal'
				ref={ref}
				style={stepAnimation}
			>
				<Step text='  Choose a task: Select a specific task or project that needs to be completed.' />
				<Step text='Set the timer: Set a timer for 25 minutes, representing one Pomodoro. This time is dedicated solely to the chosen task.' />
				<Step text='Work on the task: Focus completely on the task at hand until the timer rings. Avoid any distractions or interruptions during this period.' />
				<Step text='Take a short break: After completing a Pomodoro, take a 5-minute break to relax and recharge. Use this time to stretch, grab a snack, or take a short walk.' />
				<Step text='Repeat: Repeat the process with another Pomodoro. After completing four Pomodoros, take a longer break of 15-30 minutes.' />
			</motion.ol>
		</section>
	);
};

export default Pomodoro;

import React from 'react';

const Pomodoro = ({ title }) => {
	return (
		<section id='pomodoro' className='font-oswald my-20 mx-20 scroll-smooth'>
			<header>
				<h1 className='text-3xl uppercase font-bold'>{title}</h1>
			</header>
			<p className='text text-xl mt-10'>
				The Pomodoro Technique is a time management method developed by
				Francesco Cirillo in the late 1980s. The technique is named after the
				Italian word for "tomato" (pomodoro) because Cirillo initially used a
				tomato-shaped kitchen timer to track his work intervals. The technique
				is designed to improve focus, productivity, and time management by
				breaking work into short, focused intervals, called "Pomodoros,"
				typically lasting 25 minutes, followed by a short break of 5 minutes.
			</p>
			<h2 className='mt-40 bold-text font-bold text-3xl uppercase'>
				science behind pomodoro technique
			</h2>
			<div className='flex justify-center align-center'>
				<div>
					<p className='text text-xl mt-10'>
						It's effectiveness lies in principles like <span className='text-red-600'> managing cognitive load, leveraging flow psychology, and aligning with ultradian rhythms.</span> Breaking work into focused intervals with short breaks helps prevent
						mental fatigue, enhances concentration, and aligns with the
						psychological concept of flow. The method also encourages task
						chunking and goal setting, making it a practical approach to time
						management based on well-established principles from cognitive
						psychology and productivity research.
					</p>
					<p className='text text-xl mt-10'>
						The capacity for sustained focus, known as
						<span className='text-red-600'> attention span</span>, is crucial
						for concentrating on a single task. Research suggests this
						concentration window typically spans around 20 minutes. While
						distractions may naturally arise in the pursuit of new information,
						it is also feasible to reestablish focus by rejuvenating the
						attention span, as indicated in a recent study.
					</p>
				</div>

				<img src='public/studying.jpg' className='max-w-sm'></img>
			</div>

			<ol className='mt-10 text-xl  list-decimal'>
				<h2 className='bold-text font-bold text-2xl'>
					The basic steps of the Pomodoro Technique include:
				</h2>
				<li className='step my-2 mx-4 mt-5'>
					Choose a task: Select a specific task or project that needs to be
					completed.
				</li>
				<li className='step my-2 mx-4'>
					Set the timer: Set a timer for 25 minutes, representing one Pomodoro.
					This time is dedicated solely to the chosen task.
				</li>
				<li className='step my-2 mx-4'>
					Work on the task: Focus completely on the task at hand until the timer
					rings. Avoid any distractions or interruptions during this period.
				</li>
				<li className='step my-2 mx-4'>
					Take a short break: After completing a Pomodoro, take a 5-minute break
					to relax and recharge. Use this time to stretch, grab a snack, or take
					a short walk.
				</li>
				<li className='step my-2 mx-4'>
					Repeat: Repeat the process with another Pomodoro. After completing
					four Pomodoros, take a longer break of 15-30 minutes.
				</li>
			</ol>
		</section>
	);
};

export default Pomodoro;

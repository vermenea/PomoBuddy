import './Pomodoro.css';
export default function Pomodoro({title}) {
	return (
		<section className='pomo-section'>
			<header>
				<h1 id='pomodoro'>{title}</h1>
			</header>
			<p className='text'>
				The Pomodoro Technique is a time management method developed by
				Francesco Cirillo in the late 1980s. The technique is named after the
				Italian word for "tomato" (pomodoro) because Cirillo initially used a
				tomato-shaped kitchen timer to track his work intervals. The technique
				is designed to improve focus, productivity, and time management by
				breaking work into short, focused intervals, called "Pomodoros,"
				typically lasting 25 minutes, followed by a short break of 5 minutes.
			</p>
			<ul>
				<p className='bold-text'>
					The basic steps of the Pomodoro Technique include:
				</p>

				<li className='step'>
					Choose a task: Select a specific task or project that needs to be
					completed.
				</li>
				<li className='step'>
					Set the timer: Set a timer for 25 minutes, representing one Pomodoro.
					This time is dedicated solely to the chosen task.
				</li>
				<li className='step'>
					Work on the task: Focus completely on the task at hand until the timer
					rings. Avoid any distractions or interruptions during this period.
				</li>
				<li className='step'>
					Take a short break: After completing a Pomodoro, take a 5-minute break
					to relax and recharge. Use this time to stretch, grab a snack, or take
					a short walk.
				</li>
				<li className='step'>
					Repeat: Repeat the process with another Pomodoro. After completing
					four Pomodoros, take a longer break of 15-30 minutes.
				</li>
			</ul>
		</section>
	);
}

import webicon from '../../public/webicon.png';

export default function NavBar() {
	return (
		<nav>
			<ul>
				<li>
					<img src={webicon} alt='Web Icon' />
					<h1 className='text-3xl'>PomoBuddy</h1>
				</li>
				<li>
					<a href='#pomodoro'>pomodoro</a>
				</li>
				<li>
					<a href='#'>tostudy</a>
				</li>
			</ul>
		</nav>
	);
}

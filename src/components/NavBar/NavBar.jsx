import webicon from '../../../public/webicon.png';
import './NavBar.css';
export default function NavBar() {
	return (
		<nav className='navbar'>
			<ul className='nav-list'>
				<li className='nav-item'>
					<img className='webicon' src={webicon} alt='Web Icon' />
					<h1>PomoBuddy</h1>
				</li>
				<li className='nav-item'>
					<a href='#pomodoro'>what is pomodoro?</a>
				</li>
				<li className='nav-item'>
					<a href='#'>tostudy</a>
				</li>
			</ul>
		</nav>
	);
}

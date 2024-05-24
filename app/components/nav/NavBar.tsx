import { useState } from 'react';
import WebIcon from '../WebIcon';
import NavItem from '../nav/NavItem';
import { signOut } from 'next-auth/react';

export default function NavBar() {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<nav className='fixed top-0 w-full z-50 p-2 bg-white rounded-lg shadow-md font-Oswald'>
			<div className='flex justify-center items-center'>
				<NavItem href='#' text='PomoBuddy' icon={<WebIcon />} />
				<button onClick={toggleMenu} className='md:hidden text-3xl ml-auto'>
					<svg
						className='w-6 h-6'
						fill='none'
						stroke='currentColor'
						viewBox='0 0 24 24'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth='2'
							d='M4 6h16M4 12h16M4 18h16'
						></path>
					</svg>
				</button>
				<ul className='hidden md:flex justify-center items-center flex-row'>
					<NavItem href='#pomodoro' text='Pomodoro' />
					<NavItem href='#tostudy' text='ToStudy' />
					<button
						className='ml-2 font-medium text-lg hover:text-red-500'
						onClick={() => signOut()}
					>
						Logout
					</button>
				</ul>
			</div>
			{/* MobileNav */}
			{isOpen && (
				<div className='md:hidden mt-2'>
					<ul className='flex flex-col items-center'>
						<NavItem href='#pomodoro' text='Pomodoro' />
						<NavItem href='#tostudy' text='ToStudy' />
						<button
							className='mt-2 font-medium text-lg hover:text-red-500'
							onClick={() => signOut()}
						>
							Logout
						</button>
					</ul>
				</div>
			)}
		</nav>
	);
}

import React from 'react';
import webicon from '../../public/webicon.png';

const NavBar = () => {
	return (
		<nav className='fixed top-0 w-full z-50 p-2 font-oswald bg-white rounded-lg shadow-md'>
			<ul className='flex justify-center items-center flex-row '>
				<li className='flex justify-center items-center list-none text-lg m-2'>
					<img src={webicon} alt='Web Icon' className='webicon w-8' />
					<h1 className='ml-2 font-bold'>PomoBuddy</h1>
				</li>
				<li className='flex justify-center items-center list-none text-lg m-2'>
					<a href='#pomodoro' className='hover:text-gray-500'>
						Pomodoro
					</a>
				</li>
				<li className='flex justify-center items-center list-none text-lg m-2'>
					<a href='#tostudy' className='hover:text-gray-500'>
						ToStudy
					</a>
				</li>
			</ul>
		</nav>
	);
};

export default NavBar;

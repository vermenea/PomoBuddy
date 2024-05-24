'use client';
import { signIn } from 'next-auth/react';
import Image from 'next/image';
import WebIcon from './components/WebIcon';
import googleIcon from '@/public/images/google.png';

export default function Login() {
	return (
		<section className='flex justify-center items-center bg-[background-img] bg-contain h-screen font-Oswald'>
			<div className='flex flex-col items-center justify-evenly row-start-2 row-end-4 col-start-2 col-end-4 text-center bg-opacity-50 backdrop-blur-sm bg-white rounded-lg shadow-xl backdrop-filter backdrop-blur-6 border-1 border-opacity-30 w-72 md:w-80 lg:w-1/4 md:h-full lg:h-full max-h-72 p-10'>
				<div className='flex justify-center items-center p-10'>
					<WebIcon />
					<h1 className='ml-2 font-medium text-3xl text-zinc-800'>PomoBuddy</h1>
				</div>
				<div className='flex justify-center border-2 border-zinc-700 bg-white rounded-lg p-2 m-5'>
					<button onClick={() => signIn('google')}>Login with</button>
					<Image src={googleIcon} alt='google icon' height={20} className='ml-2'/>
				</div>
			</div>
		</section>
	);
}

'use client';
import { signIn } from 'next-auth/react';
import Image from 'next/image';
import WebIcon from './components/WebIcon';
import googleIcon from '@/public/images/google.png';
import Footer from './components/footer/Footer';

export default function Login() {
	return (
		<main className='flex flex-col justify-between h-screen'>
			<section className='flex justify-center h-screen items-center bg-[background-img] bg-contain font-Oswald'>
				<div className='flex flex-col items-center justify-between row-start-2 row-end-4 col-start-2 col-end-4 text-center bg-opacity-70 backdrop-blur-sm bg-white rounded-lg shadow-xl backdrop-filter backdrop-blur-6 border-1 border-opacity-30 w-72 md:w-80 lg:w-1/4 md:h-full lg:h-full max-h-72 p-10'>
					<div className='flex justify-center items-center'>
						<WebIcon />
						<h1 className='ml-2 font-medium text-3xl text-zinc-800'>
							PomoBuddy
						</h1>
					</div>
					<div className='flex flex-col justify-center items-center mt-8'>
						<h2 className='text-xl'>
							Welcome ! Please login with your google account
						</h2>
						<div className='flex justify-center items-center border-2 border-zinc-700 hover:border-red-600 hover:text-red-600 bg-white rounded-lg p-2 mt-8'>
							<button onClick={() => signIn('google')}>Continue with</button>
							<Image
								src={googleIcon}
								alt='google icon'
								height={22}
								className='ml-1'
							/>
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</main>
	);
}

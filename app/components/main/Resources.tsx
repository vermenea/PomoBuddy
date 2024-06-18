'use client';

import Header from './Header';
import TextComponent from './TextComponent';
import Carousel from './Carousel';
import Link from 'next/link';

export default function Resources() {
	return (
		<>
			<section className='bg-red-500 flex flex-col justify-start items-center p-10'>
				<div className='font-Oswald scroll-smooth max-w-4xl mx-auto md:px-16 lg:px-20 xl:px-20'>
					<Header title='Usefull Resources' />
					<TextComponent>
						If you are interested in learning more about scientific facts and
						the science of learning, you should definitely watch the videos
						below.
					</TextComponent>
					<Carousel />
					<TextComponent>
					 I can also recommend listening to music because it can lower stress levels, create a more relaxed study environment, help maintain concentration by blocking out distractions, aid in better information retention with a steady rhythm, improve your mood making studying more enjoyable, boost motivation and productivity with energizing tunes, and establish a consistent study routine.
					</TextComponent>
<div className='flex justify-center p-10'>
<Link href="https://youtube.com/playlist?list=PLTgkrkz7Xh8egTB5okL8xzIWhd71NqiJV&si=2b4ZNjrRjUALXI1B" className='text-md text-center rounded-md bg-slate-50 p-2 hover:bg-slate-200'><b className=''>StudyMusic ☕</b> - playlist created by me </Link>
</div>
				
				</div>
			</section>
		</>
	);
}

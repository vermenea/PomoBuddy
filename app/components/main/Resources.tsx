'use client';

import Header from './Header';
import TextComponent from './TextComponent';
import Carousel from './Carousel';

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
				</div>
			</section>
		</>
	);
}

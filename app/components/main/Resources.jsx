'use client';

import Link from 'next/link';
import Header from './Header';
import TextComponent from './TextComponent';

export default function Resources() {
	return (
		<>
			<section className='bg-red-500 flex flex-col justify-start items-center p-10'>
                <div className='font-Oswald scroll-smooth max-w-4xl mx-auto md:px-16 lg:px-20 xl:px-20'>
				<Header title='Usefull Resources' />
				<TextComponent>
					If you are intrested into learning more about science facts about
					learning you should definitelly watch videos below
				</TextComponent>
				<div className='flex justify-between my-10'>
					<Link
						href='https://www.youtube.com/watch?v=z7e7gtU3PHY'
						
					>
						<iframe
							width='360'
							height='215'
							src='https://www.youtube.com/embed/z7e7gtU3PHY?si=I_DUPRbfWRdzkE_h'
							title='YouTube video player'
							frameborder='0'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
							referrerpolicy='strict-origin-when-cross-origin'
							allowfullscreen
						></iframe>
					</Link>
					<Link
						href='https://www.youtube.com/watch?v=z7e7gtU3PHY'
						
					>
						<iframe
							width='360'
							height='215'
							src='https://www.youtube.com/embed/kKvK2foOTJM?si=r0vz1jxklpQESzVp'
							title='YouTube video player'
							frameborder='0'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
							referrerpolicy='strict-origin-when-cross-origin'
							allowfullscreen
						></iframe>
					</Link>
                    </div>
				</div>
			</section>
		</>
	);
}

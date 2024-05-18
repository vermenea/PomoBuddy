import Image from 'next/image';
import rightArrow from '../../../public/images/arrow-badge-right.svg';
import leftArrow from '../../../public/images/arrow-badge-left.svg';
import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useInView } from 'framer-motion';
import { displayContent } from '@/app/animations/animations';

export default function Carousel() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });
	const displayAnimation = displayContent(isInView);

	useEffect(() => {
		console.log('Element is in view: ', isInView);
	}, [isInView]);

	const videos = [
		'https://www.youtube.com/embed/z7e7gtU3PHY?si=I_DUPRbfWRdzkE_h',
		'https://www.youtube.com/embed/kKvK2foOTJM?si=r0vz1jxklpQESzVp',
		'https://www.youtube.com/embed/BRTqeAEga5E?si=0Mw4D-89rnqet4cI',
		'https://www.youtube.com/embed/P6FORpg0KVo?si=J4APGjMWA4h4cDgp',
	];

	const [currentIndex, setCurrentIndex] = useState<number>(0);

	function showPrevVideo() {
		setCurrentIndex((prevIndex) =>
			prevIndex === 0 ? videos.length - 1 : prevIndex - 1
		);
	}
	function showNextVideo() {
		setCurrentIndex((prevIndex) =>
			prevIndex === videos.length - 2 ? 0 : prevIndex + 1
		);
	}

	return (
		<>
			<motion.div
				ref={ref}
				style={displayAnimation}
				className='flex justify-evenly my-10'
			>
				<Image
					src={leftArrow}
					alt='left arrow'
					onClick={showPrevVideo}
					className='flex cursor-pointer'
				/>
				<AnimatePresence initial={false}>
					<motion.div
						key={currentIndex}
						initial={{ opacity: 0, x: 100 }}
						animate={{ opacity: 1, x: 0 }}
						exit={{ opacity: 0, x: -100 }}
						transition={{ type: 'spring', stiffness: 300, damping: 30 }}
						className='flex'
					>
						{[
							videos[currentIndex],
							videos[(currentIndex + 1) % videos.length],
						].map((video, index) => (
							<div key={index} className='px-2 mx-2'>
								<iframe
									width='360'
									height='215'
									src={video}
									title='YouTube video player'
									frameBorder='0'
									allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
									referrerPolicy='strict-origin-when-cross-origin'
									allowFullScreen
								></iframe>
							</div>
						))}
					</motion.div>
				</AnimatePresence>

				<Image
					src={rightArrow}
					alt='right arrow'
					onClick={showNextVideo}
					className='flex cursor-pointer'
				/>
			</motion.div>
		</>
	);
}

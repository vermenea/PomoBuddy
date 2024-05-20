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
	const [leftArrowClicked, setLeftArrowClicked] = useState(false);
	const [rightArrowClicked, setRightArrowClicked] = useState(false);

	function showPrevVideo() {
		setLeftArrowClicked(true);
		setTimeout(() => {
			setLeftArrowClicked(false);
			setCurrentIndex((prevIndex) =>
				prevIndex === 0 ? videos.length - 1 : prevIndex - 1
			);
		}, 500); // Duration of the opacity animation
	}

	function showNextVideo() {
		setRightArrowClicked(true);
		setTimeout(() => {
			setRightArrowClicked(false);
			setCurrentIndex((prevIndex) =>
				prevIndex === videos.length - 1 ? 0 : prevIndex + 1
			);
		}, 500); // Duration of the opacity animation
	}

	return (
		<>
			<motion.div
				ref={ref}
				style={displayAnimation}
				className='flex justify-center items-center my-10 p-2 py-10'
			>
				<motion.div
					initial={{ opacity: 1 }}
					animate={{ opacity: leftArrowClicked ? 0 : 1 }}
					transition={{ duration: 0.5 }}
				>
					<Image
						src={leftArrow}
						alt='left arrow'
						onClick={showPrevVideo}
						className='flex cursor-pointer'
					/>
				</motion.div>

				{[videos[currentIndex]].map((video, index) => (
					<div key={index} className='mx-1'>
						<iframe
							className='w-[180px] h-[200px] sm:w-[220px] sm:h-[180px] md:w-[460px] md:h-[315px]'
							src={video}
							title='YouTube video player'
							frameBorder='0'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
							referrerPolicy='strict-origin-when-cross-origin'
							allowFullScreen
						></iframe>
					</div>
				))}

				<motion.div
					initial={{ opacity: 1 }}
					animate={{ opacity: rightArrowClicked ? 0 : 1 }}
					transition={{ duration: 0.5 }}
				>
					<Image
						src={rightArrow}
						alt='right arrow'
						onClick={showNextVideo}
						className='flex cursor-pointer'
					/>
				</motion.div>
			</motion.div>
		</>
	);
}

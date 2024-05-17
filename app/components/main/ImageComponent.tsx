import { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { displayContent } from '../../animations/animations';
import Image from 'next/image';

type ImageProps = {
	src: any;
	alt: string;
	align?: 'left' | 'right';
};

const ImageComponent: React.FC<ImageProps> = ({ src, alt, align = 'left' }) => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });
	const displayAnimation = displayContent(isInView);

	useEffect(() => {
		console.log('Element is in view: ', isInView);
	}, [isInView]);

	const classes =
		align === 'right'
			? 'md:max-w-sm lg:max-w-lg mt-5 md:mt-0 ml-auto'
			: 'md:max-w-sm lg:max-w-lg mt-10 md:mt-0';

	return (
		<motion.div ref={ref} style={displayAnimation}>
			<Image src={src} className={classes} alt={alt} width={700} height={475} />
		</motion.div>
	);
};

export default ImageComponent;

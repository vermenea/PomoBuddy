import { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { slideAnimation } from '../../animations/animations';

const TextComponent: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });
	const textAnimation = slideAnimation(isInView);

	

	return (
		<motion.p
			className='text text-xl mt-20 mb-10'
			ref={ref}
			style={textAnimation}
		>
			{children}
		</motion.p>
	);
};

export default TextComponent;

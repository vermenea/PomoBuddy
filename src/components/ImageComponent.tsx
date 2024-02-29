import { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { displayContent } from '../animations/animations'

type ImageProps = {
  src: string
  alt: string
  align?: 'left' | 'right'
}

const ImageComponent: React.FC<ImageProps> = ({ src, alt, align = 'left' }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const displayAnimation = displayContent(isInView)

  useEffect(() => {
    console.log('Element is in view: ', isInView)
  }, [isInView])

  const classes =
    align === 'right'
      ? 'md:max-w-sm lg:max-w-lg mt-5 md:mt-0 ml-auto'
      : 'md:max-w-sm lg:max-w-lg mt-10 md:mt-0'

  return (
    <motion.img
      src={src}
      className={classes}
      alt={alt}
      ref={ref}
      style={displayAnimation}
    />
  )
}

export default ImageComponent

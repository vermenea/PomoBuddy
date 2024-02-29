import { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

type ImageProps = {
  src: string
  alt: string
  align?: 'left' | 'right'
}

const ImageComponent: React.FC<ImageProps> = ({ src, alt, align = 'left' }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

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
      style={{
        opacity: isInView ? 1 : 0,
        transition: 'opacity 2.5s',
      }}
    />
  )
}

export default ImageComponent

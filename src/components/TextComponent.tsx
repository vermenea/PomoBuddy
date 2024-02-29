import { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const TextComponent: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    console.log('Element is in view: ', isInView)
  }, [isInView])

  return (
    <motion.p
      className="text text-xl mt-20 mb-10"
      ref={ref}
      style={{
        transform: isInView ? 'none' : 'translateX(-200px)',
        opacity: isInView ? 1 : 0,
        transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
      }}
    >
      {children}
    </motion.p>
  )
}

export default TextComponent

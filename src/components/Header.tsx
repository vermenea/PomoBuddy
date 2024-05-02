import { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { slideAnimation } from '../animations/animations'

const Header: React.FC<{ title: string }> = ({ title }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    console.log('Element is in view: ', isInView)
  }, [isInView])

  const headerAnimation = slideAnimation(isInView)

  return (
    <motion.header ref={ref} style={headerAnimation}>
      <h1 className="mt-20 text-3xl uppercase font-bold">{title}</h1>
    </motion.header>
  )
}

export default Header

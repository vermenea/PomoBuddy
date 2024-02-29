import { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const Header: React.FC<{ title: string }> = ({ title }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    console.log('Element is in view: ', isInView)
  }, [isInView])

  return (
    <motion.header ref={ref} style={{
      transform: isInView ? "none" : "translateX(-200px)",
      opacity: isInView ? 1 : 0,
      transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
    }}>
      <h1 className="mt-20 text-3xl uppercase font-bold">{title}</h1>
    </motion.header>
  )
}
export default Header

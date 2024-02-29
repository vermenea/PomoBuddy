import { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { displayContent } from '../animations/animations'

export default function CreateToStudyButton() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const displayAnimation = displayContent(isInView)

  useEffect(() => {
    console.log('Element is in view: ', isInView)
  }, [isInView])

  return (
    <motion.a
      className="row-start-4 row-end-5 col-start-2 col-end-4 uppercase font-oswald text-white text-1.6rem rounded-12 p-4 bg-zinc-800 bg-opacity-80 transition-all hover:bg-opacity-100 shadow-lg rounded-md"
      href="#tostudy"
      ref={ref}
      style={displayAnimation}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      create a new toStudy
    </motion.a>
  )
}

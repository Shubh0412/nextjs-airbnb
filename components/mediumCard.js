import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const squareVariants = {
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1
    }
  },
  hidden: { opacity: 0, scale: 0 }
}

function MediumCard({ img, title }) {
  const controls = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    } else {
      controls.start('hidden')
    }
  }, [controls, inView])

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={squareVariants}
      className="cursor-pointer hover:scale-105 transition transform
    duration-300 ease-out"
    >
      <div className="relative h-80 w-80">
        <img src={img} />
      </div>
      <h3 className="text-2xl mt-3">{title}</h3>
    </motion.div>
  )
}

export default MediumCard

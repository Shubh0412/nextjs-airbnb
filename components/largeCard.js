import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const squareVariants = {
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: {
      duration: 2,
      delay: 0.5
    }
  },
  hidden: {
    x: 100,
    opacity: 0.5
  }
}

function LargeCard({ img, title, description, buttonText }) {
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
    <motion.section
      className="relative py-16 cursor-pointer"
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={squareVariants}
    >
      <div className="relative h-96">
        <img className="rounded-2xl object-cover h-96 w-full " src={img} />
      </div>

      <div className="absolute top-28 left-12 ">
        <h3
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl
       sm:font-semibold md:font-semibold font-bold 
         mb-3 w-64"
        >
          {title}
        </h3>
        <p className="">{description}</p>
        <button
          className="text-sm text-white bg-gray-900
        px-4 py-2 rounded-lg mt-5 text"
        >
          {buttonText}
        </button>
      </div>
    </motion.section>
  )
}

export default LargeCard

import React from 'react'
import { motion } from 'framer-motion'

function Banner() {
  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        default: {
          delay: 0.1,
          duration: 1,
          ease: [0, 0.71, 0.2, 1]
        },
        scale: {
          type: 'spring',
          damping: 2,
          stiffness: 50,
          restDelta: 0.01
        }
      }}
    >
      <img
        className="object-contain w-full h-96"
        src="https://links.papareact.com/0fm"
      />
      <div className="absolute top-1/2 w-full text-center">
        <p className="">Not sure where to go? Perfect</p>

        <button
          className="text-purple-600  bg-white px-6 py-2
        shadow-md rounded-full font-bold my-3 hover:shadow-xl
        active:scale-90 transition duration-150"
        >
          I'm Flexible
        </button>
      </div>
    </motion.div>
  )
}

export default Banner

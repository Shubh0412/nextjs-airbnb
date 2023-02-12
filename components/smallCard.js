import React from 'react'
import { motion } from 'framer-motion'

function SmallCard({ img, location, distance }) {
  return (
    <motion.div
      className="flex items-center m-3 mt-5 space-x-4 rounded-xl
    cursor-pointer hover:bg-gray-100 hover:scale-105 transition
    transform duration-200 ease-out"
      initial={{
        opacity: 1,
        scale: 0
      }}
      animate={{
        opacity: 1,
        scale: 1
      }}
      whileHover={{ scale: [null, 0.8, 1.1] }}
      transition={{
        duration: 0.4
      }}
    >
      {/* Left */}

      <div className=" h-16 w-16">
        <img className="rounded-lg shadow-lg shadow-green-800" src={img} />
      </div>

      {/* Right */}
      <div>
        <h2>{location}</h2>
        <h3 className="text-gray-500">{distance}</h3>
      </div>
    </motion.div>
  )
}

export default SmallCard

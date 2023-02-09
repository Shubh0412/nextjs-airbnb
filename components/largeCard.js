import React from 'react'

function LargeCard({ img, title, description, buttonText }) {
  return (
    <section className="relative py-16 cursor-pointer">
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
    </section>
  )
}

export default LargeCard

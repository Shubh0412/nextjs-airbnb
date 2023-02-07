import React from 'react'

function Banner() {
  return (
    <div className="relative ">
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
    </div>
  )
}

export default Banner

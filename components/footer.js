import React from 'react'

function Footer() {
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-4 gap-y-10
    px-32 py-14 bg-gray-100 text-gray-600"
    >
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">ABOUT</h5>
        <p>How Airbnb works</p>
        <p>Newsroom</p>
        <p>Investors</p>
        <p>Airbnb Plus</p>
        <p>Airbnb Luxe</p>
      </div>

      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">COMMUNITY</h5>
        <p>Accessibility</p>
        <p>This is not a real site</p>
        <p>Its an awesome clone</p>
        <p>Referrals accepted</p>
        <p>Fanclub</p>
      </div>

      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">HOST</h5>
        <p>Shubham</p>
        <p>is going to be</p>
        <p>A front end</p>
        <p>& web3 security auditor</p>
        <p>In this year</p>
      </div>

      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">SUPPORT</h5>
        <p>Help Center</p>
        <p>Trust & Safety</p>
        <p>Need Support</p>
        <p>In the Future</p>
        <p>For the Win</p>
      </div>
    </div>
  )
}

export default Footer

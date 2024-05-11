import React from 'react'
import { Link } from 'react-router-dom'

function SecondHeroPage() {
  return (
    <div>
      <div className="box grid grid-cols-1 lg:grid-cols-2 max-w-full mx-auto px-6 pt-12 md:px-12 lg:px-28 gap-5 md:gap-8 lg:gap-2 items-center">
        <div className="left">
            <h1 className='text-black font-bold text-3xl md:text-4xl lg:text-5xl text-center lg:text-start'>Best Digital Marketing Agency In Haldwani - DigiPhlox</h1>
            <h2 className='text-2xl md:text-3xl lg:text-4xl text-deep-orange-600 font-bold text-center py-4 lg:text-start'>करो अपना बिज़नेस ऑनलाइन</h2>
            <h3 className='pb-6 text-balance italic text-center lg:text-start'>Welcome to DigiPhlox the best digital marketing agency in Haldwani providing 360 degree digital marketing services such as Social Media Marketing, SEO, Content Writing, Paid Advertising, and Website Development.</h3>
            <div className="buttom flex gap-4 justify-center lg:justify-start">
             <Link to={'/contactus'}><button className='px-6 py-2 bg-deep-orange-600 text-white rounded-md hover:bg-gray-700'>CONTACT</button></Link>   
             <Link to={'/services'}><button className='px-6 py-2 border border-deep-orange-600 text-black hover:text-white rounded-md hover:bg-deep-orange-700'>SERVICES</button></Link>
            </div>
        </div>
        <div className="right hidden lg:block">
           <img src="https://digiphlox.com/wp-content/uploads/2022/07/sgsgdfg-e1670654711372.webp" alt="" />
        </div>
      </div>
    </div>
  )
}

export default SecondHeroPage

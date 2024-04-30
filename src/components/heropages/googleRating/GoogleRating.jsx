import React from 'react'
import { Link } from 'react-router-dom'

function GoogleRating() {
    return (
        <div>
            <div className="box hidden md:block">
                <div className="heading flex gap-3 justify-center py-5">
                    <img className='w-12' src="https://digiphlox.com/wp-content/uploads/2019/12/Google-Reviews-transparent-2.png" alt="" />
                    <h1>Google rated us Excellent with the Google Rating of 4.9 out of 5 based on more than 200+ Customer Reviews.</h1>
                </div>
                <div className="img flex gap-12 justify-center">
                    <img className='w-36' src="https://digiphlox.com/wp-content/uploads/2019/12/Asset-3.png" alt="" />
                    <img className='w-36' src="https://digiphlox.com/wp-content/uploads/2019/12/Asset-2.png" alt="" />
                    <img className='w-36' src="https://digiphlox.com/wp-content/uploads/2019/12/Asset-4.png" alt="" />
                    <img className='w-36' src="https://digiphlox.com/wp-content/uploads/2019/12/Asset-6.png" alt="" />
                </div>
            </div>
            <div className="paybox hidden  h-24 bg-gray-400 mt-12 md:flex justify-around items-center">
                <Link to={'https://pages.razorpay.com/pl_Nmyt3WAZ1b2ZW8/view'}><h1 className='cursor-pointer'>Make payments for our services.</h1></Link>
                <div className="img flex">
                    <Link to={'https://pages.razorpay.com/pl_Nmyt3WAZ1b2ZW8/view'}><img src="https://digiphlox.com/wp-content/uploads/2023/02/pay_methods_branding.png" alt="" /> </Link>
                </div>
                <div className="button">
                    <Link to={'https://pages.razorpay.com/pl_Nmyt3WAZ1b2ZW8/view'}> <button className='px-6 py-2 bg-indigo-500 text-white'>Pay Now</button></Link>
                    <img className='w-20' src="https://cdn.razorpay.com/static/assets/powered_by_razorpay.png" alt="" />
                </div>
            </div>

            {/* mobile */}
            <div className="box md:hidden py-6">
                <Link>
              <h1 className='flex justify-center text-xl font-bold text-deep-orange-400 cursor-pointer'>  Click Here To Pay</h1>
                </Link>
            </div>

        </div>
    )
}

export default GoogleRating

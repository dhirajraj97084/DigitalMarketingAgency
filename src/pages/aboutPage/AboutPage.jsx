import React from 'react'
import Layout from '../../components/layout/Layout'

function AboutPage() {
    return (
        <Layout>
            <div className="">
                <div className="main  flex justify-center items-center h-[35em] bg-no-repeat bg-cover   bg-center bg-fixed bg-[url('https://digiphlox.com/wp-content/uploads/2024/01/7-1.webp')]">
                    <div className="text">
                        <h1 className='lg:text-5xl px-2 md:text-4xl text-3xl font-serif text-center text-deep-orange-800 '>About Us
                        </h1>
                        <h2 className='lg:text-4xl px-2 md:text-4xl text-3xl font-serif text-center text-white'>Welcome to Digiphlox <br /> Your Trusted Partner for Digital Excellence in Uttarakhand!</h2>
                        <p className=' px-2 text-xl font-serif text-center text-white'>At Digiphlox, we are more than just a digital marketing agency; we are your strategic ally in <br />
                            navigating the dynamic and ever-evolving digital landscape. With a passion for innovation</p>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default AboutPage

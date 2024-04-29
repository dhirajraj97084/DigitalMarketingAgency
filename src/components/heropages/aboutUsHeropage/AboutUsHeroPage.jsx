import React from 'react'
import { Link } from 'react-router-dom'

function AboutUsHeroPage() {
    return (
        <div>
            <div className="box py-8 px-6 md:px-12 lg:px-28 grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="left">
                    <div className="heading">
                        <h1 className='font-bold text-deep-orange-500 text-start pb-2'>WHY CHOOSE DIGIPHLOX</h1>
                        <h2 className='text-2xl font-bold md:text-4xl text-black  lg:text-start '>We Are The Best Digital Marketing Agency <br /> In Haldwani (Uttarakhand)</h2>
                        <p className='pb-6 pt-3 text-balance text-start'>DigiPhlox is a leading digital marketing agency in Haldwani with over years of experience. We provide digital marketing services with all aspects of digital marketing, including SEO, social media marketing, paper-per-click advertising, content, website development, amazon listing, and more.</p>
                        <p className='pb-4 text-balance text-start'>Since DigiPhlox’s establishment, we have worked with a number of well-known brands and businesses, helping them in expanding their business.</p>
                        <p className='pb-4 text-balance text-start'>Our team of passionate digital marketers has worked for companies in a variety of industries and has the required experience to build digital solutions for every market niche.</p>
                        <p className='pb-4 text-balance text-start'>As a best digital marketing agency in Haldwani, we are well-known for providing brands and businesses with the right digital marketing solutions, thereby helping them in achieving their digital goals.</p>
                        <div className="button py-4">
                        <Link>
                            <button className='px-7 py-2 border-b-2 border border-deep-orange-400 font-semibold hover:bg-deep-orange-400 hover:text-white rounded-md'>About Us</button>
                        </Link>
                        </div>
                    </div>
                </div>
                <div className="right my-auto">
                    <img src="https://digiphlox.com/wp-content/uploads/2022/12/marketing-image-1536x1233.webp" alt="" />
                </div>
            </div>
        </div>
    )
}

export default AboutUsHeroPage

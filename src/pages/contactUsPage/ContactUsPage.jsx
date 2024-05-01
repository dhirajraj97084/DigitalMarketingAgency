import React from 'react'
import Layout from '../../components/layout/Layout'
import { Link } from 'react-router-dom'
import { FaAddressCard } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import Questions from './Questions';
import ContactForm from '../../components/heropages/contactForm/ContactForm';
import GoogleRating from '../../components/heropages/googleRating/GoogleRating';


function ContactUsPage() {
    return (
        <Layout>

            <div className="main flex justify-center items-center h-[35em] bg-no-repeat bg-cover bg-center bg-fixed bg-[url('https://digiphlox.com/wp-content/uploads/2024/02/social-media-marketing-concept-marketing-with-applications.webp')]">
                <div className="text">
                    <h1 className='lg:text-6xl px-2 md:text-4xl text-3xl font-serif text-center text-black '>Contact Us</h1>

                </div>
            </div>

            <div className="container mx-auto py-10">
              <h1 className='font-bold text-deep-orange-400 text-center pb-4'>WHERE ARE WE?</h1>
              <h2 className='font-bold text-2xl text-black text-center pb-4'>Contact us for a conversation</h2>
              <h3 className='text-xl text-center'>We are the best digital marketing agency in Uttrakhand.</h3>
              <div className="boxes">
                <div className="items grid grid-cols-1 lg:grid-cols-3 px-4 py-6">
                    <div className="item1 bg-white shadow-md p-2 m-3 border-b-4 border-deep-orange-400 ">
                        <Link to={'https://www.google.com/maps/place/DigiPhlox+-+Digital+Marketing+Agency/@29.2167567,79.4858036,15z/data=!4m6!3m5!1s0x39a09b4a1f139bff:0xdb29295c692a6d17!8m2!3d29.2168799!4d79.4859461!16s%2Fg%2F11p5m886bm?entry=ttu'}>
                        <FaAddressCard className='text-2xl lg:text-3xl mx-auto text-deep-orange-400' />
                        <h1 className='text-center text-3xl py-3 font-bold'>Address</h1>
                        </Link>
                        <p className='text-balance text-center'>Main Branch: Near Phooldei Banquet Hall Haripur Naik, Kamalwaganja Rd, Haldwani, Uttarakhand 263139</p>
                    </div>
                    <div className="item2 bg-white shadow-md p-2 m-3 border-b-4 border-deep-orange-400 ">
                        <Link>
                        <FaPhoneAlt className='text-2xl lg:text-3xl mx-auto text-deep-orange-400' />
                        <h1 className='text-center text-3xl py-3 font-bold'>Phone</h1>
                        </Link>
                        <p className='text-balance text-center'>+91 9675 00 2001</p>
                    </div>
                    <div className="item3 bg-white shadow-md p-2 m-3 border-b-4 border-deep-orange-400 ">
                        <Link>
                        <MdOutlineEmail  className='text-2xl lg:text-3xl mx-auto text-deep-orange-400' />
                        <h1 className='text-center text-3xl py-3 font-bold'>Email</h1>
                        </Link>
                        <p className='text-balance text-center'>contact@digiphlox.com</p>
                    </div>
                </div>
              </div>
            </div>
            
            {/* importing */}
            <Questions/>
            <ContactForm/>
            <GoogleRating/>
        </Layout>
    )
}

export default ContactUsPage

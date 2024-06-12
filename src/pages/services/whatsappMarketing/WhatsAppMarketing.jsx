import React from 'react'
import Layout from '../../../components/layout/Layout'
import { Link } from 'react-router-dom'
import { FaHandshake } from "react-icons/fa6";
import { MdAddIcCall } from "react-icons/md";
import { FaGlobeAmericas } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaImage } from "react-icons/fa";
import { MdPictureAsPdf } from "react-icons/md";
import { FaFacebookMessenger } from "react-icons/fa6";
import { GiTreeBranch } from "react-icons/gi";
import { FaVideo } from "react-icons/fa";
import GoogleRating from '../../../components/heropages/googleRating/GoogleRating';


function WhatsAppMarketing() {
  return (
    <Layout>
      <div className="main">
        <img className='w-full h-[25em]' src="https://digiphlox.com/wp-content/uploads/2023/02/whatsapp-marketing-to-grow-your-business.webp" alt="" />
        {/* 2nd */}
        <div className="content ">
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-16 lg:gap-32 md:py-12 container mx-auto ">
            <div className="left my-auto  rounded-br-[15em] bg-[#43a047] text-white lg:px-6 md:py-12 border-4 border-deep-orange-400 ">
              <h1 className=' text-center text-2xl font-bold pb-3 '>WhatsApp Marketing</h1>
              <h2 className='font-semibold pb-4'>Take Your Marketing To The Next Level With Our Whatsapp Marketing Service</h2>
              <p className='text-md pb-4' >In today’s internet-driven society, social media platforms have become a key source of news and information.</p>
              <p className=''>At Digiphlox, we offer comprehensive WhatsApp marketing services that help businesses reach their target audience effectively. Our services include personalized messaging, multimedia options, and instant messaging, providing our clients with a cost-effective and highly engaging marketing strategy. We help our clients build long-lasting relationships with their customers, resulting in increased brand loyalty and sales.</p>

            </div>
            <div className="right">
              <img className='h-[30em]' src="https://digiphlox.com/wp-content/uploads/2022/12/Layer1.png-1-768x1067.webp" alt="" />
            </div>
          </div>
        </div>
        {/* 3rd */}
        <div className="div px-3 py-3 container mx-auto my-1 grid grid-cols-1 md:grid-cols-2 lg:gap-12">
          <div className="left my-auto">
            <h1 className='py-4 text-xl text-deep-orange-500'>WHATSAPP MARKETING</h1>
            <h2 className='font-black text-xl md:text-3xl pb-4'>We Provide Best WhatsApp Marketing Services</h2>
            <p className='pb-4'>Our WhatsApp Marketing Services stand out because we offer personalized and cost-effective solutions to help businesses reach their target audience effectively.</p>
            <p className='pb-4'>With our services, businesses can expect high engagement rates, instant messaging, and the ability to send multimedia content. Our team of experts also ensures that all campaigns are customized to meet each business’s unique needs, ensuring maximum results.</p>
          </div>
          <img className='mx-auto py-3' src="https://digiphlox.com/wp-content/uploads/2022/12/twitter-facebook-together-292993-768x512.jpg" alt="" />
        </div>
        {/* 6boxes */}
        <div className="itets py-6 bg-gray-100">
          <div className="container mx-auto px-3">
            <h1 className=' text-deep-orange-400 text-center py-6 text-2xl font-bold'>What Are the Benefits of WhatsApp
              Marketing Services?</h1>

          </div>
          <div className="boxes container mx-auto  grid  grid-cols-1  md:grid-cols-3 pb-10 px-4 md:px-8">

            <div className="item1 m-3 bg-white shadow-md p-4">
              <h1 className='text-xl font-bold text-center text-deep-orange-500 pb-3'>Wide Reach</h1>
              <p className='px-5 text-center'>WhatsApp has over 2 billion users worldwide, providing businesses with a vast audience to reach.</p>
            </div>
            <div className="item2 m-3 bg-white shadow-md p-4">
              <h1 className='text-xl font-bold text-center text-deep-orange-500 pb-3'>Cost-effective</h1>
              <p className='px-5 text-center'>WhatsApp is a free messaging app, making it an affordable marketing option for businesses of all sizes.
              </p>
            </div>
            <div className="item3 m-3 bg-white shadow-md p-4">
              <h1 className='text-xl font-bold text-center text-deep-orange-500 pb-3'>Personalization</h1>
              <p className='px-5 text-center'>WhatsApp allows for one-on-one communication, allowing businesses to build personal relationships with their customers.</p>
            </div>
            <div className="item4 m-3 bg-white shadow-md p-4">
              <h1 className='text-xl font-bold text-center text-deep-orange-500 pb-3'>High engagement</h1>
              <p className='px-5 text-center'>WhatsApp messages have a higher open and response rate than email, making it a powerful marketing tool.</p>
            </div>
            <div className="item1 m-3 bg-white shadow-md p-4">
              <h1 className='text-xl font-bold text-center text-deep-orange-500 pb-3'>Instant messaging</h1>
              <p className='px-5 text-center'>With WhatsApp, businesses can quickly send messages to their customers, making it an effective tool for time-sensitive promotions.</p>
            </div>
            <div className="item1 m-3 bg-white shadow-md p-4">
              <h1 className='text-xl font-bold text-center text-deep-orange-500 pb-3'>Multimedia options</h1>
              <p className='px-5 text-center'>WhatsApp allows businesses to send multimedia content such as images, videos, and voice messages, making marketing messages more engaging and memorable.
              </p>
            </div>
          </div>
        </div>
        {/* horizontal_line */}
        <div className="box my-3">
          <div className="box  bg-blue-gray-700 flex flex-wrap md:justify-around justify-center items-center py-8 px-4 lg:py-8">
            <div className="left">
              <h1 className=' text-xl  font-bold text-white text-center pb-3'>Connect with us for seamless and impactful WhatsApp campaigns tailored to boost your business.</h1>
            </div>
            <div className="right">
              <Link to={'/contactus'}><button className='text-deep-orange-500 bg-white px-6 py-2 hover:bg-transparent hover:border border-gray-100 hover:text-white  cursor-pointer'>GET QUOTE</button></Link>
            </div>
          </div>
        </div>
        {/* how it work */}
        <div className="div px-3 grid grid-cols-1 md:grid-cols-2 container mx-auto py-10 md:gap-32">
          <div className="left my-auto">
            <img src="https://digiphlox.com/wp-content/uploads/2024/01/creative-team-having-discussion-social-media-application.webp" alt="" />
          </div>
          <div className="right">
            <h1 className='font-black text-2xl py-4 '>How It Works</h1>
            <div className="subpart pb-3">
              <h1 className='font-black text-xl'>Step 1</h1>
              <p className=''>Consultation - Discuss business goals and target audience</p>
            </div>
            <div className="subpart pb-3">
              <h1 className='font-black text-xl'>Step 2</h1>
              <p className=''>Strategy Development - Create a customized WhatsApp marketing plan.</p>
            </div>
            <div className="subpart pb-3">
              <h1 className='font-black text-xl'>Step 3</h1>
              <p className=''>Implementation - Launch and manage the campaign.</p>
            </div>
            <div className="subpart pb-3">
              <h1 className='font-black text-xl'>Step 4</h1>
              <p className=''>Analysis - Monitor performance and optimize for better results</p>
            </div>
          </div>
        </div>
        {/* Our WhatsApp Marketing Services */}
         <div className="mainbox px-3 container mx-auto">
          <h1 className='pb-3 text-deep-orange-500 font-semibold' >WHAT WE PROVIDE</h1>
          <h2 className='pb-3 font-black text-xl'>Our WhatsApp Marketing Services</h2>
          <div className="borderbox grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 py-8">
            <div className="tem1 border-2 border-black p-4">
              <div className="logo flex justify-center pb-2"><FaHandshake className='text-4xl' /></div>
              <h1 className='text-center font-semibold pb-3 text-deep-orange-400'>Custom Messages</h1>
              <p>Customize your messages to resonate with your audience. Our WhatsApp marketing services empower you to craft personalized and compelling messages that align with your brand voice and objectives.</p>
            </div>

            <div className="tem2 border-2 border-black p-4">
              <div className="logo text-center flex justify-center pb-2"><MdAddIcCall className='text-4xl' /></div>
              <h1 className='text-center font-semibold pb-3 text-deep-orange-400'>Call Button</h1>
              <p>Seamlessly integrate a ‘Call’ button into your WhatsApp messages, allowing your audience to connect with your business with just a tap. Increase customer interaction and make it easy for them to reach out.</p>
            </div>
            
            <div className="tem3 border-2 border-black p-4">
              <div className="logo text-center pb-2 flex justify-center"><FaGlobeAmericas className='text-4xl'  /></div>
              <h1 className='text-center font-semibold pb-3 text-deep-orange-400'>Website Button</h1>
              <p>Drive traffic to your website effortlessly by incorporating a ‘Website’ button. Direct your audience to specific landing pages, product pages, or promotional offers, maximizing the impact of your WhatsApp campaigns.</p>
            </div>

            <div className="tem3 border-2 border-black p-4">
              <div className="logo text-center pb-2 flex justify-center"><FaImage className='text-4xl'  /></div>
              <h1 className='text-center font-semibold pb-3 text-deep-orange-400'>4 Images</h1>
              <p>Visuals speak louder than words. Showcase your products, services, or promotions with up to four high-quality images in a single WhatsApp message. Capture attention and convey your message effectively.</p>
            </div>

            <div className="tem4 border-2 border-black p-4">
              <div className="logo text-center pb-2 flex justify-center"><FaWhatsappSquare className='text-4xl'  /></div>
              <h1 className='text-center font-semibold pb-3 text-deep-orange-400'>WhatsApp Now Button</h1>
              <p>Encourage immediate engagement with a ‘WhatsApp Now’ button. This feature enables users to initiate a conversation with your business instantly, fostering real-time communication and building a connection.</p>
            </div>

            <div className="tem5 border-2 border-black p-4">
              <div className="logo text-center pb-2 flex justify-center"><MdPictureAsPdf className='text-4xl'  /></div>
              <h1 className='text-center font-semibold pb-3 text-deep-orange-400'>1 PDF & 1 Video</h1>
              <p>Enhance your messaging capabilities by including multimedia elements. Share detailed information through a PDF document or engage your audience with a captivating video. Our services support diverse content formats to cater to your communication needs.</p>
            </div>

            <div className="tem5 border-2 border-black p-4">
              <div className="logo text-center pb-2 flex justify-center"><FaFacebookMessenger className='text-4xl'  /></div>
              <h1 className='text-center font-semibold pb-3 text-deep-orange-400'>Instant Messaging</h1>
              <p>Capitalize on the immediacy of WhatsApp with instant messaging. Connect with your audience in real-time, address queries promptly, and create a seamless communication experience.</p>
            </div>

            <div className="tem5 border-2 border-black p-4">
              <div className="logo text-center pb-2 flex justify-center"><GiTreeBranch className='text-4xl'  /></div>
              <h1 className='text-center font-semibold pb-3 text-deep-orange-400'>Personalized Messaging</h1>
              <p>Make your audience feel special with personalized messaging. Tailor your communications based on user preferences, behavior, or demographics, creating a more meaningful connection and boosting engagement</p>
            </div>

               <div className="tem5 border-2 border-black p-4">
              <div className="logo text-center pb-2 flex justify-center"><FaVideo className='text-4xl'  /></div>
              <h1 className='text-center font-semibold pb-3 text-deep-orange-400'>Multimedia Options</h1>
              <p>Multimedia options such as images, videos, and PDFs are best to improve your communication. Deliver a multimedia-rich experience that resonates with your audience and leaves a lasting impression.</p>
            </div>           

            


          </div>
         </div>
         <div className="container mx-auto">
         <div className="video">
          <div className="box grid grid-cols-1 lg:grid-cols-2 gap-6 my-12 lg:px-12">
          <div className="left px-3 my-auto">
          <iframe className=' h-[20em] lg:w-[36em] w-full ' src="https://www.youtube.com/embed/3Uav7rCQ4Zg" title="WhatsApp Marketing Service in Haldwani, Uttarakhand - DigiPhlox" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>                                  
            </div>
            <div className="right my-auto px-3  text-center ">
              <h1 className=' text-center font-bold text-xl text-deep-orange-500'>Revolutionizing Customer Engagement with Automated WhatsApp Responses</h1>             
              <p className='  pt-5 font-semibold  text-balance'>WhatsApp messaging platform also works as a channel for promoting products, and services, or engaging with customers. While WhatsApp is primarily designed for personal communication, businesses can leverage its features for marketing purposes. Also you can use quick replies and automated responses to handle frequently asked questions or provide instant responses to customer inquiries.</p>                            
            </div>
            
          </div>
        </div>
         </div>
      </div>
      <GoogleRating/>
    </Layout>
  )
}

export default WhatsAppMarketing

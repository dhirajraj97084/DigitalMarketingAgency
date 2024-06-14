import React from 'react'
import Layout from '../../../components/layout/Layout'
import { Link } from 'react-router-dom'
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaSnapchatSquare } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import GoogleRating from '../../../components/heropages/googleRating/GoogleRating';

function SocialMedia() {
  return (
    <Layout>
      <div className="main">
        <img className=' h-[26em] md:h-auto' src="img/social.jpg" alt="" />
      </div>
      <div className="container mx-auto lg:mt-12 mt-6 ">
        <h1 className='text-xl font-bold pb-6 text-deep-orange-300 text-balance text-center'>Searching For The Ultimate Social Media Marketing Company In Haldwani <span className=' text-black/65'> That Not Only Optimizes But Also Helps You Grow In The Competitive Market?</span> </h1>
      </div>
      <h2 className='text-xl text-black/65 font-semibold text-balance text-center'>Then You're At The Right Place. <span className='text-deep-orange-300'>DigiPhlox Is The Best Social Media Advertising Company In Haldwani</span> </h2>
      {/* right_left_box */}

      <div className="boxes mt-16 grid grid-cols-1 lg:grid-cols-2">
        <div className="left px-4 my-auto ">
          <h1 className=' pb-3 text-deep-orange-500 font-extrabold'>SOCIAL MEDIA STRATEGY</h1>
          <h2 className='text-xl pb-2 font-bold'>Promote Your Company's Story and News</h2>
          <p className='pb-3 text-balance'>In today’s internet-driven society, social media platforms have become a key source of news and information. </p>
          <p className='pb-3 text-balance'>As the digital landscape continues to evolve, businesses must recognize the power of social media to connect with their audience, build brand identity, and stay relevant in a fast-paced online environment.</p>
        </div>
        <div className="right">
          <img className=' w-full' src="https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
          <div className="box relative bottom-[18em] lg:bottom-[6em] bg-deep-orange-500 text-white py-6 px-4 lg:right-12">
            <h1 className=' text-xl text-center font-bold'>Social media marketing</h1>
            <p>Social media marketing is the utilization of social platforms to promote products, services, or brands. It involves creating and sharing content to engage audiences, build relationships, and achieve marketing goals</p>
          </div>
        </div>
      </div>

      {/* Social Media Marketing Platform */}

      <div className="box bg-gray-100 h-fit py-5">
        <h1 className='lg:text-3xl text-2xl text-center pt-6 font-bold text-balance'>Social Media Marketing Platform</h1>
        <div className="container mx-auto mt-8 lg:mt-16 grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="facebook">
            <Link><FaFacebookSquare className='mx-auto text-6xl hover:text-deep-orange-400 text-indigo-500' /></Link>
            <h1 className=' text-xl font-bold text-center py-2'>Facebook Marketing</h1>
            <p className='  text-center text-wrap'>The only thing better than Facebook’s huge audience is the cost effectiveness of their sponsored pages. Small businesses and organizations can easily promote themselves on Facebook without breaking the bank!</p>
          </div>
          <div className="twitter">
            <Link><FaTwitter className='mx-auto text-6xl hover:text-deep-orange-400 text-indigo-500' /></Link>
            <h1 className=' text-xl font-bold text-center py-2'>Twitter Marketing</h1>
            <p className='  text-center text-wrap'>As your Twitter advertising agency, we can help design a clear action plan for you that helps to build an effective profile for your business on this social media powerhouse.</p>
          </div>
          <div className="instagram">
            <Link><FaInstagram className='mx-auto text-6xl hover:text-deep-orange-400 text-red-500' /></Link>
            <h1 className=' text-xl font-bold text-center py-2'>Instagram Marketing</h1>
            <p className='  text-center text-wrap'>Having a presence on the most popular social media app gives you an opportunity to connect with and engage your target audience. Based on your budget, you can use our Instagram marketing service to amplify your organic content, boost engagements and drive traffic to your website or social media account</p>
          </div>

          <div className="LinkedIn Marketing">
            <Link><FaLinkedinIn className='mx-auto text-6xl hover:text-deep-orange-400 text-red-500' /></Link>
            <h1 className=' text-xl font-bold text-center py-2'>LinkedIn Marketing</h1>
            <p className='  text-center text-wrap'>If you have a LinkedIn profile but haven’t yet engaged in social media marketing, you’re missing out on a great opportunity. We can take over your page and keep it current. Share images and articles  regularly to keep your audience interested in following you.</p>
          </div>

          <div className="Snapchat Marketing">
            <Link><FaSnapchatSquare className='mx-auto text-6xl hover:text-deep-orange-400 text-yellow-500' /></Link>
            <h1 className=' text-xl font-bold text-center py-2'>Snapchat Marketing</h1>
            <p className='  text-center text-wrap'>Consumers, especially millennials, want to interact with their favorite brands and products. Snapchat allows you to create engaging stories that can be seen by thousands of your followers in seconds.</p>
          </div>

          <div className="YouTube Marketing">
            <Link><FaYoutube className='mx-auto text-6xl hover:text-deep-orange-400 text-red-800' /></Link>
            <h1 className=' text-xl font-bold text-center py-2'>YouTube Marketing</h1>
            <p className='  text-center text-wrap'>It’s clear that YouTube marketing is changing the way brands reach consumers. If you aren’t using YouTube marketing yet, you are really missing out on an invaluable opportunity to influence your target audience and engage them in an interactive and meaningful way.</p>
          </div>
        </div>
      </div>

      {/* Gain advantages through our Social Media Marketing Services */}
      <div className='bg-gray-100'>
        <div className="container mx-auto  py-12 ">
          <h1 className='text-xl font-bold text-balance text-center py-5 '>Gain advantages through our Social Media Marketing Services</h1>
          <div className="boxes grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="item1 p-5 mx-4 mt-3 bg-deep-orange-500 hover:bg-black text-white">
              <h1 className='text-center pb-2 text-2xl font-bold'>Online Presence</h1>
              <h2 className='text-center'>More engagements and social presence can be generated with a successful social media content marketing approach.</h2>
            </div>
            <div className="item2 p-5 mx-4 mt-3 shadow-md bg-white ">
              <h1 className='text-center pb-2 text-2xl font-bold'>High Ranks</h1>
              <h2 className='text-center'>The more users who share your content on social media, the more traffic your website receives.</h2>
            </div>
            <div className="item3 p-5 mx-4 mt-3 bg-deep-orange-500 hover:bg-black text-white">
              <h1 className='text-center pb-2 text-2xl font-bold'>Customer Trust</h1>
              <h2 className='text-center'>You may use marketing to create a thought leadership brand and deep, meaningful connections with your followers</h2>
            </div>
            <div className="item2 p-5 mx-4 mt-3 shadow-md bg-white ">
              <h1 className='text-center pb-2 text-2xl font-bold'>Various Marketing Alternatives</h1>
              <h2 className='text-center'>There are a variety of different social media marketing platforms where you can promote your business.</h2>
            </div>
            <div className="item3 p-5 mx-4 mt-3 bg-purple-200 hover:bg-black text-white">
              <h1 className='text-center pb-2 text-2xl font-bold'>Profitability</h1>
              <h2 className='text-center'>Small businesses can also benefit from social media marketing because it is a low-cost strategy to reach out to their ideal customers</h2>
            </div>
            <div className="item2 p-5 mx-4 mt-3 shadow-md bg-white ">
              <h1 className='text-center pb-2 text-2xl font-bold'>Brand Control</h1>
              <h2 className='text-center'>Your branding, budget, and social media content marketing plan are all under your control.</h2>
            </div>
          </div>

        </div>
        <div className="container mx-auto my-8 lg:py-16 px-3">
          <h1 className='text-center font-black text-3xl '>Why Social Presence is important for your business</h1>
          <p className='pt-3 pb-8 text-balance text-center   '>Creating a social media marketing page can be a powerful way to promote your business, brand, or cause online. Whether you’re starting from scratch or want to improve an existing Page. Here are a few things to consider while creating an effective social media marketing page for your business.</p>
          <div className="check lg:flex ">
            <div className="button flex justify-center items-center gap-3">
              <div className="left">
                <h1 className='h-16 w-16 flex justify-center items-center rounded-full bg-deep-orange-400'><FaCheck className='text-white text-3xl ' /></h1>
              </div>
              <div className="right ">
                <h1 className='text-xl font-black'>Choose the Right Platform</h1>
                <p className='pt-2 text-balance'>Consider your target audience and choose platforms where they are most active. e.g., Facebook, Instagram, Twitter, LinkedIn, TikTok.</p>
              </div>
            </div>

            <div className="button pt-6 flex justify-center items-center gap-3">
              <div className="left">
                <h1 className='h-16 w-16 flex justify-center items-center rounded-full bg-deep-orange-400'><FaCheck className='text-white text-3xl ' /></h1>
              </div>
              <div className="right ">
                <h1 className='text-xl font-black'>
                  Optimizing your profile</h1>
                <p className='pt-2 text-balance'>Create a logo for your brand and having a good description helps to increase its social presence. Choose a profile picture and cover photo that represents your brand visually.</p>
              </div>
            </div>

            <div className="button pt-6 flex justify-center items-center gap-3">
              <div className="left">
                <h1 className='h-16 w-16 flex justify-center items-center rounded-full bg-deep-orange-400'><FaCheck className='text-white text-3xl ' /></h1>
              </div>
              <div className="right ">
                <h1 className='text-xl font-black'>
                  Consistent Branding</h1>
                <p className='pt-2 text-balance'>A consistent posting schedule to keep your audience engaged is crucial in building a strong social presence.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="box">
          <div className="box my-6 bg-blue-gray-700 flex flex-wrap md:justify-around justify-center items-center py-2">
            <div className="left">
              <h1 className='text-xl font-bold text-white text-center pb-8 md:pb-0'>Get in Touch with the Best Social Media Advertising Agency in Uttarakhand</h1>
            </div>
            <div className="right">
              <Link to={'/contactus'}><button className='text-deep-orange-500 bg-white px-6 py-2 cursor-pointer'>CLICK HERE</button></Link>
            </div>
          </div>
        </div>

        <div className="video">

        <div className="box grid grid-cols-1 lg:grid-cols-2 gap-6 my-12 lg:px-12">
          <div className="left px-3">
          <iframe className=' lg:h-[20em] lg:w-[36em] w-full ' src="https://www.youtube.com/embed/FyEIvCYG2Qw" title="Social Media Marketing Service by DigiPhlox - Hire Social Media Marketer in Haldwani, Uttarakhand" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
          <div className="right mt-16 lg:mt-0 px-3  text-center">
            <h1 className=' text-center font-bold text-3xl'>Elevate Your Brand with FREE Social Media Marketing Strategy</h1>
            <p className='  pt-5 font-semibold  text-balance'>Are you ready to take your brand to new heights? Look no further! We’re thrilled to offer you a golden opportunity to supercharge your online presence with our cutting-edge Social Media Marketing Strategy – and the best part? It’s absolutely FREE!</p>          
            
            <div className="div pt-8">
          <ul>
              <Link to={'https://www.youtube.com/watch?v=ZJxlghN3pcY'}><li className=' pb-4 font-bold text-deep-orange-500'>Social Media Marketing Strategy For Schools</li></Link>
              <Link to={'https://www.youtube.com/watch?v=G_uJxy1xyH4'}><li className=' pb-4 font-bold text-deep-orange-500'>Social Media Marketing Strategy For Hotels And Resorts</li></Link>
            </ul>
          </div>
          </div>
          
        </div>

        </div>


        <div className="box">
          <div className="box my-6 bg-deep-orange-700 flex flex-wrap md:justify-around justify-center items-center py-2">
            <div className="left">
              <h1 className='text-xl font-bold text-black text-center pb-8 md:pb-0'>It's time for your brand to shine online. Contact us today and Let's make your brand the talk of the town</h1>
            </div>
            
          </div>
        </div>
        

     <GoogleRating/>

    </div>
    </Layout >
  )
}

export default SocialMedia

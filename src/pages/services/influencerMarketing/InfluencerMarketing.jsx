import React from 'react'
import Layout from '../../../components/layout/Layout'
import { Link } from 'react-router-dom'
import GoogleRating from '../../../components/heropages/googleRating/GoogleRating'

function InfluencerMarketing() {
  return (
    <Layout>
      <div className="main">
        <div className="img">
          <img className='w-full h-[25em]' src="img/influ.jpg" alt="" />
        </div>
        <div className="container mx-auto px-3 lg:my-8 my-3 gap-4 grid grid-cols-1 lg:grid-cols-2">
          <div className="left lg:mt-16 ">
            <h1 className='font-bold text-deep-orange-400 pb-2'>PROCESS OF BUILDING</h1>
            <h2 className='text-2xl font-black'>Influencers that make a Difference</h2>
            <p className='py-3'>DigiPhlox provides influencer marketing services that assist businesses in reaching their target audience and expanding brand awareness. </p>
            <p className='py-4'>Our services consist of discovering and working with relevant influencers, developing engaging content, and measuring campaign outcomes. We offer bespoke solutions and campaigns geared to the specific demands of each organization in order to maximize ROI.

            </p>
            <Link to={'/contactus'}><button className='px-6 py-2  font-bold bg-deep-orange-500 text-white'>CONTACT US</button></Link>

          </div>
          <div className="right">
            <img src="https://digiphlox.com/wp-content/uploads/2022/12/influencer-marketing-image.jpg" alt="" />
            <div className="box flex gap-3">
              <div className="item1 relative bottom-[4em] pt-5 lg:right-[10em] mb-2 bg-deep-orange-500 pb-3 text-white px-8">
                <h1 className='font-bold text-white pb-2'>Why Influencer Marketing Is the Future of Advertising</h1>

                <p>Influencer marketing is authentic, relatable and cost-effective, making it the future of advertising for brands looking to reach new audiences.</p>
              </div>
              <div className="item1 mb-2 bg-teal-700 pb-3 relative bottom-[2em] lg:bottom-[2em] lg:right-[4em] text-white px-8">
                <h1 className='py-3 font-bold'>Unlocking the Potential of Influencer Marketing</h1>
                <p>Influencer marketing has the power to drive sales and build brand awareness, but success requires strategy and authenticity</p>
              </div>

            </div>
          </div>
        </div>
        <div className="box mb-2">
          <div className="box  bg-blue-gray-700 flex flex-wrap md:justify-around justify-center items-center py-8 px-4 lg:py-8">
            <div className="left">
              <h1 className='lg:text-2xl text-xl  font-bold text-white text-center pb-3 '>
                Get Started with Digiphlox Today</h1>
              <p className='text-white pb-4 text-center  font-bold text-balance'>Elevate Your Brand through Authentic Influencer Marketing</p>
            </div>
            <div className="right">
              <Link to={'/contactus'}><button className='text-deep-orange-500 bg-white px-6 py-2 hover:bg-transparent hover:border border-gray-100 hover:text-white  cursor-pointer'>GET IN TOUCH</button></Link>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-3   gap-4 ">
          <div className="left lg:mt-16 ">
            <h1 className='font-bold text-deep-orange-400 pb-2'>INTRODUCING OUR WORK</h1>
            <h2 className='text-2xl font-black pb-3'>The Rise of Influencer Marketing: How to Stay Ahead of the Curve!</h2>

            <p className='py-4 text-balance'>Businesses have been changed by the rise of influencer marketing, but it’s important to stay ahead of the curve. By finding the right influencers and working with them, businesses can reach new audiences and raise brand awareness. In this fast-paced, always-changing world, success depends on being real and honest.</p>
          </div>
          <div className="right">
            <img src="https://images.pexels.com/photos/4342427/pexels-photo-4342427.jpeg?auto=compress&cs=tinysrgb&" alt="" />
            <div className="box flex gap-3">
            </div>
          </div>
        </div>

        <div className="itets container mx-auto py-6">
          <div className="boxes grid  grid-cols-1 lg:grid-cols-3 pb-10">

            <div className="item1 m-3 bg-white  p-4">
              <h1 className='text-xl font-bold text-center text-deep-orange-500 pb-3'>01- YouTube Influencer Marketing</h1>
              <p className='px-5 text-center'>YouTube Influencer Marketing is the practice of partnering with popular YouTube content creators to promote products or services to their large and engaged audience, helping brands to reach new customers.
              </p>
            </div>
            <div className="item2 m-3 bg-white  p-4">
              <h1 className='text-xl font-bold text-center text-deep-orange-500 pb-3'>02 - Instagram Influencer Marketing</h1>
              <p className='px-5 text-center'>Instagram Influencer Marketing is a strategy that involves partnering with popular Instagram users to promote products and services to their followers. It’s a powerful way to reach a large and engaged audience.
              </p>
            </div>
            <div className="item3 m-3 bg-white p-4">
              <h1 className='text-xl font-bold text-center text-deep-orange-500 pb-3'>03 - Meme Marketing</h1>
              <p className='px-5 text-center'>Meme marketing is the use of internet memes to promote a product or service. It is a way to reach younger audiences and create humorous or relatable content to increase engagement.</p>
            </div>


          </div>
        </div>

        <div className="box mb-2">
          <div className="box  bg-blue-gray-700 flex flex-wrap md:justify-around justify-center items-center py-8 px-4 lg:py-8">
            <div className="left">
              <h1 className='lg:text-2xl text-xl  font-bold text-white text-center pb-3 '>
                Let's Collaborate</h1>
              <p className='text-white pb-4 text-center  font-bold text-balance'>Are you ready to elevate your brand through authentic influencer marketing? Partner with Digiphlox, where creativity meets authenticity, and results speak volumes.</p>
            </div>
            <div className="right">
              <Link to={'/contactus'}><button className='text-deep-orange-500 bg-white px-6 py-2 hover:bg-transparent hover:border border-gray-100 hover:text-white  cursor-pointer'>GET IN TOUCH</button></Link>
            </div>
          </div>
        </div>
        {/* How we can enhance your brand? */}
        {/* empty */}
        <div className="boxes">
          <div className="container mx-auto">
            <h1 className='text-xl lg:text-3xl font-black text-center pt-9 pb-2 '><span className='text-deep-orange-700'>OUR INFLUENCER </span> MARKETING SERVICES</h1>
            <h1 className='lg:text-2xl font-semibold text-center pb-8'>How we can enhance your brand?</h1>
            {/* rotate_boxes */}
            <div className="main_box">
              <div className="items grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <div className="item1 bg-blue-gray-500 m-3 p-10 text-white rounded-md">
                  <h1>Influencer marketing is not just about selling a product; it's about telling a story that captivates and resonates with your audience.</h1>
                </div>
                <div className="item2 m-3 bg-blue-gray-500 p-10 text-white rounded-md">
                  <h1>Great influencer marketing isn't about reaching everyone; it's about connecting with the right someone</h1>
                </div>
                <div className="item3 m-3 bg-blue-gray-500 p-10 text-white rounded-md">
                  <h1>Influencer marketing is the bridge that connects brands with the hearts and minds of their target audience.</h1>
                </div>
              </div>

              <div className="items grid grid-cols-1  lg:grid-cols-2">
                <div className="item1 bg-blue-gray-500 m-3 p-10 text-white rounded-md">
                  <h1>In a world full of advertisements, be the story that people remember and share</h1>
                  <div className="div flex justify-center">
                    <button className='px-6 py-1 border  mt-3'>"UNKNOWN"</button>
                  </div>
                </div>
                <div className="item2 m-3 bg-blue-gray-500 p-10 text-white rounded-md">
                  <h1>Don't just find influencers; find partners who believe in your brand as much as you do</h1>
                  <div className="div flex justify-center">
                    <button className='px-6 py-1 border  mt-3'>"UNKNOWN"</button>
                  </div>
                </div>

              </div>
            </div>
          </div>
          <div className="div">
            <div className="main flex justify-center items-center h-[35em] bg-no-repeat bg-cover bg-center bg-fixed bg-[url('https://media.istockphoto.com/id/1652717832/photo/happy-young-indian-couple-having-fun-in-new-home-playing-with-boxes-real-estate-residential.jpg?s=2048x2048&w=is&k=20&c=20-6SngRJkpOjCOCak9NUzlfQACdP4vmlXg80AcMnf8=')]">
              <div className="text">
                <h1 className='lg:text-6xl px-2 md:text-4xl text-3xl font-serif text-center text-black '>Ready To Get Started</h1>
              </div>
            </div>          
          </div>
          <div className="video">

        <div className="box grid grid-cols-1 lg:grid-cols-2 gap-6 my-12 lg:px-12">
          <div className="left px-3">
          <iframe className=' lg:h-[20em] lg:w-[36em] w-full ' width="550" height="310" src="https://www.youtube.com/embed/OB6tP_TLdXM" title="Influencer Marketing Service in Haldwani - DigiPhlox" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>          
          </div>
          <div className="right mt-16  lg:mt-0 px-3  text-center">
            <h1 className=' text-center font-bold text-2xl text-deep-orange-500'>Transform Your Reach with Influencer Brilliance</h1>
            <p className='  pt-5 font-semibold  lg:text-start text-center '>Influencer marketing introduces a fresh and innovative approach to reaching your target audience. When influencers endorse a product or service, it can create a sense of authenticity, as followers believe the recommendation is coming from a credible source. It allows your brand to be promoted in a way that feels less like traditional advertising and more like a personal recommendation, making it more appealing to consumers.</p>        
            
         
       
          </div>
          
        </div>

        </div>
        </div>
        <GoogleRating/>

      </div>
    </Layout>
  )
}

export default InfluencerMarketing

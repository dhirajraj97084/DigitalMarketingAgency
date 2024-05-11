import React from 'react'
import Layout from '../../../components/layout/Layout'
import { Link } from 'react-router-dom'
import GoogleRating from '../../../components/heropages/googleRating/GoogleRating'

function PayPerClick() {
  return (
    <Layout>
      <div className="main">
        <img className='w-full h-[25em]' src="https://digiphlox.com/wp-content/uploads/2023/12/1.webp" alt="" />
        <div className="container mx-auto px-3 lg:my-8 my-3 gap-4 grid grid-cols-1 lg:grid-cols-2">
          <div className="left lg:mt-16 ">
            <h1 className='font-bold text-deep-orange-400 pb-2'>Online Advertising Services in Haldwani</h1>
            <h2 className='text-2xl font-black'>Are you in search of online advertising services from a local service provider in Haldwani?</h2>
            <p className='py-2'>Look no further than DigiPhlox, your premier PPC service provider in Haldwani.</p>
            <Link to={'/contactus'}><button className='px-6 py-2 text-xl font-bold bg-deep-orange-500 text-white'>CONTACT US</button></Link>
            <div className="box bg-teal-700 p-3 my-3 ">
              <h1 className='text-white text-center pb-3  text-xl font-bold'>Did You Know ?</h1>
              <div className="innerbox px-6 pb-12 pt-4 bg-gray-200">
                <p>PPC offers near-instant visibility on search engines. Unlike organic SEO efforts that may take time to rank, PPC ads can appear at the top of search results almost immediately, driving immediate traffic to your website.</p>
              </div>
            </div>
          </div>
          <div className="right">
            <img src="https://digiphlox.com/wp-content/uploads/elementor/thumbs/shutterstock_280374944-850x476-1-pjapc6h17vx5q0a8o5e9skx83jyo2uehsf22eh9sns.jpg" alt="" />
            <div className="box flex gap-3">
              <div className="item1 relative bottom-[10em] lg:right-[10em] mb-2 bg-deep-orange-500 pb-3 text-white px-8">
                <h1 className='py-3 font-bold'>Real-Time Results</h1>
                <p>Unlike some traditional marketing methods, PPC provides real-time data, allowing advertisers to make immediate adjustments to optimize campaigns.</p>
              </div>
              <div className="item1 mb-2 bg-teal-700 pb-3 relative bottom-[4em] lg:right-[6em] text-white px-8">
                <h1 className='py-3 font-bold'>Cost Per Click Model</h1>
                <p>PPC operates on a cost-per-click model, meaning advertisers only pay when users click on their ads, providing a cost-effective advertising method.</p>
              </div>

            </div>
          </div>
        </div>

        {/* Types of PPC Ads */}
        <div className="container mx-auto">
          <h1 className='text-center text-2xl font-bold'>Types of PPC Ads</h1>
          <p className='text-center text-deep-orange-500 py-3 font-bold'>Pay Per Click</p>
          <div className="intemsss">
            <div className="container mx-auto  py-12 ">
              <div className="boxes grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="item1 p-5 mx-4 mt-3 bg-deep-orange-500 hover:bg-black text-white">
                  <h1 className='text-center pb-2 text-2xl font-bold'>Search Ads</h1>
                  <h2 className='text-center'>These pay-per-click advertising are ideal for one-time campaign promotions or short sales cycles. Businesses seeking strong, high-quality leads from new customers should consider search advertising.</h2>
                </div>
                <div className="item2 p-5 mx-4 mt-3 shadow-md bg-white ">
                  <h1 className='text-center pb-2 text-2xl font-bold'>Display Ads</h1>
                  <h2 className='text-center'>Display advertising is well-known for its ability to reach more than 90% of internet users. Display advertising makes use of graphics and text to catch the attention of online visitors and persuade them to take action.</h2>
                </div>
                <div className="item3 p-5 mx-4 mt-3 bg-deep-orange-500 hover:bg-black text-white">
                  <h1 className='text-center pb-2 text-2xl font-bold'>Social Ads</h1>
                  <h2 className='text-center'>The fastest-growing segment of pay-per-click advertising services is social media paid advertising. Brands with an active social media presence and highly-targeted audiences are good candidates for social media advertising.</h2>
                </div>
                <div className="item2 p-5 mx-4 mt-3 shadow-md bg-white ">
                  <h1 className='text-center pb-2 text-2xl font-bold'>Remarketing Ads</h1>
                  <h2 className='text-center'>One of the most effective strategies to reach high-converting customers and boost your turnovers is through remarketing. Remarketing ads entice visitors who have already visited your website to return and convert. </h2>
                </div>
                <div className="item3 p-5 mx-4 mt-3 bg-purple-200 hover:bg-black text-white">
                  <h1 className='text-center pb-2 text-2xl font-bold'>Google Shopping Ads</h1>
                  <h2 className='text-center'>For websites with a high number of products, Google Shopping advertising are ideal. These PPC ads appear in a carousel, allowing potential customers to see products and pricing before visiting anyone’s website.</h2>
                </div>
                <div className="item2 p-5 mx-4 mt-3 shadow-md bg-white ">
                  <h1 className='text-center pb-2 text-2xl font-bold'>YouTube Ads</h1>
                  <h2 className='text-center'>These are the pay-per-click ads that show in YouTube search results, YouTube videos, and video partners. </h2>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Boost Your Brand Recognition and Scale Up Quickly with DigiPhlox */}
        <div className="box">
          <div className="box my-6 bg-blue-gray-700 flex flex-wrap md:justify-around justify-center items-center py-2 lg:py-8">
            <div className="left">
              <h1 className='text-xl font-bold text-white text-center pb-8 md:pb-0'>
                Boost Your Brand Recognition and Scale Up Quickly with DigiPhlox</h1>
            </div>
            <div className="right">
              <Link to={'/contactus'}><button className='text-deep-orange-500 bg-white px-6 py-2 hover:bg-transparent hover:border border-gray-100 hover:text-white  cursor-pointer'>GET IN TOUCH</button></Link>
            </div>
          </div>
        </div>

        <div className="itets">
          <div className="container mx-auto px-3">
            <h1 className='text-black text-center pb-8 text-2xl font-bold'>Online Advertising Services</h1>
          </div>
          <div className="boxes grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pb-10">

            <div className="item1 m-3 bg-white shadow-md p-4">
              <h1 className='text-xl font-bold text-center text-deep-orange-500 pb-3'>Google Ads</h1>
              <p className='px-5 text-center'>Capitalize on the popularity of Google as a search engine. Google Ads positions your business at the forefront of relevant search results, connecting you with users actively seeking your products or services.</p>
            </div>
            <div className="item2 m-3 bg-white shadow-md p-4">
              <h1 className='text-xl font-bold text-center text-deep-orange-500 pb-3'>Facebook Ads</h1>
              <p className='px-5 text-center'>Leverage the expansive user base of Facebook and Instagram. Create visually appealing ads to engage your audience and drive traffic to your website.

              </p>
            </div>
            <div className="item3 m-3 bg-white shadow-md p-4">
              <h1 className='text-xl font-bold text-center text-deep-orange-500 pb-3'>LinkedIn Ads</h1>
              <p className='px-5 text-center'>Ideal for B2B marketing, LinkedIn Ads enable precise targeting based on job title, industry, and company size. Connect with decision-makers and professionals in your industry.</p>
            </div>
            <div className="item4 m-3 bg-white shadow-md p-4">
              <h1 className='text-xl font-bold text-center text-deep-orange-500 pb-3'>Twitter Ads</h1>
              <p className='px-5 text-center'>Engage with a dynamic audience on Twitter through promoted tweets and trends. Twitter Ads are effective for building brand awareness and driving website traffic.</p>
            </div>
            <div className="item1 m-3 bg-white shadow-md p-4">
              <h1 className='text-xl font-bold text-center text-deep-orange-500 pb-3'>Landing Page Conversion</h1>
              <p className='px-5 text-center'>A well-designed landing page, crafted with ad content, enhances user experience, boosts trust, and maximizes the likelihood of achieving the desired conversion goals

              </p>
            </div>
            <div className="item1 m-3 bg-white shadow-md p-4">
              <h1 className='text-xl font-bold text-center text-deep-orange-500 pb-3'>Youtube Ads</h1>
              <p className='px-5 text-center'>YouTube ads offer diverse formats, precise audience targeting, and analytics for effective campaigns. With a variety of ad formats, such as TrueView, bumper ads, and display ads, advertisers can choose the format that aligns with their marketing objectives.</p>
            </div>

          </div>
        </div>

        <div className="box">
          <div className="box my-6 bg-blue-gray-700  py-2 lg:py-8">
            <div className="left">
              <h1 className='text-xl font-bold text-white text-center pb-8 md:pb-0'>
                Let us optimize your digital presence for maximum impact and results.</h1>
            </div>

          </div>
        </div>

        <div className="video">
          <div className="box grid grid-cols-1 lg:grid-cols-2 gap-6 my-12 lg:px-12">
            <div className="right mt-16 lg:mt-0 px-3  text-center my-auto">
              <h1 className=' text-center font-bold text-3xl'>Online Advertising Services in Haldwani</h1>             
              <p className='  pt-5 font-semibold  text-balance'>Whether you’re a local business or looking to expand your reach, Digiphlox is your trusted partner for unparalleled PPC services in Haldwani. Contact us today to start a conversation about boosting your online success through targeted and effective PPC campaigns.</p>
              <h1 className='text-xl font-bold text-deep-orange-400 text-start py-4 '>Our Service:</h1>
              <ul className='text-start px-8 '>
                <li>Google Ads</li>
                <li>Snapchat Ads</li>
                <li>YouTube Video Ads</li>
                <li>Facebook Video Ads</li>
                <li>Linkedin Ads</li>
                <li>Twitter Ads</li>
                <li>Pinterest Ads</li>
              </ul>
            </div>
            <div className="left px-3 my-auto">
            <iframe className=' lg:h-[20em] lg:w-[36em] w-full ' src="https://www.youtube.com/embed/Ggu56qOG10A" title="Online Advertising Services in Haldwani | Facebook Ads, Instagram, YouTube , Snapchat Ads" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>              
            </div>
          </div>
        </div>
        <GoogleRating/>
      </div>
    </Layout>
  )
}

export default PayPerClick

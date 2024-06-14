import React from 'react'
import Layout from '../../../components/layout/Layout'
import { Link } from 'react-router-dom'
import GoogleRating from '../../../components/heropages/googleRating/GoogleRating'

function Seo() {
  return (
    <Layout>
      <div className="box">
        <img className='w-full h-[25em]' src="img/seo.jpg" alt="" />
        <div className="main">
          <div className="container mx-auto px-3 lg:pt-20">
            <h1 className='text-2xl lg:text-3xl font-black text-center py-3'>Best SEO Company In Haldwani: Premium Seo service provider</h1>
            <p className=' font-semibold pb-4 text-balance lg:text-center'>Digiphlox is the leading SEO company in Haldwani. Our team comprises professional and experienced individuals who drive targeted traffic to your business, enhancing its visibility in the community. We ensure that your business stands out in the competitive digital landscape by employing best SEO practices</p>
          </div>
          {/* REACH YOUR TARGET AUDIENCE */}

          <div className="reach container mx-auto py-10 px-3">
            <div className="box grid grid-cols-1 lg:grid-cols-2 ">
              <div className="left">
                <h1 className='text-xl pb-4 text-deep-orange-500 font-bold text-center lg:text-start '>REACH YOUR TARGET AUDIENCE</h1>
                <h2 className=' font-black   lg:text-xl text-center pb-4  lg:text-start'>Attract the attention of your clients with engaging content.</h2>
                <p className='text-center  lg:text-start'>You’ve found the SEO solutions you’ve been looking for.</p>
              </div>
              <div className="right">
                <img className='h-44 w-full' src="https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
              </div>
            </div>

          </div>

          <div className="boxes py-16">
            <div className="container mx-auto">
              <div className="boxes grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="item1 p-5 mx-4 mt-3 bg-deep-orange-500 hover:bg-black text-white">
                  <h1 className='text-center pb-2 text-2xl font-bold'>Keyword Research</h1>
                  <h2 className='text-center'>We understand your industry and can help you improve your search engine rankings for certain keywords.</h2>
                </div>
                <div className="item2 p-5 mx-4 mt-3 shadow-md bg-white ">
                  <h1 className='text-center pb-2 text-2xl font-bold'>Local SEO</h1>
                  <h2 className='text-center'>Attract high-intent customers by optimizing your Google Business Profile or Google My Business</h2>
                </div>

                <div className="item2 p-5 mx-4 mt-3 shadow-md  bg-deep-orange-500 hover:bg-black text-white  ">
                  <h1 className='text-center pb-2 text-2xl font-bold'>E-Commerce SEO</h1>
                  <h2 className='text-center'>For user experience, ecommerce SEO mainly entails improving your headlines, product descriptions, meta data, and navigational structure.</h2>
                </div>
                <div className="item3 p-5 mx-4 mt-3 bg-white shadow-md">
                  <h1 className='text-center pb-2 text-2xl font-bold'>Content Writing</h1>
                  <h2 className='text-center'>A website that adds new information on a regular basis is favoured by search engines. </h2>
                </div>
                <div className="item2 p-5 mx-4 mt-3 shadow-md   bg-purple-200 hover:bg-black text-white ">
                  <h1 className='text-center pb-2 text-2xl font-bold'>On-Page SEO</h1>
                  <h2 className='text-center'>It means aligning keywords with page-specific components such as title tags, headings, content, and internal links..</h2>
                </div>
                <div className="item3 p-5 mx-4 mt-3 shadow-xl bg-white">
                  <h1 className='text-center pb-2 text-2xl font-bold'>Off-page SEO</h1>
                  <h2 className='text-center'>Refers to measures made outside of your own website that have an impact on your search engine rankings.</h2>
                </div>
              </div>
            </div>
          </div>

          {/* Partnering with Digiphlox */}

          <div className="box">
            <div className="container mx-auto">
              <h1 className='text-center text-2xl font-bold text-deep-orange-500 '>Partnering with Digiphlox</h1>
              <h2 className='text-center text-2xl font-bold pb-8  '>for Expert Search Engine Optimization Services</h2>
            </div>
            <div className="item1 container mx-auto pb-8 grid grid-cols-1 lg:grid-cols-2 gap-10  ">
              <div className="left mx-auto">
                <img className=' h-80 ' src="https://media.istockphoto.com/id/891298018/photo/seo-search-engine-optimization.jpg?s=2048x2048&w=is&k=20&c=6NGDsoqcVwewD1edDx-ceYlvbxkm4kHCEmgRlNGKHO0=" alt="" />
                <span className=' hover:bg-deep-orange-600 text-white py-4 px-6 mx-3 lg:px-10 text-xl font-bold bg-blue-gray-800 relative bottom-[1em]  lg:bottom-[12em] lg:left-[8em]'>Expertise and Industry Knowledge</span>
              </div>
              <div className="right my-auto">
                <p className=' text-xl'>As a Haldwani-based SEO company, we understand the unique challenges and opportunities presented by the local market. Our team of experienced professionals stays updated with the latest SEO trends also they carry in-depth knowledge of the region to tailor strategies that resonate with your local audience.</p>
              </div>
            </div>

            <div className="item2 container mx-auto pb-8 grr grid grid-cols-1 lg:grid-cols-2 gap-10  ">
              <div className="right my-auto">
                <p className=' text-xl'>We offer free business strategies along with website optimization using SEO best practices, which can boost your website’s search engine ranking. This leads to increased visibility, attracts greater organic traffic, and enhances brand exposure to the right customers.</p>
              </div>
              <div className="left mx-auto">
                <img className=' h-80 w-full ' src="https://media.istockphoto.com/id/1316590670/photo/search-engine-optimization.jpg?s=2048x2048&w=is&k=20&c=zP_CmZuXHmdzR3wny1Gj-uI4A9g63JcO04iZ8HCOkcU=" alt="" />
                <span className=' hover:bg-deep-orange-600 text-white py-4 px-6 mx-3 lg:px-10 text-xl font-bold bg-blue-gray-800 relative bottom-[1em]  lg:bottom-[12em] lg:right-[8em]'>Improved Search Engine Rankings</span>
              </div>
            </div>

            <div className="item3 container mx-auto pb-8 grid grid-cols-1 lg:grid-cols-2 gap-10  ">
              <div className="left mx-auto">
                <img className=' h-80 w-full ' src="https://media.istockphoto.com/id/1383492383/vector/analyze-finance.jpg?s=612x612&w=0&k=20&c=vTu54_8Z0euSIbEE1vCFCdioFR-RmPcq6ACo9NnO-mw=" alt="" />
                <span className=' hover:bg-deep-orange-600 text-white py-4 px-6 mx-3 lg:px-10 text-xl font-bold bg-blue-gray-800 relative bottom-[1em]  lg:bottom-[12em] lg:left-[8em]'>Targeted Traffic and Higher Conversions</span>
              </div>
              <div className="right my-auto">
                <p className=' text-xl'>Keyword Research is the first thing one should do in SEO, so through our targeted keyword strategies and optimized content, we drive quality traffic to your website. </p>
              </div>
            </div>

            <div className="item4 container mx-auto pb-8 grr grid grid-cols-1 lg:grid-cols-2 gap-10  ">
              <div className="right my-auto">
                <p className=' text-xl'>SEO is a cost-effective long-term marketing strategy. Partnering with Digiphlox allows you to invest in sustainable organic growth, reducing your reliance on paid advertising and achieving higher ROI over time.</p>
              </div>
              <div className="left mx-auto">
                <img className=' h-80 w-full ' src="https://media.istockphoto.com/id/1324022653/photo/search-engine-optimization.jpg?s=612x612&w=0&k=20&c=6xmDkBsGDq3tUCQ9DYUd4SQpwV9eYQGhGi57ibIU0f8=" alt="" />
                <span className=' hover:bg-deep-orange-600 text-white py-4 px-6 mx-3 lg:px-10 text-xl font-bold bg-blue-gray-800 relative bottom-[1em]  lg:bottom-[12em] lg:right-[8em]'>Cost-Effective Marketing</span>
              </div>
            </div>

            <div className="item5 container mx-auto pb-8 grid grid-cols-1 lg:grid-cols-2 gap-10  ">
              <div className="left mx-auto">
                <img className=' h-80 w-full ' src="https://media.istockphoto.com/id/493210260/vector/modern-business-and-analytics-concept.jpg?s=612x612&w=0&k=20&c=-od_vVeVtZdTBIrsqGqXR3UWB1sgJNYagt8tWdootNs=" alt="" />
                <span className=' hover:bg-deep-orange-600 text-white py-4 px-6 mx-3 lg:px-10 text-xl font-bold bg-blue-gray-800 relative bottom-[1em]  lg:bottom-[12em] lg:left-[8em]'>Competitive Advantage</span>
              </div>
              <div className="right my-auto">
                <p className=' text-xl'>In competitive industries, SEO can provide a crucial competitive edge. Our SEO services help your business outrank competitors in search results, attracting more visibility and establishing your brand as an industry leader. </p>
              </div>
            </div>

            <div className="item6 container mx-auto pb-8 grr grid grid-cols-1 lg:grid-cols-2 gap-10  ">
              <div className="right my-auto">
                <p className=' text-xl'>SEO requires continuous effort, monitoring, and optimization. By partnering with Digiphlox, you can focus on your core operations while entrusting the technical aspects and ongoing SEO efforts to our experts.</p>
              </div>
              <div className="left mx-auto">
                <img className=' h-80 w-full ' src="https://media.istockphoto.com/id/1489578010/vector/logistics-transportation-cost.jpg?s=612x612&w=0&k=20&c=SJ6oTENFIBVKf0Ys2Cwq8OmjaZG8zQ3MBwFEvoaMg34=" alt="" />
                <span className=' hover:bg-deep-orange-600 text-white py-4 px-6 mx-3 lg:px-10 text-xl font-bold bg-blue-gray-800 relative bottom-[1em]  lg:bottom-[12em] lg:right-[8em]'>Time and Resource Savings</span>
              </div>
            </div>

            <div className="item5 container mx-auto pb-8 grid grid-cols-1 lg:grid-cols-2 gap-10  ">
              <div className="left mx-auto">
                <img className=' h-80 w-full ' src="https://media.istockphoto.com/id/493210260/vector/modern-business-and-analytics-concept.jpg?s=612x612&w=0&k=20&c=-od_vVeVtZdTBIrsqGqXR3UWB1sgJNYagt8tWdootNs=" alt="" />
                <span className=' hover:bg-deep-orange-600 text-white py-4 px-6 mx-3 lg:px-10 text-xl font-bold bg-blue-gray-800 relative bottom-[1em]  lg:bottom-[12em] lg:left-[8em]'>Data-Driven Decision Making</span>
              </div>
              <div className="right my-auto">
                <p className=' text-xl'>We provide detailed analytics and reporting on your SEO performance. These valuable insights into user behavior, keyword rankings, and website performance enable you to make data-driven decisions for further optimization and growth. </p>
              </div>
            </div>

          </div>
          <div className="box bg-gray-800 my-6">
            <h1 className='text-center text-xl font-bold py-4 text-white'>SEO Excellence for Haldwani Businesses – Inquire Now</h1>
          </div>
          {/* Search Engine Optimisation (SEO) SERVICES */}

          <div className="itets">
            <div className="container mx-auto px-3">
              <h1 className='text-deep-orange-400 text-center pb-8 text-2xl font-bold'>Search Engine Optimisation <span className='text-black'>(SEO) SERVICES</span></h1>
            </div>
            <div className="boxes grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pb-10">

              <div className="item1 m-3 bg-white shadow-md p-4">
                <h1 className='text-xl font-bold text-center text-deep-orange-500 pb-3'>Keyword Research and Analysis</h1>
                <p className='px-5 text-center'>We start with thorough keyword research to identify the most relevant and high-traffic keywords in your industry. This research informs our content creation and optimization strategies, enabling us to target specific search queries effectively.</p>
              </div>
              <div className="item2 m-3 bg-white shadow-md p-4">
                <h1 className='text-xl font-bold text-center text-deep-orange-500 pb-3'>On-Page Optimization</h1>
                <p className='px-5 text-center'>Our experts optimize various elements of your website, including page titles, meta descriptions, headings, URL structures, and internal linking. These optimizations improve your website’s relevancy, crawlability, and user experience, leading to better search engine rankings.</p>
              </div>
              <div className="item3 m-3 bg-white shadow-md p-4">
                <h1 className='text-xl font-bold text-center text-deep-orange-500 pb-3'>Technical SEO</h1>
                <p className='px-5 text-center'>We analyze and optimize the technical aspects of your website, such as site speed, mobile-friendliness, crawlability, and indexability. These optimizations ensure that search engines can efficiently crawl and index your website, resulting in improved search engine performance.</p>
              </div>
              <div className="item4 m-3 bg-white shadow-md p-4">
                <h1 className='text-xl font-bold text-center text-deep-orange-500 pb-3'>Content Development and Optimization</h1>
                <p className='px-5 text-center'>High-quality and engaging content is at the core of successful SEO. We assist businesses in creating optimized content that aligns with target keywords, provides value to users, and attracts organic traffic.</p>
              </div>
              <div className="item1 m-3 bg-white shadow-md p-4">
                <h1 className='text-xl font-bold text-center text-deep-orange-500 pb-3'>Link Building</h1>
                <p className='px-5 text-center'>Our link building strategies aim to enhance your website’s authority and credibility. We focus on acquiring high-quality backlinks from reputable sources, which not only improves search engine rankings but also drives valuable referral traffic.

                </p>
              </div>
              <div className="item1 m-3 bg-white shadow-md p-4">
                <h1 className='text-xl font-bold text-center text-deep-orange-500 pb-3'>Local SEO</h1>
                <p className='px-5 text-center'>For businesses targeting local customers, we optimize your online presence for local search results. This includes optimizing your Google My Business listing, managing online reviews, and building local citations to increase visibility in local searches.</p>
              </div>

            </div>
          </div>

          {/* WHY HAVE GOOD CONTENT? */}

          <div className="boxes my-5">
            <div className="container mx-auto bg-gray-100  gap-4 grid grid-cols-1 lg:grid-cols-2">
              <div className="left flex">
                <div className="img">
                  <img className='h-full' src="https://media.istockphoto.com/id/529542963/photo/business-education.jpg?s=612x612&w=0&k=20&c=SwBLHEhtMtDyO1gDqC3DGkteKprr1y1ohjRNwAp9NsE=" alt="" />
                </div>
                <div className="box">
                  <div className="item1 h-1/2 bg-deep-orange-400 text-white p-6">
                    <p className='text-center text-xl font-bold'>Precise</p>
                    <p>Our content writers always make sure of the preciseness of the content.  </p>
                  </div>
                  <div className="item2 h-1/2 bg-blue-gray-800 text-white p-6">
                    <p className='text-center text-xl font-bold'>Well Structured</p>
                    <p>We present our content as data, making it easily understandable to reader. </p>
                  </div>
                </div>
              </div>
              <div className="right px-3 py-4">
                <h3 className='  text-xl text-deep-orange-500 font-bold '>WHY HAVE GOOD CONTENT?</h3>
                <h1 className=' text-2xl font-black pb-5'>We know that good content will attract more visitors</h1>
                <p className='pb-3'>Sure, it’s easy to argue that you need good content, but what exactly does good content entail?</p>
                <p className='pb-3'>The ultimate definition of good quality content is writing that appeals to your readers on an emotional, intellectual, and value level while also allowing you to be found organically online on the SERPs. You need to use keyword and SEO data while also drawing the reader in and convincing them that you’re the real deal if you want to see real results from generating high-quality content.Good content is a combination of bo</p>
                <p className=' pb-6 '>Good content is a combination of both reader-friendly and search-engine-friendly elements.</p>

              </div>

            </div>
          </div>

          {/* video */}

          <div className="video">

            <div className="box grid grid-cols-1 lg:grid-cols-2 gap-6 my-12 lg:px-12">
            <div className="right mt-16 lg:mt-0 px-3  text-center my-auto">
                <h1 className=' text-center font-bold text-3xl'>SEO Services by DigiPhlox</h1>
                <h2 className='text-center text-deep-orange-400 font-bold text-xl'>SEO MAKES YOUR BRAND <span className='text-black'>MORE REASON-SPECIFIC</span></h2>
                <p className='  pt-5 font-semibold  text-balance'>DigiPhlox is your go-to digital marketing agency, bringing years of expertise to elevate your online presence through organic methods. Our SEO services at DigiPhlox go beyond keywords and rankings. We craft unique strategies – from meticulous keyword optimization to compelling content creation, ensuring your website doesn’t just get traffic but the right traffic.</p>                
              </div>
              <div className="left px-3">
              <iframe className=' lg:h-[20em] lg:w-[36em] w-full ' src="https://www.youtube.com/embed/zH8mbxFsfAA" title="SEO Services by DigiPhlox | Search Engine Optimization Service provider in Uttarakhand" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>                
              </div>             

            </div>
             <div className="box">
          <div className="box my-6  bg-deep-orange-400 flex flex-wrap md:justify-around justify-center items-center py-2">
            <div className="left">
              <h1 className='text-xl font-bold text-black text-center pb-8 md:pb-0'>Boost Rankings, Boost Revenue: Choose Haldwani's Premier SEO Solution
</h1>
            </div>
            <div className="right">
              <Link to={'/contactus'}><button className='text-deep-orange-500 bg-white px-6 py-2 cursor-pointer'>CLICK HERE</button></Link>
            </div>
          </div>
        </div>

          </div>
          {/* endvideo */}

          <GoogleRating/>
          
        </div>
      </div>
    </Layout>
  )
}

export default Seo

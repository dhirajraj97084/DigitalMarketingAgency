import React from 'react'
import Layout from '../../../components/layout/Layout'
import { Link } from 'react-router-dom'
import GoogleRating from '../../../components/heropages/googleRating/GoogleRating'

function ContentWriting() {
  return (
    <Layout>
      <div className="main">
        <img className='w-full h-[25em]' src="https://digiphlox.com/wp-content/uploads/2023/03/Understanding-the-Importance-Of-Content-Marketing-1.webp" alt="" />
      </div>
      {/* second */}
      <div className="box bg-gray-100">
        <div className="item2 container mx-auto pb-8 grr grid grid-cols-1 lg:grid-cols-2 gap-10 py-14 px-4  ">
          <div className="right my-auto">
            <h1 className=' text-deep-orange-500 font-bold'>INSPIRATION & CONTENT CREATION</h1>
            <h1 className='text-2xl font-black pb-3'>We help you come up with creative content so that you are successful in your niche</h1>
            <p className=' text-xl'>With Digiphlox’s SEO content writing services, you can create top-notch content that converts and draws more organic search traffic. At the backend, our content marketing agency takes care of keyword research, content strategy development, content production, and content marketing to help you reach out to untapped populations and establish a reputation in your niche market.</p>
            <div className="items">
              <div className=' border-b-4 mt-3 border-deep-orange-800 text-xl font-black bg-white rounded-md text-center shadow-md py-12 mx-3 lg:px-8  relative '>Precision in Words, Power in Message.</div>
              <div className=' border-b-4 mt-3 border-deep-orange-800 text-sm font-black bg-white rounded-md text-center shadow-md py-12 mx-3 lg:px-8 px-3 relative   '>Top-notch agencies and marketers opt for Digiphlox to ensure the delivery of high-quality content on a large scale..</div>
            </div>
          </div>
          <div className="left mx-auto">
            <img className=' ' src="https://digiphlox.com/wp-content/uploads/elementor/thumbs/laptop-desk-notebook-computer-macbook-writing-764432-pxhere.com_-pkeqdk2urfqhrt5pdtyju9pytzuegdeiao8dqbnf9s.jpg" alt="" />

          </div>
        </div>
      </div>
      {/* thied */}
      <div className="box">
        <div className="box  bg-blue-gray-700 flex flex-wrap md:justify-around justify-center items-center py-8 px-4 lg:py-8">
          <div className="left">
            <h1 className='text-xl font-bold text-white text-center pb-3 md:pb-0'>So, ready to take your idea to a new level? </h1>
            <p className='text-white pb-4  font-bold text-balance'>level? We know the importance of a good Content, so we are here to take your product to your right customer with our content writing skills.</p>
          </div>
          <div className="right">
            <Link to={'/contactus'}><button className='text-deep-orange-500 bg-white px-6 py-2 hover:bg-transparent hover:border border-gray-100 hover:text-white  cursor-pointer'>GET QUOTE</button></Link>
          </div>
        </div>
      </div>
      {/* forth */}
      <div className="box bg-gray-100">
        <div className="item2 container mx-auto pb-8 grr grid grid-cols-1 lg:grid-cols-2 gap-10 py-14 px-4  ">
          <div className="right my-auto">
            <h1 className=' text-deep-orange-500 text-sm pb-4 font-bold'>WE DON'T JUST PROMISE – WE DELIVER</h1>
            <h1 className='text-2xl font-bold text-deep-orange-500 pb-3'>Why Choose Digiphlox for SEO Content Writing?</h1>
            <p className=' text-xl'>Our content strategy team  manages the development and execution of content management strategies for small businesses, corporations, multi-location firms, and major franchises.</p>

          </div>
          <div className="left mx-auto">
            <img className=' ' src="https://images.pexels.com/photos/2041627/pexels-photo-2041627.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />

          </div>
        </div>
      </div>
      {/* .sixboes */}
      <div className="itets py-6 bg-gray-100">
        <div className="container mx-auto px-3">
          <h1 className=' text-deep-orange-400 text-center pb-1 text-2xl font-bold'>We don't just promise – we deliver</h1>
          <h1 className=' text-center pb-3 text-xl font-bold text-deep-orange-400'>Here's what sets us apart</h1>
        </div>
        <div className="boxes grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pb-10">

          <div className="item1 m-3 bg-white shadow-md p-4">
            <h1 className='text-xl font-bold text-center text-deep-orange-500 pb-3'>Well Researched</h1>
            <p className='px-5 text-center'>Having a Solid content strategy is important before starting to write. We ensure proper research is conducted for our content services.

            </p>
          </div>
          <div className="item2 m-3 bg-white shadow-md p-4">
            <h1 className='text-xl font-bold text-center text-deep-orange-500 pb-3'>Quality Content</h1>
            <p className='px-5 text-center'>Our team ensures each piece is crafted with precision, delivering content that resonates with your brand's voice.
            </p>
          </div>
          <div className="item3 m-3 bg-white shadow-md p-4">
            <h1 className='text-xl font-bold text-center text-deep-orange-500 pb-3'>Plagiarism-Proof</h1>
            <p className='px-5 text-center'>Originality isn't an option; it's a necessity. Say goodbye to copied content– we provide 100% unique and valuable content as per your needs.</p>
          </div>
          <div className="item4 m-3 bg-white shadow-md p-4">
            <h1 className='text-xl font-bold text-center text-deep-orange-500 pb-3'>SEO Keyword Research</h1>
            <p className='px-5 text-center'>Our content writers collaborate closely with SEO experts. Elevate your online presence with strategically chosen keywords, ensuring your content resonates with your audience and ranks high on search engines.</p>
          </div>
          <div className="item1 m-3 bg-white shadow-md p-4">
            <h1 className='text-xl font-bold text-center text-deep-orange-500 pb-3'>Completely managed</h1>
            <p className='px-5 text-center'>There's no need for you to oversee writers and their assignments when you opt for our fully managed content writing services. Concentrate on your other works, and leave the content creation to us.
            </p>
          </div>
          <div className="item1 m-3 bg-white shadow-md p-4">
            <h1 className='text-xl font-bold text-center text-deep-orange-500 pb-3'>On-time delivery</h1>
            <p className='px-5 text-center'>We provide on-time delivery for our content writing services. Experience the assurance of receiving your content promptly, without compromising on quality.

            </p>
          </div>
        </div>
      </div>
      {/* thied */}
      <div className="box">
        <div className="box  bg-blue-gray-700 flex flex-wrap md:justify-around justify-center items-center py-8 px-4 lg:py-8">
          <div className="left">
            <h1 className='lg:text-3xl text-xl  font-bold text-white text-center pb-3 '>Transforming Lengthy Descriptions into Captivating Narratives</h1>
            <p className='text-white pb-4 text-center  font-bold text-balance'>Digiphlox – Your Trusted Digital Partner in Content Writing Services.</p>
          </div>
          <div className="right">
            <Link to={'/contactus'}><button className='text-deep-orange-500 bg-white px-6 py-2 hover:bg-transparent hover:border border-gray-100 hover:text-white  cursor-pointer'>GET QUOTE</button></Link>
          </div>
        </div>
      </div>
      {/* .sixboes */}
      <div className="itets py-6 bg-gray-100">
        <div className="container mx-auto px-3">
          <h1 className=' text-deep-orange-400 text-center pb-1 text-2xl font-bold'>We don't just promise – we deliver</h1>
          <h1 className=' text-center pb-3 text-xl font-bold text-deep-orange-400'>Here's what sets us apart</h1>
        </div>
        <div className="boxes container mx-auto px-4  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pb-10 pt-8 lg:px-32">

          <div className="item1 hover:bg-blue-gray-600  bg-deep-orange-500 text-white shadow-md p-4">
            <h1 className='text-xl font-bold text-center   pb-3'>Seo Content writing</h1>
            <p className='px-5 text-center'>Keyword-based writing that Search engines will love! From product descriptions to meta content, we optimize every aspect for maximum visibility.

            </p>
          </div>
          <div className="item2  bg-white shadow-md p-4">
            <h1 className='text-xl font-bold text-center text-deep-orange-500 pb-3'>Blog writing service</h1>
            <p className='px-5 text-center'>Engage your audience with informative and polished blog posts. We cover a range of topics, ensuring your brand remains relevant and authoritative.
            </p>
          </div>
          <div className="item3  hover:bg-blue-gray-600  bg-deep-orange-500 text-white shadow-md p-4">
            <h1 className='text-xl font-bold text-center  pb-3'>Website content writing</h1>
            <p className='px-5 text-center'>From homepage brilliance to insightful About Us pages, we craft content that not only informs but also resonates with your audience..</p>
          </div>
          <div className="item4  bg-white shadow-md p-4">
            <h1 className='text-xl font-bold text-center text-deep-orange-500 pb-3'>Copywriting</h1>
            <p className='px-5 text-center'>We are experts in crafting persuasive product descriptions, attention-grabbing headlines, or compelling calls to action.</p>
          </div>
          <div className="item5 hover:bg-blue-gray-600   bg-deep-orange-500 text-white shadow-md p-4">
            <h1 className='text-xl font-bold text-center pb-3'>Technical Writing</h1>
            <p className='px-5 text-center'>From user manuals and product guides to detailed technical specifications, we ensure that your technical information is communicated seamlessly.
            </p>
          </div>
          <div className="item1  bg-white shadow-md p-4">
            <h1 className='text-xl font-bold text-center text-deep-orange-500 pb-3'>Social Media Content</h1>
            <p className='px-5 text-center'>Foster meaningful connections on social platforms with our Stunning captions and expertly crafted social media content. Boost engagement and build a loyal online community.

            </p>
          </div>
        </div>
      </div>
      {/* Skillful Writing */}
      <div className="boexes px-3 container mx-auto py-6">
           <h1 className=' text-3xl pb-6 text-center font-black'>Skillful Writing</h1>
        <div className="sub_box">
             <div className="item1 lg:flex justify-center ">
              <h1 className=' lg:px-3 text-center font-bold py-4 bg-deep-orange-400'>Research</h1>
              <h1 className=' lg:px-3 text-center font-bold py-4 bg-blue-gray-700 text-white'>Planning and Outlining</h1>
              <h1 className=' lg:px-3 text-center font-bold py-4 bg-deep-orange-400'>Editing</h1>
              <h1 className=' lg:px-3 text-center font-bold py-4 bg-blue-gray-700 text-white'>Revising</h1>
              <h1 className=' lg:px-3 text-center font-bold py-4 bg-deep-orange-400'>Spelling and Grammar</h1>
              <h1 className=' lg:px-3 text-center font-bold py-4 bg-blue-gray-700 text-white'>Organization</h1>
             </div>
        </div>
      </div>
      {/* video */}
      <div className="video">
          <div className="box grid grid-cols-1 lg:grid-cols-2 gap-6 my-12 lg:px-12">
          <div className="left px-3 my-auto">
            <iframe className=' h-[20em] lg:w-[36em] w-full ' src="https://www.youtube.com/embed/Ge9SxclmM3w" title="Content Writing Services for Website, Blog, Article, Product Description in Haldwani" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>                        
            </div>
            <div className="right my-auto px-3  text-center ">
              <h1 className=' text-center font-bold text-3xl'>Professional Content Writing Services</h1>             
              <p className='  pt-5 font-semibold  text-balance'>Whether you need blog posts, website content, social media updates, product descriptions, or any other form of written content, we have the expertise to deliver. Contact us today to discuss your content requirements. We offer competitive rates and a commitment to quality that sets us apart.</p>                            
            </div>
            
          </div>
        </div>
        <GoogleRating/>

    </Layout>
  )
}

export default ContentWriting

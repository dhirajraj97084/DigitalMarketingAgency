import React from 'react'
import Layout from '../../../components/layout/Layout'
import { Link } from 'react-router-dom'
import Faq from './Faq'
import GoogleRating from '../../../components/heropages/googleRating/GoogleRating'



function GraphicDesign() {
  return (
    <Layout>
      <div className="main">
        <img className='w-full h-[25em]' src="img/15_11zon.jpg" alt="" />

        <div className="graphicdesign bg-gray-200 grid grid-cols-1 md:grid-cols-2 py-12 px-4 md:px-6 lg:px-14">
          <div className="left my-auto">
            <img src="https://digiphlox.com/wp-content/uploads/2024/01/pngwing.com-9.png" alt="" />
          </div>
          <div className="right my-auto py-8">
            <h1 className='font-black md:text-3xl text-2xl pb-3 '>Best Graphic Designing company in Uttarakhand</h1>
            <p className='text-xl pb-3'>Welcome to the top graphic designing company in Uttarakhand. We are a team of skilled and dedicated designers who are dedicated to providing our clients with top-notch graphic design solutions.</p>
            <div className="box container mx-auto  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
              <h1 className='m-2 px-5 py-3 bg-white'>
                Logo Designing
              </h1>
              <h1 className='m-2 px-5 py-3 bg-white'>Branding</h1>
              <h1 className='m-2 px-5 py-3 bg-white'>Creatives</h1>
              <h1 className='m-2 px-5 py-3 bg-white'>Ad Creatives</h1>
              <h1 className='m-2 px-5 py-3 bg-white'>Infographics</h1>
              <h1 className='m-2 px-5 py-3 bg-white'>VideoAd</h1>
            </div>
            <Link to={'/about'}><button className='px-6 text-white rounded-md my-3 py-2 bg-deep-orange-400 '>About Us</button></Link>
          </div>
        </div>

        <div className="box  px-3 md:px-6 lg:px-12 gap-6  grid grid-cols-1 lg:grid-cols-2 ">
          <div className="left my-auto">
            <h1 className='pt-3  text-xl  text-deep-orange-500 '>BUILD BRAND</h1>
            <h1 className='text-2xl md:text-3xl font-black'>Identify your brand or product through a professional graphic design services</h1>
            <p className=' pt-4'>In today’s competitive business landscape, it’s essential for companies to establish a strong brand identity that distinguishes them from their competitors. One of the most effective ways to achieve this is through professional graphic design services.</p>
            <p className='pt-4'>DigiPhlox’s graphic design services are designed to help clients stand out in a crowded marketplace and establish a strong and memorable brand identity..</p>
            <p className='pt-4'>Our team of experienced designers and commitment to high-quality results make them a great choice for any business or organization in need of professional design services.</p>
            <Link to={'/contactus'}>
              <button className='px-6 py-2 my-4 bg-deep-orange-500 text-white hover:bg-deep-orange-700'>CONTACT US</button>
            </Link>
          </div>

          <div className="right pt-6 ">
            <img className='lg:h-[30em] lg:w-full ' src="https://digiphlox.com/wp-content/uploads/elementor/thumbs/retouching-specialist-working-on-graphic-project-a-2022-01-19-00-09-47-utc-1-qgegnexmzybdhfx5534acj5njp8wckpc4uvh5j7fq0.webp" alt="" />
            <div className="mainbox grid grid-cols-1 lg:grid-cols-2 gap-3">
              <div className="box bg-deep-orange-400 py-4 px-4 lg:relative bottom-[10em] right-10 text-white">
                <h1 className='text-xl font-bold text-balance pb-3'>A good brand helps you bring more customers</h1>
                <p className='text-lg text-balance'>Make your marketing campaign stand out with striking visuals designed by us</p>
              </div>
              <div className="box bg-teal-500 py-4 px-4 lg:relative bottom-[5em] right-5  text-white">
                <h1 className='text-xl font-bold text-balance pb-3'>Transforming Your Ideas into Eye-Catching Designs with Digiphlox</h1>
                <p className='text-lg text-balance'>Make Your Company Stick Out With Outstanding Graphic Design</p>
              </div>
            </div>

          </div>
        </div>
        <div className="box ">
          <div className="box  bg-blue-gray-700 flex flex-wrap md:justify-around justify-center items-center py-8 px-4 lg:py-8">
            <div className="left">
              <h1 className=' text-xl  font-bold text-white text-center pb-3'>Identify your brand through attractive Brand Design</h1>
              <h1 className='text-white text-center pb-3'>We understand the value of a well-designed layout, and we’re here to help you get your product in front of the right people.</h1>
            </div>
            <div className="right">
              <Link to={'/contactus'}><button className='text-deep-orange-500 bg-white px-6 py-2 hover:bg-transparent hover:border border-gray-100 hover:text-white  cursor-pointer'>GET IN TOUCH</button></Link>
            </div>
          </div>
        </div>

        <div className="BOXES">
          <div className="itets  bg-gray-100">
            <div className="container mx-auto px-3">
              
              <h1 className=' text-deep-orange-400 text-center pt-6 font-black text-2xl '>Our Graphic Designing Services</h1>
              <h1 className='  font-black text-xl text-center pt-4 pb-7 '> We Are The Best Graphic Design Service Provider In Uttarakhand</h1>

            </div>
            <div className="boxes container mx-auto  grid  grid-cols-1  md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 pb-10 px-4 md:px-8">

              <div className="item1 m-3 bg-white shadow-md ">
              <img src="https://digiphlox.com/wp-content/uploads/2024/01/1.webp" alt="" />
                <h1 className='text-xl font-bold text-center text-deep-orange-500 pb-3'>Logo Designing</h1>
                <p className='px-5 text-center'>Logos play a vital role in marketing and communication strategies. They communicate the nature of a business, its industry, and its values without the need for extensive text.</p>
              </div>
              <div className="item2 m-3 bg-white shadow-md ">
                <img src="https://digiphlox.com/wp-content/uploads/2024/01/2.webp" alt="" />
                <h1 className='text-xl font-bold text-center text-deep-orange-500 pb-3'>Branding </h1>
                <p className='px-5 text-center'>Obtain the expertise your brand deserves. From initial brand development to personalized branding solutions, We deliver the customized brand solutions you need.
                </p>
              </div>
              <div className="item3 m-3 bg-white shadow-md ">
                <img src="https://digiphlox.com/wp-content/uploads/2024/01/image-resizing-digiphlox-.webp" alt="" />
                <h1 className='text-xl font-bold text-center text-deep-orange-500 pb-3'>Brochure Designing</h1>
                <p className='px-5 text-center'>Make your brochure with key messages and clarity, that not only captures attention but also convey the main information to the audience.</p>
              </div>
              <div className="item4 m-3 bg-white shadow-md ">
                <img src="https://digiphlox.com/wp-content/uploads/2024/01/5-2.webp" alt="" />
                <h1 className='text-xl font-bold text-center text-deep-orange-500 pb-3'>Social Media Creative</h1>
                <p className='px-5 text-center'>Social media creative services involve designing engaging visuals for various social media platforms. These graphics include images and banners. </p>
              </div>
              <div className="item1 m-3 bg-white shadow-md ">
                <img src="https://digiphlox.com/wp-content/uploads/2024/01/11-5.webp" alt="" />
                <h1 className='text-xl font-bold text-center text-deep-orange-500 pb-3'>Ad Creatives</h1>
                <p className='px-5 text-center'> Create high-performing ads by opting for our graphic designing service. Let’s make your ad more engaging and powerful using our designing skills.</p>
              </div>
              <div className="item1 m-3 bg-white shadow-md">
                <img src="https://digiphlox.com/wp-content/uploads/2024/01/6-1.webp" alt="" />
                <h1 className='text-xl font-bold text-center text-deep-orange-500 pb-3'>Infographics</h1>
                <p className='px-5 text-center'>Infographics communicate complex information in simpler ways using illustrations, charts, and concise text, infographics simplify data, making it easier for the audience to understand the information.
                </p>
              </div>
              <div className="item1 m-3 bg-white shadow-md ">
                <img src="https://digiphlox.com/wp-content/uploads/2024/01/7-1.webp" alt="" />
                <h1 className='text-xl font-bold text-center text-deep-orange-500 pb-3'>Motion Design</h1>
                <p className='px-5 text-center'>Bring your brand to life with Digiphlox’s dynamic motion design services. We create visually stunning animations and videos that your audience will love. 

 
                </p>
              </div>
              <div className="item1 m-3 bg-white shadow-md ">
                <img src="https://digiphlox.com/wp-content/uploads/2024/01/10.webp" alt="" />
                <h1 className='text-xl font-bold text-center text-deep-orange-500 pb-3'> Packaging Designing</h1>
                <p className='px-5 text-center'>We create packaging that not only looks appealing on the shelf but also effectively communicates your brand and product to others.
                </p>
              </div>
            </div>
          </div>
          <div className="container mx-auto">
         <div className="video">
          <h1 className=' px-3 flex justify-center my-4 font-black text-2xl'>You Name It, We've Designed It</h1>
          <p className=' px-3 text-center'>Digiphlox is a premium graphic design agency in Uttarakhand. We have a team of experienced creative designers who are experts at creating all kinds of designs to help your business succeed.</p>
          <div className="box grid grid-cols-1 md:grid-cols-2 gap-6 my-12 lg:px-12">
          <div className="left px-3 my-auto">
          <iframe  className=' h-[20em] lg:w-[36em] w-full ' src="https://www.youtube.com/embed/2ueDr5_LCOk" title="Graphic Designing Services in Uttarakhand | Logo Designer, Brouchure designing by DigiPhlox" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>                               
            </div>
            <div className="right my-auto px-3  text-center ">
              <h1 className=' text-center font-bold text-xl '>Introducing our graphic designing service – where creativity meets communication</h1>             
              <p className='  pt-5 font-semibold '>Our team of skilled designers is here to bring your ideas to life with stunning visuals that captivate and inspire. Whether you need eye-catching logos, striking social media posts, or professional marketing materials, we’ve got you covered. From concept to creation, we work closely with you to understand your vision and deliver designs that resonate with your audience.</p>                            
            </div>
            
          </div>
        </div>
         </div>
         {/* faq_sections */}
         <div className="faq container mx-auto grid grid-cols-1 md:grid-cols-2 lg:py-16 md:py-12 py-6">
         <div className="right_faq">
            <Faq/>
          </div>
          <div className="left">
            <img className='w-full h-full' src="https://digiphlox.com/wp-content/uploads/2024/01/graphic-design.jpg" alt="" />
          </div>
          
         </div>
        </div>

      </div>
      <GoogleRating/>
    </Layout>
  )
}

export default GraphicDesign

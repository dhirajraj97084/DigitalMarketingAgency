import React from 'react'
import Layout from '../../../components/layout/Layout'
import { Link } from 'react-router-dom'
import GoogleRating from '../../../components/heropages/googleRating/GoogleRating'


function WebsiteDesign() {
  return (
    <Layout>
      <div className="box">
        <img className='md:h-auto h-[26em]' src="img/web.jpg" alt="" />
      </div>
      <div className="container mx-auto px-3">
        <h1 className='pt-3  text-xl  '>Website Design Company</h1>
        <p className=' text-balance font-bold py-8'>A good web design ensures that your website effectively communicates its purpose, engages visitors, and provides a good user experience. Digiphlox is one of the best website design company in Uttarakhand.</p>
        <h1 className='pb-3 text-xl text-deep-orange-400  '>Website Design Company | Uttarakhand | Haldwani</h1>
        <h2 className='text-bold text-balance text-xl font-semibold'>We at Digiphlox Company, specialise in creating beautiful and responsive web designs which are loved by your visitors and are technically perfect the way Google wants.</h2>
      </div>
      <div className="box container mx-auto px-3  grid grid-cols-1 lg:grid-cols-2 ">
        <div className="left my-auto">
          <h1 className='py-3  text-xl  text-deep-orange-500 '>BUILD WEBSITE</h1>
          <p className=' text-balance font-bold pt-4'>Developing a digital presence means more than just creating a website and waiting for clients to come to you. Your company’s online foundation is your website. It’s your main point of contact with customers and a conversion machine. As a result, you must make sure it ranks well in search engines, stands out from the competitors, and is relevant to the goals of your visitors.</p>
          <p className=' text-balance font-bold py-4'>Invest in responsive web development & designing to increase your brand’s trust and confidence. Our web design firm offers SEO-friendly web design services with the goal of improving your search engine rankings, increasing your online exposure, and converting website visitors into paying clients.</p>
          <Link to={'/contactus'}>
            <button className='px-6 py-2 bg-deep-orange-500 text-white hover:bg-deep-orange-700'>CONTACT US</button>
          </Link>
        </div>
        <div className="right pt-6 ">
          <img className='lg:h-[30em] lg:w-full' src="https://digiphlox.com/wp-content/uploads/elementor/thumbs/web-design-website-coding-concept-min-pk1yb3lv13duoje4c7v7rzfbf17r8i6sh1mwo3hjyw.jpg" alt="" />
          <div className="mainbox grid grid-cols-1 lg:grid-cols-2 gap-3">
            <div className="box bg-deep-orange-400 py-4 px-4 lg:relative bottom-[10em] right-10 text-white">
              <h1 className='text-xl font-bold text-balance pb-3'>A good brand helps you bring more customers</h1>
              <p className='text-lg text-balance'>A well-optimized website improves its internet exposure and attracts the proper visitors.</p>
            </div>
            <div className="box bg-teal-500 py-4 px-4 lg:relative bottom-[5em] right-5  text-white">
              <h1 className='text-xl font-bold text-balance pb-3'>A good brand helps you bring more customers</h1>
              <p className='text-lg text-balance'>A well-optimized website improves its internet exposure and attracts the proper visitors.</p>
            </div>
          </div>

        </div>
      </div>
      <div className="gettouch bg-deep-orange-500 py-8 my-6  px-4 lg:flex justify-around items-center">
        <div className="text">
          <h1 className='text-2xl font-semibold  text-center lg:text-start text-white'>Identify your brand through attractive website design</h1>
          <p className=' py-3 text-balance text-center lg:text-start text-white'>We understand the value of a well-designed layout, and we’re here to help you get your product in front of the right people.</p>
        </div>
        <div className="button">
          <Link to={'/contactus'}>
            <button className='w-full lg:w-36  hover:text-white py-2 bg-white text-deep-orange-400 hover:bg-transparent hover:border-2 border-white'>GET IN TOUCH</button>
          </Link>
        </div>
      </div>

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2">
        <div className="left py-5 bg-gray-100 ">
          <h1 className='text-2xl font-bold  flex flex-col text-center  '>35 <span>New Websites</span> </h1>
          <h1 className='text-2xl font-bold  flex flex-col text-center '>28 <span>New Websites</span> </h1>
        </div>
        <div className="right">
          <img src="https://digiphlox.com/wp-content/uploads/2020/01/why-choose-us-1.jpg" alt="" />
        </div>
      </div>

      <div className="mainbox grid grid-cols-1 lg:grid-cols-2">
        <div className="box bg-deep-orange-500">
          <div className="container mx-auto px-3 py-8  ">
            <h1 className=' lg:text-xl font-bold text-white lg:text-balance text-center pb-4'>WE PROVIDE FULLY RESPONSIVE WEBSITE FOR EVERY BUSINESS</h1>
            <h2 className='text-xl lg:text-2xl font-bold text-white lg:text-balance text-center pb-4'>Why Your Business Needs Responsive Web Design?</h2>
            <p className='text-center  lg:text-balance text-white pb-2'>There are many various screen sizes available across devices. As a result, your website’s design must adapt to any screen size. Also, Search engines like Google prioritize mobile-friendly websites in their rankings. </p>
            <p className='text-white text-center  '>To make your business stay competitive and have a broader reach it’s essential to have a responsive web design.</p>
          </div>
        </div>
        <div className="right">
          <div className="box bg-cyan-900 h-full">
            <div className="container mx-auto px-3 py-8  ">
              <h1 className='text-2xl font-bold text-white lg:text-balance text-center pb-4'>Your Custom Website</h1>
              <h2 className=' text-white lg:text-balance text-center pb-4'>Quality website design doesn’t have to come with an expensive price tag. We offer competitive and transparent pricing, making professional website design accessible to businesses of all sizes.</h2>
              <p className='text-center  lg:text-balance text-white pb-2'>Feel free to contact us today to discuss your requirements and get a quote for your project.  </p>

            </div>
          </div>
        </div>
      </div>
      {/* website desing and developing company */}

      <div className="container mx-auto ">
        <h1 className='text-2xl font-bold text-center py-2 '>Website Design And Development Company</h1>
        <p className='text-xl text-center text-deep-orange-500 pb-3 font-bold'> Our Web Services In Detail-</p>
        <div className="box py-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <div className="box1 bg-deep-orange-400 hover:bg-cyan-800 px-3 text-white py-4">
            <h1 className='pb-4 text-center'>Dynamic Web Development</h1>
            <div className="border p-2">
              <p>Our dynamic web development services are customized to create interactive and engaging websites. We utilize cutting-edge technologies to build websites that adapt to user behavior, providing a seamless experience across various devices. </p>
            </div>
          </div>
          <div className="box2  px-3  py-4">
            <h1 className='pb-4 text-center'>Ecommerce Website Development</h1>
            <div className=" p-2">
              <p>Our e-commerce website development services focus on creating secure, scalable, and user-friendly online stores. From product listings to payment gateways, we ensure every aspect of your e-commerce website is optimized for maximum sales and customer satisfaction.</p>
            </div>
          </div>

          <div className="box3  px-3 text-white py-4 bg-deep-orange-500 hover:bg-cyan-700">
            <h1 className='pb-4 text-center'>CMS Website</h1>
            <div className="border p-2">
              <p>Content Management Systems (CMS) empower businesses to manage their website content effortlessly. We specialize in creating customized CMS websites that allow you to update text, images, and multimedia content without technical expertise.</p>
            </div>
          </div>

          <div className="box4  px-3  py-4">
            <h1 className='pb-4 text-center'>Website Redesign</h1>
            <div className=" p-2">
              <p>Is your existing website not delivering the desired results? We craft stunning, custom websites that reflect your brand identity. We analyze your current website, identify areas for improvement, and revamp its design and functionality.</p>
            </div>
          </div>

        </div>
        <div className="box my-6 bg-blue-gray-700 flex flex-wrap md:justify-around justify-center items-center py-2">
          <div className="left">
            <h1 className='text-xl font-bold text-white text-center pb-8 md:pb-0'>Get in Touch with the Best Website Designing Agency in Uttarakhand</h1>
          </div>
          <div className="right">
            <Link to={'/contactus'}><button className='text-deep-orange-500 bg-white px-6 py-2 cursor-pointer'>CLICK HERE</button></Link>
          </div>
        </div>

        {/* vedioSection */}

        <div className="box grid grid-cols-1 lg:grid-cols-2 gap-6 my-12">
          <div className="left px-3">
          <iframe className=' lg:h-[20em] lg:w-[36em] w-full '  src="https://www.youtube.com/embed/34Eill4EEeQ" title="DigiPhlox Kumaoni Ad - Website Development, 360 Degree Digital Marketing with DigiPhlox" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
          <div className="right mt-16 lg:mt-0 px-3  text-center">
            <h1 className=' text-center font-bold text-3xl'>360° Digital Marketing</h1>
            <p className='text-xl  pt-5 font-semibold text-start text-balance'>Whether you need a new website or want to revamp your existing one, Digiphlox is the name you trust. As the Best Website Design Company In Uttarakhand (Haldwani), we prioritize customer satisfaction and deliver results that exceed expectations.</p>
          </div>
        </div>
      </div>

      <GoogleRating/>
   
    </Layout>
  )
}

export default WebsiteDesign

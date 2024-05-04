import React from 'react'
import Layout from '../../../components/layout/Layout'
import { Link } from 'react-router-dom'

function WebsiteDesign() {
  return (
    <Layout>
      <div className="box">
        <img className='w-full h-[25em]' src="https://digiphlox.com/wp-content/uploads/2023/08/Add-a-heading-94.webp" alt="" />
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
             <h1  className='text-2xl font-bold  flex flex-col text-center  '>35 <span>New Websites</span> </h1>
             <h1  className='text-2xl font-bold  flex flex-col text-center '>28 <span>New Websites</span> </h1>
         </div>
         <div className="right">
          <img src="https://digiphlox.com/wp-content/uploads/2020/01/why-choose-us-1.jpg" alt="" />
         </div>
       </div>
      
    </Layout>
  )
}

export default WebsiteDesign

import React from 'react'
import Layout from '../../components/layout/Layout'
import { IoMdArrowDropright } from "react-icons/io";
import { Link } from 'react-router-dom';
import GoogleRating from '../../components/heropages/googleRating/GoogleRating';
const items = [
    {
        no: "01.",
        tital: "Discover",
        p: "Our journey begins with a deep dive into understanding your business and targeted audience. We make insights that will shape your digital strategy."
    },
    {
        no: "02.",
        tital: "Define",
        p: "We work closely with you to establish clear, measurable objectives. Based on the defined goals, we create a customized digital marketing strategy. This includes selecting the right digital channels (e.g., SEO, social media, email), determining budgets, and setting timelines.."
    },
    {
        no: "03.",
        tital: "Design",
        p: "We focus on designing or optimizing your website to provide a seamless user experience. Content is king in digital marketing and we have expertise in creating high-quality, relevant content such as blog posts, videos, infographics, and more to engage your audience and address their needs."
    },
    {
        no: "04.",
        tital: "Develop",
        p: "With strategies in place, we put our plans into action. Our team of professionals develops and executes the marketing campaigns, websites, content, and ads that will drive your        success."
    },
    {
        no: "05.",
        tital: "Deploy",
        p: "We launch your campaigns across various digital channels. For you, this is when things start to get real. We’ll set up a live version of your solution so you can see how it works."
    },
    {
        no: "06.",
        tital: "Deliver",
        p: "The final ‘D’ is all about delivering results and optimizing for ongoing success. We will only deliver you the keys once we are confident that you are pleased with your new solution."
    },
]

function AboutPage() {
    return (
        <Layout>
            <div className=" bg-gray-100/75">
                <div className="main  flex justify-center items-center h-[30em]">
                    <div className="text">
                        <h1 className='lg:text-5xl px-2 md:text-4xl text-3xl font-serif text-center text-deep-orange-700 '>About Us
                        </h1>
                        <h2 className='lg:text-4xl px-2 md:text-4xl text-3xl font-serif text-center text-black/90 py-2'>Welcome to Digiphlox <br /> Your Trusted Partner for Digital Excellence in Uttarakhand!</h2>
                        <p className=' px-2 text-xl font-serif text-center text-black/80 pt-3'>At Digiphlox, we are more than just a digital marketing agency; we are your strategic ally in <br />
                            navigating the dynamic and ever-evolving digital landscape. With a passion for innovation</p>
                    </div>
                </div>
                <div className="container mx-auto">
                    <div className="boxes grid grid-cols-1 lg:grid-cols-3">
                        <div className="item1 bg-white m-4 px-4 shadow-md py-6 ">
                            <h1 className='w-20 bg-deep-orange-500 h-2 my-2'></h1>
                            <h2 className='text-2xl font-bold pb-3 '>Who Are We</h2>
                            <h3 className='text-balance'> <span className='text-deep-orange-500 text-xl'>Digiphlox</span>  is a digital marketing agency that offers a broad range of services. We offere a wide range of services to clients in a variety of industries.  We also provide professional web design and development services for both B2B and eCommerce businesses.</h3>
                        </div>
                        <div className="item2 bg-white m-4 px-4 shadow-md py-6 ">
                            <h1 className='w-20 bg-deep-orange-500 h-2 my-2'></h1>
                            <h2 className='text-2xl font-bold pb-3 '>Our Mission</h2>
                            <h3 className='text-balance'> Many marketing organizations make it a point to maintain a customer-centric emphasis, but only a handful truly do so. Digiphlox stands out as an overall digital marketing firm. </h3>
                        </div>
                        <div className="item3 bg-white m-4 px-4 shadow-md py-6 ">
                            <h1 className='w-20 bg-deep-orange-500 h-2 my-2'></h1>
                            <h2 className='text-2xl font-bold pb-3 '>What We Do</h2>
                            <div className="icons flex gap-1 items-center pt-1">
                                <h1><IoMdArrowDropright className='text-2xl text-deep-orange-400' /></h1>
                                <Link className='/seo'><h1 className='text-deep-orange-400'>SEO</h1></Link>
                            </div>
                            <div className="icons flex gap-1 items-center pt-2">
                                <h1><IoMdArrowDropright className='text-2xl ' /></h1>
                                <Link className='/wesitedesign'><h1 className=''>Website Development</h1></Link>
                            </div>
                            <div className="icons flex gap-1 items-center pt-2">
                                <h1><IoMdArrowDropright className='text-2xl text-deep-orange-400' /></h1>
                                <Link className='/socialmedia'><h1 className='text-deep-orange-400'>Social Media Marketing</h1></Link>
                            </div>
                            <div className="icons flex gap-1 items-center pt-2">
                                <h1><IoMdArrowDropright className='text-2xl ' /></h1>
                                <Link className='/payperclick'><h1 className=''>Pay Per Click - PPC</h1></Link>
                            </div>
                            <div className="icons flex gap-1 items-center pt-2">
                                <h1><IoMdArrowDropright className='text-2xl ' /></h1>
                                <Link className='/contentwriting'><h1 className=''>Content Writing</h1></Link>
                            </div>
                            <div className="icons flex gap-1 items-center pt-2">
                                <h1><IoMdArrowDropright className='text-2xl ' /></h1>
                                <Link className='/graphicdesign'><h1 className=''>Graphic Design</h1></Link>
                            </div>
                            <div className="icons flex gap-1 items-center pt-2">
                                <h1><IoMdArrowDropright className='text-2xl ' /></h1>
                                <Link className='/videoproduction'><h1 className=''>Video Production</h1></Link>
                            </div>
                            <div className="icons flex gap-1 items-center pt-2">
                                <h1><IoMdArrowDropright className='text-2xl ' /></h1>
                                <Link className='/influencermarketing'><h1 className=''>Influencer Marketing</h1></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="boxes py-11 px-2 grid grid-cols-1 lg:grid-cols-2 container mx-auto  ">
                <div className="left ">
                    <img className='lg:h-[35em] w-full lg:w-[35em]' src="https://digiphlox.com/wp-content/uploads/2022/02/image-section-41-min.jpg" alt="" />
                </div>
                <div className="right">
                    <h1 className=' py-3 text-2xl font-bold'>Our Company</h1>
                    <hr className='lg:hidden py-0.5  bg-black' />
                    <h2 className='py-3 text-deep-orange-600 text-xl font-semibold'>Why We Are The Best Digital Marketing Company In Uttarakhand</h2>
                    <p className=' pb-3 text-balance'>Digiphlox is a leading digital marketing agency  that helps businesses achieve their full potential online. Our journey began with a simple yet powerful vision – to empower businesses in Uttarakhand with the digital tools and strategies they need to succeed in the digital age. Since then, we’ve come a long way, helping numerous businesses thrive digitally through our expertise and dedication.</p>
                    <p className=' pb-3 text-balance'>Our team of experienced professionals is well-versed in the latest digital marketing trends and techniques, including SEO, PPC, social media marketing, and content marketing.</p>
                    <p className=' pb-3 text-balance'>At Digiphlox, our clients are at the heart of everything we do. We take the time to understand your business, goals, and challenges and work collaboratively to devise strategies that deliver real, measurable results. Our results-driven approach has helped many businesses increase their online visibility and drive more traffic to their websites.</p>
                    <p className=' pb-3 text-balance'>We are proud to have a proven track record of success and are committed to delivering results for our clients. We are passionate about helping businesses succeed online and take great pride in the success of our clients.</p>
                    <p>Join us on this digital journey and experience the difference of working with the best digital marketing agency in Uttarakhand. Let’s grow your brand, drive conversions, and achieve digital excellence together. </p>
                </div>
            </div>

            <div className="sixDProcess">
                <div className="container mx-auto bg-gray-50/65">
                    <h1 className='py-3 text-center text-2xl font-bold'>Our 6-D Process</h1>
                    <div className="pt-12">
                        <div className="box grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
                            {items.map((obj, index) => (
                                <div key={index} className="item  m-3 p-4">
                                    <h1 className='text-5xl text-deep-orange-300/55 font-bold'> 
                                            {obj.no}</h1>
                                    <h1 className='text-2xl font-bold py-1'>{obj.tital}</h1>
                                    <h1 className='text-lg text-balance'>{obj.p}</h1>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="box flex flex-wrap justify-center items-center gap-20 lg:my-20">
                <img className='h-[30em] py-6' src="https://digiphlox.com/wp-content/uploads/2020/01/why-choose-us-1.jpg" alt="" />
                <div className="right px-5">
                     <h1 className='text-3xl font-bold py-3 '>Why Choose Us?</h1>
                     <p className='pb-1 px-4'>Best Quality Designs</p>
                     <p className='pb-1 px-4'>24x7 Live Support</p>
                     <p className='pb-1 px-4'>Customized Solutions</p>
                     <p className='pb-1 px-4'>Result Oriented Projects</p>
                     <p className='pb-1 px-4'>Best ROI Techniques</p>
                     <p className='pb-1 px-4'>Experienced Professionals</p>
                </div>
                </div>
            </div>
            <GoogleRating/>
        </Layout>
    )
}

export default AboutPage

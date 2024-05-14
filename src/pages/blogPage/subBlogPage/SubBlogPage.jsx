import React from 'react'
import Layout from '../../../components/layout/Layout'
import { Link } from 'react-router-dom'
import GoogleRating from '../../../components/heropages/googleRating/GoogleRating'

const blogCard = [
    {
        img: "https://digiphlox.com/wp-content/uploads/2024/04/affordable.png",
        tital: "Affordable & Best Content Writing Services In Uttarakhand",
        p1: "In today’s digital world, content is the king. Whether you’re striving to enhance your online",
        src: "/content",
        date: "April 27, 2024  "
    },
    {
        img: "https://digiphlox.com/wp-content/uploads/2024/03/Add-a-little-bit-of-body-text-22.png",
        tital: "Best SEO Company In Uttarakhand – DigiPhlox",
        p1: "In the busy world of online marketing, where every business wants to be seen, Search",
        src: "/seo",
        date: "March 30, 2024 "
    },
    {
        img: "https://digiphlox.com/wp-content/uploads/2024/03/12-Remarkable-Facts-About-Digital-Marketing-1536x864.webp",
        tital: "12 Remarkable Facts About Digital Marketing",
        p1: "Digital marketing involves the promotion of products or services through digital platforms like search engines,",
        src: "/digitalmarketing",
        date: "March 24, 2024"
    },
    {
        img: "https://digiphlox.com/wp-content/uploads/2024/03/exemplari-marketing.png",
        tital: "Best Influencer Marketing Agency In Uttarakhand – DigiPhlox",
        p1: "Are you a business owner in Haldwani looking to harness the power of influencer marketing,",
        src: "/influencer",
        date: "March 16, 2024 "
    },
    {
        img: "https://digiphlox.com/wp-content/uploads/2024/03/Google-my-business-Marketing-Expert.png",
        tital: "Best Google My Business Listing Services In Haldwani",
        p1: "In busy Haldwani, Uttarakhand, businesses are always trying to shine online. People rely more and",
        src: "/google",
        date: "March 9, 2024 "
    },
    {
        img: "https://digiphlox.com/wp-content/uploads/2024/02/certificate.png",
        tital: "6 Best Online Advertising Strategy to Reach Your Target Customers  in 2024",
        p1: "As online advertising continues its evolution, implementing these strategies in 2024 can significantly enhance yo",
        src: "/onlineadvertising",
        date: "March 2, 2024 "
    },
    {
        img: "https://digiphlox.com/wp-content/uploads/2024/02/Graphic-Designing-2.png",
        tital: "Best Graphic Designing Company In Haldwani – DigiPhlox",
        p1: "Welcome to DigiPhlox – a professional and the best graphic designing company in Haldwani. In",
        src: "/graphicdesigning",
        date: "February 24, 2024  "
    },
    {
        img: "https://digiphlox.com/wp-content/uploads/2024/02/BEST-ECommerce-Marketing-Agency.png",
        tital: "Best ECommerce Website Designing Company In Haldwani",
        p1: "In today’s fast-changing online world having a strong presence on the internet is important for",
        src: "/ecommercewebsite",
        date: "February 17, 2024 "
    },
    {
        img: "https://digiphlox.com/wp-content/uploads/2024/01/Influencer-Marketing-2.webp",
        tital: "7 Digital Marketing Tips to Boost Your Business in 2024",
        p1: "Looking for the best way to boost your business online? Then, you should implement these",
        src: "/sevendigital",
        date: "January 20, 2024 "
    },
    {
        img: "https://digiphlox.com/wp-content/uploads/2023/12/business.png",
        tital: "In the fast-paced world of online marketing, Instagram stands out as a powerful tool for",
        p1: "Ready to establish your online presence? Explore these 3 proven strategies to take your Business",
        src: "/threestrategies",
        date: "January 11, 2024 "
    },
    {
        img: "https://digiphlox.com/wp-content/uploads/2024/01/featured-img.webp",
        tital: "7 Amazing Benefits Of Instagram Marketing For Businesses",
        p1: "In the fast-paced world of online marketing, Instagram stands out as a powerful tool for",
        src: "/instagram",
        date: "January 11, 2024 "
    },
    {
        img: "https://digiphlox.com/wp-content/uploads/2023/12/WHAT-1.png",
        tital: "What Are Backlinks And How They Are Important In SEO?",
        p1: "In the world of making websites show up on Google, there is a super important",
        src: "/instagram",
        date: "December 16, 2023  "
    },
]

function SubBlogPage() {
    return (
        <Layout>
            <div className="div  w-full ">
                <img className='w-full md:h-[35em] opacity-50 h-[20em]' src="https://digiphlox.com/wp-content/uploads/2024/02/BEST-ECommerce-Marketing-Agency.png" alt="" />
            </div>
            <div className="container mx-auto bg-gray-100  ">
                <div className="items relative lg:bottom-32 bottom-12">
                    <div className="subitems grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        {blogCard.map((item, index) => (
                            <div key={index} className="inner_box m-2 p-2 md:m-4 bg-white shadow-md">
                                <img src={item.img} alt="" />
                                <h1 className='text-2xl font-bold text-deep-orange-500 py-2'>{item.tital}</h1>
                                <h2 className='text-xl font-bold text-black/60'>{item.desc}</h2>
                                <p className='p-2 text-balance'>{item.p1}</p>
                                <Link to={item.src}>
                                    <h1 className=' font-bold pb-2 text-deep-orange-400 decoration-deep-orange-700 underline-offset-8'>Read More...</h1>
                                </Link>
                                <hr className='py-4 ' />
                                <div className="box">
                                    <h1>{item.date}</h1>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>                
            </div>
            <GoogleRating/>
        </Layout>
    )
}

export default SubBlogPage

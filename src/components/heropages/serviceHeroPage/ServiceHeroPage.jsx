import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
import { Link } from 'react-router-dom';

const cardList = [
    {
        image: 'https://digiphlox.com/wp-content/uploads/2022/12/seo.png',
        tital: "Search Engine Optimisation",
        decs: " As a well known digital marketing agency in Haldwani DigiPhlox can help you increase your bottom line with an SEO campaign tailored for your business. We can help you in achieving high rankings in search engines through careful keyword research and write hat tactics",
    },
    {
        image: 'https://digiphlox.com/wp-content/uploads/2022/12/reputation.png',
        tital: "Website Development",
        decs: " DigiPhlox has an award-winning web design team that builds unique, effective websites that stands out, represents you well, improve conversion rates, and  most importantly maximise revenue.",
    },
    {
        image: 'https://digiphlox.com/wp-content/uploads/2022/12/social-media.png',
        tital: "Social Media Marketing",
        decs: " Looking for the best digital marketing agency in Haldwani you can go through with DigiPhlox. With our competitive social media services, you can stay ahead of the competition. Drive a high ROI from social media like Facebook, Instagram, Twitter and LinkedIn with DigiPhlox social media services. ",
    },
    {
        image: 'https://digiphlox.com/wp-content/uploads/2022/12/location.png',
        tital: "Google My Business Listing",
        decs: " Whether you’re just starting out or want to take your business to the next level, it’s time to make your Google My Business listing not just relevant but also optimized. As the best digital marketing agency in Haldwani we’ve helped many local",
    },
    {
        image: 'https://digiphlox.com/wp-content/uploads/2022/12/budget.png',
        tital: "Pay Per Click - PPC",
        decs: " DigiPhlox is a leading PPC agency that use paid search to boost sales for your business. Get immediate results by increasing your search engine visibility. whether you want to increase conversions, website traffic, or both. Our PPC management services can help you meet your",
    },
    {
        image: 'https://digiphlox.com/wp-content/uploads/2022/12/responsive-design.png',
        tital: "Content Writing",
        decs: " Our content marketing services make content marketing simple. Our award-winning team creates, writes, edits, and promotes SEO friendly content. Our content writers craft excellent marketing copy that is both informational, engaging and also promote your company’s goals.",
    },
]

function ServiceHeroPage() {
    return (
        <div>
            <div className="box py-8 px-6 md:px-12 lg:px-28 ">
                {/* headings */}
                <div className="heading">
                    <h1 className='font-bold text-deep-orange-500 text-center lg:text-start pb-2'>OUR DIGITAL MARKETING EXPERTISE</h1>
                    <h2 className='text-2xl font-bold md:text-4xl text-black text-center lg:text-start'>Our Marketing services <br /> is what you need</h2>
                </div>
                {/* cards */}
                <div className="cards mt-10 ">
                   <div className="sub_box grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {cardList.map((item,index)=>(
                        <div key={index} className="inner_box mt-3 md:m-4 py-4 m- bg-white/85 shadow-md hover:shadow-xl hover:border-b-4 border-deep-orange-400 hover:bg-gray-100  ">
                            <div className="img pb-4">
                                <img className='w-32 mx-auto' src={item.image} alt="" />
                            </div>
                            <div className="tital pb-4">
                                <h1 className='text-2xl font-bold text-center '>{item.tital}</h1>
                            </div>
                            <div className="descrip pb-3">
                                <p className='italic px-4 text-balance'> {item.decs} </p>
                            </div>
                            <div className="button flex justify-center py-3">
                                <Link>
                                <button className='px-7 py-2 border border-deep-orange-400 font-semibold hover:bg-deep-orange-400 hover:text-white rounded-md'>SHOW MORE</button>
                                </Link>
                            </div>
                        </div>
                    ))}
                   </div>
                </div>

            </div>
        </div>
    )
}

export default ServiceHeroPage

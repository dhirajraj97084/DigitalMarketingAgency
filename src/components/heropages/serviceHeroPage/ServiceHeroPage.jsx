import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

const cardList = [
  {
    image: "https://Digiswarm.com/wp-content/uploads/2022/12/seo.png",
    tital: "Search Engine Optimisation",
    decs: " As a renowned digital marketing agency in Dehradun, DigiSwarm can boost your bottom line with a customized SEO campaign tailored to your business. We excel in achieving high search engine rankings through meticulous keyword research and white-hat tactics.",
    src: "/seo",
  },
  {
    image: "https://Digiswarm.com/wp-content/uploads/2022/12/reputation.png",
    tital: "Website Development",
    decs: " DigiSwarm boasts an award-winning web design team that creates unique, effective websites. Our designs not only stand out and represent your brand well but also improve conversion rates and, most importantly, maximize revenue.",
    src: "/websitedesign",
  },
  {
    image: "https://Digiswarm.com/wp-content/uploads/2022/12/social-media.png",
    tital: "Social Media Marketing",
    decs: " Searching for the best digital marketing agency in Dehradun? Look no further than DigiSwarm. Our competitive social media services keep you ahead of the competition. Achieve a high ROI from platforms like Facebook, Instagram, Twitter, and LinkedIn with DigiSwarm's expert social media strategies.",
    src: "/socialmedia",
  },
  {
    image: "https://Digiswarm.com/wp-content/uploads/2022/12/location.png",
    tital: "Google My Business Listing",
    decs: " Whether you’re just starting out or aiming to grow your business, it's important to have an optimized Google My Business listing. As the top digital marketing agency in Dehradun, DigiSwarm has helped many local businesses succeed.",
    src: "/googlemybussiness",
  },
  {
    image: "https://Digiswarm.com/wp-content/uploads/2022/12/budget.png",
    tital: "Pay Per Click - PPC",
    decs: " DigiSwarm is a leading PPC agency that uses paid search to boost your business's sales. Get immediate results by increasing your search engine visibility. Whether you want to increase conversions, website traffic, or both, our PPC management services can help you achieve your goals.",
    src: "/payperclick",
  },
  {
    image:
      "https://Digiswarm.com/wp-content/uploads/2022/12/responsive-design.png",
    tital: "Content Writing",
    decs: " At DigiSwarm, our content marketing services streamline the process, making it easy for you. Our talented team crafts SEO-friendly content that's not only informative and engaging but also aligns perfectly with your company's objectives.",
    src: "/contentwriting",
  },
];

function ServiceHeroPage() {
  return (
    <div>
      <div className="box py-8 px-6 md:px-12 lg:px-28 ">
        {/* headings */}
        <div className="heading">
          <h1 className="font-bold text-purple-500 text-center lg:text-start pb-2">
            OUR DIGITAL MARKETING EXPERTISE
          </h1>
          <h2 className="text-2xl font-bold md:text-4xl text-black text-center lg:text-start">
            Our Marketing services <br /> is what you need
          </h2>
        </div>
        {/* cards */}
        <div className="cards mt-10 ">
          <div className="sub_box grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {cardList.map((item, index) => (
              <div
                key={index}
                className="inner_box mt-3 md:m-4 py-4 m- bg-white/85 shadow-md hover:shadow-xl hover:border-b-4 border-purple-500  hover:bg-gray-100  "
              >
                <div className="img pb-4">
                  <img className="w-32 mx-auto" src={item.image} alt="" />
                </div>
                <div className="tital pb-4">
                  <h1 className="text-2xl font-bold text-center ">
                    {item.tital}
                  </h1>
                </div>
                <div className="descrip pb-3">
                  <p className="italic px-4 text-balance"> {item.decs} </p>
                </div>
                <div className="button flex justify-center py-3">
                  <Link to={item.src}>
                    <button className="px-7 py-2 border bg-purple-500  font-semibold hover:bg-brown-800 text-white rounded-md">
                      SHOW MORE
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceHeroPage;

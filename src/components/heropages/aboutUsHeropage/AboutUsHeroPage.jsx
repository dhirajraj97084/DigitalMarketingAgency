import React from "react";
import { Link } from "react-router-dom";

function AboutUsHeroPage() {
  return (
    <div>
      <div className="box py-8 px-6 md:px-12 lg:px-28 grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="left">
          <div className="heading">
            <h1 className="font-bold text-deep-purple-500  lg:text-start text-center text-xl pb-2">
              WHY CHOOSE DIGISWARM
            </h1>
            <h2 className="text-2xl font-bold md:text-4xl text-black/75 text-center  lg:text-start ">
              We Are The Best Digital Marketing Agency In Dehradun (Uttarakhand)
            </h2>
            <p className="pb-6 pt-3 text-balance text-start">
              DigiSwarm stands out as the premier digital marketing agency in
              Dehradun, backed by years of expertise. We offer comprehensive
              digital marketing services covering SEO, social media marketing,
              pay-per-click advertising, content creation, website development,
              Amazon listing, and more.
            </p>
            <p className="pb-4 text-balance text-start">
              Since our inception, DigiSwarm has collaborated with numerous
              renowned brands and businesses, aiding them in their growth
              endeavors.
            </p>
            <p className="pb-4 text-balance text-start">
              Our dedicated team of digital marketers brings a wealth of
              experience from diverse industries, ensuring tailored digital
              solutions for every niche.
            </p>
            <p className="pb-4 text-balance text-start">
              Renowned as the top digital marketing agency in Dehradun, we
              specialize in providing brands and businesses with bespoke digital
              strategies, facilitating them in achieving their digital
              aspirations.
            </p>
            <div className="button py-4">
              <Link to={"/about"}>
                <button className="px-7 py-2 border-b-2 border bg-purple-500 hover:bg-brown-800 font-semibold  hover:text-white rounded-md">
                  About Us
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="right my-auto">
          <img className="h-full" src="img/hand_11zon.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default AboutUsHeroPage;

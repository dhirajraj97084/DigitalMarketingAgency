import React from "react";

const cardlist = [
  {
    desc: "Digiswarm is undeniably the best digital marketing agency in Dehradun. Their mastery in SEO and social media marketing has elevated our online presence to new heights. For anyone seeking top-notch digital marketing solutions, Digiswarm is the ultimate choice!",
    img: "https://res-console.cloudinary.com/dpzhezt6x/thumbnails/v1/image/upload/v1718372245/MzVfd3g4Zzdr/drilldown",
    name: "KundanMala Jewels",
  },
  {
    desc: "Digiswarm, the leading Dehradun digital marketing agency, has delivered exceptional results for our business. Their comprehensive approach to digital marketing, including website development and content creation, has significantly boosted our online visibility. Highly recommend their services for anyone looking to excel in the digital realm",
    img: "https://res-console.cloudinary.com/dpzhezt6x/thumbnails/v1/image/upload/v1718372165/TG9nb18xX3A5cnkwbw==/drilldown",
    name: "Smart Agri Incorporation",
  },
  {
    desc: "Digiswarm's expertise in digital marketing is unparalleled. As the premier Dehradun digital marketing agency, they have helped us achieve remarkable success with their strategic approach and attention to detail. From SEO to content marketing, their services have truly exceeded our expectations. If you're looking to dominate the digital landscape, look no further than Digiswarm",
    img: "https://res-console.cloudinary.com/dpzhezt6x/thumbnails/v1/image/upload/v1718372430/RHIuX0FydmluZF9DaGF1ZGhhcnlfMV9tczltZmk=/drilldown",
    name: "Ayurmax",
  },
];

function ClientHeroPage() {
  return (
    <div>
      <div className="box h-fit bg-purple-500 rounded-t-[16rem]  ">
        <div className="heading pt-12">
          <h1 className="text-center text-white font-semibold">
            OUR CLIENTS GET RESULTS
          </h1>
          <h1 className="text-center text-white font-semibold text-2xl lg:text-4xl">
            What Our Clients Are Saying
          </h1>
        </div>
        <div className="cart">
          <div className="box grid grid-cols-1 md:grid-cols-3 ">
            {cardlist.map((item, index) => (
              <div
                key={index}
                className="cart bg-white rounded-md  m-4 px-8 lg:my-12 py-12"
              >
                <h1 className="font-bold">{item.desc}</h1>
                <div className="box flex gap-7 pt-6">
                  <img
                    className="w-16 h-16 rounded-full"
                    src={item.img}
                    alt=""
                  />
                  <span className="flex flex-col ">
                    <h1 className="text-xl font-bold">{item.name}</h1>
                    <h1 className="font-thin">client</h1>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClientHeroPage;

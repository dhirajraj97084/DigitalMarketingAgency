import React from "react";

const peopleList = [
  {
    img: "",
    name: "Srishti Nautiyal",
    work: "Consultant",
  },
  {
    img: "",
    name: "Chetna Karmakar",
    work: "Senior Designer",
  },
  {
    img: "",
    name: "Shiva",
    work: " Editor",
  },
  {
    img: "",
    name: "Vishal",
    work: "Senior Devloper",
  },
  {
    img: "",
    name: "Lalit Nath",
    work: "Junior Devloper",
  },
  {
    img: "",
    name: "Dheeraj",
    work: "Junior Devloper",
  },
  {
    img: "",
    name: "Vijay",
    work: "SEO Specilist",
  },
  {
    img: "",
    name: "Shivraj",
    work: "Associate",
  },
  {
    img: "",
    name: "Aryan",
    work: "Video Editor",
  },
  // {
  //   img: "",
  //   name: "Rashmi Arya",
  //   work: "Counsellor",
  // },
  // {
  //   img: "",
  //   name: "Raveena Bisht",
  //   work: "Social Media Marketer",
  // },
  // {
  //   img: "",
  //   name: "Varnika Pandey",
  //   work: "SEO Strategist",
  // },
];

function OurProfessionals() {
  return (
    <div>
      <div className="box py-8 md:py-10 px-3 md:px-12 lg:px-28 hidden md:block ">
        <div className="heading ">
          <h1 className="font-bold text-deep-purple-500  text-center  pb-2">
            OUR PROFESSIONALS
          </h1>
          <h2 className="text-2xl md:text-4xl font-extrabold text-black/80 text-center ">
            Discover The People Behind Our Company
          </h2>
          <h2 className=" pt-4 text-black/80 text-center text-balance ">
            In the ever-expanding field of digital marketing, we are led by
            visionaries. Meet the people who make Digiswarm the best digital
            marketing agency among all others. A complete digital presence
            solution.
          </h2>
        </div>
        {/* people behinds the company */}
        <div className="peoples mt-16">
          <div className="sub_div grid md:grid-cols-2 lg:grid-cols-3 gap-8 ">
            {peopleList.map((item, index) => (
              <div key={index} className="div flex gap-5 items-center">
                <div className="img w-24 h-24 rounded-full bg-deep-purple-500 flex justify-center items-center ">
                  <img
                    className=" h-16 rounded-full"
                    src={item.img}
                    alt="img"
                  />
                </div>
                <span>
                  <h1 className="text-xl font-bold">{item.name}</h1>
                  <h2>{item.work}</h2>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurProfessionals;

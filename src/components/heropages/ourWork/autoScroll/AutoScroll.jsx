import React from "react";
import Slider from "react-slick";

const scrollList = [
  {
    image:
      "https://res-console.cloudinary.com/dpzhezt6x/thumbnails/v1/image/upload/v1718372165/TG9nb18xX3A5cnkwbw==/drilldown",
  },
  {
    image:
      "https://res.cloudinary.com/dpzhezt6x/image/upload/v1698570613/Untitled_design_23_qgnqja.png",
  },
  {
    image:
      "https://res-console.cloudinary.com/dpzhezt6x/thumbnails/v1/image/upload/v1718372430/RHIuX0FydmluZF9DaGF1ZGhhcnlfMV9tczltZmk=/drilldown",
  },
  {
    image:
      "https://res-console.cloudinary.com/dpzhezt6x/thumbnails/v1/image/upload/v1718373472/TmV3X0dhcmh3YWxfSmV3ZWxsZXJzX2gzYmpsNQ==/drilldown",
  },
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/scoot-production-a901c.appspot.com/o/exly%2Fe%2Fpng%3Bbas1XxBAueX?alt=media&token=62535d89-e460-474b-b045-d4b12200b923",
  },
  {
    image:
      "https://res-console.cloudinary.com/dpzhezt6x/thumbnails/v1/image/upload/v1718373796/SG90ZWxfMV9xZnN4c20=/drilldown",
  },
];

export default function AutoScroll() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    // cssEase:"linear"
  };
  return (
    <div>
      <div className="slider-container py-6 md:py-12 ">
        <Slider {...settings}>
          {scrollList.map((items, indexs) => {
            return (
              <div key={indexs} className="img ">
                <img
                  className=" p-2 w-64 cursor-pointern px-6 "
                  src={items.image}
                  alt=""
                />
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}

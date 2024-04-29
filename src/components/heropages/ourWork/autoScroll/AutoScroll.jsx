import React from "react";
import Slider from "react-slick";


const scrollList=[
    {
        image:"https://digiphlox.com/wp-content/uploads/2023/11/plant_mantra_logo-removebg-preview.png"
    },
    {
        image:"https://digiphlox.com/wp-content/uploads/2023/11/10.0.png"
    },
    {
        image:"https://digiphlox.com/wp-content/uploads/2023/11/9.0.png"
    },
    {
        image:"https://digiphlox.com/wp-content/uploads/2023/09/Artboard-1-copy-s2.png"
    },
    {
        image:"https://digiphlox.com/wp-content/uploads/2023/09/Layer-1.png"
    },
    {
        image:"https://digiphlox.com/wp-content/uploads/2023/11/11.0.png"
    },   

]

export default function AutoScroll() {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
      };
  return (
    <div>
    <div className="slider-container py-6 md:py-12 ">
    <Slider {...settings}>
    {scrollList.map((items,indexs)=>{
                    return( <div key={indexs} className="img ">
                        <img className=" w-[15em] p-2 cursor-pointer " src={items.image} alt="" />
                    </div> )
                })}
    </Slider>
  </div>
  </div>
  )
}

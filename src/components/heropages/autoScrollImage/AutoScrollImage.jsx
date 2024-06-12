import { Carousel } from "@material-tailwind/react"; 

export default function AutoScrollImage() {
  return (
    <div>

    <Carousel 
    loop={true}
    autoplay="true"
    navigation={false}
    transition={{type : "tween", duration : 2}}
    autoplayDelay={5000}
    className=" ">
        <div className="relative h-full w-full">
        <img
          src="img/1_11zon.jpg"
          alt="image 2"
          className="lg:h-[35em] h-[28em]  w-full object-cover"
        />
      </div>
       
      <div className="relative h-full w-full">
        <img
          src="img/2_11zon.jpg"
          alt="image 2"
          className=" lg:h-[35em] h-[28em] w-full object-cover"
        />
      </div>
      <div className="relative h-full w-full">
        <img
          src="img/3_11zon.jpg"
          alt="image 3"
          className=" lg:h-[35em] h-[28em] w-full object-cover"
        />
      </div>
    </Carousel>   
    </div>
  );
}





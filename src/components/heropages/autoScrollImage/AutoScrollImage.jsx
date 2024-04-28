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
          src="https://digiphlox.com/wp-content/uploads/2024/03/Website-Banner-1.jpg"
          alt="image 2"
          className="lg:h-[35em] h-[28em]  w-full object-cover"
        />
      </div>
       
      <div className="relative h-full w-full">
        <img
          src="https://digiphlox.com/wp-content/uploads/2024/03/Website-Banner-4-.jpg"
          alt="image 2"
          className=" lg:h-[35em] h-[28em] w-full object-cover"
        />
      </div>
      <div className="relative h-full w-full">
        <img
          src="https://digiphlox.com/wp-content/uploads/2024/03/Website-Banner-3-.jpg"
          alt="image 3"
          className=" lg:h-[35em] h-[28em] w-full object-cover"
        />
      </div>
    </Carousel>   
    </div>
  );
}





import React from "react";
import AutoScroll from "./autoScroll/AutoScroll";

function OurWorkHome() {
  return (
    <div>
      <div className="box py-8 px-6 md:px-12 lg:px-28 ">
        <div className="heading">
          <h1 className="font-bold text-deep-purple-500  text-center md:text-start pb-2">
            INTRODUCING OUR WORK
          </h1>
          <h2 className="text-2xl font-bold md:text-4xl text-black text-center md:text-start">
            Let us propel you ahead of your competition.
          </h2>
          <h2 className="py-4 font-semibold text-balance text-center md:text-start">
            At Digiswarm, we bring fresh perspectives, adaptability, strong
            principles, and extensive experience to the SEO and web design
            arena. As the premier digital marketing agency in Dehradun, we
            prioritize understanding our clients’ business goals. Every decision
            is meticulously aligned with these objectives, ensuring optimal
            results for our clients.
          </h2>
          <img
            className="py-4 w-full h-96"
            src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />

          <div className="box py-6 grid grid-cols-1 md:grid-cols-3 gap-4 gap-y-6 ">
            <div className="item1">
              <h1 className="text-center md:text-start text-balance text-xl font-bold">
                01- Discover
              </h1>
              <h2 className="text-center md:text-start text-balance">
                We dive deep with you to understand your current strategies,
                future goals, and target audience. By getting to the heart of
                your business, we pave the way for effective digital solutions
                tailored to your needs.
              </h2>
            </div>
            <div className="item2">
              <h1 className="text-center md:text-start text-balance text-xl font-bold">
                02 - Define
              </h1>
              <h2 className="text-center md:text-start text-balance">
                Next, we clarify the challenges at hand, ensuring everyone is
                aligned. We define a clear solution and meticulously plan each
                step, tailored to your unique circumstances. This ensures a
                strategic approach that sets the stage for success.
              </h2>
            </div>
            <div className="item3">
              <h1 className="text-center md:text-start text-balance text-xl font-bold">
                03 - Develop
              </h1>
              <h2 className="text-center md:text-start text-balance">
                Following our defined plan, we embark on crafting a tailored
                solution just for you. This might involve designing a wireframe
                for your website or formulating a detailed strategy for social
                media promotion. Each step is carefully crafted to bring your
                vision to life.
              </h2>
            </div>
          </div>
        </div>
        <div className="boxes mt-5 md:mt-14">
          <h1 className="text-center text-2xl font-bold text-deep-purple-500 ">
            Our Clients
          </h1>
          <h1 className="text-2xl text-center font-bold text-black/60">
            Transformed Businesses Through Strategic Digital Marketing.
          </h1>
          <AutoScroll />
        </div>
      </div>
      <div className="img">
        <img className="w-full" src="img/5_11zon.jpg" alt="" />
      </div>
    </div>
  );
}

export default OurWorkHome;

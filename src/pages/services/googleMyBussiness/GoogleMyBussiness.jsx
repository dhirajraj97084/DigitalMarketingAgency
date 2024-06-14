import React from "react";
import Layout from "../../../components/layout/Layout";
import { Link } from "react-router-dom";
import GoogleRating from "../../../components/heropages/googleRating/GoogleRating";

function GoogleMyBussiness() {
  return (
    <Layout>
      <div className="main">
        <img className="w-full h-[25em]" src="img/11_11zon.jpg" alt="" />
        <div className="box">
          <div className="item2 container mx-auto pb-8 grr grid grid-cols-1 lg:grid-cols-2 gap-10 py-14 px-4  ">
            <div className="right my-auto">
              <h1 className="text-xl font-black pb-3">
                Get the right online presence with Google My Business Listings!
              </h1>
              <p className=" text-xl">
                It’s time to make your Google Business profile not just relevant
                but also optimal, whether you’re just starting out or want to
                grow your company. We at Digiswarm have assisted several ranked.
              </p>
            </div>
            <div className="left mx-auto">
              <img
                className=" h-80 w-full "
                src="https://cdn.pixabay.com/photo/2016/10/09/08/32/digital-marketing-1725340_1280.jpg"
                alt=""
              />
              <div className="hover:bg-deep-orange-600 text-white py-4 mx-3 lg:px-10 font-bold bg-blue-gray-800 relative bottom-[1em]  lg:bottom-[4em] lg:right-[4em] text-sm">
                "96% of consumers say they go online to research local
                businesses before they buy. "
              </div>
            </div>
          </div>
        </div>

        <div className="box">
          <div className="box my-6 bg-blue-gray-700 flex flex-wrap md:justify-around justify-center items-center py-8 px-4 lg:py-8">
            <div className="left">
              <h1 className="text-xl font-bold text-white text-center pb-8 md:pb-0">
                Get started with a FREE consultation – There’s nothing to lose!
              </h1>
            </div>
            <div className="right">
              <Link to={"/contactus"}>
                <button className="text-deep-purple-500  bg-white px-6 py-2 hover:bg-transparent hover:border border-gray-100 hover:text-white  cursor-pointer">
                  CALL NOW
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="item1 container mx-auto pb-8 grid grid-cols-1 lg:grid-cols-2 gap-10  ">
          <div className="left mx-auto">
            <img
              className=" h-80 "
              src="https://cdn.pixabay.com/photo/2020/06/22/06/03/business-5327815_640.jpg"
              alt=""
            />
            <div className=" hover:bg-deep-orange-600 text-white py-4 px-6 mx-3 lg:px-10 text-xl font-bold bg-blue-gray-800 relative bottom-[1em]  lg:bottom-[2em] lg:left-[2em]">
              Unlock the Power of Google Business Profile with Digiswarm's
              Professional Listing Services
            </div>
          </div>
          <div className="right my-auto">
            <h1 className="text-xl font-black  text-center pb-8">
              Digiswarm: Enhancing Your Online Presence with Google Business
              Listing Services
            </h1>
            <p className=" text-xl">
              In today’s digital landscape, establishing a strong online
              presence is essential for businesses to thrive and connect with
              their target audience. Digiswarm is a leading Google My Business
              listing company that specializes in optimizing and managing GMB
              profiles. With a focus on enhancing local visibility, Digiswarm
              helps businesses leverage the power of Google My Business to
              attract more customers and strengthen their online presence. This
              overview provides insights into how partnering with Digiswarm can
              benefit businesses in maximizing their Google My Business
              potential.
            </p>
          </div>
        </div>

        <div className="itets">
          <div className="container mx-auto px-3">
            <h1 className="text-deep-orange-400 text-center pb-8 text-2xl font-bold">
              OUR SERVICES
            </h1>
          </div>
          <div className="boxes grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pb-10">
            <div className="item1 m-3 bg-white shadow-md p-4">
              <h1 className="text-xl font-bold text-center text-deep-purple-500  pb-3">
                GMB Profile Setup and Optimization
              </h1>
              <p className="px-5 text-center">
                Digiswarm assists businesses in setting up their GMB profiles
                from scratch, ensuring accurate and comprehensive information is
                provided. They optimize the profiles with relevant keywords,
                categories, and compelling descriptions to improve search
                visibility and attract the right audience.
              </p>
            </div>
            <div className="item2 m-3 bg-white shadow-md p-4">
              <h1 className="text-xl font-bold text-center text-deep-purple-500  pb-3">
                Review Management
              </h1>
              <p className="px-5 text-center">
                Managing customer reviews is critical for maintaining a positive
                online reputation. Digiswarm helps businesses monitor and
                respond to customer reviews promptly, ensuring that customer
                feedback is acknowledged and addressed. This proactive approach
                fosters trust and enhances the overall brand reputation.
              </p>
            </div>
            <div className="item3 m-3 bg-white shadow-md p-4">
              <h1 className="text-xl font-bold text-center text-deep-purple-500  pb-3">
                NAP Consistency
              </h1>
              <p className="px-5 text-center">
                Consistency in business information across various online
                directories is crucial for local search rankings. Digiswarm
                ensures that the Name, Address, and Phone number (NAP) data
                across all platforms, including Google My Business, is
                consistent and accurate. This consistency strengthens local
                search visibility and ensures a seamless customer experience
              </p>
            </div>
            <div className="item4 m-3 bg-white shadow-md p-4">
              <h1 className="text-xl font-bold text-center text-deep-purple-500  pb-3">
                Visual Content Optimization
              </h1>
              <p className="px-5 text-center">
                Visual content is a powerful tool for attracting and engaging
                customers. Digiswarm optimizes the photos and videos on GMB
                profiles, showcasing the business’s products, services, and
                brand identity. Compelling visual content helps businesses make
                a memorable impression and stand out from the competition.
              </p>
            </div>
            <div className="item1 m-3 bg-white shadow-md p-4">
              <h1 className="text-xl font-bold text-center text-deep-purple-500  pb-3">
                Posts and Updates
              </h1>
              <p className="px-5 text-center">
                Keeping the GMB listing updated with relevant posts and updates
                is crucial for engaging with the audience and driving traffic.
                Digiswarm creates and manages posts, announcements, and offers
                on GMB profiles to keep customers informed, generate interest,
                and encourage interaction with the business.
              </p>
            </div>
            <div className="item1 m-3 bg-white shadow-md p-4">
              <h1 className="text-xl font-bold text-center text-deep-purple-500  pb-3">
                Insights and Analytics
              </h1>
              <p className="px-5 text-center">
                Digiswarm provides comprehensive insights and analytics reports,
                offering valuable data on profile performance, customer
                engagement, search queries, and other metrics. These insights
                empower businesses to make data-driven decisions, optimize their
                GMB strategies, and drive continuous improvement.
              </p>
            </div>
          </div>
        </div>

        <div className="box">
          <div className="container mx-auto">
            <h1 className="text-center text-2xl font-bold text-deep-purple-500  ">
              Partnering with Digiswarm
            </h1>
            <h2 className="text-center text-2xl font-bold pb-8  ">
              for Expert offers several advantages for businesses
            </h2>
          </div>
          <div className="item1 container mx-auto pb-8 grid grid-cols-1 lg:grid-cols-2 gap-10  ">
            <div className="left mx-auto">
              <img
                className=" h-80 "
                src="https://media.istockphoto.com/id/1205193642/photo/internet-search-bar-in-browser-with-magnifier-on-computer-monitor-screen.jpg?s=2048x2048&w=is&k=20&c=zYg12PcGECPmfRhw2_zseV-uok9gTdwd2lE0gFrhTY0="
                alt=""
              />
              <span className=" hover:bg-deep-orange-600 text-white py-4 px-6 mx-3 lg:px-10 text-xl font-bold bg-blue-gray-800 relative bottom-[1em]  lg:bottom-[12em] lg:left-[8em]">
                Expertise and Experience
              </span>
            </div>
            <div className="right my-auto">
              <p className=" text-xl">
                Digiswarm has a team of experienced professionals who specialize
                in optimizing GMB profiles. Their deep understanding of Google’s
                algorithms and best practices ensures that businesses’ profiles
                adhere to guidelines and perform well in local search results.
              </p>
            </div>
          </div>

          <div className="item2 container mx-auto pb-8 grr grid grid-cols-1 lg:grid-cols-2 gap-10  ">
            <div className="right my-auto">
              <p className=" text-xl">
                Through strategic optimization techniques, Digiswarm helps
                businesses improve their visibility in Google search and maps
                results. This increased online exposure enables businesses to
                reach a wider audience, attract more potential customers, and
                generate valuable leads.
              </p>
            </div>
            <div className="left mx-auto">
              <img
                className=" h-80 w-full "
                src="https://media.istockphoto.com/id/1437824169/photo/business-woman-hands-computer-mouse-and-keyboard-typing-email-online-internet-search-and.jpg?s=612x612&w=0&k=20&c=EUewKul-Vm3ub8kl17vw16bZJp5W_z5Tu0ZHyFA5sXo="
                alt=""
              />
              <span className=" hover:bg-deep-orange-600 text-white py-4 px-6 mx-3 lg:px-10 text-xl font-bold bg-blue-gray-800 relative bottom-[1em]  lg:bottom-[12em] lg:right-[8em]">
                Enhanced Online Visibility
              </span>
            </div>
          </div>

          <div className="item3 container mx-auto pb-8 grid grid-cols-1 lg:grid-cols-2 gap-10  ">
            <div className="left mx-auto">
              <img
                className=" h-80 w-full "
                src="https://media.istockphoto.com/id/1551252387/vector/search-bar-for-ui-ux-with-suggestions-clean-design-vector-template-search-engine-browser.jpg?s=612x612&w=0&k=20&c=K8wDA66853N9daNX49JTiOLVrPZlIZKrpoag2tz4IdE="
                alt=""
              />
              <div className=" hover:bg-deep-orange-600 text-white py-4 px-6 mx-3 lg:px-10 text-xl font-bold bg-blue-gray-800 relative bottom-[1em]  lg:bottom-[12em] lg:left-[8em]">
                Credibility and Trust Building
              </div>
            </div>
            <div className="right my-auto">
              <p className=" text-xl">
                A well-optimized GMB profile, combined with positive customer
                reviews, accurate information, and engaging visual content,
                builds credibility and trust among potential customers.{" "}
              </p>
            </div>
          </div>

          <div className="item4 container mx-auto pb-8 grr grid grid-cols-1 lg:grid-cols-2 gap-10  ">
            <div className="right my-auto">
              <p className=" text-xl">
                Maintaining consistent and accurate business information across
                various online directories is crucial for local search rankings.
                Digiswarm ensures that the Name, Address, and Phone number (NAP)
                data is consistent and up to date, which improves the business’s
                visibility and avoids confusion among potential customers.
              </p>
            </div>
            <div className="left mx-auto">
              <img
                className=" h-80 w-full "
                src="https://images.pexels.com/photos/7350905/pexels-photo-7350905.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
              <span className=" hover:bg-deep-orange-600 text-white py-4 px-6 mx-3 lg:px-10 text-xl font-bold bg-blue-gray-800 relative bottom-[1em]  lg:bottom-[12em] lg:right-[8em]">
                Consistent and Accurate
              </span>
            </div>
          </div>

          <div className="item5 container mx-auto pb-8 grid grid-cols-1 lg:grid-cols-2 gap-10  ">
            <div className="left mx-auto">
              <img
                className=" h-80 w-full "
                src="https://images.pexels.com/photos/193003/pexels-photo-193003.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
              <span className=" hover:bg-deep-orange-600 text-white py-4 px-6 mx-3 lg:px-10 text-xl font-bold bg-blue-gray-800 relative bottom-[1em]  lg:bottom-[12em] lg:left-[8em]">
                Engaging Visual Content
              </span>
            </div>
            <div className="right my-auto">
              <p className=" text-xl">
                Visual content plays a crucial role in capturing audience
                attention. Our team optimizes the photos and videos on GMB
                profiles, showcasing the business’s products, services, and
                brand identity. Compelling visuals create a positive impression
                and make businesses stand out from competitors.{" "}
              </p>
            </div>
          </div>

          <div className="item6 container mx-auto pb-8 grr grid grid-cols-1 lg:grid-cols-2 gap-10  ">
            <div className="right my-auto">
              <p className=" text-xl">
                Keeping the GMB listing updated with relevant posts,
                announcements, and offers is essential for engaging with the
                audience and driving traffic. We creates and manages engaging
                content to keep customers informed and encourage interaction
                with the business.
              </p>
            </div>
            <div className="left mx-auto">
              <img
                className=" h-80 w-full "
                src="https://images.pexels.com/photos/13628541/pexels-photo-13628541.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
              <span className=" hover:bg-deep-orange-600 text-white py-4 px-6 mx-3 lg:px-10 text-xl font-bold bg-blue-gray-800 relative bottom-[1em]  lg:bottom-[12em] lg:right-[8em]">
                Timely Posts and Updates
              </span>
            </div>
          </div>

          <div className="item5 container mx-auto pb-8 grid grid-cols-1 lg:grid-cols-2 gap-10  ">
            <div className="left mx-auto">
              <img
                className=" h-80 w-full "
                src="https://images.pexels.com/photos/4050220/pexels-photo-4050220.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
              <div className=" hover:bg-deep-orange-600 text-white py-4 px-6 mx-3 lg:px-10 text-xl font-bold bg-blue-gray-800 relative bottom-[1em]  lg:bottom-[12em] lg:left-[8em]">
                Performance Tracking and Analytics
              </div>
            </div>
            <div className="right my-auto">
              <p className=" text-xl">
                We provides detailed insights and analytics reports on GMB
                profile performance, customer engagement, search queries, and
                more. Businesses gain valuable data-driven insights that help
                them understand their audience, measure the impact of their GMB
                strategies, and make informed decisions for further
                optimization.
              </p>
            </div>
          </div>
        </div>

        {/* FEATURES OF OUR */}

        <div className="boxes">
          <GoogleRating />
        </div>
      </div>
    </Layout>
  );
}

export default GoogleMyBussiness;

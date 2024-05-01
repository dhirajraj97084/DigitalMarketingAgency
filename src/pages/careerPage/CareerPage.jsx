import React, { useState } from 'react'
import Layout from '../../components/layout/Layout'
import { Link } from 'react-router-dom';

const itemslist = [
    {
        img: "https://digiphlox.com/wp-content/uploads/2024/03/Telecaller.png",
        tital: "Telemarketer",
        desc: "Desired Skills & Experience:",
        p1: "Conduct outbound calls to prospective customers from provided leads or cold calling lists.",
        p2: "Introduce our products/services, highlight key features and benefits, and address any questions or concerns.",
        p3: "Qualify leads and schedule appointments or sales meetings for our sales team.",
        p4: "Maintain accurate records of interactions and follow-up activities in our CRM system.",
        p5: "Meet or exceed daily/weekly/monthly sales targets and KPIs.",
    },
    {
        img: "https://digiphlox.com/wp-content/uploads/2024/02/handsome-businessman-working-office.webp",
        tital: "Video Editor",
        desc: "Desired Skills & Experience:",
        p1: "Collaborate with our creative team to understand project objectives and vision.",
        p2: "Edit raw footage into polished videos, ensuring a seamless flow and engaging narrative.",
        p3: "Proficiency in video editing software such as Adobe Premiere Pro, Final Cut Pro, or DaVinci Resolve.",
        p4: "Knowledge of color grading, audio mixing, and motion graphics is a plus.",
    },
    {
        img: "https://digiphlox.com/wp-content/uploads/2024/02/social-media-marketing-concept-marketing-with-applications.webp",
        tital: "Social Media Executive",
        desc: "Desired Skills & Experience:",
        p1: "Develop and implement social media strategies to enhance brand visibility and engagement across platforms.",
        p2: "Create compelling content including posts, graphics, and videos to resonate with our target audience..",
        p3: "Manage day-to-day activities on various social media channels, ensuring consistent brand voice and messaging.",
        p4: "Stay up-to-date with industry trends and best practices to maintain a competitive edge.",
        p5: "Monitor and analyze performance metrics, providing insights and recommendations for optimization.",
    },
    {
        img: "https://digiphlox.com/wp-content/uploads/2020/01/why-choose-us-1.jpg",
        tital: "Sales Executive",
        desc: "Desired Skills & Experience:",
        p1: "Develop and maintain strong relationships with prospective clients, understanding their needs and offering tailored digital marketing solutions",
        p2: "Identify and prospect new business opportunities through various channels, including cold calling, networking events, and referrals.",
        p3: "Excellent communication and negotiation skills, with the ability to articulate complex concepts in a clear and compelling manner.",
        p4: "Close sales and achieve monthly, quarterly, and annual revenue targets, consistently exceeding expectations.",
    },
    {
        img: "https://digiphlox.com/wp-content/uploads/2024/01/search-engine-marketing-composition-design-1.webp",
        tital: "Creative Head",
        desc: "Desired Skills & Experience:",
        p1: "Lead and inspire a team of designers, copywriters, and other creative professionals to deliver outstanding creative solutions.",
        p2: "Develop and execute creative strategies that align with client objectives and resonate with target audiences.",
        p3: "Stay informed about industry trends, emerging technologies, and best practices to drive continuous improvement and innovation.",

    },
    {
        img: "https://digiphlox.com/wp-content/uploads/2024/02/6-4.webp",
        tital: "PPC Expert",
        desc: "Desired Skills & Responsibilities:",
        p1: "Develop and execute PPC strategies to achieve client objectives",
        p2: "Conduct keyword research, ad copywriting, and campaign setup and optimization.",
        p3:"Monitor campaign performance and provide regular performance reports and insights..",

    },
    {
        img: "https://digiphlox.com/wp-content/uploads/2024/03/10660.jpg",
        tital: "Digital Marketing Executive with AI Tools Expertise",
        desc: "Desired Skills & Experience:",
        p1: "Develop and implement innovative digital marketing strategies leveraging AI tools to optimize performance across various channels.",
        p2: "Stay updated on the latest trends and advancements in AI tools and digital marketing techniques, continuously seeking opportunities for improvement and innovation.",
        p3:"Solid understanding of SEO, SEM, social media marketing, email marketing, and other digital marketing channels.",

    },
    {
        img: "https://digiphlox.com/wp-content/uploads/2024/04/shutterstock_715216228.jpg",
        tital: "Receptionist",
        desc: "Desired Skills & Responsibilities:",
        p1: "Excellent verbal and written communication skills are crucial for conveying professionalism and providing helpful assistance..",
        p2: "Schedule appointments and maintain calendars for meetings and conference rooms.",
        p3:"Assist with administrative tasks such as data entry, filing, and preparing documents.",
        p4:"Provide information about the agency's services, offerings, and office procedures with enthusiasm and accuracy.",
        p5:"Provide general administrative support to the team as requested.",

    },
    {
        img: "https://digiphlox.com/wp-content/uploads/2024/04/man_with_papers_1_8de85b94d7.jpg",
        tital: "BD Officer (Business Development)",
        desc: "Desired Skills & Experience:",
        p1: "Proactively reach out to prospective clients through cold calling, networking events, and other lead generation activities.",
        p2: "Cultivate strong relationships with existing clients to understand their needs and goals.",
        p3:"Regularly communicate with clients to assess satisfaction levels and identify opportunities for upselling or cross-selling our services..",
        p4:"Work closely with internal teams to ensure smooth transition and implementation of new client projects.",
        },
]

function CareerPage() {
    const [link, setLink] = useState("");
    const [file, setFile] = useState(null);

    const handleNameChange = (e) => {
        setLink(e.target.value);
    };

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Process form submission here
        console.log("Link:", link);
        console.log("File:", file);
        // You can send data to backend or do other operations here
    };

    return (
        <Layout>
            <div className="img">
                <img className='w-full md:h-[30em] opacity-50 h-[20em]' src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            </div>
            <div className="container mx-auto">
                <h1 className='text-2xl md:text-3xl lg:text-4xl text-deep-orange-600 font-bold py-3'>Join our Team</h1>
                <h2 className='text-balance pb-7'>We are a dynamic and rapidly growing digital marketing agency, committed to delivering cutting-edge solutions for our clients. If you are passionate about digital marketing and eager to make a significant impact in the industry, Digiphlox is the place for you. </h2>
            </div>
            <div className="box bg-gray-100 pt-16 ">
                <div className="container mx-auto  p-2">
                    <div className="items  ">
                        <div className="subitems grid grid-cols-1 md:grid-cols-2">
                            {itemslist.map((item, index) => (
                                <div key={index} className="inner_box m-2 p-2 md:m-4 bg-white">
                                    <img src={item.img} alt="" />
                                    <h1 className='text-2xl font-bold text-deep-orange-500 py-2'>{item.tital}</h1>
                                    <h2 className='text-xl font-bold text-black/60'>{item.desc}</h2>
                                    <p className='p-2 text-balance'>{item.p1}</p>
                                    <p className='p-2 text-balance'>{item.p2}</p>
                                    <p className='p-2 text-balance'>{item.p3}</p>
                                    <p className='p-2 text-balance'>{item.p4}</p>
                                    <p className='p-2 text-balance'>{item.p5}</p>
                                    <h1 className='text-center  underline decoration-deep-orange-700 underline-offset-8'>Apply Now</h1>
                                    <div className="inputs ">
                                        <div className="max-w-md mx-auto mt-8 p-6 ">
                                            <form onSubmit={handleSubmit}>
                                                <div className="inpus grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <div className="mb-4">
                                                    <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                                                    LinkedIn Profile Link
                                                    </label>
                                                    <input
                                                        type="link"
                                                        id="link"
                                                        value={link}
                                                        onChange={handleNameChange}
                                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                        placeholder="LinkedIn Profile Link"
                                                        required
                                                    />
                                                </div>
                                                <div className="mb-4">
                                                    <label htmlFor="file" className="block text-gray-700 font-bold mb-2">
                                                    Or Upload Resume
                                                    </label>
                                                    <input
                                                        type="file"
                                                        id="file"
                                                        onChange={handleFileChange}
                                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                        accept=".pdf,.doc,.docx"
                                                        required
                                                    />
                                                </div>
                                                </div>
                                                <div className="flex justify-center">
                                                    <button
                                                        type="submit"
                                                        className=" w-full bg-deep-orange-600 hover:bg-deep-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                                    >
                                                       SEND
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    {/* hello */}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {/* rating */}
                <div className="boxes">
                <div>
            <div className="box hidden md:block">
                <div className="heading flex gap-3 justify-center py-5">
                    <img className='w-12' src="https://digiphlox.com/wp-content/uploads/2019/12/Google-Reviews-transparent-2.png" alt="" />
                    <h1>Google rated us Excellent with the Google Rating of 4.9 out of 5 based on more than 200+ Customer Reviews.</h1>
                </div>
                <div className="img flex gap-12 justify-center">
                    <img className='w-36' src="https://digiphlox.com/wp-content/uploads/2019/12/Asset-3.png" alt="" />
                    <img className='w-36' src="https://digiphlox.com/wp-content/uploads/2019/12/Asset-2.png" alt="" />
                    <img className='w-36' src="https://digiphlox.com/wp-content/uploads/2019/12/Asset-4.png" alt="" />
                    <img className='w-36' src="https://digiphlox.com/wp-content/uploads/2019/12/Asset-6.png" alt="" />
                </div>
            </div>
            <div className="paybox hidden  h-24 bg-gray-400 mt-12 md:flex justify-around items-center">
                <Link to={'https://pages.razorpay.com/pl_Nmyt3WAZ1b2ZW8/view'}><h1 className='cursor-pointer'>Make payments for our services.</h1></Link>
                <div className="img flex">
                    <Link to={'https://pages.razorpay.com/pl_Nmyt3WAZ1b2ZW8/view'}><img src="https://digiphlox.com/wp-content/uploads/2023/02/pay_methods_branding.png" alt="" /> </Link>
                </div>
                <div className="button">
                    <Link to={'https://pages.razorpay.com/pl_Nmyt3WAZ1b2ZW8/view'}> <button className='px-6 py-2 bg-indigo-500 text-white'>Pay Now</button></Link>
                    <img className='w-20' src="https://cdn.razorpay.com/static/assets/powered_by_razorpay.png" alt="" />
                </div>
            </div>

            {/* mobile */}
            <div className="box md:hidden py-6">
                <Link>
              <h1 className='flex justify-center text-xl font-bold text-deep-orange-400 cursor-pointer'>  Click Here To Pay</h1>
                </Link>
            </div>

        </div>
                </div>
            </div>
        </Layout>
    )
}

export default CareerPage

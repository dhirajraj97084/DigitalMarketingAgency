import React from 'react'
import AutoScroll from './autoScroll/AutoScroll'

function OurWorkHome() {
    return (
        <div>
            <div className="box py-8 px-6 md:px-12 lg:px-28 ">
                <div className="heading">
                    <h1 className='font-bold text-deep-orange-500 text-center md:text-start pb-2'>INTRODUCING OUR WORK</h1>
                    <h2 className='text-2xl font-bold md:text-4xl text-black text-center md:text-start'>Allow us to assist you in outperforming your competitors.</h2>
                    <h2 className='py-4 font-semibold text-balance text-center md:text-start'>We deliver to the SEO and web design profession new thinking, flexible approach, solid ethics, and years of experience. As the best digital marketing agency in Haldwani, we prioritise learning about our clients’ company objectives. Following that, all decisions are made with those objectives in mind.</h2>
                    <img className='py-4 w-full h-96' src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />

                    <div className="box py-6 grid grid-cols-1 md:grid-cols-3 gap-4 gap-y-6 ">
                        <div className="item1">
                            <h1 className='text-center md:text-start text-balance text-xl font-bold'>01- Discover</h1>
                            <h2 className='text-center md:text-start text-balance'>We get down with you and learn about what you’re doing now, what you intend to accomplish in the future, and who your target market is.</h2>
                        </div>
                        <div className="item2">
                            <h1 className='text-center md:text-start text-balance text-xl font-bold'>02 - Define</h1>
                            <h2 className='text-center md:text-start text-balance'>Then we characterise the issue so that everyone is on the same page. We will define a solution and plan it out for you, step by step, depending on the situation.</h2>
                        </div>
                        <div className="item3">
                            <h1 className='text-center md:text-start text-balance text-xl font-bold'>03 - Develop</h1>
                            <h2 className='text-center md:text-start text-balance'>Next, we develop a customized solution for you. This could entail creating a wireframe for your new website or creating a step-by-step strategy for social media promotion.</h2>
                        </div>
                    </div>


                </div>
                <div className="boxes mt-5 md:mt-14">
                     <h1 className='text-center text-2xl font-bold text-deep-orange-500'>Our Clients</h1>
                     <h1 className='text-2xl text-center font-bold text-black/60'>Transformed Businesses Through Strategic Digital Marketing.</h1>                      
                      <AutoScroll/>                      
                </div>
            </div>
            <div className="img">
                <img className='w-full' src="https://digiphlox.com/wp-content/uploads/2024/04/Website-Banner-2.jpg" alt="" />
            </div>
        </div>
    )
}

export default OurWorkHome

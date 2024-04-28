import React from 'react'

const cardlist=[
    {
        desc:"If you're looking for the best digital marketing agency in Haldwani, look no further than Digiphlox. Their expertise in website developement and social media marketing is exceptional. With their strategic approach and attention to detail, they have helped my business achieve remarkable growth and establish a strong online presence. I am grateful for their exceptional services.",
        img:"https://digiphlox.com/wp-content/uploads/elementor/thumbs/pexels-italo-melo-2379004-Copy-ppfktrv4zd98xuqxhaqdc2teinh4gfra0ok0755hlk.jpg",
        name:"Surendran Chandra"
    },
    {
        desc:"I am extremely satisfied with Digiphlox's digital marketing services. Their expertise in SEO and website design has helped my Haldwani business gain significant online visibility. I highly recommend them as the most effective digital marketing agency in the area.",
        img:"https://digiphlox.com/wp-content/uploads/elementor/thumbs/pexels-rodnae-productions-7580821-przcnr1098dp98p88e58jzscn3bs3qa450cq98mmvs.jpg",
        name:"Nikita Dhingr"
    },
    {
        desc:"Digiphlox has been crucial to the success of our business in Haldwani. Their digital marketing services, particularly their SEO strategies and website design skills, have helped us stay ahead of the competition. There is no better company in the region than them. Highly recommended.",
        img:"https://digiphlox.com/wp-content/uploads/elementor/thumbs/pexels-abhishek-gaurav-689372-pns1i2obobg0lhilxld2s25dahtb9f3jjmkddelwew.jpg",
        name:"Harvindar Singh"
    },
]

function ClientHeroPage() {
  return (
    <div>
      <div className="box h-fit bg-deep-orange-300 rounded-t-[16rem]  ">
         <div className="heading pt-12">
            <h1 className='text-center text-white font-semibold'>OUR CLIENTS GET RESULTS</h1>
            <h1 className='text-center text-white font-semibold text-2xl lg:text-4xl'>What Our Clients Are Saying</h1>
         </div>
         <div className="cart">
            <div className="box grid grid-cols-1 md:grid-cols-3 ">
                {cardlist.map((item,index)=>(
                    <div key={index} className="cart bg-white rounded-md  m-4 px-8 lg:my-12 py-12">
                      <h1 className='font-bold'>{item.desc}</h1>
                      <div className="box flex gap-7 pt-6">
                        <img className='w-16 h-16 rounded-full' src={item.img} alt="" />
                        <span className='flex flex-col '>
                        <h1 className='text-xl font-bold'>{item.name}</h1>
                        <h1 className='font-thin'>client</h1>
                        </span>
                      </div>
                    </div>
                ))}
            </div>
         </div>
      </div>
    </div>
  )
}

export default ClientHeroPage

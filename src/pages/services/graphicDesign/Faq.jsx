


import React, { useState } from 'react';

import { FaQuoteLeft } from 'react-icons/fa';

const Faq = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: ' 1. What Is Graphic Designing?',
            answer: 'Graphic designing is a creative process that involves combining visual elements such as images, typography, and colors to communicate a message or convey information.',
        },
        {
            question: '2.Which software is commonly used in graphic design?',
            answer: 'Adobe Creative Suite is widely used, including Photoshop for image editing, Illustrator for vector graphics, and InDesign for layout design. Other tools like CorelDRAW and Canva are also popular. .',
        },
        {
            question: '3.What graphic design services do you offer in Haldwani?',
            answer: 'We offer a comprehensive range of graphic design services, including logo design, brand identity, print design, social media graphics (festival creatives), and more.',
        },
        {
            question: '4.Can I request revisions to the designs?',
            answer: 'Yes, Digiphlox allows for a certain number of revisions to ensure the final designs meet your expectations.',
        },
        {
            question: '5.What Package Should I Choose?',
            answer: 'You can select as per your brand requirement. Contact us to know more about pricing.',
        },
        {
            question: '6.What Details I Have To Provide?',
            answer: 'You have to provide certain details to our team:            1- Key Information – Provide relevant text, images, and other content needed for the designs, ensuring accuracy and clarity.',
        },
      
      
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="div">
            <div className="  mt-14 px-4 md:px-8 lg:max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
                {faqs.map((faq, index) => (
                    <div key={index} className="mb-4">
                        <button
                            onClick={() => toggleFAQ(index)}
                            className=" w-full text-left p-4 bg-gray-100 rounded-lg shadow-md focus:outline-none"
                        >
                            <span className="font-semibold">{faq.question}</span>
                        </button>
                        <div
                            className={`overflow-hidden transition-max-height duration-300 ease-in-out ${openIndex === index ? 'max-h-96' : 'max-h-0'
                                }`}
                        >
                            <div className="p-4 bg-gray-50 rounded-lg shadow-inner">
                                <p>{faq.answer}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>           
        </div>
    );
};

export default Faq;
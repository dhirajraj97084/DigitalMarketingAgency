import React, { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    reason: "",
    message: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // You can do something with the form data here, like submitting it to a server
  };
  return (
    <div className="flex bg-gray-100 pt-10 ">
      <div className="left  p-8  hidden lg:block">
        <img className="rounded-full" src="img/one_11zon.jpg" alt="img" />
      </div>
      {/* contactForm */}
      <div className="right">
        <div className="heading">
          <h1 className="text-xl text-deep-purple-500  font-bold text-center pb-4">
            GET YOUR BROCHURE !
          </h1>
          <h2 className="text-3xl text-black/60 text-balance text-center">
            Discover Our Digital Marketing Service Brochure and Boost Your
            Business Today
          </h2>
        </div>
        <div className="form pt-5">
          <div className="max-w-md mx-auto p-6 ">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="firstName"
                  className="block mb-1 font-medium"
                ></label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="First Name:"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-md outline-none border-deep-purple-500 "
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="lastName"
                  className="block mb-1 font-medium"
                ></label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Last Name:"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full px-3 py-2 outline-none border-deep-purple-500  border rounded-md"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="phoneNumber"
                  className="block mb-1 font-medium"
                ></label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  placeholder="Phone Number:"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border outline-none border-deep-purple-500  rounded-md"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block mb-1 font-medium"
                ></label>
                <input
                  type="email"
                  placeholder="Email:"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full outline-none border-deep-purple-500  px-3 py-2 border rounded-md"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="reason"
                  className="block mb-1 font-medium"
                ></label>
                <select
                  id="reason"
                  name="reason"
                  value={formData.reason}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border outline-none border-deep-purple-500  rounded-md"
                  required
                >
                  <option value="">Select Service</option>
                  <option value="question">Social Media Marketin</option>
                  <option value="feedback">Digital Marketing</option>
                  <option value="support">SEO</option>
                  <option value="other">Graphic Design</option>
                  <option value="other">Web Design</option>
                  <option value="other">Online Advertising</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block mb-1 font-medium">
                  Message:
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full outline-none border-deep-purple-500  px-3 py-2 border rounded-md"
                  rows="4"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-deep-purple-500  text-white font-semibold px-4 py-2 rounded-md "
              >
                GET NOW
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;

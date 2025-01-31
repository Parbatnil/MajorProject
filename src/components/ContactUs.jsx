import React from "react";
import image from "/images/contact.webp";
import bgimg from "../../public/images/ContactusBackground.svg";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoPinterest } from "react-icons/io";
import { FaSquareXTwitter } from "react-icons/fa6";
import { useForm } from "react-hook-form";
const ContactUs = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data, e) => {
    e.preventDefault();
    e.target.submit(data);
  };
  return (
    <div className="flex my-8 justify-center items-center w-full  flex-col space-y-4 ">
      <div className="bg-grey-500 relative mx-20">
        <div>
          <img src={bgimg} alt="image not loaded" className="w-screen" />
        </div>

        <div className="flex flex-col justify-center items-center space-y-3 absolute -top-20  left-0 w-full h-full bg-opacity-50">
          <h4 className="text-blue-600">Contact us</h4>
          <h2 className="text-5xl font-bold">We're here to help</h2>
          <div className="flex gap-10 justify-center items-center my-2">
            <div className="flex flex-col bg-[#066ac9] rounded-xl space-y-3 text-white p-10 items-center">
              <h3 className="font-bold text-xl">Customer Support</h3>
              <h6>Chicago HQ Estica Cop. Macomb, MI 48042</h6>
              <h5>(423) 733-8222</h5>
              <h6>example@email.com</h6>
            </div>
            <div className="flex flex-col rounded-xl space-y-3 p-10 items-center shadow-lg shadow-gray-300  bg-gray-200">
              <h3 className="font-bold text-xl">Contact Address</h3>
              <h6>2492 Centennial NW, Acworth, GA, 30102</h6>
              <h5>+896-789-546</h5>
              <h6>example@email.com</h6>
            </div>
            <div className="flex flex-col rounded-xl space-y-3 p-10 items-center shadow-lg shadow-gray-300 bg-gray-200">
              <h3 className="font-bold text-xl">Main Office Address</h3>
              <h6> 2002 Horton Ford Rd, Eidson, TN, 37731</h6>
              <h5> (678) 324-1251</h5>
              <h6>example@email.com</h6>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center w-full my-8 space-y-6 ">
        {/* Content Wrapper */}
        <div className="flex flex-col md:flex-row items-center justify-center max-w-[100%] space-x-0 md:space-x-10 ">
          {/* Image & Social Media */}
          <div className="flex flex-col items-center md:items-start mx-4 md:mx-16 my-4 ">
            <img src={image} alt="Contact" className="w-[20rem] md:w-[25rem]" />
            <div className="flex items-center justify-center mt-4  ">
              <h6 className="text-xl font-bold">Follow us on:</h6>
              <div className="flex justify-center items-center space-x-5 mx-2 ">
                <FaFacebook className="text-2xl text-blue-600" />
                <FaInstagram className="text-2xl text-pink-500" />
                <FaSquareXTwitter className="text-2xl text-black" />
                <FaLinkedin className="text-2xl text-blue-800" />
                <IoLogoPinterest className="text-2xl text-red-500" />
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="flex flex-col space-y-4 w-[42rem]   text-center md:text-left">
            <h1 className="text-4xl font-bold">Let's Talk</h1>
            <h6 className="text-md text-gray-500 max-w-md">
              To request a quote or meet up for coffee, contact us directly or
              fill out the form, and we will get back to you promptly.
            </h6>
            <form
              action="https://formspree.io/f/xnnqyjnj"
              onSubmit={handleSubmit(onSubmit)}
              method="POST"
              className="flex flex-col space-y-4 mt-4"
            >
              {/* Name Field */}
              <div>
                <label htmlFor="username" className="text-slate-500">
                  Your Name *
                </label>
                <input
                  {...register("username", {
                    required: "Username is required",
                    minLength: {
                      value: 3,
                      message: "Must be at least 3 characters",
                    },
                    pattern: {
                      value: /^[A-Za-z\s]+$/i,
                      message: "Numbers are not allowed",
                    },
                  })}
                  type="text"
                  autoComplete="off"
                  className={`p-4 rounded-md w-full my-2 ${
                    errors.username
                      ? "border-red-600 bg-red-50 outline-red-600"
                      : "bg-slate-100 outline-blue-400"
                  }`}
                />
                {errors.username && (
                  <p className="text-red-600">{errors.username.message}</p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="text-slate-500">
                  Email Address *
                </label>
                <input
                  {...register("email", {
                    required: "Email is required",
                    minLength: { value: 6, message: "Invalid email" },
                    pattern: {
                      value:
                        /^[A-Za-z][A-Za-z0-9._%+-]*@(gmail\.com|yahoo\.com|hotmail\.com)$/,
                      message:
                        "Enter a valid email (Gmail, Yahoo, Hotmail only)",
                    },
                  })}
                  type="email"
                  autoComplete="off"
                  className={`p-4 rounded-md w-full my-2 ${
                    errors.email
                      ? "border-red-600 bg-red-50 outline-red-600"
                      : "bg-slate-100 outline-blue-400"
                  }`}
                />
                {errors.email && (
                  <p className="text-red-600">{errors.email.message}</p>
                )}
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="text-slate-500">
                  Message *
                </label>
                <textarea
                  {...register("textarea", { required: "Message is required" })}
                  cols="36"
                  rows="3"
                  placeholder="Enter your message..."
                  autoComplete="off"
                  className={`p-4 rounded-md w-full my-2 ${
                    errors.textarea
                      ? "border-red-600 bg-red-50 outline-red-600"
                      : "bg-slate-100 outline-blue-400"
                  }`}
                ></textarea>
                {errors.textarea && (
                  <p className="text-red-600">{errors.textarea.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <input
                type="submit"
                value="Send Message"
                className="bg-blue-500 w-full text-white px-4 py-3 rounded-md font-bold hover:bg-blue-700 cursor-pointer"
              />
            </form>
          </div>
        </div>
      </div>

      {/* Maps Section */}
      <div className="flex justify-center items-center w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.07827328958!2d88.42445437475723!3d22.576175632840286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02751a9d9c9e85%3A0x7fe665c781b10383!2sTechno%20Main%20Salt%20Lake!5e0!3m2!1sen!2sin!4v1738122037639!5m2!1sen!2sin"
          width="1200"
          height="400"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          className="rounded-xl"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUs;

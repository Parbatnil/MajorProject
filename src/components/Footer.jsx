import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";


const Footer = () => {
  return <div>
    <div className="container grid  gap-8 grid-cols-2 sm:grid-cols-12 sm:m-4 sm:ml-28 ml-4">
        <div className="footer-about sm:col-span-3">
        <h2 className="text-xl font-bold mb-3">Logo </h2>
          <p>
            Eduport education theme, built specifically for the education
            centers which is dedicated to teaching and involve learners.
          </p>
          <div className="footer-social-icon flex flex-row gap-2 m-2">
            <div>
              <FaFacebook className="icons" />
            </div>
            <div>
              <FaInstagram className="icons" />
            </div>
            <div>
              <FaTwitter className="icons" />
            </div>
            <div>
              <CiLinkedin className="icons" />
            </div>
          </div>
        </div>
        <div className="Company sm:col-span-2">
          <h2 className="text-xl font-bold mb-3">Company </h2>
          <p className="hover:text-blue-600">About us</p>
          <p className="hover:text-blue-600">Contact us</p>
          <p className="hover:text-blue-600">News and Blogs</p>
          <p className="hover:text-blue-600">Library</p>
          <p className="hover:text-blue-600">Career</p>
        </div>

        <div className="community sm:col-span-2">
          <h5 className="text-xl font-bold mb-3">Community</h5>
          <p className="hover:text-blue-600">Documentation</p>
          <p className="hover:text-blue-600">Faq</p>
          <p className="hover:text-blue-600">Forum</p>
          <p className="hover:text-blue-600">Sitemap</p>
        </div>

        <div className="teaching sm:col-span-2">
          <h5 className="text-xl font-bold mb-3">Teaching</h5>
          <p className="hover:text-blue-600">Become a teacher</p>
          <p className="hover:text-blue-600">How to guide</p>
          <p className="hover:text-blue-600">Terms & Condition</p>
        </div>

        <div className="Contact sm:col-span-3">
          <h5 className="text-xl font-bold mb-3">Contact</h5>
          <a href="tel:1234567890">+91 1234567890</a>
          {/* <p>+91 1234567890</p> */}
          <p>Toll free (9:AM to 8:PM IST)</p>
          <p>Email - example@gmail.com</p>
        </div>
      </div>

  </div>;
};

export default Footer;

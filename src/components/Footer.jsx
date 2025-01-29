import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

const Footer = () => {
  return (
    <div>
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
          <p>Contact us</p>
          <p>News and Blogs</p>
          <p>Library</p>
          <p>Career</p>
        </div>

        <div className="community sm:col-span-2">
          <h5>Community</h5>
          <p>Documentation</p>
          <p>Faq</p>
          <p>Forum</p>
          <p>Sitemap</p>
        </div>

        <div className="teaching sm:col-span-2">
          <h5>Teaching</h5>
          <p>Become a teacher</p>
          <p>How to guide</p>
          <p>Terms & Condition</p>
        </div>

        <div className="Contact sm:col-span-3">
          <h5>Contact</h5>
          <a href="tel:1234567890">+91 1234567890</a>
          {/* <p>+91 1234567890</p> */}
          <p>Toll free (9:AM to 8:PM IST)</p>
          <p>Email - example@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

import React from "react";
import { Link } from "react-router-dom";

const Footer = ({heroapi}) => {
  return (
    <footer className="bg-dark-blue text-white pt-8">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-start px-4 lg:px-12">
        {/* Logo and Quick Links */}
        <div className="flex flex-col items-start lg:w-1/3 mb-6 lg:mb-0">
        <Link to="/" className='flex bg-white p-2 rounded-xl items-center gap-2'> 
            <img src={heroapi.logo} alt="CampusCare" className="w-10 h-auto" />
            <span className='text-dark-blue font-bold text-xl'>CampusCare</span>
          </Link>
        </div>
        
        {/* Quick Links */}
        <div className="lg:w-1/3 mb-6 lg:mb-0">
          <h3 className="text-lg font-bold mb-4">Quick Links</h3>
          <ul>
            <li className="mb-2"><a href="#" className="text-white hover:text-yellow">Home</a></li>
            <li className="mb-2"><a href="#" className="text-white hover:text-yellow">About</a></li>
            <li><a href="#" className="text-white hover:text-yellow">Contact</a></li>
          </ul>
        </div>
        
        {/* Contact Section */}
        <div className="lg:w-1/3">
          <h3 className="text-lg font-bold mb-4">Contact</h3>
          <ul>
            <li className="mb-2 flex items-center">
              <span className="mr-2">📞</span> 
              <span>993-011-2892</span>
            </li>
            <li className="mb-2 flex items-center">
              <span className="mr-2">✉️</span> 
              <span>contact@campuscare.in</span>
            </li>
            <li className="mb-2 flex items-center">
              <span className="mr-2">📍</span> 
              <span>Mumbai-400 083</span>
            </li>
          </ul>
        </div>
      </div>
      
      {/* Social Icons and Credits */}
      <div className="py-4">
        <div className="container flex flex-col lg:flex-row justify-end items-center px-4 lg:px-12">
          <div className="flex space-x-4">
            <a href="#"><i className="text-yellow fab fa-linkedin"></i></a>
            <a href="#"><i className="text-yellow fa fa-globe"></i></a>
            <a href="#"><i className="text-yellow fab fa-facebook"></i></a>
            <a href="#"><i className="text-yellow fab fa-instagram"></i></a>
            <a href="#"><i className="text-yellow fab-x-twitter"></i></a>
          </div>
        </div>

        <div className="flex items-center justify-center m-2">
            <p className="text-sm text-center lg:text-left mb-4 lg:mb-0">
                Made with ❤️ by <a href="#" className="text-yellow">Git_win_it</a> ©
            </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

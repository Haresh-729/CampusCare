import React, { useState, useEffect } from 'react';
import { useLocation, Link, useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';

const Navbar = ({ heroapi }) => {
  const dispatch = useDispatch();
  const location = useLocation(); // Get the current path
  const [navstate, setNavState] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const onNavScroll = () => {
    if (window.scrollY > 30) {
      setNavState(true);
    } else {
      setNavState(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', onNavScroll);
    return () => {
      window.removeEventListener('scroll', onNavScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/register/false");
  }
  const handelRegister = () => {
    navigate("/register/true");
  }
  const hC = () => {
    navigate("/");
  }

  return (
    <header className={`${navstate ? 'fixed bg-white shadow-lg' : 'absolute'} w-full top-0 z-50 transition-all duration-300`}>
      <nav className="flex justify-between items-center p-5 lg:px-10">
        <div>
          <Link to="/" className="flex items-center gap-2">
            <img src={heroapi.logo} alt="CampusCare" className="w-10 h-auto" />
            <span className="text-dark-blue font-bold text-xl">CampusCare</span>
          </Link>
        </div>
        <div className="hidden lg:flex space-x-6 items-center">
          <Link to="/" className={`${location.pathname === "/" ? "text-yellow" : "text-dark-blue"} font-bold hover:text-yellow`}>
            Home
          </Link>
          <Link to="/about" className={`${location.pathname === "/about" ? "text-yellow" : "text-dark-blue"} font-bold hover:text-yellow`}>
            About
          </Link>
          <Link to="/services" className={`${location.pathname === "/services" ? "text-yellow" : "text-dark-blue"} font-bold hover:text-yellow`}>
            Services
          </Link>
          <Link to="/contact" className={`${location.pathname === "/contact" ? "text-yellow" : "text-dark-blue"} font-bold hover:text-yellow`}>
            Contact
          </Link>
          <Link to="/login">
            <button className="bg-dark-blue text-white px-4 rounded-3xl hover:bg-yellow">Login</button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden">
          <button onClick={toggleMobileMenu}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`${mobileMenuOpen ? 'block' : 'hidden'} lg:hidden bg-white shadow-lg absolute w-full z-40`}>
        <div className="flex flex-col items-center py-4 space-y-4">
          <Link to="/" className={`${location.pathname === "/" ? "text-yellow" : "text-black"} font-bold hover:text-yellow`}>
            Home
          </Link>
          <Link to="/about" className={`${location.pathname === "/about" ? "text-yellow" : "text-black"} font-bold hover:text-yellow`}>
            About
          </Link>
          <Link to="/services" className={`${location.pathname === "/services" ? "text-yellow" : "text-black"} font-bold hover:text-yellow`}>
            Services
          </Link>
          <Link to="/contact" className={`${location.pathname === "/contact" ? "text-yellow" : "text-black"} font-bold hover:text-yellow`}>
            Contact
          </Link>
          <Link to="/login">
            <button className="bg-dark-blue border-none text-white px-4 rounded-3xl hover:bg-yellow">Login</button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const dispatch = useDispatch();
  
  const [navstate, setNavState] = useState(false);
  const onNavScroll = () => {
    if(window.scrollY > 30){
      setNavState(true);
    }else{
      setNavState(false);
    }
  }
  useEffect(() =>{
    window.addEventListener('scroll', onNavScroll);
    return() => {
      window.removeEventListener('scroll', onNavScroll)
    }
  }, []);

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/register/false")
  }
  const handelRegister = () => {
    navigate("/register/true")
  }
  const hC = () => {
    navigate("/")
  }
  return (
    <>
      <header className={!navstate ? "absolute top-7 left-0 right-0 opacity-100 z-50" : "fixed top-0 left-0 right-0 h-[9vh] flex items-center justify-center opacity-100 z-[200] transition-all duration-300 bg-[#f7cbbc7a]"}>
        <nav className="flex items-center justify-between thrift-container">
          <div className="flex items-center">
            <img src={"#"} alt="logo/img" className={`h-auto w-[8rem]`} />
          </div>
          <div className="flex-row gap-5 text-black ">
            <span className=" mx-[1rem]" onClick={hC}>
              <Link className="text-black font-bold text-[1rem]" smooth duration={500}>
                Home
              </Link> 
            </span>
            <span className=" mx-[1rem]"> 
              <Link to="About" className="text-black  hover:text-[#213547] font-bold text-[1rem]" smooth duration={500}>
                About
              </Link> 
            </span>
            <span className=" mx-[1rem]">
              <Link to="Services" className="text-black hover:text-[#213547] font-bold text-[1rem]" smooth duration={500}>
                Services
              </Link> 
            </span>
            <span className=" mx-[1rem]">
              <Link to="Footers" className="text-black hover:text-[#213547] font-bold text-[1rem]" smooth duration={500}>
                Contact
              </Link> 
            </span>
            <button className="hover:bg-[#213547] font-serif font-bold bg-[#f7cbbc] mx-[1rem] hover:text-[#f7cbbc] text-[#213547]" onClick={handleClick}>
              Login
            </button>
            <button className="bg-[#213547] font-serif font-bold hover:bg-[#f7cbbc] mx-[1rem] text-[#f7cbbc] hover:text-[#213547]" onClick={handelRegister}>
              Register
            </button>
        </div>
        </nav>
      </header>
    </>
  )
}

export default Navbar
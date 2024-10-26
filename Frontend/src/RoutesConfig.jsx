import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import {  useSelector } from 'react-redux';

import { Navbar, Error, Hero, Services, AboutUs, Footer, ContactUs, Login, Dashboard } from './components';
import { heroapi, servicesData, popularsales, toprateslaes, highlight, sneaker, story, footerAPI, aboutData} from "./data/data";
import ExamplePage from './components/utils/ExamplePage';
import Example2 from './components/utils/Example2';



const RoutesConfig = () => {
    // const isLoggedIn = useSelector(isUserLoggedIn);
  return (
    <>
        <Routes>
            <Route path="/" element={[<Navbar heroapi={heroapi}/>, <Hero heroapi={heroapi}/>, <Footer heroapi={heroapi}/>]} />
            <Route path="/services" element={[<Navbar heroapi={heroapi}/>, <Services servicesData={servicesData}/>, <Footer heroapi={heroapi}/>]} />
            <Route path="/about" element={[<Navbar heroapi={heroapi}/>, <AboutUs/>, <Footer heroapi={heroapi}/>]} />
            <Route path="/contact" element={[<Navbar heroapi={heroapi}/>, <ContactUs/>, <Footer heroapi={heroapi}/>]} />
            <Route path="/login" element={[<Navbar heroapi={heroapi}/>, <Login/>, <Footer heroapi={heroapi}/>]} />            
            <Route path="/example1" element={[<ExamplePage/>]} />            
            <Route path="/example2" element={[<Example2/>]} />            
            <Route path="/Dashboard" element={<Dashboard/>}/>        

            {/* <Route path="/register/:flag" element={<RegisterLogin/>}/>
            <Route path="/verify_email" element={<VerifyEmail/>}/> */}

            {
                // isLoggedIn && (
                //     <Route path="/Dashboard" element={<Dashboard/>}/>
                // )
            }
           <Route path='*' element={<Error/>}/>
        </Routes>
    </>
  )
}

export default RoutesConfig
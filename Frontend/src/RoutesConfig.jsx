import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import {  useSelector } from 'react-redux';

import { Navbar, Error } from './components';
import { heroapi, popularsales, toprateslaes, highlight, sneaker, story, footerAPI, aboutData} from "./data/data";



const RoutesConfig = () => {
    // const isLoggedIn = useSelector(isUserLoggedIn);
  return (
    <>
        <Routes>
            <Route path="/" element={[<Navbar/>]} />
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
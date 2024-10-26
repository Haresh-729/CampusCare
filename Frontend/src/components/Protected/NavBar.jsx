import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { dashboardMenuState, selectAccount, setCloseDMenu, setDFeature } from '../../app/DashboardSlice';
import { Bars4Icon } from "@heroicons/react/24/solid"

import logo from "../../assets/landing/logo.svg";
import profile from "../../assets/landing/profileicon.avif";


function NavBar() {
  const dispatch = useDispatch();
  const ifDMenuState = useSelector(dashboardMenuState);
  const acc = useSelector(selectAccount);

  const onMenuToggle = () => {
    dispatch(setCloseDMenu({
      dashboardMenuState: !ifDMenuState
    }))
  };
  const handlefeature = (feature) => {
    dispatch(setDFeature({
      dashboardFeature: feature
    }));
  }  

  return (
    <div className=" flex w-full sticky top-0 z-50 bg-[#ffffff] drop-shadow-xl">
      <div className="flex w-full px-[1rem] justify-between items-center ">
        <div>
          <img className=" w-[3rem] sm:w-[3rem] m-2 lg:ml-6" src={logo} alt="logo" onClick={() => {onMenuToggle()}}/>
        </div>
    <div className="flex items-center ">
    <div className="relative hidden sm:flex place-content-center items-center w-min-auto lg:w-[40rem] ">
      <input
      type="search"
      className="relative shadow-xl flex-auto border  rounded-full bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-gray outline-none transition duration-200 ease-in-out focus:z-[3] focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
      placeholder="Search"
      aria-label="Search"
      aria-describedby="button-addon2" />

     <span
      className="input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-neutral-700"
      id="basic-addon2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-6 w-6">
        <path
          fillRule="evenodd"
          d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
          clipRule="evenodd" />
      </svg>
     </span>
    </div>
    </div>
        <div className="flex flex-row w-[20%] place-content-end items-center text-black ">
          <div className="flex flex-row w-auto mx-[.6rem]  ">
            <div className="flex items-center w-auto border shadow-xl rounded-2xl ">
              <img className="w-[2rem] m-1 rounded-full" src={acc.avatar ? acc.avatar : profile} alt="profile" />
              <h1 className="text-sm font-bold text-black p-2 hidden sm:flex">{acc.uname} </h1>
            </div> 
          </div>
          <Bars4Icon className="w-10 h-8" onClick={() => {onMenuToggle()}}/>
        </div>

      </div>

    </div>
  );
}

export default NavBar;
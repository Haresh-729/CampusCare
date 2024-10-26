import React from 'react'
import { RiAddLine } from 'react-icons/ri'; // Import the plus icon from React Icons
import {HomeIcon, UserIcon,BellAlertIcon, EnvelopeOpenIcon, BuildingStorefrontIcon, Bars4Icon, ArrowLeftIcon, ChevronDoubleLeftIcon, GlobeEuropeAfricaIcon} from "@heroicons/react/24/solid";
import { useDispatch, useSelector } from 'react-redux'
import { dashboardFeature, dashboardMenuState, setCloseDMenu, setDFeature } from '../../app/DashboardSlice.js';
// import {  setSubFeature  } from '../../app/SocialSlice';

const Sidebar = ({isOpen}) => {
    const dispatch = useDispatch();
    const ifDMenuState = useSelector(dashboardMenuState);
    const DFeatureState = useSelector(dashboardFeature);
    const onCartToggler = () => {
        dispatch(setCloseDMenu({
        dashboardMenuState: !ifDMenuState
        }))
    };
    const chnageFeatutre = (feature) => {
        dispatch(setDFeature({
            dashboardFeature: feature,
        }))
    }
  //   const chnageSubFeature = () => {
  //     dispatch(setSubFeature({
  //       subFeature: "home", 
  //   }))
  // }


  return (
    <>
        <div id='sidebar' className={`${isOpen ? 'visible': 'invisible'} bg-dark-blue z-50 flex flex-row transition-all duration-300 cursor-pointer w-[98%] md:flex-col md:w-[15%] gap-4 items-center justify-center md:items-start md:justify-start px-4 py-2 border-[#F7CBBC] shadow-2xl rounded-2xl  absolute bottom-10 md:top-20 bg-white`}>
            <div className={`flex flex-row w-full items-center justify-end invisible ${isOpen ? 'md:visible' : 'md:invisible'}`}>
                <ChevronDoubleLeftIcon onClick={onCartToggler} className="icon-style-dash w-[1.54rem] h-[1.54rem] font-bold"/>
            </div>
            <div className={`flex flex-col md:flex-row md:w-full hover:bg-[#F7CBBC] md:py-2 md:pl-1 items-center justify-items-center rounded-xl ${DFeatureState == 'dashboard' && 'bg-[#F7CBBC]'}`} onClick={() => {chnageFeatutre('dashboard')}}>
              <HomeIcon className="icon-style-dash w-[1.54rem] h-[1.54rem]"/>
              <span className="text-sm font-poppins font-bold rounded-xl px-2">Dashboard</span>
            </div>
            <div className={`flex flex-col md:flex-row  md:w-full hover:bg-[#F7CBBC] md:py-2 md:pl-1 items-center justify-items-center rounded-xl ${DFeatureState == 'social' && 'bg-[#F7CBBC]'}`} onClick={() => {chnageFeatutre('social'); chnageSubFeature()}}>
              <GlobeEuropeAfricaIcon className="icon-style-dash w-[1.54rem] h-[1.54rem]"/>
              <span className="text-sm font-poppins font-bold rounded-xl px-2">Social</span>
            </div>
            <div className={`flex flex-col md:flex-row  md:w-full hover:bg-[#F7CBBC] md:py-2 md:pl-1 items-center justify-items-center rounded-xl ${DFeatureState == 'orders' && 'bg-[#F7CBBC]'}`} onClick={() => {chnageFeatutre('orders')}}>
              <BuildingStorefrontIcon className="icon-style-dash w-[1.54rem] h-[1.54rem]"/>
              <span className="text-sm font-poppins font-bold rounded-xl px-2">Orders</span>
            </div>
            <div className={`flex flex-col md:flex-row  md:w-full hover:bg-[#F7CBBC] md:py-2 md:pl-1 items-center justify-items-center rounded-xl ${DFeatureState == 'appointment' && 'bg-[#F7CBBC]'}`} onClick={() => {chnageFeatutre('appointment')}}>
              <BellAlertIcon className="icon-style-dash w-[1.54rem] h-[1.54rem]"/>
              <span className="text-sm font-poppins font-bold rounded-xl px-2">Appointment</span>
            </div>
            <div className={`flex flex-col md:flex-row  md:w-full hover:bg-[#F7CBBC] md:py-2 md:pl-1 items-center justify-items-center rounded-xl ${DFeatureState == 'profile' && 'bg-[#F7CBBC]'}`} onClick={() => {chnageFeatutre('profile')}}>
              <UserIcon className="icon-style-dash w-[1.54rem] h-[1.54rem]"/>
              <span className="text-sm font-poppins font-bold rounded-xl px-2">Profile</span>
            </div>
            <div className={`flex flex-col md:flex-row  md:w-full hover:bg-[#F7CBBC] md:py-2 md:pl-1 items-center justify-items-center rounded-xl ${DFeatureState == 'sell' && 'bg-[#F7CBBC]'}`} onClick={() => {chnageFeatutre('sell')}}>
              <RiAddLine className="icon-style-dash w-[1.54rem] h-[1.54rem]"/>
              <span className="text-sm font-poppins font-bold rounded-xl px-2">Sell Now</span>
            </div>
          </div>
    </>
  )
}

export default Sidebar
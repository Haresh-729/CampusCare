import React from 'react'
import Features from './Features'
import Sidebar from './Sidebar'
import { useDispatch, useSelector } from 'react-redux'
import { dashboardMenuState, setCloseDMenu } from '../../app/DashboardSlice';
import NavBar from './NavBar';
import {user, healthData, recentRecords, currentTreatments, trackingInfo, orderHistory, deliveryInfo, quickLinks} from '../../data/data.js';

const Dashboard = () => {
  const dispatch = useDispatch();
  const ifDMenuState = useSelector(dashboardMenuState);
  const dashboardProps = {healthData, recentRecords}
  const ordersProps = {currentTreatments, trackingInfo, orderHistory, deliveryInfo, quickLinks}
  return (
    <>
        <div className='w-full h-[98vh] bg-white flex flex-col '>
            <div className="w-full h-full shadow-lg shadow-[#F7CBBC]  bg-white px-3">
                <Sidebar isOpen={ifDMenuState}/>
                <NavBar user={user}/>
                <Features {...dashboardProps} {...ordersProps}/>
            </div>
        </div>
    </>
  )
}

export default Dashboard
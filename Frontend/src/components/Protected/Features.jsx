import { useSelector } from 'react-redux';
import { dashboardFeature } from '../../app/DashboardSlice.js';
import Main from './Student/Main.jsx';
import Orders from './Student/Orders.jsx';
import Appointment from './Student/Appointment.jsx';

import AdminOrders from './Admin/AdminOrders.jsx';
import AdminAppointment from './Admin/AdminAppointment.jsx';

const Features = ({healthData, recentRecords, ...ordersProps }) => {
    const role = 'admin'; //testing purpose
    const DFeatureState = useSelector(dashboardFeature);
    if (DFeatureState === "dashboard") {
        return (
            <div className={`flex items-start justify-center text-xl font-bold h-[87vh] overflow-y-auto scrollbar-hide pt-3`}>
                {role === 'student' && <Main healthData={healthData} recentRecords={recentRecords}/>}
                {role === 'admin' && <Main healthData={healthData} recentRecords={recentRecords}/>}
            </div>
        );
    } else if (DFeatureState === "orders") {
        return (
            <div className={`flex items-start justify-center text-xl font-bold h-[87vh] overflow-y-auto scrollbar-hide pt-3`}>
                {role === 'student' && <Orders {...ordersProps}/>}
                {role === 'admin' && <AdminOrders />}
            </div>
        );
    } else if (DFeatureState === "appointment") {
        return (
            <div className={`flex items-start justify-center text-xl font-bold h-[87vh] overflow-y-auto scrollbar-hide pt-3`}>
                {role === 'student' && <Appointment />}
                {role === 'admin' && <AdminAppointment />}
            </div>
        );
    } else if (DFeatureState === "social") {
        return (
            <div className={`flex items-start justify-center text-xl font-bold h-[87vh] overflow-y-auto scrollbar-hide pt-3`}>Social Feature</div>
        );
    } else if (DFeatureState === "messages") {
        return (
            <div className={`flex items-start justify-center text-xl font-bold h-[87vh] overflow-y-auto scrollbar-hide pt-3`}>Messages Feature</div>
        );
    } else if (DFeatureState === "profile") {
        return (
            <div className={`flex items-start justify-center text-xl font-bold h-[87vh] overflow-y-auto scrollbar-hide pt-3`}>Profile Feature</div>
        );
    } else if (DFeatureState === "sell") {
        return (
            <div className={`flex items-start justify-center text-xl font-bold h-[87vh] overflow-y-auto scrollbar-hide pt-3`}>Sell Feature</div>
        );
    } else {
        return null;
    }
}

export default Features
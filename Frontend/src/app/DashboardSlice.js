import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
const localData = JSON.parse(localStorage.getItem("account"));
const initialState = {
    dashboardMenuState: false,
    dashboardFeature: "home", //home, store, notification, messages, profile
    account: localData ? localData : [],
    isLoggedIn: localData ? localData.isLoggedIn :false,
    profileData: [],
};

const DashboardSlice = createSlice({
    initialState,
    name:  "dashboard",
    reducers: {
        setOpenDMenu: (state, action) => {
            state.dashboardMenuState = action.payload.dashboardMenuState;
        },
        setCloseDMenu: (state, action) => {
            state.dashboardMenuState = action.payload.dashboardMenuState;
        },
        setDFeature: (state, action) => {
            state.dashboardFeature = action.payload.dashboardFeature;
        },
        setAccount: (state, action) =>{
            state.account = action.payload;
            state.isLoggedIn = true;
            const temp = {...state.account, "isLoggedIn": state.isLoggedIn};
            localStorage.setItem("account", JSON.stringify(temp));
        },
        LogOut: (state, action) =>{
            state.account = [];
            state.profileData = [];
            state.isLoggedIn = false;
            state.dashboardMenuState = false;
            state.dashboardFeature = "home";
            // localStorage.removeItem("account");
            localStorage.clear();
        },
        setAccountAfterRegister: (state, action) => {
            state.account = action.payload;
            state.isLoggedIn = false;
            const temp1 = {...state.account, "isLoggedIn": state.isLoggedIn};
            localStorage.setItem("account", JSON.stringify(temp1));
        },
        setProfileData: (state, action) => {
            state.profileData = action.payload;
        },
        setFollowers: (state,action) => {
            state.profileData = {
                ...state.profileData,
                followers: action.payload.followers,
            }
        },
        setFollowings: (state,action) => {
            state.profileData = {
                ...state.profileData,
                followings: action.payload.followings
            }
        },
    }
});

export const {setOpenDMenu, setCloseDMenu, setDFeature, setAccount, setAccountAfterRegister, setProfileData, LogOut, setFollowers, setFollowings} = DashboardSlice.actions;

export const dashboardMenuState = (state) => state.dashboard.dashboardMenuState;
export const dashboardFeature = (state) => state.dashboard.dashboardFeature;
export const isUserLoggedIn = (state) => state.dashboard.isLoggedIn;
export const selectAccount = (state) => state.dashboard.account;
export const selectProfileData = (state) => state.dashboard.profileData;


export default DashboardSlice.reducer;
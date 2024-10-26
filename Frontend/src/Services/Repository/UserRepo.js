import { toast } from "react-hot-toast";
import { apiConnector } from "../Connector";
import { userEndpoints } from "../Apis";

import { LogOut, setAccount, setAccountAfterRegister, setProfileData } from "../../app/DashboardSlice";
import { setUserProfileData } from "../../app/SocialSlice";


const {LOGIN_API, REGISTER_API, VALIDATE_GMAIL, GET_PROFILE, SET_USER_PROFILE, LOGIN_REGISTER_GOOGLE} = userEndpoints;

export function registerLoginGoogle(crediential, navigate){
    return async(dispatch) => {
        const toastId = toast.loading("Letting you In..");
        try{
            const response = await apiConnector("POST", LOGIN_REGISTER_GOOGLE, {crediential})
            // console.log("Login API response : ", response);
            if(response.data.success){
                toast.success("Login Successful..");
                // console.log("l"+ response.data);
                const temp = { "id": response.data.user.loginId, "uname": response.data.user.username, "uemail": response.data.user.useremail,"token":response.data.token,"avatar":response.data.user.avatar}
                dispatch(setAccount(temp))
                navigate("/Dashboard");
              }else{
                throw new Error(response.data.message);
              }
        } catch(error){
            console.log("LOGIN API Error....", error);
            toast.dismiss(toastId);
            toast.error(error.response?.data?.message);
        }
        toast.dismiss(toastId);
    }
}
export function login(email, password, navigate){
    return async(dispatch) => {
        const toastId = toast.loading("Letting you In..");
        let data;
        try{
            const response = await apiConnector("POST",LOGIN_API, {email, password})
            console.log("Login API response : ", response);
            if(response.data.success){
                toast.success("Login Successful..");
                console.log("l"+ response.data);
                const temp = { "id": response.data.user.loginId, "uname": response.data.user.username, "uemail": response.data.user.useremail,"token":response.data.token}
                dispatch(setAccount(temp))
                navigate("/Dashboard");
              }else{
                throw new Error(response.data.message);
              }
        } catch(error){
            console.log("LOGIN API Error....", error);
            toast.dismiss(toastId);
            toast.error(error.response?.data?.message);
        }
        toast.dismiss(toastId);
    }
}
export function register(email, password, username, navigate){
    return async(dispatch) => {
        const toastId = toast.loading("Registering..");
        try{
            const response = await apiConnector("POST", REGISTER_API, {email, password, username})
            console.log("Register API response : ", response);
            if(response.data.success){
                toast.success("Registration Successful..");
                toast.success("Verify your email..");
                const temp = {"token":response.data.token, "id": response.data.user.id,}
                dispatch(setAccountAfterRegister(temp));
                navigate("/verify_email");
                console.log(response);
              }else{
                toast.error(response.data.message);
                throw new Error(response.data.message);
              }
        } catch(error){
            console.log("REGISTRATION API Error....", error);
            toast.error("Registration Failed..");
        }
        toast.dismiss(toastId);
    }
}
export function authEmail(userId, otp, token, navigate){
    return async(dispatch) => {
        const toastId = toast.loading("Registering..");
        try{
            const response = await apiConnector("POST", VALIDATE_GMAIL, {userId, otp}, {Authorization: `Bearer ${token}`,})
            console.log("Validate API response : ", response);
            if(response.data.success){
                toast.success("Validation Successful..");
                navigate("/register/false");
                toast("Please Login...")
                console.log(response);
              }else{
                toast.error(response.data.message);
                throw new Error(response.data.message);
              }
        } catch(error){
            console.log("VALIDATION API Error....", error);
            toast.error("Validation Failed..");
        }
        toast.dismiss(toastId);
    }
}
export function getUserProfile(userId, token, navigate){
    return async(dispatch) => {
        const toastId = toast.loading("Registering..");
        try{
            const response = await apiConnector("GET", GET_PROFILE, {userId}, {Authorization: `Bearer ${token}`,})
            console.log("GetUserProfile response : ", response);
            if(response.status){
                console.log(response.data[0]);
                dispatch(setProfileData(response.data[0]));
              }else{
                toast.error(response.data.message);
                throw new Error(response.data.message);
              }
        } catch(error){
            console.log("GET_USER_PROFILE API Error....", error);
            toast.error("Error Fetching Data.");
        }
        toast.dismiss(toastId);
    }
}

export  const getUserProfileById = async (userId) => {

    try {
        const response = await apiConnector("GET",`${userEndpoints.GET_PROFILE_BY_ID}${userId}`);
        console.log("GetUserProfile response : ", response);

        if(response.status){
            console.log(response.data[0]);
            //dispatch(setUserProfileData(response.data[0]));
          }else{
            toast.error(response.data.message);
            throw new Error(response.data.message);
          }

        return response.data[0];
    } catch (error) {
        console.error("Error fetching user profile data:", error);
    }

};


export function setUserProfile(user, token, navigate){
    return async(dispatch) => {
        const toastId = toast.loading("Registering..");
        const {loginId, username, useremail,lName,fName,phoneNo,bio, gender} = user;
        try{
            const response = await apiConnector("PUT", SET_USER_PROFILE, {loginId, username, useremail,lName,fName,phoneNo,bio, gender}, {Authorization: `Bearer ${token}`,})
            console.log("GetUserProfile response : ", response);
            if(response.status){
                // console.log("SET SUCCESS message: ", response.data.message);
                toast.success("You have a fresh Profile....");
              }else{
                toast.error(response.data.message);
                throw new Error(response.data.message);
              }
        } catch(error){
            console.log("GET_USER_PROFILE API Error....", error);
            toast.error("Error Fetching Data.");
        }
        toast.dismiss(toastId);
    }
}
const BaseURL = "http://localhost:5000/api/";

export const userEndpoints = {
    LOGIN_API: BaseURL + "auth/login",
    REGISTER_API: BaseURL+ "auth/register",
    LOGIN_REGISTER_GOOGLE: BaseURL+ "auth/login_register_google",
    VALIDATE_GMAIL: BaseURL+ "user/authenticateMail",
    GET_PROFILE: BaseURL+ "user/",
    GET_PROFILE_BY_ID: BaseURL+ "user/",
    SET_USER_PROFILE: BaseURL+ "user/updateuser",
}
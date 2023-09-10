import axios from 'axios';
let apiurl = "https://localhost:8080";


export const Signup = async (fields) => {
    return await axios.post(apiurl + "/api/auth/signup", fields)
        .then((res) => {
            return res.data;
        }).catch((error) => {
            // window.location = "/";
            return error;
        });


}

export const LoginForm = async (fields) => {
    return await axios.post(apiurl + "/api/auth/login", fields)
        .then((res) => {
            return res.data;
        }).catch((error) => {
            // window.location = "/";
            return error;
        });


}

export const GetAllTenants = async () => {
    const constuserdetails = JSON.parse(localStorage.getItem('userDetails'));
	
    const headers = {
        'content-type': 'application/json',
        'X-Content-Type-Options': 'nosniff',
        'X-Frame-Options': 'SAMEORIGIN',
        'x-access-token': constuserdetails.token,
        
       

    }
    return await axios.post(apiurl + "/api/tenant/get",{'headers':headers})
        .then((res) => {
            return res.data;
        }).catch((error) => {
            localStorage.removeItem('userDetails');
            window.location.reload();
            return error;
        });


} 


export const SaveTenants = async (data) => {
    const constuserdetails = JSON.parse(localStorage.getItem('userDetails'));
	
    const headers = {
        'content-type': 'application/json',
        'X-Content-Type-Options': 'nosniff',
        'X-Frame-Options': 'SAMEORIGIN',
        'x-access-token': constuserdetails.token,
        
       

    }
    return await axios.post(apiurl + "/api/tenant/save",data,{'headers':headers})
        .then((res) => {
            return res.data;
        }).catch((error) => {
            localStorage.removeItem('userDetails');
            window.location.reload();
            return error;
        });


}

export const UpdateTenants = async (data) => {
    const constuserdetails = JSON.parse(localStorage.getItem('userDetails'));
	
    const headers = {
        'content-type': 'application/json',
        'X-Content-Type-Options': 'nosniff',
        'X-Frame-Options': 'SAMEORIGIN',
        'x-access-token': constuserdetails.token,
        
       

    }
    return await axios.post(apiurl + "/api/tenant/update",data,{'headers':headers})
        .then((res) => {
            return res.data;
        }).catch((error) => {
            localStorage.removeItem('userDetails');
            window.location.reload();
            return error;
        });


} 


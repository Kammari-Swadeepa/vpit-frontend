import axios from 'axios';
let apiurl = "http://localhost:8080";


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

export const GetAllTenants = async (data) => {
    const constuserdetails = JSON.parse(localStorage.getItem('userDetails'));
	
    const headers = {
        'content-type': 'application/json',
        'X-Content-Type-Options': 'nosniff',
        'X-Frame-Options': 'SAMEORIGIN',
        'x-access-token': constuserdetails.token,
     
    }
    return await axios.post(apiurl + "/api/v1/tenant/get",data,{'headers':headers})
        .then((res) => {
            return res.data;
        }).catch((error) => {
            localStorage.removeItem('userDetails');
            // window.location.reload();
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
    return await axios.post(apiurl + "/api/v1/tenant/save",data,{'headers':headers})
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
    return await axios.post(apiurl + "/api/v1/tenant/update",data,{'headers':headers})
        .then((res) => {
            return res.data;
        }).catch((error) => {
            localStorage.removeItem('userDetails');
            window.location.reload();
            return error;
        });


} 

// SocialLinks

export const GetAllSocialLinks = async () => {
    const constuserdetails = JSON.parse(localStorage.getItem('userDetails'));
	
    const headers = {
        'content-type': 'application/json',
        'X-Content-Type-Options': 'nosniff',
        'X-Frame-Options': 'SAMEORIGIN',
        'x-access-token': constuserdetails.token,
        
       

    }
    return await axios.post(apiurl + "/api/v1/sociallink/get",{'headers':headers})
        .then((res) => {
            return res.data;
        }).catch((error) => {
            localStorage.removeItem('userDetails');
            // window.location.reload();
            return error;
        });


} 


export const SaveSocialLinks = async (data) => {
    const constuserdetails = JSON.parse(localStorage.getItem('userDetails'));
	
    const headers = {
        'content-type': 'application/json',
        'X-Content-Type-Options': 'nosniff',
        'X-Frame-Options': 'SAMEORIGIN',
        'x-access-token': constuserdetails.token,
        
       

    }
    return await axios.post(apiurl + "/api/v1/sociallink/save",data,{'headers':headers})
        .then((res) => {
            console.log(res, "social link data");
            return res.data;
        }).catch((error) => {
            localStorage.removeItem('userDetails');
            // window.location.reload();
            return error;
        });


}

export const UpdateSocialLinks = async (data) => {
    const constuserdetails = JSON.parse(localStorage.getItem('userDetails'));
	
    const headers = {
        'content-type': 'application/json',
        'X-Content-Type-Options': 'nosniff',
        'X-Frame-Options': 'SAMEORIGIN',
        'x-access-token': constuserdetails.token,
        
       

    }
    return await axios.post(apiurl + "/api/v1/sociallink/update",data,{'headers':headers})
        .then((res) => {
            return res.data;
        }).catch((error) => {
            localStorage.removeItem('userDetails');
            window.location.reload();
            return error;
        });


} 


// banners

export const GetAllBanner = async () => {
    const constuserdetails = JSON.parse(localStorage.getItem('userDetails'));
	
    const headers = {
        'content-type': 'application/json',
        'X-Content-Type-Options': 'nosniff',
        'X-Frame-Options': 'SAMEORIGIN',
        'x-access-token': constuserdetails.token,
        
       

    }
    return await axios.post(apiurl + "/api/v1/banner/get",{'headers':headers})
        .then((res) => {
            return res.data;
        }).catch((error) => {
            localStorage.removeItem('userDetails');
            // window.location.reload();
            return error;
        });


} 


export const SaveBanner = async (data) => {
    const constuserdetails = JSON.parse(localStorage.getItem('userDetails'));
	
    const headers = {
        'content-type': 'application/json',
        'X-Content-Type-Options': 'nosniff',
        'X-Frame-Options': 'SAMEORIGIN',
        'x-access-token': constuserdetails.token,
        
       

    }
    return await axios.post(apiurl + "/api/v1/banner/save",data,{'headers':headers})
        .then((res) => {
            console.log(res, "social link data");
            return res.data;
        }).catch((error) => {
            localStorage.removeItem('userDetails');
            // window.location.reload();
            return error;
        });


}

export const UpdateBanner = async (data) => {
    const constuserdetails = JSON.parse(localStorage.getItem('userDetails'));
	
    const headers = {
        'content-type': 'application/json',
        'X-Content-Type-Options': 'nosniff',
        'X-Frame-Options': 'SAMEORIGIN',
        'x-access-token': constuserdetails.token,
        
       

    }
    return await axios.post(apiurl + "/api/v1/banner/update",data,{'headers':headers})
        .then((res) => {
            return res.data;
        }).catch((error) => {
            localStorage.removeItem('userDetails');
            window.location.reload();
            return error;
        });


} 
export const DeleteBanner = async (data) => {
    const constuserdetails = JSON.parse(localStorage.getItem('userDetails'));
	
    const headers = {
        'content-type': 'application/json',
        'X-Content-Type-Options': 'nosniff',
        'X-Frame-Options': 'SAMEORIGIN',
        'x-access-token': constuserdetails.token,
        
       

    }
    return await axios.post(apiurl + "/api/v1/banner/delete",data,{'headers':headers})
        .then((res) => {
            return res.data;
        }).catch((error) => {
            localStorage.removeItem('userDetails');
            window.location.reload();
            return error;
        });


}

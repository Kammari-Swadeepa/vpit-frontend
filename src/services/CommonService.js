import axios from 'axios';
let apiurl = "http://localhost:8080";


export const Signup = async (fields) => {
    return await axios.post(apiurl + "/api/v1/auth/signup", fields)
        .then((res) => {
            return res.data;
        }).catch((error) => {
            // window.location = "/";
            return error;
        });


}

export const LoginForm = async (fields) => {
    return await axios.post(apiurl + "/api/v1/auth/login", fields)
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
    return await axios.post(apiurl + "/api/v1/tenant/get",{'headers':headers})
        .then((res) => {
            return res.data;
        }).catch((error) => {
            localStorage.removeItem('userDetails');
            // window.location.reload();
            return error;
        });


} 
// console.log(GetAllTenants({}),"tenent-data...")









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


export const saveArea = async (data) => {
    const constuserdetails = JSON.parse(localStorage.getItem('userDetails'));
	
    const headers = {
        'content-type': 'application/json',
        'X-Content-Type-Options': 'nosniff',
        'X-Frame-Options': 'SAMEORIGIN',
        'x-access-token': constuserdetails.token,
        
       

    }
    return await axios.post(apiurl + "/api/v1/areas/save",data,{'headers':headers})
        .then((res) => {
            return res.data;
        }).catch((error) => {
            localStorage.removeItem('userDetails');
            window.location.reload();
            return error;
        });


}

export const getAllArea = async () => {
    const constuserdetails = JSON.parse(localStorage.getItem('userDetails'));
	
    const headers = {
        'content-type': 'application/json',
        'X-Content-Type-Options': 'nosniff',
        'X-Frame-Options': 'SAMEORIGIN',
        'x-access-token': constuserdetails.token,
        
       

    }
    return await axios.post(apiurl + "/api/v1/areas/get",{'headers':headers})
        .then((res) => {
            return res.data;
        }).catch((error) => {
            localStorage.removeItem('userDetails');
            window.location.reload();
            return error;
        });


} 
export const updateArea = async (data) => {
    const constuserdetails = JSON.parse(localStorage.getItem('userDetails'));
	
    const headers = {
        'content-type': 'application/json',
        'X-Content-Type-Options': 'nosniff',
        'X-Frame-Options': 'SAMEORIGIN',
        'x-access-token': constuserdetails.token,
        
       

    }
    return await axios.post(apiurl + "/api/v1/areas/update",data,{'headers':headers})
        .then((res) => {
            return res.data;
        }).catch((error) => {
            localStorage.removeItem('userDetails');
            window.location.reload();
            return error;
        });


} 


// Youtube Videos

export const saveYoutubeVideo = async (data) => {
    const constuserdetails = JSON.parse(localStorage.getItem('userDetails'));
	
    const headers = {
        'content-type': 'application/json',
        'X-Content-Type-Options': 'nosniff',
        'X-Frame-Options': 'SAMEORIGIN',
        'x-access-token': constuserdetails.token,
        
       

    }
    return await axios.post(apiurl + "/api/v1/videos/save",data,{'headers':headers})
        .then((res) => {
            return res.data;
        }).catch((error) => {
            localStorage.removeItem('userDetails');
            window.location.reload();
            return error;
        });
}

export const getYoutubeVideo = async () => {
    const constuserdetails = JSON.parse(localStorage.getItem('userDetails'));
	
    const headers = {
        'content-type': 'application/json',
        'X-Content-Type-Options': 'nosniff',
        'X-Frame-Options': 'SAMEORIGIN',
        'x-access-token': constuserdetails.token,
    }
    return await axios.post(apiurl + "/api/v1/videos/get",{'headers':headers})
        .then((res) => {
            return res.data;
        }).catch((error) => {
            localStorage.removeItem('userDetails');
            window.location.reload();
            return error;
        });
} 

export const updateYoutubeVideo = async (data) => {
    const constuserdetails = JSON.parse(localStorage.getItem('userDetails'));
	
    const headers = {
        'content-type': 'application/json',
        'X-Content-Type-Options': 'nosniff',
        'X-Frame-Options': 'SAMEORIGIN',
        'x-access-token': constuserdetails.token,
    }
    return await axios.post(apiurl + "/api/v1/videos/update",data,{'headers':headers})
        .then((res) => {
            return res.data;
        }).catch((error) => {
            localStorage.removeItem('userDetails');
            window.location.reload();
            return error;
        });


} 

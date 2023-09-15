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
    console.log(data);
    return await axios.post(apiurl + "/api/v1/tenant/get",data,{'headers':headers})
        .then((res) => {
            console.log("getting data",res.data);
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
    return await axios.post(apiurl + "/api/v1/tenant/save",data,{'headers':headers})
        .then((res) => {
            return res.data;
        }).catch((error) => {
            localStorage.removeItem('userDetails');
            // window.location.reload();
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
            console.log("error in updating");
            window.location.reload();
            return error;
        });


} 
export const DeleteTenants = async (data) => {
    const constuserdetails = JSON.parse(localStorage.getItem('userDetails'));
	
    const headers = {
        'content-type': 'application/json',
        'X-Content-Type-Options': 'nosniff',
        'X-Frame-Options': 'SAMEORIGIN',
        'x-access-token': constuserdetails.token,
        
       

    }
    return await axios.post(apiurl + "/api/v1/tenant/delete",data,{'headers':headers})
        .then((res) => {
            return res.data;
        }).catch((error) => {
            localStorage.removeItem('userDetails');
            console.log("error in deleting");
            window.location.reload();
            return error;
        });


} 


//Events

export const GetAllEvents = async () => {
    const constuserdetails = JSON.parse(localStorage.getItem('userDetails'));
	
    const headers = {
        'content-type': 'application/json',
        'X-Content-Type-Options': 'nosniff',
        'X-Frame-Options': 'SAMEORIGIN',
        'x-access-token': constuserdetails.token,
     
    }
    return await axios.post(apiurl + "/api/v1/events/get",{'headers':headers})
        .then((res) => {
            console.log("getting data",res.data);
            return res.data;
        }).catch((error) => {
            localStorage.removeItem('userDetails');
            console.log("error in getting data");
            window.location.reload();
            return error;
        });

} 



export const SaveEvents = async (ele) => {
    console.log(ele,"check common fields")
    const constuserdetails = JSON.parse(localStorage.getItem('userDetails'));
	console.log('called')
    const headers = {
        'content-type': 'application/json',
        'X-Content-Type-Options': 'nosniff',
        'X-Frame-Options': 'SAMEORIGIN',
        'x-access-token': constuserdetails.token,
        
       

    }
    return await axios.post(apiurl + "/api/v1/events/save",ele,{'headers':headers})
        .then((res) => {
            console.log(res,'event response')
            return res.data;
        }).catch((error) => {
            localStorage.removeItem('userDetails');
            window.location.reload();
            return error;
        });


} 
export const UpdateEvents = async (ele) => {
    const constuserdetails = JSON.parse(localStorage.getItem('userDetails'));
	
    const headers = {
        'content-type': 'application/json',
        'X-Content-Type-Options': 'nosniff',
        'X-Frame-Options': 'SAMEORIGIN',
        'x-access-token': constuserdetails.token,
       
    }
    return await axios.post(apiurl + "/api/v1/events/update",ele,{'headers':headers})
        .then((res) => {
            return res.data;
        }).catch((error) => {
            localStorage.removeItem('userDetails');
            window.location.reload();
            return error;
        });


} 

//Latest News
export const GetAllLatestNews = async () => {
    const constuserdetails = JSON.parse(localStorage.getItem('userDetails'));
	
    const headers = {
        'content-type': 'application/json',
        'X-Content-Type-Options': 'nosniff',
        'X-Frame-Options': 'SAMEORIGIN',
        'x-access-token': constuserdetails.token,
       
    }
    return await axios.post(apiurl + "/api/v1/news/get",{'headers':headers})
        .then((res) => {
            return res.data;
        }).catch((error) => {
            localStorage.removeItem('userDetails');
            // window.location.reload();
            return error;
        });


} 
export const SaveLatestNews = async (data) => {
    const constuserdetails = JSON.parse(localStorage.getItem('userDetails'));
	
    const headers = {
        'content-type': 'application/json',
        'X-Content-Type-Options': 'nosniff',
        'X-Frame-Options': 'SAMEORIGIN',
        'x-access-token': constuserdetails.token,
        
       

    }
    return await axios.post(apiurl + "/api/v1/news/save",data,{'headers':headers})
        .then((res) => {
            return res.data;
        }).catch((error) => {
            localStorage.removeItem('userDetails');
            window.location.reload();
            return error;
        });


} 
export const UpdateLatestNews = async (data) => {
    const constuserdetails = JSON.parse(localStorage.getItem('userDetails'));
	
    const headers = {
        'content-type': 'application/json',
        'X-Content-Type-Options': 'nosniff',
        'X-Frame-Options': 'SAMEORIGIN',
        'x-access-token': constuserdetails.token,
    }
    return await axios.post(apiurl + "/api/v1/news/update",data,{'headers':headers})
        .then((res) => {
            return res.data;
        }).catch((error) => {
            localStorage.removeItem('userDetails');
            window.location.reload();
            return error;
        });


} 

//Logo

export const GetAllLogos = async () => {
    const constuserdetails = JSON.parse(localStorage.getItem('userDetails'));
	
    const headers = {
        'content-type': 'application/json',
        'X-Content-Type-Options': 'nosniff',
        'X-Frame-Options': 'SAMEORIGIN',
        'x-access-token': constuserdetails.token,
       
    }
    return await axios.post(apiurl + "/api/v1/logo/get",{'headers':headers})
        .then((res) => {
            return res.data;
        }).catch((error) => {
            localStorage.removeItem('userDetails');
            // window.location.reload();
            return error;
        });


}

export const SaveLogos = async (data) => {
    const constuserdetails = JSON.parse(localStorage.getItem('userDetails'));
	
    const headers = {
        'content-type': 'application/json',
        'X-Content-Type-Options': 'nosniff',
        'X-Frame-Options': 'SAMEORIGIN',
        'x-access-token': constuserdetails.token,
       
    }
    return await axios.post(apiurl + "/api/v1/logo/save",data,{'headers':headers})
        .then((res) => {
            return res.data;
        }).catch((error) => {
            localStorage.removeItem('userDetails');
            window.location.reload();
            return error;
        });


}
export const UpdateLogos = async (data) => {
    const constuserdetails = JSON.parse(localStorage.getItem('userDetails'));
	
    const headers = {
        'content-type': 'application/json',
        'X-Content-Type-Options': 'nosniff',
        'X-Frame-Options': 'SAMEORIGIN',
        'x-access-token': constuserdetails.token,
       
    }
    return await axios.post(apiurl + "/api/v1/logo/update",data,{'headers':headers})
        .then((res) => {
            return res.data;
        }).catch((error) => {
            localStorage.removeItem('userDetails');
            window.location.reload();
            return error;
        });


}

//SliderImages
export const GetAllSliderImages = async (data) => {
    const constuserdetails = JSON.parse(localStorage.getItem('userDetails'));
	
    const headers = {
        'content-type': 'application/json',
        'X-Content-Type-Options': 'nosniff',
        'X-Frame-Options': 'SAMEORIGIN',
        'x-access-token': constuserdetails.token,
     
    }
    return await axios.post(apiurl + "/api/v1/sliderimages/get",data,{'headers':headers})
        .then((res) => {
            console.log("getting data",res.data);
            return res.data;
        }).catch((error) => {
            localStorage.removeItem('userDetails');
            console.log("error in getting data");
            window.location.reload();
            return error;
        });

} 
export const SaveSliderImages = async (data) => {
    const constuserdetails = JSON.parse(localStorage.getItem('userDetails'));
	
    const headers = {
        'content-type': 'application/json',
        'X-Content-Type-Options': 'nosniff',
        'X-Frame-Options': 'SAMEORIGIN',
        'x-access-token': constuserdetails.token,
       
    }
    return await axios.post(apiurl + "/api/v1/sliderimages/save",data,{'headers':headers})
        .then((res) => {
            return res.data;
        }).catch((error) => {
            localStorage.removeItem('userDetails');
            window.location.reload();
            return error;
        });


}
export const UpdateSliderImages = async (data) => {
    const constuserdetails = JSON.parse(localStorage.getItem('userDetails'));
	
    const headers = {
        'content-type': 'application/json',
        'X-Content-Type-Options': 'nosniff',
        'X-Frame-Options': 'SAMEORIGIN',
        'x-access-token': constuserdetails.token,
       
    }
    return await axios.post(apiurl + "/api/v1/sliderimages/update",data,{'headers':headers})
        .then((res) => {
            return res.data;
        }).catch((error) => {
            localStorage.removeItem('userDetails');
            window.location.reload();
            return error;
        });


}
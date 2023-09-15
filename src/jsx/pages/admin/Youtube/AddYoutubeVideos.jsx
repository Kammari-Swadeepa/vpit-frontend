
import React, { useEffect, useState } from 'react';
import { saveYoutubeVideo,updateYoutubeVideo,GetAllTenants } from '../../../../services/CommonService';

function AddYoutubeVideos({dataprops}) {
    const fields = {
        videourl:'',
        position:'',
        status:'',
        tenantid:'',
        tenant:{}
    }

    const errors = {
        videourl:'',
        position:'',
        status:'',
        tenantid:'',
        
    }
    const [errorFields, setErrorFields] = useState(errors);
    const [formfields, setFromFields] = useState(fields);
    const [tenantIds, setTenantIds] = useState([])
    useEffect(() => {
        console.log(dataprops);
        setFieldData();
        getTenants();

    }, []);
    const getTenants = async () => {
        const tenantdata = await GetAllTenants({});
        console.log(tenantdata, "tenentData")
        setTenantIds(tenantdata.data.docs);
    }
    const { name, status, domain, type, tenantid } = formfields;

    const setFieldData = async () => {
        if (dataprops?.id) {
            setFromFields(dataprops);
        }
    }

    const validateForm = async () => {
        let fields = formfields;
        let errors = {};
        let formIsValid = true;

        if (!fields["videourl"]) {
            formIsValid = false;
            errors["videourl"] = "*Please enter videourl .";
        }

        if (!fields["position"]) {
            formIsValid = false;
            errors["position"] = "*Please select position .";
        }
        if (!fields["status"]) {
            formIsValid = false;
            errors["status"] = "*Please select status.";
        }
        if (!fields["tenantid"]) {
            formIsValid = false;
            errors["tenantid"] = "*Please select tenant id.";
        }
        setErrorFields(errors)
        return formIsValid;
    }
    const handleChange = (e) => {
        if(e.target.name=="tenantid"){
            e.target[0].style.display='none'
        }
        const { name, value } = e.target;
        tenantIds.map(ele=>{
            if(ele.tenantid==value){
                setFromFields((prevState) => (
                    {
                    ...prevState,
                    ["tenant"]:ele, 
                    [name]: value,
                }
                ))
            }else{
                    setFromFields((prevState) => (
                        {
                        ...prevState, 
                        [name]: value,
                    }
                    ))
            }
        })    
        
    }
    // const handleClick=(ele)=>{
    //     setFromFields((prevState) => (
    //         {
    //         ...prevState,
    //         tenant: ele,
           
    //     }
    //     ))
    // }
    const submitForm = async (e) => {
  
        // const { name, value } = e.target;
        const isValid = await validateForm();
        if (isValid) {
            if (!formfields.id) {
                //save
                const Response = await saveYoutubeVideo(formfields);

            } else {
                //update
                const Response = await updateYoutubeVideo(formfields);
            }

        }
       
    }
  return (
  
    <>
    {  console.log("test this tenantId==:==",formfields)}
    <div className="form-group mb-3 row">
        <label
            className="col-lg-4 col-form-label"
            htmlFor="val-username"
        >
            Video Url
        </label>
        <div className="col-lg-6">
            <input component="input"
                placeholder="Video Url"
                name="videourl"
                className="form-control"

                value={formfields.videourl} maxLength={50} onChange={handleChange} />

        </div>
        <div className="errorMsg">{errorFields.videourl}</div>
    </div>
 
    <div className="form-group mb-3 row">
        <label
            className="col-lg-4 col-form-label"
            htmlFor="val-username"
        >
            Position
        </label>
        <div className="col-lg-6">
            <input component="input"
                placeholder="Position"
                name="position"
                value={formfields.position}
                onChange={handleChange}
                className="form-control" />

        </div>
    </div>


    <div className="form-group mb-3 row">
          <label
                className="col-lg-4 col-form-label"
                htmlFor="val-username"
            >
                Status
            </label>
            <div className="col-lg-6" >
                

                <select
                    value={formfields.status} name='status' onChange={handleChange} className="form-control">
                    <option value="" disabled>select status</option>
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                </select>

            </div>
        </div>
    <div className="form-group mb-3 row">
            <label
                className="col-lg-4 col-form-label"
                htmlFor="val-username"
            >
                Tenant ID
            </label>
            <div className="col-lg-6">
            <select placeholder='select-tenants'
                    value={formfields.tenantid} name='tenantid'  onChange={handleChange} className="form-control">
                        <option value="" disabled>select tenentId</option>
                    {tenantIds.map(ele => {
                        return(
                            <option  value={ele.tenantid
                            }>{ele.name
                                }</option>
                        )
                    })}

                </select>

            </div>
        </div>

    <br />
    <div className="form-group">
        <button onClick={()=>{submitForm(formfields)}} className="btn btn-primary" type="button"
        >Save</button>
    </div>

</>
  )
}

export default AddYoutubeVideos
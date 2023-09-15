
import React, { useEffect, useState } from 'react';
import {  GetAllTenants, SaveBanner, UpdateBanner} from '../../../../services/CommonService';
import { v4 as uuidv4 } from 'uuid';




const AddBanner = ({dataprops}) => {
    const fields = {
        bannertype: '',
        position: '',
        status: '',
        base64: '',
        tenantid:'',
        tenant:{
            name:'',
            status:'',
            domain:'',
            type:'',
            tenantid:'',
            id:'',
            __v:''
           }

    }

    const errors = {
        bannertype: '',
        position: '',
        status: '',
        base64: '',
        tenantid:'',
        tenant:{
            name:'',
            status:'',
            domain:'',
            type:'',
            tenantid:'',
            id:'',
            __v:''
           }

    }

    const [errorFields, setErrorFields] = useState(errors);
    const [formfields, setFromFields] = useState(fields);
    const [list,setList]=useState([]);

    const getTenantData=async()=>{
        const Response=await GetAllTenants({pageno:-1})
        setList(Response.data)
       }

    useEffect(() => {
        console.log(dataprops);
        setFieldData();
        getTenantData();
		
	}, []); 
   
    

    const { bannertype, position, status, base64, tenantid} = formfields;

    const  setFieldData = async() =>{
        if(dataprops?.id){
        setFromFields(dataprops);
        }
    }

    const validateForm = async () => {
        let fields = formfields;
        let errors = {};
        let formIsValid = true;

        if (!fields["sociallink"]) {
            formIsValid = false;
            errors["sociallink"] = "*Please enter social link .";
        }

        if (!fields["type"]) {
            formIsValid = false;
            errors["type"] = "*Please select type .";
        }
        if (!fields["status"]) {
            formIsValid = false;
            errors["status"] = "*Please select status .";
        }
        if (!fields["tenantid"]) {
            formIsValid = false;
            errors["tenantid"] = "*Please tenantid .";
        }
        setErrorFields(errors)
        return formIsValid;

    }

    const submitForm = async () => {
       console.log(formfields);
        const isValid = await validateForm();
        if (isValid) {
            if (!formfields.id) {
                //save
                const Response = await SaveBanner(formfields);

            } else {
                //update
                const Response = await UpdateBanner(formfields);
            }

        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        var filterData=list.filter((ele)=>{
            return ele.tenantid==value
        });
        setFromFields((prevState) => ({
          ...prevState,
          [name]: value,
          tenant:filterData[0],
        }));
        console.log(formfields);
       }


    return (<>
    <div className="form-group mb-3 row">
                                    <label
                                        className="col-lg-4 col-form-label"
                                        htmlFor="val-username"
                                    >
                                        Banner type
                                    </label>
                                    <div className="col-lg-6">
                                        <input component="input"
                                            placeholder="Display Order"
                                            name="bannertype"
                                            className="form-control"
                                            
                                           value={bannertype} maxLength={50} onChange={handleChange} />

                                    </div>
                                    <div className="errorMsg">{errorFields.bannertype}</div>
                                </div>
                                
                                
                                 <br />

                                 <div className="form-group mb-3 row">
                                    <label
                                        className="col-lg-4 col-form-label"
                                        htmlFor="val-username"
                                    >
                                        Position
                                    </label>
                                    <div className="col-lg-6">
                                        <input component="input"
                                            placeholder="Display Order"
                                            name="position"
                                            className="form-control"
                                            
                                           value={position} maxLength={50} onChange={handleChange} />

                                    </div>
                                    <div className="errorMsg">{errorFields.position}</div>
                                </div>
                                
                                
                                 <br />
                                 <div className="form-group mb-3 row">
                                    <label
                                        className="col-lg-4 col-form-label"
                                        htmlFor="val-username"
                                    >
                                        Tenant ID
                                    </label>
                                    <div className="col-lg-6">
                                    <select className="form-control" name="tenantid"
                                                value={tenantid} onChange={handleChange}>
                                                <option value=''>Select</option>
                                                {list.map(item => (
                                                    <option
                                                        key={item.id}
                                                        value={item.tenantid}
                                                    >
                                                        {item.name}
                                                    </option>
                                                ))}
                                            </select>
                                    </div>
                                    <div className="errorMsg">{errorFields.tenantid}</div>
                                </div>
                                <br />

                                <div className="form-group mb-3 row">
                                    <label
                                        className="col-lg-4 col-form-label"
                                        htmlFor="val-username"
                                    >
                                        Status
                                    </label>
                                    <div className="col-lg-6">
                                           <select
                                            className="form-control" name='status'
                                            onChange={handleChange} value={status}>
                                            <option value="">Select Status</option>
                                            <option value="active">Active</option>
                                            <option value="inactive">Inactive</option>
                                           </select>

                                    </div>
                                    <div className="errorMsg">{errorFields.status}</div>
                                </div>
                                
                                
                                 <br />
                                 <div className="form-group mb-3 row">
                                    <label
                                        className="col-lg-4 col-form-label"
                                        htmlFor="val-username"
                                    >
                                        Base64
                                    </label>
                                    <div className="col-lg-6">
                                        <input component="input"
                                            placeholder="Display Order"
                                            name="base64"
                                            className="form-control"
                                            type='file'
                                           value={base64} maxLength={50} onChange={handleChange} />

                                    </div>
                                    <div className="errorMsg">{errorFields.base64}</div>
                                </div>
                                
                                 <br />
                                 <br />
                                <div className="form-group">
                                    <button onClick={submitForm} className="btn btn-primary" type="button"
                                     >Save</button>
                                </div>

    </>)

}

export default AddBanner
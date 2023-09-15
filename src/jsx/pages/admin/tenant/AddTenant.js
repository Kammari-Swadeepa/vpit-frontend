
import React, { useEffect, useState } from 'react';
import { SaveTenants, UpdateTenants } from '../../../../services/CommonService';
import '../../../index.css';
import {v4 as uuidv4 } from 'uuid';


const AddTenant = ({dataprops}) => {
    const fields = {
        name: '',
        status: '',
        domain: '',
        type: '',
        tenantid: uuidv4().slice(0,8)

    }

    const errors = {
        name: '',
        status: '',
        domain: '',
        type: '',
        tenantid:''

    }
    
    const [errorFields, setErrorFields] = useState(errors);
    const [formfields, setFormFields] = useState(fields);

    useEffect(() => {
        console.log(dataprops);
        setFieldData();
		
	}, []); 
   
    
    const { name, status, domain, type, tenantid } = formfields;

    const  setFieldData = async() =>{
        if(dataprops?.id){
        setFormFields(dataprops);
        }
    }

    const validateForm = async () => {
        let fields = formfields;
        let errors = {};
        let formIsValid = true;

        if (!fields["name"]) {
            formIsValid = false;
            errors["name"] = "*Please enter tenant name .";
        }
        if (!fields["domain"]) {
            formIsValid = false;
            errors["domain"] = "*Please enter domain name .";
        }
        if (!fields["type"]) {
            formIsValid = false;
            errors["type"] = "*Please select type. ";
        }
        if (!fields["status"]) {
            formIsValid = false;
            errors["status"] = "*Please select status either active or inactive.";
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
                const Response = await SaveTenants(formfields);
                

            } else {
                //update
                const Response = await UpdateTenants(formfields);
            }

        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormFields((prevState) => ({
          ...prevState,
          [name]: value,
        }))
       }


    return (<>
                            <div className="form-group mb-3 row">
                                    <label
                                        className="col-lg-4 col-form-label"
                                        htmlFor="val-username"
                                    >
                                        Tenant Name
                                    </label>
                                    <div className="col-lg-6">
                                        <input component="input"
                                            placeholder="enter tenant name"
                                            name="name"
                                            className="form-control"
                                            
                                           value={name} maxLength={50} onChange={handleChange} />

                                    </div>
                                    <div className="errorMsg">{errorFields.name}</div>
                                </div>
                                <div className="form-group mb-3 row">
                                    <label
                                        className="col-lg-4 col-form-label"
                                        htmlFor="val-username"
                                    >
                                        Domain
                                    </label>
                                    <div className="col-lg-6">
                                        <input component="input"
                                            placeholder="enter domain"
                                            name="domain"
                                            className="form-control"
                                            value={domain} maxLength={50} onChange={handleChange} />

                                    </div>
                                    <div className="errorMsg">{errorFields.domain}</div>
                                </div>
                                <div className="form-group mb-3 row">
            <label
                className="col-lg-4 col-form-label"
                htmlFor="val-username"
            >
                Type
            </label>
            <div className="col-lg-6" >
                    <select component="input"
                    name="type"
                    className="form-control"
                    value={type} onChange={handleChange}> 
                    <option value="">Select Below</option>                       
                        <option value="political">Political</option>
                    <option value="educational">Educational</option></select>

            </div>
            <div className="errorMsg">{errorFields.type}</div>
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
                    value={status} name='status' onChange={handleChange} className="form-control">
                      <option value="">Select below</option>
                      <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                    </select>

            </div>
            <div className="errorMsg">{errorFields.status}</div>
        </div>
                                 <br />
                                <div className="form-group">
                                    <button onClick={submitForm} className="btn btn-primary" type="button"
                                     >Save</button>
                                </div>

    </>)

}

export default AddTenant
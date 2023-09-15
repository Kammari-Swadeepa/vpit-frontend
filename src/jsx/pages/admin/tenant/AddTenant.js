
import React, { useEffect, useState } from 'react';
import { SaveTenants, UpdateTenants } from '../../../../services/CommonService';
import { v4 as uuidv4 } from 'uuid';



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
        tenantid: ''

    }
    
    const [errorFields, setErrorFields] = useState(errors);
    const [formfields, setFromFields] = useState(fields);

    useEffect(() => {
        console.log(dataprops);
        setFieldData();
		
	}, []); 
   
    

    const { name, status, domain, type, tenantid } = formfields;

    const  setFieldData = async() =>{
        if(dataprops?.id){
        setFromFields(dataprops);
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
            errors["type"] = "*Please select type .";
        }
        if (!fields["status"]) {
            formIsValid = false;
            errors["status"] = "*Please select status .";
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
        setFromFields((prevState) => ({
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
                                            placeholder="Display Order"
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
                                        Category Name
                                    </label>
                                    <div className="col-lg-6">
                                        <input component="input"
                                            placeholder="Display Order"
                                            name="display_id"
                                            className="form-control" />

                                    </div>
                                </div>
                                 <br />
                                <div className="form-group">
                                    <button onClick={submitForm} className="btn btn-primary" type="button"
                                     >Save</button>
                                </div>

    </>)

}

export default AddTenant

import React, { useEffect, useState } from 'react';
import { GetAllTenants, SaveSocialLinks, UpdateSocialLinks } from '../../../../services/CommonService';
import { v4 as uuidv4 } from 'uuid';




const AddSocialLinks = ({dataprops}) => {
    const fields = {
        sociallink: '',
        type: '',
        status: '',
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
        sociallink: '',
        type: '',
        status: '',
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

    // const [items] = useState([
    //     { id: uuidv4(), label: 'Item 1' },
    //     { id: uuidv4(), label: 'Item 2' },
    //     { id: uuidv4(), label: 'Item 3' },
    //   ]);
    
    const [errorFields, setErrorFields] = useState(errors);
    const [formfields, setFromFields] = useState(fields);
    const [list,setList]=useState([])
    // const [selectedtenantid, setSelectedtenantid] = useState(null);

    const getTenantData=async()=>{
        const Response=await GetAllTenants({pageno:-1})
        setList(Response.data)
       }

    useEffect(() => {
        console.log(dataprops);
        getTenantData()
        setFieldData();
		
	}, []); 

    const { sociallink, type, status, tenantid } = formfields;

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
                const Response = await SaveSocialLinks(formfields);

            } else {
                //update
                const Response = await UpdateSocialLinks(formfields);
            }

        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        var filterData=list.filter((ele)=>{
            return ele.tenantid==value
        })
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
                                        Social Links
                                    </label>
                                    <div className="col-lg-6">
                                        <input component="input"
                                            placeholder="Display Order"
                                            name="sociallink"
                                            className="form-control"
                                            
                                           value={sociallink} maxLength={50} onChange={handleChange} />

                                    </div>
                                    <div className="errorMsg">{errorFields.sociallink}</div>
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
                                        Social Links type
                                    </label>
                                    <div className="col-lg-6">
                                    <select
                                            className="form-control" value={type}
                                            onChange={handleChange} name='type'>
                                            <option value="">Select Type</option>
                                            <option value="political">Political</option>
                                            <option value="educational">Educational</option>
                                           </select>

                                    </div>
                                    <div className="errorMsg">{errorFields.type}</div>
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
                                 <br />
                                <div className="form-group">
                                    <button onClick={submitForm} className="btn btn-primary" type="button"
                                     >Save</button>
                                </div>

    </>)

}

export default AddSocialLinks
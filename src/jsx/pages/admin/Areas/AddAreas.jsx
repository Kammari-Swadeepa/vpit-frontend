
import React, { useEffect, useState } from 'react';
import { saveArea, updateArea, GetAllTenants } from '../../../../services/CommonService';



const AddAreas = ({ dataprops }) => {

    const fields = {
        constituency: '',
        status: 'Active',
        tenantid: ''

    }

    const errors = {
        constituency: '',
        status: '',
        tenantid: ''

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

        if (!fields["constituency"]) {
            formIsValid = false;
            errors["constituency"] = "*Please enter constituency name .";
        }

        if (!fields["status"]) {
            formIsValid = false;
            errors["status"] = "*Please select status .";
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
    const submitForm = async () => {
        console.log(formfields);
        const isValid = await validateForm();
        if (isValid) {
            if (!formfields.id) {
                //save
                const Response = await saveArea(formfields);

            } else {
                //update
                const Response = await updateArea(formfields);
            }

        }
    }


    return (<>
        <div className="form-group mb-3 row">
            <label
                className="col-lg-4 col-form-label"
                htmlFor="val-username"
            >
                Constituency Name
            </label>
            <div className="col-lg-6">
                <input component="input"
                    placeholder="Constituency"
                    name="constituency"
                    className="form-control"

                    value={formfields.constituency} maxLength={50} onChange={handleChange} />

            </div>
            <div className="errorMsg">{errorFields.constituency}</div>
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
                    <option value="" selected>Select Status</option>
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
                {/* <input component="input"
                    placeholder="TenantId"
                    name="tenantid"
                    value={formfields.tenantid}
                    onChange={handleChange}
                    className="form-control" /> */}
                <select
                   value={formfields.tenantid}  name='tenantid' onChange={handleChange} className="form-control">
                        <option value="" selected>select tenantId</option>
                    {tenantIds.map(ele => {
                        return(
                            <option value={ele.tenantid
                            }>{ele.name
                                }</option>
                        )
                    })}

                </select>


            </div>
        </div>
        <br />
        <div className="form-group">
            <button onClick={submitForm} className="btn btn-primary" type="button"
            >Save</button>
        </div>

    </>)

}

export default AddAreas
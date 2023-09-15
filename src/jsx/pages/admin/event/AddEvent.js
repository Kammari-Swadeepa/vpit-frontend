import { useEffect, useState } from "react";
import { SaveEvents, UpdateEvents } from "../../../../services/CommonService";
import '../../../index.css';


const AddEvent=({dataprops})=>{
    const fields = {
        eventdesc: '',
        position: '',
        status: '',
        base64: '',
        tenantid: '',
      

    }
    const errors = {
        eventdesc: '',
        position: '',
        status: '',
        base64: '',
        tenantid: '',
        

    }
    const [errorFields, setErrorFields] = useState(errors);
    const [formfields, setFormFields] = useState(fields);

    useEffect(() => {
        console.log(dataprops);
        setFieldData();
		
	}, []); 
   

    const { eventdesc,  position,  status, base64, tenantid } = formfields;

    const  setFieldData = async() =>{
        if(dataprops?.id){
        setFormFields(dataprops);
        }
    }
     

     const validateForm = async () => {
        let fields = formfields;
        let errors = {};
        let formIsValid = true;

        if (!fields["eventdesc"]) {
            formIsValid = false;
            errors["eventdesc"] = "*Please enter event description .";
        }
        if (!fields["position"]) {
            formIsValid = false;
            errors["position"] = "*Please enter position .";
        }
        if (!fields["base64"]) {
            formIsValid = false;
            errors["base64"] = "*Please select base64 Image ";
        }
        if (!fields["tenantid"]) {
            formIsValid = false;
            errors["tenantid"] = "*Please select tenantid.";
        }
        if (!fields["status"]) {
            formIsValid = false;
            errors["status"] = "*Please select status either active or inactive.";
        }

        setErrorFields(errors)
        return formIsValid;

    }
     const submitForm = async () => {
        console.log(formfields, "submit data");
         const isValid = await validateForm();
         if (isValid) {
             if (!formfields.id) {
                 //save
                //  console.log('valid',formfields)
                 const Response = await SaveEvents(formfields);
 
             } else {
                 //update
                 const Response = await UpdateEvents(formfields);
             }
 
         }
     }
     const handleChange =(e)=>{
        const { name, value } = e.target;
        setFormFields((prevState) => ({
          ...prevState,
          [name]: value,
        }))
     }
 

    
return (
 
 <>
  <div className="form-group mb-3 row">
                                    <label
                                        className="col-lg-4 col-form-label"
                                        htmlFor="val-username"
                                    >
                                        Event description
                                    </label>
                                    <div className="col-lg-6">
                                        <input component="input"
                                            placeholder="enter event description"
                                            name="eventdesc"
                                            className="form-control"
                                            
                                           value={eventdesc} maxLength={50} onChange={handleChange} />

                                    </div>
                                    <div className="errorMsg">{errorFields.eventdesc}</div>
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
                                            placeholder="enter position"
                                            name="position"
                                            className="form-control"
                                            
                                           value={position} maxLength={50} onChange={handleChange} />

                                    </div>
                                    <div className="errorMsg">{errorFields.position}</div>
                                </div>
                                <div className="form-group mb-3 row">
                                    <label
                                        className="col-lg-4 col-form-label"
                                        htmlFor="val-username"
                                    >
                                      Image
                                    </label>
                                    <div className="col-lg-6">
                                        <input component="input"
                                            placeholder="select image"
                                            name="base64"
                                            className="form-control"
                                            type='file'
                                           value={base64} maxLength={50} onChange={handleChange} />

                                    </div>
                                    <div className="errorMsg">{errorFields.base64}</div>
                                </div>
                              
                                <div className="form-group mb-3 row">
                                    <label
                                        className="col-lg-4 col-form-label"
                                        htmlFor="val-username"
                                    >
                                        Tenant ID
                                    </label>
                                    <div className="col-lg-6">
                                        <input component="input"
                                            placeholder="enter tenant id"
                                            name="tenantid"
                                            className="form-control"
                                            value={tenantid} maxLength={50} onChange={handleChange} />

                                    </div>
                                    <div className="errorMsg">{errorFields.tenantid}</div>
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
                      <option value="">Please Select</option>
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
export default AddEvent;
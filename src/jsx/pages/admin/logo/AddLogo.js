import { useEffect, useState } from "react";
import { GetAllTenants, SaveLogos, UpdateLogos } from "../../../../services/CommonService";

const AddLogo=({dataprops})=>{

    const fields = {
        base64:'',
        tenantid: '',
        status: '',
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
        base64:'',
        tenantid: '',
        status: '',
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
    const [formfields, setFormFields] = useState(fields);
    const [list,setList]=useState([]);
    useEffect(() => {
        console.log(dataprops);
        getTenantData();
        setFieldData();

      
   }, []); 



   const { base64, tenantid,status,tenant } = formfields;

   const getTenantData=async()=>{
    const Response=await GetAllTenants({pageno:-1})
    setList(Response.data)
   }

   const  setFieldData = async() =>{
    if(dataprops?.id){
    setFormFields(dataprops);
    }
 }

 const validateForm = async () => {
    let fields = formfields;
    let errors = {};
    let formIsValid = true;
 
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
    console.log('formfields,' ,formfields);
     const isValid = await validateForm();
     if (isValid) {
         if (!formfields.id) {
             //save
             const Response = await SaveLogos(formfields);
 
         } else {
             //update
             const Response = await UpdateLogos(formfields);
         }
 
     }
 }


 const handleChange =(e)=>{
    const { name, value } = e.target;
var filterData=list.filter((ele)=>{
    return ele.tenantid==value
})
    setFormFields((prevState) => ({
      ...prevState,
      [name]: value,
      tenant:filterData[0],
    }))
    {console.log('logo formfields', formfields)}
 }


    return(<>
    
                             
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
                      <option value="">Select</option>
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
export default AddLogo;
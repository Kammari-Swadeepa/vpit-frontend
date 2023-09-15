import { useEffect, useState } from "react";
import { GetAllTenants, SaveLatestNews, UpdateLatestNews } from "../../../../services/CommonService";
import FileBase64 from 'react-file-base64';
import { ToastContainer, toast } from "react-toastify";
const AddNews=({dataprops})=>{
   const fields = {
      newsdesc: '',
      position: '',
      status: '',
      base64: '',
      tenantid:'',
      tenant: {},
    
  }

  const errors = {
   newsdesc: '',
   position: '',
   status: '',
   base64: '',
   tenantid:'',
   tenant: {},
   
}
const [errorFields, setErrorFields] = useState(errors);
    const [formfields, setFormFields] = useState(fields);
    const [filefields, setFileFields] = useState(null);
    const [imageshow, setImageShow]=useState(null)
    const [list,setList]=useState([]);

    useEffect(() => {
      console.log(dataprops);
      getTenantData();
      setFieldData();
    
 }, []); 
 const { newsdesc,  position,  status, base64, tenantid } = formfields;
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

   if (!fields["newsdesc"]) {
       formIsValid = false;
       errors["newsdesc"] = "*Please enter news description .";
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
   console.log(formfields);
    const isValid = await validateForm();
    if (isValid) {
        if (!formfields.id) {
            //save
            const Response = await SaveLatestNews(formfields);

        } else {
            //update
            const Response = await UpdateLatestNews(formfields);
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
function handleChangeFile(files) {
    console.log(files);
    setFileFields(files[0]);
    if (files[0].type === 'image/png' || files[0].type === 'image/jpeg' || files[0].type === 'image/jpg') {
      let sz = files[0].size.split(' ');
      if (sz[0] > 200) {
        toast('File size should be below 200 kb', {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else {
        setFileFields(files[0].base64);
        // setImageShow(files[0].base64);
        console.log("file fields",setFileFields);
        console.log("imageshow",setImageShow);
        console.log("file fieldssss",files[0].base64);
        setFormFields((prevState) => ({
            ...prevState,
            ['base64']: files[0].base64
            
          }))
        
      }
    } else {
      toast('Please upload only png or jpg', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    //setFile(event.target.files[0])
  }



 return(
    <>
     <div className="form-group mb-3 row">
                                    <label
                                        className="col-lg-4 col-form-label"
                                        htmlFor="val-username"
                                    >
                                        News description
                                    </label>
                                    <div className="col-lg-6">
                                        <input component="input"
                                            placeholder="enter news description"
                                            name="newsdesc"
                                            className="form-control"
                        
                                           value={newsdesc} maxLength={50} onChange={handleChange} />

                                    </div>
                                    <div className="errorMsg">{errorFields.newsdesc}</div>
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
                                    <FileBase64
                        multiple={true}
                        onDone={handleChangeFile} 
                        name="base64"
                        type='file'
                        value={filefields} />
                        </div>
                                    {/* <div className="col-lg-6">
                                        <input component="input"
                                            placeholder="select image"
                                            name="base64"
                                            className="form-control"
                                            type='file'
                                           value={base64} maxLength={50} onChange={handleChange} />

                                    </div> */}
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
    </>
 )
}
export default AddNews;
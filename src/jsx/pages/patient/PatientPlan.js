import { Link } from "react-router-dom"
import PrepareChart from "./PrepareChart"
import { Modal } from "react-bootstrap"
import { useState } from "react";
const PatientPlan =() =>{
    const [postModal, setPostModal] = useState(false);

    const openModal = async (modeltype, item) => {
        
        setPostModal(true);
    }
 return (
    <>
    <div className="col-xl-12">
                <div className="card">
                    <div className="card-body pb-3">
                        <div className="row align-items-center">
                            <div className="col-xl-3 mb-3">
                                <p className="mb-2 fs-16 font-w600">Plan Name</p>
                                <h2 className="mb-0 fs-32 font-w800">Diet Control Plan</h2>
                            </div>
                            <div className="col-xl-9 d-flex flex-wrap justify-content-between align-items-center">
                                <div className="d-flex me-3 mb-3 ms-2 align-items-start payment">
                                    <i className="fas fa-phone-alt me-4 mt-2 scale5"></i>
                                    <div>
                                        <p className="mb-2 fs-16 font-w600">Plan Duration </p>
                                        <h4 className="mb-0 fs-18 font-w700">6 months</h4>
                                    </div>
                                </div>
                                <div className="d-flex me-3 mb-3 ms-2 align-items-start payment">
                                    <i className="fas fa-envelope scale5 me-4 mt-2"></i>
                                    <div>
                                        <p className="mb-2 fs-16 font-w600">Price</p>
                                        <h4 className="mb-0 fs-18 font-w700">Rs 25000</h4>
                                    </div>
                                </div>
                                <div className="d-flex mb-3">
                                    <Link to={"#"} onClick={() => openModal(1, '')} className="btn btn-primary">
                                        <i className="las la-download scale5 me-3">
                                            </i>Prepare Chart</Link>
                                </div>
                                
                            </div>

                        </div>
                    </div>
                    <div className="card-body pb-3 transaction-details d-flex flex-wrap justify-content-between align-items-center">
                        <div className="me-3 mb-3">
                            <p className="mb-2">Plan Category</p>
                            <h4 className="mb-0">Pregancy</h4>
                        </div>
                        <div className="me-3 mb-3">
                            <p className="mb-2">Plan Sub Category</p>
                            <h4 className="mb-0">Ecx</h4>
                        </div>
                       {/* <div className="me-3 mb-3">
                            <p className="mb-2">Availability</p>
                            <h4 className="mb-0">9:00 am -12:00 pm</h4>
                        </div>
                        <div className="me-3 mb-3">
                            <p className="mb-2">Speciality</p>
                            <h4 className="mb-0">Dietician</h4>
                        </div>
                        <div className="me-3 mb-3">
                            <p className="mb-2">Services</p>
                            <h4 className="mb-0">Diet Treatment ,Pregancy Treatment</h4>
                        </div>
                       <div className="amount-bx mb-3 border">
                            <div>
                                <p className="mb-1">Service At</p>
                                <h3 className="mb-0">hospital name</h3>
                            </div>
 </div> */}
                    </div>
                </div>
            </div>
            <Modal className="modal fade" size="xl" show={postModal} onHide={setPostModal} >
                    <div className="" role="document">
                        <div className="">
                            <form >
                                <div className="modal-header">
								<p className="mb-2 fs-16 font-w600">Paitent Name : Demo User (PAD1)</p>
    
                                    <button type="button" className="btn-close" onClick={() => setPostModal(false)} data-dismiss="modal"></button>
                                </div>
                                <div className="modal-body">
                                   
                                 <PrepareChart/>
                                   
                                </div>
                                {/*<div className="modal-footer">
                                    <button type="submit" className="btn btn-primary" >Add</button>  
                                    <button type="button" onClick={()=> setPostModal(false)} className="btn btn-danger"> <i className="flaticon-delete-1"></i> Discard</button>      
 </div>*/}
                            </form>

                        </div>
                    </div>
                </Modal>
    </>
 )

}
export default PatientPlan

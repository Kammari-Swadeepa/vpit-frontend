import { Button, Modal } from "react-bootstrap"
import Healthcharts from "./HealthCharts";
import { Suspense } from "react";
import { useState } from "react";
import PatientPlan from "./PatientPlan";
import LabReports from "./LabReports";
import Symptoms from "./Symptoms";

const PatientActions =() =>{
    const [postModal, setPostModal] = useState(false);
    const [modaltype, setModalType] = useState({});

    const openModal = async (modeltype, item) => {
        setModalType(modeltype);
        setPostModal(true);
    }
    return(
        <>
         <div className="row">
                <div className="col-xl-3">
                </div>
                <div className="col-xl-6">
                    <Button  onClick={() => openModal(1, '')}
                        className="me-2" variant="info btn-square">
                         HEALTH CHARTS
                    </Button>
                </div>
            </div>
            <br/>
            <div className="row">
                <div className="col-xl-3">
                </div>
                <div className="col-xl-6">
                    <Button onClick={() => openModal(2, '')}
                        className="me-2" variant="secondary btn-square">
                        PLAN DETAILS
                    </Button>
                </div>
            </div>
             <br/>
            <div className="row">
                <div className="col-xl-3">
                </div>
                <div className="col-xl-6">
                    <Button onClick={() => openModal(3, '')}
                        className="me-2" variant="danger btn-square">
                        LAB REPORTS
                    </Button>
                </div>
            </div>
            <br/>
            <div className="row">
                <div className="col-xl-3">
                </div>
                <div className="col-xl-6">
                    <Button onClick={() => openModal(4, '')}
                        className="me-2" variant="warning btn-square">
                        SYMPTOMS
                    </Button>
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
                                   
                                {
                                    modaltype === 1 ? (
                                        <Suspense fallback={<div>Loading</div>}>
                                            <Healthcharts /> </Suspense>
                                    ) : modaltype === 2 ? (
                                        <Suspense fallback={<div>Loading</div>}>
                                            <PatientPlan /> </Suspense>
                                    ) : modaltype === 3 ? (
                                        <Suspense fallback={<div>Loading</div>}>
                                            <LabReports /> </Suspense>
                                    ) : modaltype === 4 ? (
                                        <Suspense fallback={<div>Loading</div>}>
                                            <Symptoms /> </Suspense>
                                    ) 
                                        : null

                                    }
                                   
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
export default PatientActions
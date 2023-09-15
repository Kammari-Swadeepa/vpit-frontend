import { Suspense, lazy, useEffect, useState } from "react";
import { Badge, Button, Card, Col, Dropdown, Modal, Table } from "react-bootstrap"

import { Link } from "react-router-dom";
import swal from "sweetalert";
import ChartQuestions from "./ChartQuestions";





const PrepareChart = () => {

    const svg1 = (
        <svg width="20px" height="20px" viewBox="0 0 24 24" version="1.1">
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <rect x="0" y="0" width="24" height="24"></rect>
                <circle fill="#000000" cx="5" cy="12" r="2"></circle>
                <circle fill="#000000" cx="12" cy="12" r="2"></circle>
                <circle fill="#000000" cx="19" cy="12" r="2"></circle>
            </g>
        </svg>
    );

    useEffect(() => {
        getAllPlanCategory();
    }, []);

    const [plancategory, setPlanCategory] = useState([]);
    const [postModal, setPostModal] = useState(false);
    const [modaltype, setModalType] = useState({});
    const [file, setFile] = useState();
    const [fileName, setFileName] = useState("");

    const saveFile = (e) => {
        setFile(e.target.files[0]);
        setFileName(e.target.files[0].name);
    };

    const getAllPlanCategory = async () => {
        // const pricingDetails = await PricingDetails();
        const data = [{
            "displayorder": 1,
            "category_name": "WAKING UP",
            "status": "Active",
            "image": ""

        },
        {
            "displayorder": 2,
            "category_name": "BREAKFAST",
            "status": "Active",
            "image": ""

        }
    
    ]
        setPlanCategory(data);

    }

    const uploadFile = async () => {

    }
    const openModal = async (modeltype, item) => {
        setModalType(modeltype);
        setPostModal(true);
    }
    const closemodal = async () => {
        getAllPlanCategory();
        setPostModal(false);
    }

    const deleteRow = async (id) => {
        const data = {
            id: id
        }

        // const response = await deletePricing(data);


        /* if (response.status != 'success') {
             swal( "Failed to update data", "failure")
         } else {
           // notifyTopInfo("Profile data updated successfully");
           swal("Data updated successfully", "success")
           getPricings();
            
         } */

    }

    return (
        <>
            <Col lg={12}>
                <Card>
                <p className="mb-2 fs-16 font-w600">Plan Chart <div className="col-lg-6">
                <div className="input-group mb-3" style={{ width: "270px" }}>
                    
                    <button className="btn btn-primary" type="button">
                      Add
                    </button>
                 
                  <select
                    defaultValue={"option"}
                    className="form-control form-control-lg"
                  >
                    <option value="option" disabled>
                      Choose Plan Order Chart
                    </option>
                    <option value="1">WAKING UP</option>
                    <option value="2">BREAK FAST</option>
                    <option value="3">MID MORNING SNACK</option>
                    <option value="3">LUNCH SNACK</option>
                    <option value="3">EVENING SNACK</option>
                    <option value="3">SLEEPING</option>
                  </select>
                </div>

                </div></p>
    
                    <Card.Body>
                        <Table responsive>
                            <thead>
                                <tr>
                                    <th>
                                        <strong>Display Order</strong>
                                    </th>
                                    <th>
                                        <strong>Plan order Name</strong>
                                    </th>

                                      <th>Actions</th>

                                </tr>
                            </thead>
                            <tbody>
                                {plancategory.map(item => (
                                    <tr>
                                        <td>
                                            <strong>{item.displayorder}</strong>
                                        </td>
                                        <td>{item.category_name}</td>
                                        <td>
                                            <Dropdown>
                                                <Dropdown.Toggle
                                                    variant="success"
                                                    className="light sharp i-false"
                                                >
                                                    {svg1}
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu>
                                                    <Dropdown.Item>
                                                        <Link to={"#"} onClick={() => openModal(1, item)}>
                                                            Add Plan Questions
                                                        </Link>

                                                    </Dropdown.Item >

                                                    <Dropdown.Item>
                                                        <Link to={"#"} onClick={() => openModal(1, item)}>
                                                            View Patient Response
                                                        </Link>

                                                    </Dropdown.Item >

                                                    <Dropdown.Item>
                                                        <Link to={"#"} onClick={() => openModal(1, item)}>
                                                            Delete
                                                        </Link>

                                                    </Dropdown.Item >
                                                    


                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </td>

                                    </tr>
                                ))}

                            </tbody>
                        </Table>
                    </Card.Body>
                </Card>
            </Col>
            <Modal className="modal fade" size="xl" show={postModal} onHide={setPostModal} >
                    <div className="" role="document">
                        <div className="">
                            <form >
                                <div className="modal-header">
								<p className="mb-2 fs-16 font-w600">Paitent Name : Demo User (PAD1)</p>
    
                                    <button type="button" className="btn-close" onClick={() => setPostModal(false)} data-dismiss="modal"></button>
                                </div>
                                <div className="modal-body">
                                   
                                 <ChartQuestions/>
                                   
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

export default PrepareChart
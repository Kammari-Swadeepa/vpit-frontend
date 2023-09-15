import { Suspense, lazy, useEffect, useState } from "react";
import { Badge, Button, Card, Col, Dropdown, Modal, Table } from "react-bootstrap"

import { Link } from "react-router-dom";
import swal from "sweetalert";





const AddQuizQuestions = lazy(() => import('./AddQuizQuestions'));


const QuizQuestions = () => {

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
        const data =[{
            "displayorder":1,
            "plan_name":"Weight Loss Plan",
            "price":"5000 Rs",
            "status":"Active",
            "image":""

        }]
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
                    <Card.Header>
                        <Card.Title>Quiz Questions <Button onClick={() => openModal(1, '')}
                            className="me-2" variant="primary btn-square"
                            title="Add Plan Questions"
                        >
                            <span className="btn-icon-start text-danger">
                                <i className="fa fa-plus color-danger" />
                            </span>
                            ADD
                        </Button></Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <Table responsive>
                            <thead>
                                <tr>
                                    <th className="width80">
                                        <strong>Question Order</strong>
                                    </th>
                                    <th>
                                        <strong>Topic Name</strong>
                                    </th>
                                    <th>
                                        <strong>Question</strong>
                                    </th>
                                   
                                    <th>
                                        <strong>Status</strong>
                                    </th>

                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {plancategory.map(item => (
                                    <tr>
                                        <td>
                                            <strong>{item.displayorder}</strong>
                                        </td>
                                        <td>{item.plan_name}</td>
                                        <td>{item.price}</td>
                                        <td>{item.status}</td>
                                      
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
                                                            Edit
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

                                <button type="button" className="btn-close" onClick={closemodal} data-dismiss="modal"></button>
                            </div>
                            <div className="modal-body">

                                {
                                    modaltype === 1 ? (
                                        <Suspense fallback={<div>Loading</div>}>
                                            <AddQuizQuestions /> </Suspense>
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

export default QuizQuestions
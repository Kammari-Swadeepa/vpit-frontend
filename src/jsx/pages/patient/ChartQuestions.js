import { Suspense, lazy, useEffect, useState } from "react";
import { Accordion, Badge, Button, Card, Col, Dropdown, Modal, Table } from "react-bootstrap"

import { Link } from "react-router-dom";
import swal from "sweetalert";
import Editor from "../admin/EditorwithUseQuill";





const ChartQuestions = () => {
    const [percent, setPercent] = useState(50);
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
            "category_name": "Sprouts Salad",
             "quantity":"1 bowl",
            "status": "Active",
            "image": ""

        },
        {
            "displayorder": 2,
            "category_name": "Carrot Spinach/Citrus Juic",
            "quantity":"1 glass",
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
    const content = {};

    return (
        <>
            <Col lg={12}>
                <Card>
                    <p className="mb-2 fs-16 font-w600">Plan Chart Questions

                        <Accordion className="accordion accordion-danger-solid" defaultActiveKey="0">
                            <Accordion.Item key={percent} eventKey={`${percent}`}>
                                <Accordion.Header className="accordion-header">
                                    Add  Question
                                </Accordion.Header>
                                <Accordion.Collapse eventKey={`${percent}`} className="accordion__body">
                                    <div className="accordion-body">
                                        <Editor content={content} placeholder={'enter privacy...'} />
                                        <br />

                                        <div className="form-group mb-3 row">
                                            <label
                                                className="col-lg-4 col-form-label"
                                                htmlFor="val-username"
                                            >
                                                Quantity (Bowl / ltr/..)
                                            </label>
                                            <div className="col-lg-6">
                                                <input component="input"
                                                    placeholder="Quantity"
                                                    name="display_id"
                                                    className="form-control" />

                                            </div>
                                        </div>
                                        
                                        <div className="form-group">
                <button className="btn btn-primary" type="button"
                >Save</button>
            </div>

                                    </div>
                                </Accordion.Collapse>
                            </Accordion.Item>

                        </Accordion>
                    </p>

                    <Card.Body>
                        <Table responsive>
                            <thead>
                                <tr>
                                    <th>
                                        <strong>Display Order</strong>
                                    </th>
                                    <th>
                                        <strong>Question</strong>
                                    </th>
                                    <th>
                                        <strong>Quantity</strong>
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
                                        <td>{item.quantity}</td>
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


        </>
    )
}

export default ChartQuestions
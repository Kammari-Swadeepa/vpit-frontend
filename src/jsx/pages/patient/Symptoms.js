import { Suspense, lazy, useEffect, useState } from "react";
import { Badge, Button, Card, Col, Dropdown, Modal, Table } from "react-bootstrap"

import { Link } from "react-router-dom";
import swal from "sweetalert";





const Symptoms = () => {

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
            "category_name":"Pregancy",
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
                        <Card.Title>Symptoms</Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <Table responsive>
                            <thead>
                                <tr>
                                   
                                    <th>
                                        <strong>Symptom Name</strong>
                                    </th>
                                    <th>
                                        <strong>Date</strong>
                                    </th>
                                    
                                  
                                </tr>
                            </thead>
                            <tbody>
                                {plancategory.map(item => (
                                    <tr>
                                        <td>
                                            <strong>{item.displayorder}</strong>
                                        </td>
                                        <td>{item.category_name}</td>
                                        
                                     
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

export default Symptoms
import { useEffect, useState } from "react";
import { Badge, Button, Card, Col, Dropdown, Modal, Table } from "react-bootstrap"

import { Link } from "react-router-dom";
import swal from "sweetalert";


const PlanSubCategory = () => {

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
    const [pricedata, setPricedata] = useState({});
    const [file, setFile] = useState();
    const [fileName, setFileName] = useState("");

    const saveFile = (e) => {
        setFile(e.target.files[0]);
        setFileName(e.target.files[0].name);
    };

    const getAllPlanCategory = async () => {
        // const pricingDetails = await PricingDetails();
        setPlanCategory([]);

    }

    const uploadFile = async () => {

    }
    const openModal = async (data) => {
        setPricedata(data);
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
                        <Card.Title>Pregancy - Sub Category  <Button onClick={() => openModal({})}
                            className="me-2" variant="primary btn-square"
                            title="Add Plan Sub Category"
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
                                        <strong>Display Order</strong>
                                    </th>
                                    <th>
                                        <strong>Category Name</strong>
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
                                        <td>{item.status}</td>
                                        <td>{item.status}</td>
                                        <td></td>

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
                                                        <Link to={"#"} onClick={() => openModal(item)}>
                                                            Edit
                                                        </Link>

                                                    </Dropdown.Item >
                                                    <Dropdown.Item
                                                     onClick={() => deleteRow(item.id)}
                                                     >Sub Category</Dropdown.Item>
                                                   
                                                
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

            <Modal className="modal fade" size="lg" show={postModal} onHide={setPostModal} >
                <div className="" role="document">
                    <div className="">
                        <form >
                            <div className="modal-header">

                                <button type="button" className="btn-close" onClick={closemodal} data-dismiss="modal"></button>
                            </div>
                            <div className="modal-body">
                                <div className="form-group mb-3 row">
                                    <label
                                        className="col-lg-4 col-form-label"
                                        htmlFor="val-username"
                                    >
                                        Display position
                                    </label>
                                    <div className="col-lg-6">
                                        <input component="input"
                                            placeholder="Display Order"
                                            name="display_id"
                                            className="form-control" />

                                    </div>
                                </div>
                                <div className="form-group mb-3 row">
                                    <label
                                        className="col-lg-4 col-form-label"
                                        htmlFor="val-username"
                                    >
                                       Sub Category Name
                                    </label>
                                    <div className="col-lg-6">
                                        <input component="input"
                                            placeholder="Display Order"
                                            name="display_id"
                                            className="form-control" />

                                    </div>
                                </div>
                               
                                <div className="form-group">
                                    <button className="btn btn-primary" type="button"
                                     onClick={uploadFile}>Save</button>
                                </div>

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

export default PlanSubCategory
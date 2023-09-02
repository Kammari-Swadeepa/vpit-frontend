import { useState } from "react";
import Editor from "../admin/EditorwithUseQuill"
import { Accordion } from "react-bootstrap";

const AddQuizQuestions = () => {
    const content = '';
    const [percent, setPercent] = useState(50);
    return (
        <>
            <div className="form-group mb-3 row">
                <label
                    className="col-lg-4 col-form-label"
                    htmlFor="val-username"
                >
                    Topic Name
                </label>
                <div className="col-lg-6">
                    <select
                     defaultValue={"option"}
                        className="form-control"
                        id="sel1"
                    >
                        <option>Select topic </option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                    </select>

                </div>
            </div>
        
            <div className="form-group mb-3 row">
                <label
                    className="col-lg-4 col-form-label"
                    htmlFor="val-username"
                >
                    Question Number
                </label>
                <div className="col-lg-6">
                    <input component="input"
                        placeholder="Question Number"
                        name="display_id"
                        className="form-control" />

                </div>
            </div>

            <Accordion className="accordion accordion-danger-solid" defaultActiveKey="0">
                            <Accordion.Item key={percent} eventKey={`${percent}`}>
                                <Accordion.Header className="accordion-header">
                               Add  Question
                                </Accordion.Header>
                                <Accordion.Collapse eventKey={`${percent}`} className="accordion__body">
                                    <div className="accordion-body">
                                    <Editor content={content} placeholder={'enter privacy...'} />   
                                    </div>
                                </Accordion.Collapse>
                            </Accordion.Item>

                        </Accordion>

                        <Accordion className="accordion accordion-danger-solid" defaultActiveKey="0">
                            <Accordion.Item key={percent} eventKey={`${percent}`}>
                                <Accordion.Header className="accordion-header">
                               Add  Answer1
                                </Accordion.Header>
                                <Accordion.Collapse eventKey={`${percent}`} className="accordion__body">
                                    <div className="accordion-body">
                                    <Editor content={content} placeholder={'enter privacy...'} />   
                                    </div>
                                </Accordion.Collapse>
                            </Accordion.Item>

                        </Accordion>

                         <Accordion className="accordion accordion-danger-solid" defaultActiveKey="0">
                            <Accordion.Item key={percent} eventKey={`${percent}`}>
                                <Accordion.Header className="accordion-header">
                               Add Answer2
                                </Accordion.Header>
                                <Accordion.Collapse eventKey={`${percent}`} className="accordion__body">
                                    <div className="accordion-body">
                                    <Editor content={content} placeholder={'enter privacy...'} />   
                                    </div>
                                </Accordion.Collapse>
                            </Accordion.Item>

                        </Accordion>

                         <Accordion className="accordion accordion-danger-solid" defaultActiveKey="0">
                            <Accordion.Item key={percent} eventKey={`${percent}`}>
                                <Accordion.Header className="accordion-header">
                               Add  Answer3
                                </Accordion.Header>
                                <Accordion.Collapse eventKey={`${percent}`} className="accordion__body">
                                    <div className="accordion-body">
                                    <Editor content={content} placeholder={'enter privacy...'} />   
                                    </div>
                                </Accordion.Collapse>
                            </Accordion.Item>

                        </Accordion>

                         <Accordion className="accordion accordion-danger-solid" defaultActiveKey="0">
                            <Accordion.Item key={percent} eventKey={`${percent}`}>
                                <Accordion.Header className="accordion-header">
                               Add  Answer4
                                </Accordion.Header>
                                <Accordion.Collapse eventKey={`${percent}`} className="accordion__body">
                                    <div className="accordion-body">
                                    <Editor content={content} placeholder={'enter privacy...'} />   
                                    </div>
                                </Accordion.Collapse>
                            </Accordion.Item>

                        </Accordion>          
            

           
            <br />

            <div className="form-group mb-3 row">
                <label
                    className="col-lg-4 col-form-label"
                    htmlFor="val-username"
                >
                    Correct Answer
                </label>
                <div className="col-lg-6">
                    <input component="input"
                        placeholder="Correct answer"
                        name="display_id"
                        className="form-control" />

                </div>
            </div>
           
            <div className="form-group mb-3 row">
                <label
                    className="col-lg-4 col-form-label"
                    htmlFor="val-username"
                >
                    Status
                </label>
                <div className="col-lg-6">
                    <select
                     defaultValue={"option"}
                        className="form-control"
                        id="sel1"
                    >
                        <option>Select status</option>
                        <option>Active</option>
                        <option>In-active</option>
                      
                    </select>

                </div>
            </div>
            <div className="form-group">
                <button className="btn btn-primary" type="button"
                >Save</button>
            </div>
        </>
    )

}
export default AddQuizQuestions
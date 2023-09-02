import Editor from "../admin/EditorwithUseQuill"

const AddPlanQrders = () => {
    const content = '';
    return (
        <>
            <div className="form-group mb-3 row">
                <label
                    className="col-lg-4 col-form-label"
                    htmlFor="val-username"
                >
                    Plan Name
                </label>
                <div className="col-lg-6">
                    <select
                     defaultValue={"option"}
                        className="form-control"
                        id="sel1"
                    >
                        <option>Select Plan </option>
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
                    Display Order
                </label>
                <div className="col-lg-6">
                    <input component="input"
                        placeholder="Plan Title"
                        name="display_id"
                        className="form-control" />

                </div>
            </div>
            <div className="form-group mb-3 row">
                <label
                    className="col-lg-4 col-form-label"
                    htmlFor="val-username"
                >
                    Title
                </label>
                <div className="col-lg-6">
                    <input component="input"
                        placeholder="Plan Title"
                        name="display_id"
                        className="form-control" />

                </div>
            </div>
            <div className="form-group mb-3 row">
                <label
                    className="col-lg-4 col-form-label"
                    htmlFor="val-username"
                >
                    Timing
                </label>
                <div className="col-lg-6">
                    <input component="input"
                        placeholder="Enter timing(9:00 am ....)"
                        name="display_id"
                        className="form-control" />

                </div>
            </div>

            <div className="form-group mb-3 row">
                <label
                    className="col-lg-4 col-form-label"
                    htmlFor="val-username"
                >
                    Days
                </label>
                <div className="col-lg-6">
                    <input component="input"
                        placeholder="Enter days(Mon,tue,...)"
                        name="display_id"
                        className="form-control" />

                </div>
            </div>
            

            <br />
           
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
export default AddPlanQrders
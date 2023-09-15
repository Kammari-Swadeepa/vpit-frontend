import Editor from "../admin/EditorwithUseQuill"

const AddPlanDetails = () => {
    const content = '';
    return (
        <>
            <div className="form-group mb-3 row">
                <label
                    className="col-lg-4 col-form-label"
                    htmlFor="val-username"
                >
                    Plan Category
                </label>
                <div className="col-lg-6">
                    <select
                     defaultValue={"option"}
                        className="form-control"
                        id="sel1"
                    >
                        <option>Select Plan Category</option>
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
                    Plan Sub Category
                </label>
                <div className="col-lg-6">
                    <select
                     defaultValue={"option"}
                        className="form-control"
                        id="sel1"
                    >
                        <option>Select Plan Sub Category</option>
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
                    Plan Title
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
                    Plan Duration
                </label>
                <div className="col-lg-6">
                    <input component="input"
                        placeholder="Plan Duration"
                        name="display_id"
                        className="form-control" />

                </div>
            </div>

            <div className="form-group mb-3 row">
                <label
                    className="col-lg-4 col-form-label"
                    htmlFor="val-username"
                >
                    Plan Price
                </label>
                <div className="col-lg-6">
                    <input component="input"
                        placeholder="Plan Price"
                        name="display_id"
                        className="form-control" />

                </div>
            </div>

            <Editor content={content} placeholder={'enter privacy...'} />
            <br />
            <div className="form-group mb-3 row">
                <div className="form-group">
                    <input type="file" />
                </div>
            </div> <br />
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
export default AddPlanDetails
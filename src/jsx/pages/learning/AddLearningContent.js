import Editor from "../admin/EditorwithUseQuill"

const AddLearningContent = () => {
    const content = '';
    return (
        <>
            <div className="form-group mb-3 row">
                <label
                    className="col-lg-4 col-form-label"
                    htmlFor="val-username"
                >
                    Learning Category
                </label>
                <div className="col-lg-6">
                    <select
                     defaultValue={"option"}
                        className="form-control"
                        id="sel1"
                    >
                        <option>Select Learning Category</option>
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
                    Learning Sub Category
                </label>
                <div className="col-lg-6">
                    <select
                     defaultValue={"option"}
                        className="form-control"
                        id="sel1"
                    >
                        <option>Select Learning Sub Category</option>
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
                    Learning Title
                </label>
                <div className="col-lg-6">
                    <input component="input"
                        placeholder="Learning Title"
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
export default AddLearningContent
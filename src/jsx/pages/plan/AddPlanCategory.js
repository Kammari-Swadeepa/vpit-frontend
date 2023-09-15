
const AddPlanCategory=() =>{

    return(
        <>
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
                                        Category Name
                                    </label>
                                    <div className="col-lg-6">
                                        <input component="input"
                                            placeholder="Display Order"
                                            name="display_id"
                                            className="form-control" />

                                    </div>
                                </div>
                                <div className="form-group">
                                    <input type="file" />
                                </div> <br />
                                <div className="form-group">
                                    <button className="btn btn-primary" type="button"
                                     >Save</button>
                                </div>
        </>
    )

}

export default AddPlanCategory
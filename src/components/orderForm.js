import React from "react"
export default function orderForm(props){

    return(
        <div className="row">
                <div className="col-lg-12">
                    <div className="mb-4 card card small">
                        <ul className="list-group list-group-flush">
                            <li className="p-3 list-group-item">
                                <div className="row">
                                    <div className="col">
                                    <form onSubmit={props.onSubmit}>
                                        <div className="form-group row">
                                            <div className="form-group col-md-6">
                                            <label htmlFor="name">
                                                Name: </label>
                                                <input id="fename" onChange={props.onChange} name="name" className="form-control" type="text" placeholder="Name" value={props.order.name} requried={true} />
                                            
                                            </div>
                                        <div className="form-group col-md-6">
                                        <label htmlFor="price">
                    Price</label>
                    <input type="number" id="feprice" name="price" onChange={props.onChange} value={props.order.price} className="form-control" placeholder="Price"  required={true} />
                
                                        </div>
                </div>
                <div className="form-group row">
                    <div className="form-group col-md-12">
                    <label htmlFor="fenotes"> 
                    Notes
                    </label>
                    <div className="p10">
                    <textarea onChange={props.onChange} value={props.order.notes} name="notes" required={true}></textarea>
                    </div>
                    </div>

                </div>
                
                
                    <button id="submit" onClick={props.handleSubmit} className="btn btn-primary mr-2 btn btn-accent">
                        Submit
                    </button>
                    <button id="submit" className="btn btn-danger btn btn-primary">
                        Cancel
                    </button>
            </form>
                                    </div>

                                </div>

                            </li>
                        </ul>
                    </div>
                    
                    </div>
                    </div>
    );
}
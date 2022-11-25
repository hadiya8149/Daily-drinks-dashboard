import {Component, React, useState} from "react";
import{Link} from "react-router-dom";
export default function  OrderTable(){
    const [data, setData]=useState(JSON.parse(localStorage.getItem("order_data")))
    let arr = []
    if (localStorage.getItem('order_data')!== null && localStorage.getItem("order_data")){
        arr=JSON.parse(localStorage.getItem('order_data'))
    }
    return(
            <div id="page-wrap">
            <div className="main-container">
             
                <div className="add-btn">
                    <Link to='/addorder'>
                    <button className="btn btn-info pull-right">Add</button>
                </Link>
                </div>
                
                
                
                <div className="table-container card card-small">
                    <h6>Orders</h6>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Notes</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            (data && data.length>0)?
                            data && data.map((item,key) =>{
                                return <tr key={key}>
                                    <td>{key+1}</td>
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>
                                    <td>{item.notes}</td>
                                    <td>
                                        <i className="glyphicon glyphicon-pencil"></i>
                                        <i className="glyphicon glyphicon-remove"></i>
                                    </td>
                                </tr>
                            })
                            :
                            <tr>
                                <td colSpan="5" align={'center'}>No data available</td>
                            </tr>
                            }
                    </tbody>
                </table>
                </div>
            </div>
            </div>
        );
    }
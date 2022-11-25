import { React, useState} from "react"
import OrderForm from "./orderForm.js"
// import saveOrder from "../api/orderApi.js";
import orderStore from "../stores/orderStore.js"
import * as orderActions from "../data/orderActions.js"
const AddOrder = props =>{
    //array destructuring 
    const[order, setOrder] =useState({
        id:null,
        name:"",
        price:"",
        notes:""
    });
    function handleChange(event){
        //always treat state as immutable dont' do this order.title = event.target.title
        //call the setter  // computed property based on a variable
        const updatedOrder = {...order, [event.target.name]:event.target.value};
        setOrder(updatedOrder);
    }
    function handleSubmit(event){
        event.preventDefault();
        orderActions.saveOrder(order).then(response =>{
            console.log("order saved successfully")
        });
        // history.push('/')
        
    }
    // function goBack(){
    //     history.push('/')
    // }
    return(
        <div id="#addorder">
            <h4>
                Add Order
            </h4>
            <OrderForm order={order} onChange={handleChange} onSubmit={handleSubmit}/>
            
        </div>
    );
}
export default  AddOrder;
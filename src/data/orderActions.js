import dispatcher from "./Dispatcher";
import  * as apiOrder from "../api/orderApi.js"
import actionTypes from "./actionTypes";

export  function saveOrder(order){
    return apiOrder.saveOrder(order).then(savedOrder => {
        // hey dispatcher, go tell all the stores that a order was just created
        dispatcher.dispatch({
            actionType: actionTypes.CREATE_ORDER,
            order: savedOrder
        });
    });

}
export function loadOrders(){

}
export function deleteOrder(){

}
//actions have types and data
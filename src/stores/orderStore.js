import {EventEmitter} from "events";
import dispatcher from "../data/Dispatcher";
import actionTypes from "../data/actionTypes";
const CHANGE_EVENT = "change"
let _orders = [];

class OrderStore extends EventEmitter{
    addChangeListener(callback){
        this.on(CHANGE_EVENT, callback)
    }
    removeChangeListener(callback){
        this.removeListener(CHANGE_EVENT, callback);
    }
    emitChange(){
        this.emit(CHANGE_EVENT);
    }
    getOrders(){
        return _orders;
    }
    get
}
const store = new OrderStore();

dispatcher.register(action => {
    switch(action.actionType){
        case(actionTypes.CREATE_ORDER):
            _orders.push(action.order)
            store.emitChange();
            break;
        case actionTypes.DELETE_ORDER:
            _orders.splice(1)
            store.emitChange();
            break;
        case actionTypes.EDIT_ORDER:
            store.emitChange();
            break;
        default:
            //nothing to do here

    }
})

export default store;
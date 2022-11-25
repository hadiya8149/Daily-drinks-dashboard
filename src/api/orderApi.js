export  function saveOrder(order){
    
    let arr=[];
        if(localStorage.getItem("order_data")!== null && localStorage.getItem("order_data")){
            arr = JSON.parse(localStorage.getItem("order_data"));

        }
        arr.push({name:order.name, price:order.price, notes:order.notes})
        localStorage.setItem('order_data', JSON.stringify(arr))
}
// function deleteOrder(order){
//     // do nothig
// }
// function editOrder(order){
//     //do nothing
// }
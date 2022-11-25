import './App.css';
import React from "react";
import {BrowserRouter as Router,Route, Routes} from "react-router-dom"
import SideBar from './components/sidebar';
import OrderTable from "./components/viewOrders.js"
import AddOrder from "./components/addOrder.js";
import Header from "./components/header.js"
class  App extends React.Component{
  
  render(){
  return (
    <div className='App'>
      <Router> 

      <SideBar />
      <div className='main-body'>
      <Header />
      <Routes>

        <Route path='/' element={<OrderTable  />} />
        <Route path='/addorder' element = {<AddOrder />} />
      </Routes>
      </div>
      </Router>
      </div>
  );
}
}
export default App;

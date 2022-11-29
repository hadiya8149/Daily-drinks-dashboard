import React from "react"
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.css';
import Container from "react-bootstrap/Container"
import img from "../img/icons8-dashboard-layout-48.png"
export default function SideBar(){
    return(
        <Navbar className="sidebar"  >
            
           <Container className="container-fluid">
               <Navbar.Brand href="/"><h3>Daily drinks Dashboard</h3><img src={img} alt="menu-icon" className="dashboard"></img></Navbar.Brand>
            <Nav>
                <Nav.Link className="list-group list-group-flush mx-3 mt-4 nav-item" href="/addorder">Order</Nav.Link>
            </Nav>
            </Container>
        </Navbar>
        
    )

}
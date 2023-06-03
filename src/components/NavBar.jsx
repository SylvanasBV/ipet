import React from "react";
import CarWidget from "./CarWidget";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
 
const NavBar = () =>{
    return(
        <header>
          <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">IHELP</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#Toys">Toys</Nav.Link>
                    <Nav.Link href="#Dog_Food">Dog Food</Nav.Link>
                    <Nav.Link href="#Weather">Weather</Nav.Link>
                    <Nav.Link href="#Healt">Healt</Nav.Link>
                </Nav>
                <CarWidget contador={0}/>
            </Container>
          </Navbar>
        </header>
    )
} 

export default NavBar;
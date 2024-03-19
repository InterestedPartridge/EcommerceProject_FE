import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

export default function NavbarUser(props) {
    return (
        <Navbar bg="light" expand="lg" className="p-3">
            <Navbar.Brand href="/products">E-COMMERCE</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mx-auto">
                    <Nav.Link href="/listallproduct">List of Products</Nav.Link>
                    <Nav.Link href="/listallcategory">List of Categories</Nav.Link>
                    <Nav.Link href="/getbyname">Get Category & Product</Nav.Link>
                    <NavDropdown title={props.username} id="basic-nav-dropdown">
                        <NavDropdown.Item href="/getprodbyid">Get Product By Id</NavDropdown.Item>
                        <NavDropdown.Item href="/getprodbyname">Get Product By Name</NavDropdown.Item>
                        <NavDropdown.Item href="/getbyid">Get Category By Name</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/logout">Logout</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

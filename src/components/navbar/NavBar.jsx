import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import fantasy from "../../data/fantasy.json";
import history from "../../data/history.json";
import horror from "../../data/horror.json";
import romance from "../../data/romance.json";
import scifi from "../../data/scifi.json";

class NavBar extends Component {
    constructor(props) {
        super(props);
      }
    render() {
        return (
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Link</Nav.Link>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1" onClick={() => {this.props.onGenereChange(fantasy)}}>Fantasy</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2" onClick={() => {this.props.onGenereChange(history)}}>History</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3" onClick={() => {this.props.onGenereChange(horror)}}>Horror</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4" onClick={() => {this.props.onGenereChange(romance)}}>Romance</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.5" onClick={() => {this.props.onGenereChange(scifi)}}>SciFi</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}

export default NavBar
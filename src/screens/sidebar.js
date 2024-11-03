import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Sidebar = () => {
  return (
    <Navbar bg="light" expand="lg" className="flex-column sidebar">
      <Navbar.Brand href="#dashboard">ED Tech</Navbar.Brand>
      <Nav className="flex-column">
        <LinkContainer to="/dashboard">
          <Nav.Link>Dashboard</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/subjects">
          <Nav.Link>Subjects</Nav.Link>
        </LinkContainer>
        <NavDropdown title="Previous Papers" id="prev-papers-dropdown">
          <LinkContainer to="/previous-papers/upsc">
            <NavDropdown.Item>UPSC</NavDropdown.Item>
          </LinkContainer>
          <LinkContainer to="/previous-papers/gate">
            <NavDropdown.Item>GATE</NavDropdown.Item>
          </LinkContainer>
          <LinkContainer to="/previous-papers/csir">
            <NavDropdown.Item>CSIR</NavDropdown.Item>
          </LinkContainer>
          <LinkContainer to="/previous-papers/iit-jam">
            <NavDropdown.Item>IIT-JAM</NavDropdown.Item>
          </LinkContainer>
          <LinkContainer to="/previous-papers/others">
            <NavDropdown.Item>Others</NavDropdown.Item>
          </LinkContainer>
        </NavDropdown>
        <LinkContainer to="/publish">
          <Nav.Link>Publish</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/notebook">
          <Nav.Link>Notebook</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/login">
          <Nav.Link>Login</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/myaccount">
          <Nav.Link>My Account</Nav.Link>
        </LinkContainer>
      </Nav>
    </Navbar>
  );
};

export default Sidebar;

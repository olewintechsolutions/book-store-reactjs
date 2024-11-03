import React, {useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavDropdown, Button, Offcanvas } from 'react-bootstrap';
import logo from '../images/geo.png';
import { Routes, Route, Link } from 'react-router-dom';
import '../App.css';
import Geology from '../branches/geology';
import GeoPhy from '../branches/geophy';
import Login from '../Authentication/login';
import Home from '../components/home';
import Article from '../pages/article';
import Collection from '../pages/collection';
function NavMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);


  return (
    <>
  
    <Navbar expand="lg" className="m-0 ">
      <Container fluid  >
      <Navbar.Brand href="/" className='fw-bold fs-2 me-3  ' >
            <img
              alt=""
              src={logo}
              width="80"
              height="50"
              className="img-fluid d-inline-block align-center me-4 "
            />{' '}
            Geo & GeoPhy
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" style={{backgroundColor: "#23aa83"}} />
        <Navbar.Collapse className='navbar-menu' id="basic-navbar-nav" style={{backgroundColor: "", borderRadius: "15px", margin:"15px", paddingBottom:"15px"}}>
        <Nav className="mx-auto  text-center fw-bold gap-lg-4">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/pages/article">Explore</Nav.Link>
            <Nav.Link as={Link} to="/pages/collection">Colletions</Nav.Link>

            <NavDropdown title="Papers" id="basic-nav-dropdown"
             className='text-center align-center mx-auto fw-bold'
             show={isOpen}
             onMouseEnter={() => setIsOpen(true)}
             onMouseLeave={() => setIsOpen(false)}
            >
               <NavDropdown.Item as={Link} to="/">2021 - present</NavDropdown.Item>
               <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/">2020 - 2011</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/">2010 - 2001</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/">Before 2000</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
            <NavDropdown title="Branches" id="basic-nav-dropdown1"
        className='text-center align-center mx-auto fw-bold'
             show={isOpen1}
             onMouseEnter={() => setIsOpen1(true)}
             onMouseLeave={() => setIsOpen1(false)}
            >
              <NavDropdown.Item as={Link} to= {'/branches/geology'} >Applied Geology</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to = {"/branches/geophy"} >Exploration GeoPhysics</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to = {"/"} >Hydrology</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to = {"/"} >Ocenography</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to = {"/"} >Climatology</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to = {"/"} >Meteorology</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to = {"/"} >Remote Sensing</NavDropdown.Item>
              <NavDropdown.Divider />

            </NavDropdown>
            <NavDropdown title="More" id="basic-nav-dropdown" 
             className='text-center align-center mx-auto fw-bold'
             show = {isOpen2}
            onMouseEnter ={() => setIsOpen2(true)}
            onMouseLeave ={() => setIsOpen2(false)}

            >
              <NavDropdown.Item>submenu 1</NavDropdown.Item>
              <NavDropdown.Divider/>
              <NavDropdown.Item>submenu 2</NavDropdown.Item>
              <NavDropdown.Divider/>
              <NavDropdown.Item>submenu 3</NavDropdown.Item>
              <NavDropdown.Divider/>
            </NavDropdown>
            
            <Nav.Item>
          <Nav.Link as={Link} to="/" activeClassName="active-link fw-bold"> 
           Explore
          </Nav.Link>
        </Nav.Item>       
           
            <Button variant="dark" onClick={handleShow} className='text-center fw-bold align-items-center px-3 '>
        Settings
      </Button>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className='fw-bold text-center'  >Settings</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <NavDropdown title="My Account" id="basic-nav-dropdown" className='text-dark text-center flex-column fw-bold'>
              <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/Authentication/login">Create Account</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">SignUp</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4" className='text-light bg-danger text-center flex-column fw-bold'>
                LogOut
              </NavDropdown.Item>
            </NavDropdown>
         
        </Offcanvas.Body>
      </Offcanvas>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div className=''>
    <Routes>
          <Route path='/' element ={<Home/>}></Route>
          <Route path='/pages/article' element ={<Article/>}></Route>
          <Route path='/pages/collection' element ={<Collection/>}></Route>
          <Route path="/branches/geology" element={<Geology />} />
          <Route path="/branches/geophy" element={<GeoPhy />} />
          <Route path="/Authentication/login" element={<Login />} />
          {/* Add more Route components for other pages */}
        </Routes>

    </div>

    </>
  );
}

export default NavMenu;





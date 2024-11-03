
import React from 'react';
import logo from '../images/geo.png';
import { Container, Row, Col } from 'react-bootstrap';
const Footer = () => {
  return (
    <>
   
    <footer className="bg-dark text-light py-5 justify-content-md-center">
      <Container>
        <Row>
	
        <Col md ={3}>
			<img src={logo} alt="/"
			style={{
				width:"80px",
				height:"50px",
				display:"flex",
				alignItems:"center",
				color: '#ffc72c',


			}}
      className='bg-light'
			/> 
					<h1 className="fw-bold m-2  fs-3" style={{color:"#23aa83"}}>Geo & </h1>				
					<h1 className="fw-bold  fs-3" style={{color:"#23aa83"}}>GeoPhy</h1>					
		</Col>

          <Col md={3}>
            <h5 className='fw-bold' style={{color:"#23aa83"}}>Services</h5>
            <ul className="list-unstyled p-2">
              <li>Property Sales</li>
              <li>Valuation</li>
              <li>Consultations</li>
			  <li>Planning</li>
			  <li>Designing</li>
            </ul>
          </Col>
          <Col md={2}>
            <h5 className='fw-bold 'style={{color:"#23aa83"}}>Useful Links</h5>
            <ul className="list-unstyled">
			  <li>Property</li>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Terms of Service</li>
            </ul>
          </Col>
         
          <Col md={3}>
            <h5 className='fw-bold' style={{color:"#23aa83"}}>Contact Us</h5>
            <address>
              Bangalore - City<br />
              India<br />
              Phone: +91 8639449423<br />
              Email: geogeophy@gmail.com
            </address>
          </Col>
		 
        </Row>
        
      <Col md={12}className=' text-center gap-3 p-3' >
          <p>
            <a href="/privacy-policy">Privacy Policy</a> | <a href="/terms-of-use">Terms & Conditions</a> |
            <a href="/privacy-policy">Data Policy</a> | <a href="/terms-of-use">CopyRight</a>
          </p>
        </Col>
      </Container>
    </footer>
    <div className='text-center'>
    <p>&copy;CopyRight @ 2024</p>
  </div>
   
 
  </>
  );
};

export default Footer;


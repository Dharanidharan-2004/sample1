import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image'
import Group1 from '../Asssets/Group1.png'
import indiaretailing from '../Asssets/indiaretailing.png'
import {Container, Row, Col} from 'react-bootstrap';
import hotspot from '../Asssets/hotspot.png'
import AI from '../Asssets/AI.png'
import Shipping from '../Asssets/Shipping.png'
import bigimage from '../Asssets/bigimage.png'




const webpage = () => {
  return (
    <div>
<div>
    <Image className='d-flex justify-content-center' style={{maxWidth:"970px", margin: '0 auto'}} src={Group1} ></Image>
    </div>
    
    <div>
    <Image className='d-flex justify-content-center mt-5' style={{maxWidth:"284.65px", margin: '0 auto'}} src={indiaretailing}></Image>
    </div>

    <Container className='mt-5'>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Nav className='w-75 d-flex justify-content-evenly'>
            <Nav.Link style={{marginLeft:"175px"}} className='text-danger fw-bold' href="#Home">Home</Nav.Link>
            <Nav.Link className='text-black fw-bold' href="#Categories">Categories</Nav.Link>
            <Nav.Link className='text-black fw-bold' href="#IR Prime">IR Prime</Nav.Link>
            <Nav.Link className='text-black fw-bold' href="#Events">Events</Nav.Link>
            <Nav.Link className='text-black fw-bold' href="#Bookstore">Bookstore</Nav.Link>
            <Nav.Link className='text-black fw-bold' href="#Newsletter">Newsletter</Nav.Link>
            <Nav.Link className='text-black fw-bold' href="#video">video</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </Container>
      <Container>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Nav className='w-100 d-flex justify-content-evenly'>
            <Nav.Link style={{marginLeft:"50px"}} href="#Fashion & Lifestyle">Fashion & Lifestyle  .</Nav.Link>
            <Nav.Link href="#Beaty & wellness">Beaty & wellness  . </Nav.Link>
            <Nav.Link href="#Food & Beverage">Food & Beverage</Nav.Link>
            <Nav.Link href="#Consumers & IT">Consumers & IT  .</Nav.Link>
            <Nav.Link href="#Entertainment">Entertainment  .</Nav.Link>
            <Nav.Link href="#Newsletter">Home Decor & Furnishing  .</Nav.Link>
            <Nav.Link href="#Spectialty Retail">Spectialty Retail</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </Container>
      <Container className='mt-5'>
      <Row className="g-4">
    <Col md={4}>
      <div className="d-flex align-items-center">
        <Image src={hotspot} fluid />
        <p className="text-danger mb-0 ms-3">HOTSPOTS</p>
        <p >Luxury hotspots: 5 most expensive high streets in the..</p>
      </div>
    </Col>
    <Col md={4}>
      <div className="d-flex align-items-center">
        <Image src={AI} fluid />
        <p className="text-danger mb-0 ms-3">AI</p>
        <p >5 ways to leverage the power of ChatGPT in retail</p>
      </div>
    </Col>
    <Col md={4}>
      <div className="d-flex align-items-center">
        <Image src={Shipping} fluid />
        <p className="text-danger mb-0 ms-3">Shipping</p>
        <p>Reliance to open 250 Azorte stores in 2-3 years</p>
      </div>
    </Col>
  </Row>
      </Container>
      <Container className='mt-5'>
        <Image src={bigimage}>

        </Image>
      </Container>
</div>
  )
}

export default webpage
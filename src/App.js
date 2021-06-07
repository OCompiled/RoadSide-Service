import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './App.css';
//Importing this, allows us to use the Css design that comes with BootStrap
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button, Carousel, Nav } from 'react-bootstrap';

//Image Imports
import sec11 from './images/sec11.webp';
import logo from './images/2222.PNG';

//Icons Imports
import { FaCarBattery } from "react-icons/fa";
import { GiHouseKeys, GiFlatTire, GiGasPump } from 'react-icons/gi';

/*
  Function Composition: A Variable that is assigned to a nameless function
  that is described using Arrow Notation =>
*/

const Small = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 381 })
    return isMobile ? children : null
}
const Medium = ({ children }) => {
    const isMed = useMediaQuery({ minWidth: 382 })
    return isMed ? children : null
}
const SmallSec2 = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 667 })
    return isMobile ? children : null
}
const MediumSec2 = ({ children }) => {
    const isMed = useMediaQuery({ minWidth: 668, maxWidth: 839 })
    return isMed ? children : null
}
const XLargeSec2 = ({ children }) => {
    const isXLg = useMediaQuery({ minWidth: 840 })
    return isXLg ? children : null
}


function App() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (

        <div id="home">
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Contact Info</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Email us at: Email@gmail.com <br></br>
                    Phone number: 444-333-2222
                </Modal.Body>
                <Modal.Footer>
                    <Button  variant= "primary" onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>

            {/*Navigation  Area*/}
            <Medium>
                <Navbar expand="lg" fixed="top" style={navBar}>
                    <Container>
                        <Navbar.Brand href="home" className="title" style={{ color: "#bf3636", fontSize: "140%", fontWeight: " bold" }}><img  style={{width:"3rem",height:"3rem"}}src={logo}/> Presidential Road Service</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="ml-auto" expand="sm">
                                <Nav.Link className="navIcons" href="#service" style={{ navLink }}>Services</Nav.Link>
                                <Nav.Link className="navIcons" href="#review" style={{ navLink }}>Review </Nav.Link>
                                <Nav.Link className="navIcons" href="#area" style={{ navLink }}>Area</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Medium>
            <Small>
                <Navbar expand="lg" fixed="top" style={navBar}>
                    <Navbar.Brand href="home" className="title" style={{ margin: "auto", color: "#bf3636", fontSize: "1em", fontWeight: " bold" }}>Road Service</Navbar.Brand>
                </Navbar>
            </Small>
            {/*Section 1*/}
            <div className="d-flex flex-column" style={sec1Design}>
                <div style={{ fontSize: "180%", textAlign: "center", color: "red",fontWeight:"bold", marginBottom: "3%",background:"white",width:"100%" }}>Flat Tires. &nbsp; Dead Batteries. &nbsp;  Locked keys. &nbsp;  Empty Tank.</div>
                <Button onClick={handleShow} style={{ background: "white", color: "red", fontStyle: "bold", fontSize: "130%", fontWeight:"bold" }}>Get Assistant Now!!</Button>
            </div>

            {/*Section 2*/}
            <SmallSec2>
                <div className="d-flex flex-column " style={sec2Design} id="service">
                    <h2 style={{ textAlign: "center", marginBottom: "4rem", fontSize: "2.5rem",paddingTop:"2%"}}> Avaliable RoadSide Services</h2>
                    <div>
                        <div style={sec2DesignSm}>
                            <h3 style={{ fontSize: "3.9rem", paddingTop: "2rem" }}><FaCarBattery /></h3>
                            <h3 style={{ color: "white" }}> Dead Battery</h3>
                            <p style={{ color: "white" }}>Car won't start because of dead battery?</p>
                            <Button onClick={handleShow} style={{margin:"0.9em",background:"#8f1414",fontWeight:"bold"}}>Get Assisted!!</Button>
                        </div>
                        <div style={sec2DesignSm}>
                            <h3 style={{ fontSize: "3.9rem", paddingTop: "2rem" }}><GiHouseKeys /></h3>
                            <h3 style={{ color: "white" }}> Locked Out</h3>
                            <p style={{ color: "white" }}>Locked your keys in your car? Or need help getting into your car?</p>
                            <Button onClick={handleShow} style={{margin:"0.9em",background:"#8f1414",fontWeight:"bold"}}>Get Assisted!!</Button>
                        </div>
                        <div style={sec2DesignSm}>
                            <h3 style={{ fontSize: "3.9rem", paddingTop: "2rem" }}><GiFlatTire /></h3>
                            <h3 style={{ color: "white" }}> Flat Tire</h3>
                            <p style={{ color: "white" }}>Got Tire problems? Get a technician to get you back on the road</p>
                            <Button onClick={handleShow} style={{margin:"0.9em",background:"#8f1414",fontWeight:"bold"}}>Get Assisted!!</Button>
                        </div>
                        <div style={sec2DesignSm}>
                            <h3 style={{ fontSize: "3.9rem", paddingTop: "2rem" }}><GiGasPump /></h3>
                            <h3 style={{ color: "white" }}> Fuel On Empty</h3>
                            <p style={{ color: "white" }}>Low on gas? No gas station in site? We have you covered!</p>
                            <Button onClick={handleShow} style={{margin:"0.9em",background:"#8f1414",fontWeight:"bold"}}>Get Assisted!!</Button>
                        </div>
                    </div>
                    </div>
            </SmallSec2>

            <MediumSec2>
                <div className="d-block " style={sec2Design} id="service">
                <div style={{height:"100vh"}}>
                    <h2 style={{ textAlign: "center", marginBottom: "4rem", fontSize: "2.5rem",lineHeight:"120px" }}> Avaliable RoadSide Services</h2>
                    <div className="d-flex" style={{ justifyContent: "center" }}>
                        <div style={sec2DesignMd}>
                            <h3 style={{ fontSize: "3.9rem", paddingTop: "2rem" }}><FaCarBattery /></h3>
                            <h3 style={{ color: "white" }}> Dead Battery</h3>
                            <p style={{ color: "white" }}>Low Battery? Car won't start because of dead battery?</p>
                            <Button onClick={handleShow} style={{margin:"0.9em",background:"#8f1414",fontWeight:"bold"}}>Get Assisted!!</Button>
                        </div>
                        <div style={sec2DesignMd}>
                            <h3 style={{ fontSize: "3.9rem", paddingTop: "2rem" }}><GiHouseKeys /></h3>
                            <h3 style={{ color: "white" }}> Locked Out</h3>
                            <p style={{ color: "white" }}>Locked your keys in your car? Or need help getting into your car?</p>
                            <Button onClick={handleShow} style={{margin:"0.9em",background:"#8f1414",fontWeight:"bold"}}>Get Assisted!!</Button>
                        </div>
                    </div>
                    <div className="d-flex" style={{ justifyContent: "center" }}>
                        <div style={sec2DesignMd}>
                            <h3 style={{ fontSize: "3.9rem", paddingTop: "2rem" }}><GiFlatTire /></h3>
                            <h3 style={{ color: "white" }}> Flat Tire</h3>
                            <p style={{ color: "white" }}>Got Tire problems? Get a technician to get you back on the road</p>
                            <Button onClick={handleShow} style={{margin:"0.9em",background:"#8f1414",fontWeight:"bold"}}>Get Assisted!!</Button>
                        </div>
                        <div style={sec2DesignMd}>
                            <h3 style={{ fontSize: "3.9rem", paddingTop: "2rem" }}><GiGasPump /></h3>
                            <h3 style={{ color: "white" }}> Fuel On Empty</h3>
                            <p style={{ color: "white" }}>Low on gas? No gas station in site? We have you covered!</p>
                            <Button onClick={handleShow} style={{margin:"0.9em",background:"#8f1414",fontWeight:"bold"}}>Get Assisted!!</Button>
                        </div>
                    </div>
                </div>
                </div>
            </MediumSec2>

            <XLargeSec2>
                <section className="d-block" style={sec2Design} id="service">
                    <div style={{height:"100vh"}}>
                    <h2 style={{ textAlign: "center", marginBottom: "4rem", fontSize: "2.5rem", justifyContent: "center", lineHeight:"200px" }}> Avaliable RoadSide Services</h2>
                    <div className="d-flex" style={{ justifyContent: "center" }}>
                        <div style={sec2DesignMd}>
                            <h3 style={{ fontSize: "3.9rem", paddingTop: "2rem" }}><FaCarBattery /></h3>
                            <h3 style={{ color: "white" }}> Dead Battery</h3>
                            <p style={{ color: "white" }}>Low Battery? Car won't start because of dead battery?</p>
                            <Button onClick={handleShow} style={{margin:"0.9em",background:"#8f1414",fontWeight:"bold"}}>Get Assisted!!</Button>
                        </div>
                        <div style={sec2DesignMd}>
                            <h3 style={{ fontSize: "3.9rem", paddingTop: "2rem" }}><GiHouseKeys /></h3>
                            <h3 style={{ color: "white" }}> Locked Out</h3>
                            <p style={{ color: "white" }}>Locked your keys in your car? Or need help getting into your car?</p>
                            <Button onClick={handleShow} style={{margin:"0.9em",background:"#8f1414",fontWeight:"bold"}}>Get Assisted!!</Button>
                        </div>
                        <div style={sec2DesignMd}>
                            <h3 style={{ fontSize: "3.9rem", paddingTop: "2rem" }}><GiFlatTire /></h3>
                            <h3 style={{ color: "white" }}> Flat Tire</h3>
                            <p style={{ color: "white" }}>Got Tire problems? Get back on the road</p>
                            <Button onClick={handleShow} style={{margin:"0.9em",background:"#8f1414",fontWeight:"bold"}}>Get Assisted!!</Button>
                        </div>
                        <div style={sec2DesignMd}>
                            <h3 style={{ fontSize: "3.9rem", paddingTop: "2rem" }}><GiGasPump /></h3>
                            <h3 style={{ color: "white" }}> Fuel On Empty</h3>
                            <p style={{ color: "white" }}>Low on gas? No gas station in site? We have you covered!</p>
                            <Button onClick={handleShow} style={{margin:"0.9em",background:"#8f1414",fontWeight:"bold"}}>Get Assisted!!</Button>
                        </div>
                    </div>
                    </div>
                </section>
            </XLargeSec2>

            {/*Section 3*/}
            <div id="review" style={{ backgroundColor: "#e4eaf2" }} className="my-auto">
            <div style={{height:"100vh"}}>
                <h1 style={{ textAlign: "center", marginBottom: "3.5rem",paddingTop:"2",lineHeight:"200px" }}>Customer Review</h1>
                <Carousel>
                    <Carousel.Item indicators="false" interval={1000}>
                        <div className="d-block " style={{ marginLeft: "2.5rem", marginRight:"2.5rem",textAlign: "center", marginBottom: "10rem" }}>
                            <p >Amazing service. I called them around 2:15am, when my left tire went flat on the highway. <br></br> They where out helping me witting 30 mins, and they where,very courteous <br></br> I will definately reccommend their service.<br></br> -- James. L</p>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item interval={1000}>
                        <div className="d-block " style={{ marginLeft: "2.5rem",marginRight:"2.5rem", textAlign: "center", marginBottom: "10rem" }}>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,<br></br> when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,<br></br> but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item interval={1000}>
                        <div className="d-block " style={{ marginLeft: "2.5rem",marginRight:"2.5rem", textAlign: "center", marginBottom: "10rem" }}>
                            <p >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,<br></br> when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,<br></br> but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                        </div>
                    </Carousel.Item>
                </Carousel>
                <div style={btn}>
                    <Button onClick={handleShow}  style={{fontWeight:"bold",background:"#8f1414"}}variant="primary">Get Assistant!!!</Button>
                </div>
                </div>
            </div>

            {/*Section 4*/}
            <div style={{ marginTop: "4%" }}>
                <div style={{ height:"100vh",backgroundColor: "#e4eaf2" }} id="area">
                    <h1 style={{ textAlign: "center", marginBottom: "3rem",lineHeight:"200px" }}> Serving Areas</h1>
                    <p style={{ paddingLeft: "2%", paddingRight: "2%", textAlign: "center" }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    <div style={btn}>
                        <Button onClick={handleShow} style={{fontWeight:"bold",background:"#8f1414"}}variant="primary">Get Assistant!!!</Button>
                    </div>
                </div>
            </div>

            <footer style={{ fontSize: "1.3rem", textAlign: "center", backgroundColor: "#e4eaf2", marginTop: "4%" }}>
                2021 Baltimore Presidential Road Service <br></br>
                Presidential Road Service
    </footer>
        </div>
    );
}

const btn = {
    display: "flex",
    justifyContent: "center",
    marginTop: "10%",
    paddingBottom: "3%"
}
const navLink = {
    color: "#bf3636"
}

const navBar = {
    backgroundColor: "white",
    borderBottomStyle: "dashed",
    color: "#3d79ad"
}

const sec1Design = {
    backgroundImage: `url(${sec11})`,
    backgroundPosition: "center",
    height: "40em",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    marginBottom: "4%",
    alignItems: "center",
}

const sec2Design = {
    backgroundColor: "#e4eaf2",
    margin: "auto",
    marginBottom: "4%",
}

const sec2DesignSm = {
    backgroundColor: "#3d79ad",
    marginBottom: "3%",
    textAlign: "center",
    width: "95%",
    height: "18rem",
    marginLeft: "2.2%",
    marginRight: "1.2%",
    color: "rgb(78, 75, 75)"
}
const sec2DesignMd = {
    backgroundColor: "#143b7a",
    marginBottom: "3%",
    textAlign: "center",
    width: "19rem",
    color: "rgb(78, 75, 75)",
    marginRight: "1%",
    marginLeft: "1%",
    paddingLeft:"1%",
    paddingRight:"1%"
}

export default App;



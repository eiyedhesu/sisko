import React from 'react';
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap';

function Header() {
    return (
        <div>
            <div className="border-bottom py-2">
                <Container>
                    <Row>
                        <Col md={6} className='text-start'>
                            <span className="me-3"><i className="fa-solid fa-phone me-1 text-warning"></i> (+62) 812-3456-789</span>
                        </Col>
                        <Col md={6} className='text-end'>
                            <span className="me-3"><i className="fa-solid fa-truck text-muted me-1"></i><a className="text-muted" href="#">Support</a></span>
                            <span className="me-3"><i className="fa-solid fa-file  text-muted me-2"></i><a className="text-muted" href="#">ID</a></span>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Navbar bg="white" sticky="top" variant="light">
                <Container>
                    <Navbar.Brand href="/"> FajarStore. </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarNavDropdown" />
                    <Navbar.Collapse id="navbarNavDropdown">
                        <Nav className="ms-auto">
                            <Nav.Item>
                                <Nav.Link href="/cat" className="mx-2 ">Category</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="#" className="mx-2 ">Products</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="#" className="mx-2 ">Catalog</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="#" className="mx-2 ">Services</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="#" className="mx-2 ">About</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Nav className="ms-auto">
                            <Nav.Item>
                                <Nav.Link href="#" className="mx-2 "> Cart</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="#" className="mx-2 "> Account</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default Header;

'use client'

import 'bootstrap/dist/css/bootstrap.min.css';
import { useCart } from '@/contexts/CartContext'
import { usePathname } from 'next/navigation'
import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

export default function NavBar() {
    const { cart } = useCart();
    const pathname = usePathname();
    return (
        
            <Navbar fixed="top" expand={'md'} className="bg-body-tertiary" style={{height:"55px"}}>
                <Container fluid>
                    <Navbar.Brand href="/" className='fw-bolder fs-5'>goodGoods</Navbar.Brand>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-md`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-md`}
                        placement="start"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                                goodGoods
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-center flex-grow-1 pe-3">
                                <Nav.Link className={`nav-link ${pathname === '/' ? 'active' : ''}`} href="/">Home</Nav.Link>
                                <Nav.Link className={`nav-link ${pathname === '/products' ? 'active' : ''}`} href="/products">Explore</Nav.Link>
                                <Nav.Link className={`nav-link ${pathname === '/about-us' ? 'active' : ''}`} href="/about-us">About Us</Nav.Link>
                                <Nav.Link className={`nav-link ${pathname === '/contact-us' ? 'active' : ''}`} href="/contact-us">Contact Us</Nav.Link>
                            </Nav>
                            <Nav.Link className={`nav-link ${pathname === '/cart' ? 'active' : ''}`} href="/cart"><i className="fas fa-shopping-cart"></i><span className="mx-1 badge bg-danger">{cart.length}</span> </Nav.Link>
                            <Button variant="outline-success">Log In</Button>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>

    );
}


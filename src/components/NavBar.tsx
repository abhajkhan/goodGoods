'use client'

import 'bootstrap/dist/css/bootstrap.min.css';
import { useCart } from '@/contexts/CartContext'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Link from 'next/link';
import Image from 'next/image';
import { FaShoppingCart } from 'react-icons/fa'

export default function NavBar() {
    const { getCartItemCount } = useCart();
    const pathname = usePathname();
    const [expanded, setExpanded] = useState(false);
    return (<>

        <Navbar fixed="top" expand={'md'} bg="light" expanded={expanded} onToggle={() => setExpanded(!expanded)} >
            <Navbar.Toggle
                aria-controls="navbar-nav"
                className="border-0 order-1 d-md-none"
            />
            <Navbar.Brand as={Link} href="/" className='fw-bolder fs-5 order-2 order-md-1 mx-auto mx-md-0'><Image src={"/goodGoods.png"} alt='logo' height={60} width={60} /> goodGoods</Navbar.Brand>
            <Nav.Link as={Link} href='/cart' className='d-md-none order-3 position-relative' >
                <FaShoppingCart size={20} />
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"> {getCartItemCount()}</span>
            </Nav.Link>

            <Navbar.Collapse id="navbar-nav" className="order-4 order-md-2">

                <Nav className="mx-auto flex-grow-1 pe-3 justify-content-center">
                    <Nav.Link as={Link} href="/" active={pathname === '/'} onClick={() => setExpanded(false)} >
                        Home
                    </Nav.Link>
                    <Nav.Link as={Link} href="/products" active={pathname === '/products'} onClick={() => setExpanded(false)} >
                        Explore
                    </Nav.Link>

                    <Nav.Link as={Link} href="/about-us" active={pathname === '/about-us'} onClick={() => setExpanded(false)} >
                        About Us
                    </Nav.Link>
                    <Nav.Link as={Link} href="/contact-us" active={pathname === '/contact-us'} onClick={() => setExpanded(false)} >
                        Contact Us
                    </Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link as={Link} href='/cart' active={pathname === '/cart'} className='mx-1 d-none d-md-block position-relative' onClick={() => setExpanded(false)} >
                        <FaShoppingCart size={20} />
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"> {getCartItemCount()}</span>
                    </Nav.Link>
                    <Nav.Link
                        className='mx-1'
                        as={Link}
                        href="/login"
                        active={pathname === '/login'}
                        onClick={() => setExpanded(false)}
                    >
                        Log In
                    </Nav.Link>
                    <Nav.Link
                        className='mx-1'
                        as={Link}
                        href="/signup"
                        active={pathname === '/signup'}
                        onClick={() => setExpanded(false)}
                    >
                        Sign Up
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>

        <div style={{ height: '5rem' }}></div>

    </>);
};


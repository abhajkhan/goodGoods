'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function NavBar() {

    var pathname = usePathname();
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand" href="/">goodGoods</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={`nav-link ${pathname === '/' ? 'active' : ''}`} href={'/'}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${pathname === '/all-products' ? 'active' : ''}`} href={'/all-products'}>All</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${pathname === '/about-us' ? 'active' : ''}`} href={'/about-us'}>About Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${pathname === '/contact-us' ? 'active' : ''}`} href={'/contact-us'}>Contact Us</Link>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                                <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}

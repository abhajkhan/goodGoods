import Link from 'next/link'
import React from 'react'


export default function Footer() {
  return (
    <footer className='bg-dark text-light d-flex flex-column justify-content-center'>
      <section className='d-flex flex-row flex-wrap justify-content-center'>

        <div className="col-md-3 p-4">
          <h5>About Us</h5>
          <p>At goodGoods, we are passionate about providing high-quality products that meet your needs and exceed your expectations. Our mission is to make shopping easy, enjoyable, and rewarding for our customers.</p>
        </div>

        <div className="col-md-3 p-4">
          <h5>Quick Links</h5>
          <ul className='list-unstyled'>
            <li><Link className='nav-link' href="/">Home</Link></li>
            <li><Link className='nav-link' href="/about-us">About Us</Link></li>
            <li><Link className='nav-link' href="/contact-us">Contact Us</Link></li>
          </ul>
        </div>

        <div className="col-md-3 p-4">
          <h5>Contact Us</h5>
          <ul className="list-unstyled">
            <li><i className="fas fa-envelope"></i> support@goodgoods.com</li>
            <li><i className="fas fa-phone"></i> +1 234 567 890</li>
            <li><i className="fas fa-map-marker-alt"></i> 123 Good Street, Good City, GG 45678</li>
          </ul>
        </div>
      </section>
      <hr />
      <p className="text-center py-1">&copy; 2024 goodGoods. All rights reserved.</p>
    </footer>
  )
}

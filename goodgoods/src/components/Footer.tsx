import React from 'react'


export default function Footer() {
  return (
    <footer className='bg-dark text-light'>
      
      <section className='row'>
        <div className="col-md-3 p-4">
          <h5>Quick Links</h5>
          <ul className='list-unstyled custom-list'>
            <li><a className='nav-link' href="/">Home</a></li>
            <li><a className='nav-link' href="/about-us">About Us</a></li>
            <li><a className='nav-link' href="/contact-us">Contact Us</a></li>
          </ul>
        </div>
      </section>
      <hr />
      <div className="text-center py-1">
        <p>&copy; 2024 goodGoods. All rights reserved.</p>
      </div>
    </footer>
  )
}

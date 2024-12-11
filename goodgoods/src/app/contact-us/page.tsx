import React from 'react'
import './page.css'

export default function ContactUs() {
    return (

        <div>

            <header className="bg-dark text-white text-center py-5">
                <h1>Contact Us</h1>
                <p>We'd love to hear from you! Reach out to us with any questions or feedback.</p>
            </header>

            <div className="container">
                <section className="contact-section text-center">
                    <div className="row">
                        <div className="col-lg-6 contact-info">
                            <h5>Email</h5>
                            <p>support@goodgoods.com</p>
                        </div>
                        <div className="col-lg-6 contact-info">
                            <h5>Phone</h5>
                            <p>+1 234 567 890</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <h1>Get in Touch</h1>
                            <form className="contact-form text-start">
                                <div className="form-group mb-2">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" className="form-control" id="name" placeholder="Enter your name"/>
                                </div>
                                <div className="form-group mb-2">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" className="form-control" id="email" placeholder="Enter your email"/>
                                </div>
                                <div className="form-group mb-2">
                                    <label htmlFor="message">Message</label>
                                    <textarea className="form-control" id="message" rows={5} placeholder="Enter your message"></textarea>
                                </div>
                                <button type="submit" className="btn btn-dark">Submit</button>
                            </form>
                        </div>
                    </div>
                </section>
            </div>

        </div>

    )
}

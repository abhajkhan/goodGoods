import React from 'react'
import './page.css'

export default function AboutUs() {
    return (
        <div className="">


            <header className="bg-dark text-white text-center py-5">
                <h1>About Us</h1>
                <p>Learn more about goodGoods and our mission</p>
            </header>

            <div>
                <section className="about-section text-center">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <h1>Welcome to goodGoods!</h1>
                            <p>At goodGoods, we are passionate about providing high-quality products that meet your needs and exceed your expectations. Our mission is to make shopping easy, enjoyable, and rewarding for our customers.</p>
                            <p>We believe in the power of good products to bring joy and convenience to everyday life. Whether you are looking for the latest gadgets, stylish apparel, or essential household items, we have something for everyone.</p>
                        </div>
                    </div>
                </section>

                <section className="team-section text-center">
                    <h2>Meet Our Team</h2>
                    <div className="row">
                        <div className="col-md-4 team-member">
                            <img src="https://via.placeholder.com/150" alt="Team Member 1" className="img-fluid" />
                            <h5>John Doe</h5>
                            <p>Founder & CEO</p>
                        </div>
                        <div className="col-md-4 team-member">
                            <img src="https://via.placeholder.com/150" alt="Team Member 2" className="img-fluid" />
                            <h5>Jane Smith</h5>
                            <p>Chief Operating Officer</p>
                        </div>
                        <div className="col-md-4 team-member">
                            <img src="https://via.placeholder.com/150" alt="Team Member 3" className="img-fluid" />
                            <h5>Emily Johnson</h5>
                            <p>Head of Marketing</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

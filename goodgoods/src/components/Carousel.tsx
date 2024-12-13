
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Carousel() {
    return (

        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="/banner1.webp" className="d-block w-100"  alt="banner" />
                </div>
                <div className="carousel-item">
                    <img src="/banner2.webp" className="d-block w-100"  alt="banner" />
                </div>
                <div className="carousel-item">
                    <img src="/banner3.webp" className="d-block w-100" alt="banner" />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

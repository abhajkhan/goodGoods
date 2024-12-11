import React from 'react'

export default async function FeaturedProductsCard(props: any) {
    const product = props.product;
    var size = props.size;

    if (size == 'full') {
        return (
            <>
                <div className="card position-relative p-4 m-4">
                    <img src={product.image} alt={product.title} />
                    <div className="row d-flex justify-content-between position-absolute">
                        <span className="fw-4 fs-5">{product.title}</span>
                        <span className="fw-4 fs-5">{product.price}</span>
                    </div>
                </div>
            </>
        )
    }

    if (size == 'half') {
        return (
            <>
                <div className="card position-relative p-4 m-4">
                    <img src={product.image} alt={product.title} />
                    <div className="row d-flex justify-content-between position-absolute">
                        <span className="fw-4 fs-5">{product.title}</span>
                        <span className="fw-4 fs-5">{product.price}</span>
                    </div>
                </div>
            </>
        )
    }
}

"use client"

import { useCart } from '@/contexts/CartContext';
import { ServicesProducts } from '@/services/services-products';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

export default function ProductDetail({ params }: { params: { product_id: number } }) {
    const { product_id } = params;
    const { addToCart } = useCart();
    const [product, setProduct] = useState<any | null>(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    const fetchProduct = async () => {
        try {
            const data = await ServicesProducts.getProductDetail(product_id);
            setProduct(data);
        } catch (error) {
            console.log("Error fetching data", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProduct();
    }, [product_id]);

    if (loading) return <div>Loading...</div>;
    if (!product) return <div>Product Not Found</div>

    const handleAddToCart = () => {
        addToCart(product);
        router.push('/cart');
    };

    return (
        <>
            <div className="card m-4 d-flex flex-row">
                <div className='col-5 '>
                    <img src={product.image} alt={product.title} className="img-fluid" />
                </div>
                <div className="col-4 card-body">
                    <h3 className="card-title">{product.title} </h3>
                    <p>{product.description} </p>
                    <span className="fs-5 fw-bold">${product.price}</span>
                    <div className="d-flex justify-content-between">
                        <button className='btn btn-success m-1'>Buy Now</button>
                        <button className="btn btn-dark m-1" onClick={handleAddToCart}><i className="fas fa-shopping-cart"></i> Add to Cart</button>
                    </div>
                </div>
            </div>
        </>
    );
}

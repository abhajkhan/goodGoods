"use client"

import { useCart } from '@/contexts/CartContext';
import { ServicesProducts } from '@/services/services-products';
import { Product } from '@/services/utils';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

interface Params {
    product_id: number;
}

export default function ProductDetail({ params }: { params: Promise<Params> }) {
    const { product_id } = React.use(params);
    const { addToCart } = useCart();
    const [product, setProduct] = useState<Product | null>(null);
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

    // eslint-disable-next-line react-hooks/exhaustive-deps
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
            <div className="card m-4 d-flex flex-md-row col-md-9 justify-content-evenly">
                <div className='col-md-7 col-lg-5 p-4'>
                    <img src={product.image} alt={product.title} className="img-fluid" />
                </div>
                <div className="col-md-4 card-body">
                    <h3 className=" card-title">{product.title} </h3>
                    <span className="fs-5 fw-bold">${product.price}</span>
                    <p className=''>{product.description} </p>
                    <div className="d-flex justify-content-between">
                        <button className='d-none d-md-inline btn btn-success m-1'>Buy Now</button>
                        <button className="d-none d-md-inline btn btn-dark m-1" onClick={handleAddToCart}><i className="fas fa-shopping-cart"></i> Add to Cart</button>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-evenly position-fixed bottom-0 bg-white w-100">
                <button className='d-md-none btn btn-success m-1'>Buy Now</button>
                <button className="d-md-none btn btn-dark m-1" onClick={handleAddToCart}><i className="fas fa-shopping-cart"></i> Add to Cart</button>
            </div>
        </>
    );
}

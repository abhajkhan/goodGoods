"use client"

import { useCart } from '@/contexts/CartContext'
import React from 'react'

export default function Cart() {
    const { cart } = useCart();

    return (
        <div className='container mt-5'>
            <h2>Shopping Cart</h2>
            <hr />
            {cart.length === 0 ? (
                <p className='fs-5 text-center'>Your cart is empty.</p>
            ) : (

                <div className="mb-5">
                    <ul className="list-group">
                        {cart.map(item => (
                            <li className="list-group-item d-flex justify-content-between align-items-center" key={item.id}>
                                <div>
                                    <img src={item.image} alt={item.title} width="100" className="img-fluid" />
                                    <span className='mx-5'>{item.title}</span>
                                </div>
                                <span>${item.price}</span>
                            </li>
                        ))}
                    </ul>
                    <div className="mt-3">
                        <button className="btn btn-success">Proceed to Checkout</button>
                    </div>
                </div>

            )}
        </div>
    )
}

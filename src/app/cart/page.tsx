'use client'
import { Product, useCart } from '@/contexts/CartContext';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Cart() {

    const router = useRouter();
    const { cart, removeFromCart, updateQuantity, getCartTotal } = useCart();

    return (
        <div className="container py-5">
            <h2 className="display-6 mb-4">Shopping Cart</h2>

            {cart.length === 0 ? (
                <div className="alert alert-info">Your cart is empty</div>
            ) : (
                <>
                    <div className="card mb-4">
                        <div className="card-body">
                            {cart.map((item: Product) => (
                                <div key={item.id} className="row mb-4 border-bottom pb-4">
                                    <div className="col-md-2 col-4">
                                        <div className="position-relative" style={{ width: '100%', height: '120px' }}>
                                            <Image
                                                src={item.image}
                                                alt={item.title}
                                                fill
                                                style={{ objectFit: 'contain' }}
                                                sizes="(max-width: 768px) 100px, 150px"
                                            />
                                        </div>
                                    </div>

                                    <div className="col-md-5 col-8">
                                        <h5 className="text-black mb-2">{item.title}</h5>
                                        <p className="text-muted mb-2">
                                            Category: <span className="badge bg-secondary">{item.category}</span>
                                        </p>
                                        <p className="text-success fw-bold mb-0">
                                            ${item.price}
                                        </p>
                                    </div>

                                    <div className="col-md-3 col-6 mt-3 mt-md-0">
                                        <div className="input-group">
                                            <button
                                                className="btn btn-outline-secondary"
                                                type="button"
                                                onClick={() => updateQuantity(item.id, (item.quantity || 1) - 1)}
                                            >
                                                -
                                            </button>
                                            <input
                                                type="text"
                                                className="form-control text-center"
                                                value={item.quantity || 1}
                                                readOnly
                                            />
                                            <button
                                                className="btn btn-outline-secondary"
                                                type="button"
                                                onClick={() => updateQuantity(item.id, (item.quantity || 1) + 1)}
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>

                                    <div className="col-md-2 col-6 mt-3 mt-md-0">
                                        <div className="d-flex flex-column align-items-end">
                                            <p className="mb-2">
                                                ${((item.price * (item.quantity || 1)).toFixed(2))}
                                            </p>
                                            <button
                                                onClick={() => removeFromCart(item.id)}
                                                className="btn btn-outline-danger btn-sm"
                                            >
                                                <i className="fa fa-trash"></i> Remove
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-lg-8 col-md-6 mb-3">
                                    <button onClick={() => { router.push('/products') }} className="btn btn-outline-primary m-3">
                                        Continue Shopping
                                    </button>
                                    <button className="btn btn-primary m-3">
                                        Proceed to Checkout
                                    </button>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="card bg-light">
                                        <div className="card-body">
                                            <h5 className="card-title">Cart Summary</h5>
                                            <div className="d-flex justify-content-between mb-2">
                                                <span>Subtotal:</span>
                                                <span>${getCartTotal().toFixed(2)}</span>
                                            </div>
                                            <div className="d-flex justify-content-between mb-2">
                                                <span>Shipping:</span>
                                                <span>Free</span>
                                            </div>
                                            <hr />
                                            <div className="d-flex justify-content-between fw-bold">
                                                <span>Total:</span>
                                                <span>${getCartTotal().toFixed(2)}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

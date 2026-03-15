'use client'

import styles from '@/css/ProductCard.module.css'
import StarRating from './StarRating';
import { useCart } from '@/contexts/CartContext';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Product } from '@/services/utils';

interface ProductProps {
  product: Product;
}

export default function ProductCard(props: ProductProps) {
  const product = props.product;
  const router = useRouter();

  const { addToCart } = useCart();
  const handleAddToCart = () => {
    addToCart(product);
    router.push('/cart');
  };

  return (
    <>
      <div className={`${styles.card} card`} style={{ width: "18rem" }}>
        <img src={product.image} alt="" className={styles.productImg} />
        <div className="mt-3">
          <Link className='nav-link' href={`/products/${product.id}`}>
            <h6 className="card-title">{product.title}</h6>
          </Link>
          <span className="fs-5 fw-5">${product.price}</span>
          <div className="d-flex">
            <StarRating rating={product.rating.rate} />
            <span className={styles.rating}>{product.rating.count} </span>
          </div>
        </div>
        <div className="d-flex justify-content-between">
          <button className='btn btn-success m-1'>Buy Now</button>
          <button className="btn btn-dark m-1" onClick={handleAddToCart}><i className="fas fa-shopping-cart"></i> Add to Cart</button>
        </div>
      </div>
    </>
  )
}

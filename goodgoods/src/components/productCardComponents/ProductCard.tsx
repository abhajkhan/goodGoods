import React from 'react'
import styles from '@/css/ProductCard.module.css'
import StarRating from './StarRating';

export default function ProductCard(props:any) {
    var product = props.product;

  return (
    <>
    <div className={`${styles.card} card`} style={{width:"16rem"}}>
        <img src={product.image} alt="" className={styles.productImg} />
        <div className="card-body">
            <h6 className="card-title">{product.title}</h6>
            <span className="fs-5 fw-5">${product.price}</span>
            <div className="d-flex">
              <StarRating rating={product.rating.rate} />
              <span className={styles.rating}>{product.rating.count} </span>
            </div>
        </div>
    </div>
    </>
  )
}

import React from 'react'
import styles from '@/css/StarRating.module.css'
interface RatingProps {
  rating:number;
}

export default function StarRating(props:RatingProps) {
  const rating:number = Math.floor(props.rating);

  return (
    <div className="star-rating me-2">
        {
        [...Array(5)].map((_,index) => (
            <span key={index} className={` fa fa-star ${ index < rating ? styles.checked : '' }` }></span>
        ))
    }
    </div>
  )
}

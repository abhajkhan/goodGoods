import ProductCard from '@/components/productCardComponents/ProductCard'
import { ServicesProducts } from '@/services/services-products'
import React from 'react'

export default async function AllProducts() {
  const products = await ServicesProducts.getProducts();

  return (
    <>
    {
      products.map((product:any) => {
        return <ProductCard key={product.id} product={product} />
      })
    }
    </>
  )
}

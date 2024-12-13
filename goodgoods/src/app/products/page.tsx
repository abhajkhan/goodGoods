import ProductCard from '@/components/productCardComponents/ProductCard'
import { ServicesProducts } from '@/services/services-products'
import { Product } from '@/services/utils';
import React from 'react'

export default async function AllProducts() {
  const products = await ServicesProducts.getProducts();

  return (
    <>
    {
      products.map((product:Product) => {
        return <ProductCard key={product.id} product={product} />
      })
    }
    </>
  )
}

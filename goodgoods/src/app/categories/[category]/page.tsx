import ProductCard from '@/components/productCardComponents/ProductCard';
import { ServicesProducts } from '@/services/services-products';
import { capitalizeFirstLetter } from '@/services/utils';
import React from 'react'

export default async function CategoryProducts(props: any) {
  const category = props.params.category;
  const products = await ServicesProducts.getProductsInCategory(category);

  return (
    <>
            <h4 className='mt-4 ms-4'>{capitalizeFirstLetter(category)} </h4>

      <div className="d-flex flex-row flex-wrap justify-content-center my-4 ">
        {
          products.map((product: any) => {
            return <ProductCard key={product.id} product={product} />
          })
        }
      </div>

    </>
  )
}

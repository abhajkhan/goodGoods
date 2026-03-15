import ProductCard from '@/components/productCardComponents/ProductCard';
import { ServicesProducts } from '@/services/services-products';
import { capitalizeFirstLetter, Product } from '@/services/utils';

interface Params {
  category: string;
}

export default async function CategoryProducts({ params }: { params: Promise<Params> }) {
  const { category } = await params;

  const products = await ServicesProducts.getProductsInCategory(category);

  return (
    <>
      <h4 className="mt-4 ms-4">{capitalizeFirstLetter(category)}</h4>

      <div className="d-flex flex-row flex-wrap justify-content-center my-4">
        {products.map((product:Product) => {
          return (
            <ProductCard key={product.id} product={product} />
          );
        })}
      </div>
    </>
  );
}

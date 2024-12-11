import styles from "./page.module.css";
import { ServicesProducts } from "@/services/services-products";

export default async function Home() {

  const featuredProducts = await ServicesProducts.getLimitedProducts(5, 'desc')
  const [firstProduct, secondProduct, thirdProduct] = featuredProducts;

  return (
    <>
      <h1 className="text-center text-success">Welcome to goodGoods</h1>
      
      

    </>
  );
}

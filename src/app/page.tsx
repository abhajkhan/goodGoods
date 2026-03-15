import Link from "next/link";
import Carousel from "@/components/Carousel";
import ListCategories from "@/components/ListCategories";

export default async function Home() {

  return (
    <>
      <div>
        <Carousel />
      </div>
      <div>
          <ListCategories />
      </div>


      <div className="vw-100 text-center">
        <Link href="/products" className="btn btn-outline-dark m-4 ">
          Discover Products <i className="fas fa-arrow-right"></i>
        </Link>
      </div>
    </>
  );
}

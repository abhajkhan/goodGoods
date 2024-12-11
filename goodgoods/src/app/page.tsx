import Link from "next/link";
import styles from "./page.module.css";
import Carousel from "@/components/homeComponents/Carousel";

export default async function Home() {

  return (
    <>
      <div> <h1 className="text-center">Welcome to goodGoods!</h1>
        {/* <Carousel /> */}
      </div>

      <div className="vw-100 text-center">
        <Link href="/products" className="btn btn-outline-dark m-4 ">
          Discover Products <i className="fas fa-arrow-right"></i>
        </Link>
      </div>
    </>
  );
}

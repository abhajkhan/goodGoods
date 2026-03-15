import React from 'react';
import { ServicesCategories } from '@/services/services-categories';
import { ServicesProducts } from '@/services/services-products';
import Link from 'next/link';
import { capitalizeFirstLetter, Product } from '@/services/utils';
import Image from 'next/image';

interface categoryData {
    categoryName:string;
    categoryImages:string[]
}

async function fetchCategories() {
    const categoryNames = await ServicesCategories.getCategories();
    const categoryPromises = categoryNames.map(async (categoryName:string) => {
        const categoryProducts = await ServicesProducts.getProductsInCategory(categoryName);
        const categoryImages = categoryProducts.slice(0, 6).map((product:Product) => product.image);
        return { categoryName, categoryImages };
    });
    return Promise.all(categoryPromises);
}

export default async function ListCategories() {

    const categories = await fetchCategories();

    return (
        <>
            <div className="d-flex flex-wrap flex-row justify-content-center">
                {categories.map((category:categoryData) => (
                    <Link href={`/categories/${category.categoryName}`} key={category.categoryName} className="nav-link p-2">
                        <div className="my-2 text-center">
                            <Image
                                src={category.categoryImages[0]}
                                alt={category.categoryName}
                                height='100'
                                width='100'
                                style={{ objectFit: "contain" }}
                            />
                            <p className="fw-bold mt-2 text-center">{category.categoryName}</p>
                        </div>
                    </Link>
                ))}
            </div>
            <hr />
            <div className="d-none d-md-flex flex-wrap justify-content-start">
                {categories.map((category) => (
                    <Link href={`categories/${category.categoryName}`} key={category.categoryName} className=" bg-light nav-link m-3 w-100">
                        <h3>{capitalizeFirstLetter(category.categoryName)} <i className="fas fa-arrow-right"></i></h3>
                        <span>Upto 60% off</span>
                        <div className="d-flex">
                            {category.categoryImages.map((image:string, index:number) => (
                                <Image
                                    key={index}
                                    src={image}
                                    alt={`${category.categoryName} product ${index + 1}`}
                                    height={150}
                                    width={200}
                                    className="img-thumbnail m-1 object-fit-contain"
                                />
                            ))}
                        </div>
                    </Link>
                ))}
            </div>
        </>
    );
}


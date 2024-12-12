'use client';

import React, { Suspense, useEffect, useState } from 'react';
import { ServicesCategories } from '@/services/services-categories';
import { ServicesProducts } from '@/services/services-products';
import Link from 'next/link';
import { capitalizeFirstLetter } from '@/services/utils';
import Loading from './Loading';

export default function ListCategories() {

    interface Category {
        categoryName: string;
        categoryImages: string[];
    }
    const [categories, setCategories] = useState<Category[]>([]);

    async function fetchCategories() {
        try {
            const categoryNames = await ServicesCategories.getCategories();
            const categoryPromises = categoryNames.map(async (categoryName: string) => {
                const categoryProducts = await ServicesProducts.getProductsInCategory(categoryName);
                const categoryImages = categoryProducts.slice(0, 6).map((product: { image: any; }) => product.image);
                return { categoryName, categoryImages };
            });
            const categoryData = await Promise.all(categoryPromises);
            setCategories(categoryData);
        } catch (error) {
            console.log('Error in fetching categories', error);
        }
    }

    useEffect(() => {
        fetchCategories();
    }, []);

    return (<>
    <Suspense fallback={<Loading/>}>
        <div className="d-flex flex-row justify-content-center">
            {categories.map((category) => (
                <Link href={`/categories/${category.categoryName}`} key={category.categoryName} className="nav-link p-2">
                    <div className="my-2 text-center">
                        <img
                            src={category.categoryImages[0]}
                            alt={category.categoryName}
                            height='100rem'
                            width='100rem'
                            style={{ objectFit: "contain" }}
                        />
                        <p className="fw-bold mt-2 text-center">{category.categoryName}</p>
                    </div>
                </Link>
            ))}
        </div>
        <hr />
        <div className="d-flex flex-wrap justify-content-start">
            {categories.map((category) => (
                <Link href={`categories/${category.categoryName}`} key={category.categoryName} className=" bg-light nav-link m-3 w-100">
                    <h3>{capitalizeFirstLetter(category.categoryName)} <i className="fas fa-arrow-right"></i></h3>
                    <span>Upto 60% off</span>
                    <div className="d-flex">
                        {category.categoryImages.map((image, index) =>
                            (
                            <img 
                            key={index} 
                            src={image} 
                            alt={`${category.categoryName} product ${index + 1}`} 
                            height={150} 
                            width={200} 
                            className="img-thumbnail m-1 object-fit-contain" />
                        ))
                        }
                    </div>
                </Link>
            ))}
        </div>
        </Suspense>
    </>);
}

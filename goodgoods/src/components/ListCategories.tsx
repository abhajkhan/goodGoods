'use client';

import React, { useEffect, useState } from 'react';
import { ServicesCategories } from '@/services/services-categories';
import { ServicesProducts } from '@/services/services-products';
import Image from 'next/image';

export default function ListCategories() {
    interface Category {
        categoryName: string;
        categoryImage: string;
    }
    const [categories, setCategories] = useState<Category[]>([]);

    async function fetchCategories() {
        try {
            const categoryNames = await ServicesCategories.getCategories();
            const categoryPromises = categoryNames.map(async (categoryName: string) => {
                const categoryProducts = await ServicesProducts.getProductsInCategory(categoryName);
                const categoryImage = categoryProducts[0]?.image 
                return { categoryName, categoryImage };
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

    return (
        <div className="d-flex flex-row justify-content-center">
            {categories.map((category) => (
                <div key={category.categoryName} className="p-2">
                    <div className="my-2 text-center">
                        <img 
                            src={category.categoryImage} 
                            alt={category.categoryName} 
                            height='100rem'
                            width='100rem' 
                            style={{objectFit:"contain"}}
                        />
                        <p className="fw-bold mt-2 text-center">{category.categoryName}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

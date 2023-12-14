import React from 'react';
import ProductCard from './HomePage/ProductCard';
import Headphone from '../images/headphone.jpg';

const PopularProduct = () => {

    const card = {
        heading: "Headphone",
        price: "Rs. 500",
        image: Headphone,
        brand: 'Sony'
    };

    return (
        <div className='flex flex-col gap-8'>
            <h2 className='text-3xl text-gray-800 font-semibold'>Our Popular Product</h2>

            <div className='flex flex-row gap-2 hover:cursor-pointer overflow-x-scroll scroll-smooth overflow-hidden horizontal-scroll'>
                <ProductCard
                    heading={card.heading}
                    price={card.price}
                    image={card.image}
                    brand={card.brand}
                    className="min-w-[250px] w-full"
                />
            </div>
        </div>
    );
};

export default PopularProduct;
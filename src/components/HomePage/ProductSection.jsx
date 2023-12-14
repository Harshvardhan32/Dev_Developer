import React from 'react';
import ProductCard from './ProductCard';
import Headphone from '../../images/headphone.jpg';

const ProdustSection = ({ scroll }) => {

    const featuredProduct = [
        {
            image: Headphone,
            heading: "Headphone jdh sehgre egjhue jhde jkhd",
            price: "Rs.500",
            brand: "Sony"
        },
        {
            image: Headphone,
            heading: "Headphone",
            price: "Rs.500"
        },
        {
            image: Headphone,
            heading: "Headphone",
            price: "Rs.500"
        },
        {
            image: Headphone,
            heading: "Headphone",
            price: "Rs.500"
        },
        {
            image: Headphone,
            heading: "Headphone",
            price: "Rs.500"
        },
        {
            image: Headphone,
            heading: "Headphone",
            price: "Rs.500"
        },
        {
            image: Headphone,
            heading: "Headphone",
            price: "Rs.500"
        },
        {
            image: Headphone,
            heading: "Headphone",
            price: "Rs.500"
        }
    ];

    return (
        <div>
            <div className={`flex flex-row gap-2 hover:cursor-pointer ${scroll ? "overflow-x-scroll scroll-smooth overflow-hidden horizontal-scroll" : "flex-wrap"}`}>
                {
                    featuredProduct.map((card, index) => {
                        return (
                            <ProductCard
                                key={index}
                                heading={card.heading}
                                price={card.price}
                                image={card.image}
                                brand={card.brand}
                                className="min-w-[250px]"
                            />
                        );
                    })
                }
            </div>

        </div>
    );
};

export default ProdustSection;
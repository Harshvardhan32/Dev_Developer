import React from 'react';
import { Link } from 'react-router-dom';
import ReactStars from "react-rating-stars-component";
import Compare from '../../images/prodcompare.svg';
import Wishlist from '../../images/wish.svg';

const ProductCard = ({ image, brand, heading, price }) => {

    heading = heading.length > 20 ? `${heading.slice(0, 20)}...` : heading;

    return (
        <Link to='/store/product/:id' className="relative flex flex-col justify-between gap-6 shadow-xl bg-white w-[240px] min-w-[240px] rounded-md p-5">
            <div className='absolute flex flex-col gap-4 right-5 group-hover:block hover:cursor-pointer'>
                <Link className='p-1 rounded-full hover:bg-gray-400'>
                    <img src={Wishlist} alt="wishlist" />
                </Link>
                <Link className='p-1 rounded-full hover:bg-gray-400'>
                    <img src={Compare} alt="compare" />
                </Link>
            </div>
            <div className='flex justify-center'>
                <img src={image} alt="" />
            </div>
            <div>
                <p className='text-yellow-700 font-semibold'>{brand}</p>
            </div>
            <div className='flex flex-col gap-2'>
                <h2 className='text-xl text-gray-800 font-semibold'>{heading}</h2>
                <ReactStars
                    count={5}
                    size={24}
                    value={3}
                    edit={false}
                    activeColor="#ffd700"
                />
                <p className='text-sm text-gray-600 pb-4'>{price}</p>
            </div>
        </Link>
    );
};
export default ProductCard;
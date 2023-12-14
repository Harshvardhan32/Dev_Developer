import React from 'react';
import { Link } from 'react-router-dom';
import CameraImg from '../../images/camera.jpg';
import ReactStars from "react-rating-stars-component";
import Wishlist from '../../images/wish.svg';
import Compare from '../../images/prodcompare.svg';
import { LiaShippingFastSolid } from 'react-icons/lia';

const SingleProductDetails = () => {

    const copyToClipboard = (text) => {
        console.log('text', text);
        var textField = document.createElement('textarea');
        textField.innerText = text;
        document.body.appendChild(textField);
        textField.select();
        document.execCommand('copy');
        textField.remove();
    };

    return (
        <div className='bg-white flex flex-row max-[800px]:flex-col gap-4 p-5 rounded-md'>

            <div className='w-[50%] max-[800px]:w-full flex flex-col gap-4'>
                <div className='max-w-[500px] aspect-square p-2 border-[1px] rounded border-gray-400'>
                    <img src={CameraImg} alt="" className='w-full' />
                </div>
                <div className='flex flex-row max-w-[500px] w-full flex-wrap gap-5'>
                    <div className='max-[590px]:max-w-[100px] max-[285px]:max-w-[60px] w-[240px] p-2 rounded border-[1.5px] border-gray-400'>
                        <img src={CameraImg} alt="" className='w-full' />
                    </div>
                    <div className='max-[590px]:max-w-[100px] max-[285px]:max-w-[60px] w-[240px] p-2 rounded border-[1.5px] border-gray-400'>
                        <img src={CameraImg} alt="" className='w-full' />
                    </div>
                    <div className='max-[590px]:max-w-[100px] max-[285px]:max-w-[60px] w-[240px] p-2 rounded border-[1.5px] border-gray-400'>
                        <img src={CameraImg} alt="" className='w-full' />
                    </div>
                    <div className='max-[590px]:max-w-[100px] max-[285px]:max-w-[60px] w-[240px] p-2 rounded border-[1.5px] border-gray-400'>
                        <img src={CameraImg} alt="" className='w-full' />
                    </div>
                </div>
            </div>

            <div className='w-[50%] max-[800px]:w-full '>
                <h2 className='text-2xl pb-2 text-gray-800 font-semibold border-b-[1px] border-gray-400'>Kids Camera</h2>
                <div className='pb-2 border-b-[1px] border-gray-400'>
                    <p className='text-xl pt-2 text-gray-600 font-medium'>Rs. 500</p>
                    <div className='flex flex-row gap-4 items-center'>
                        <ReactStars
                            count={5}
                            size={24}
                            value={3}
                            edit={false}
                            activeColor="#ffd700"
                        />
                        <p>(2 Reviews)</p>
                    </div>
                    <a href='#reviews'>Write a review</a>
                </div>
                <div>
                    <div className='flex flex-row flex-wrap gap-2 py-2 items-center'>
                        <p className='text-lg text-gray-800 font-medium'>Type:</p>
                        <p>Headsets</p>
                    </div>
                    <div className='flex flex-row flex-wrap gap-2 py-2 items-center'>
                        <p className='text-lg text-gray-800 font-medium'>Brand:</p>
                        <p>Havells</p>
                    </div>
                    <div className='flex flex-row flex-wrap gap-2 py-2'>
                        <p className='text-lg text-gray-800 font-medium'>Categories:</p>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus libero ut odio eligendi ex temporibus voluptate neque ad eos? Quaerat.</p>
                    </div>
                    <div className='flex flex-row flex-wrap gap-2 py-2 items-center'>
                        <p className='text-lg text-gray-800 font-medium'>Tags:</p>
                        <div className='flex gap-3 flex-wrap'>
                            <span className='bg-gray-100 py-1 px-2 rounded-md'>Headphones</span>
                            <span className='bg-gray-100 py-1 px-2 rounded-md'>Laptops</span>
                            <span className='bg-gray-100 py-1 px-2 rounded-md'>Mobiles</span>
                        </div>
                    </div>
                    <div className='flex flex-row flex-wrap gap-2 py-2 items-center'>
                        <p className='text-lg text-gray-800 font-medium'>Availability:</p>
                        <p>541 In Stock</p>
                    </div>
                    <div className='flex flex-col gap-2 py-2'>
                        <p className='text-lg text-gray-800 font-medium'>Size:</p>
                        <div className='flex flex-row flex-wrap gap-2'>
                            <span className='text-md hover:cursor-pointer text-gray-600 border-[1px] border-gray-600 px-4 py-2'>S</span>
                            <span className='text-md hover:cursor-pointer text-gray-600 border-[1px] border-gray-600 px-4 py-2'>L</span>
                        </div>
                    </div>
                    <div className='flex flex-row flex-wrap gap-2 py-2'>
                        <p className='text-lg text-gray-800 font-medium'>Quantity:</p>
                        <div>
                            <input type='number'
                                name=''
                                defaultValue={1}
                                min={1}
                                max={100}
                                className='w-[60px] px-2 py-2 border-[1px] border-gray-400 rounded-md outline-none'
                                id=''
                            />
                        </div>
                    </div>
                    <div className='flex flex-row flex-wrap gap-4 py-4'>
                        <button className='w-fit bg-gray-800 py-2 px-3 rounded-full text-white hover:opacity-90'>Add to Cart</button>
                        <button className='w-fit bg-gray-800 py-2 px-3 rounded-full text-white hover:opacity-90'>Buy It Now</button>
                    </div>
                    <div className='flex flex-row flex-wrap w-full max-w-[800px] gap-4 pt-2'>
                        <a href='' className='flex flex-row gap-2'>
                            <img src={Wishlist} alt="" />
                            <p>Add to wishlist</p>
                        </a>
                        <a href='' className='flex flex-row gap-2'>
                            <img src={Compare} alt="" />
                            <p>Add to compare</p>
                        </a>
                    </div>
                    <div className='pt-8 flex flex-col gap-4'>
                        <div className='flex flex-col gap-2 border-b-[1px] border-gray-400 pb-4'>
                            <div className='flex flex-row gap-2 items-center'>
                                <LiaShippingFastSolid fontSize={20} />
                                <p className='text-gray-800 font-medium'>Shipping & Return</p>
                            </div>
                            <div className='pl-4'>
                                <p>Free shipping and return available on all orders!</p>
                                <p>Free shipping and return available on all orders!</p>
                            </div>
                        </div>
                        <div className='flex flex-row gap-2 border-b-[1px] border-gray-400 pb-4'>
                            <p className='text-gray-800 font-medium'>Product Link:</p>
                            <Link href='#' onClick={() => copyToClipboard(CameraImg)}>Copy Link</Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SingleProductDetails;
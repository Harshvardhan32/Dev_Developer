import React from 'react';
import { RxCross2 } from "react-icons/rx";
import BreadCrumb from '../components/BreadCrumb';
import HeadphoneImg from '../images/headphone.jpg';

const CompareProduct = () => {
    return (
        <div className='w-screen bg-gray-200'>
            <div>
                <BreadCrumb title={"Compare Products"} />
            </div>

            <div className='w-11/12 mx-auto py-8'>
                <div className='flex flex-row flex-wrap gap-2'>
                    <div className='bg-white relative flex flex-col gap-4 justify-between rounded-md w-full max-w-[280px] p-4'>
                        <div className='w-full mx-auto'>
                            <img src={HeadphoneImg} alt="" />
                        </div>
                        <RxCross2 fontSize={30} className='absolute right-4 hover:cursor-pointer text-gray-700'/>
                        <div className='flex flex-col gap-4'>
                            <h2 className='text-xl text-gray-800 font-semibold'>Lorem ipsum dolor sit amet consectetur.</h2>
                            <p className='text-lg text-gray-800 font-medium'>Rs. 500</p>
                            <div className='flex flex-row gap-4 justify-between'>
                                <h3 className='text-lg text-gray-800 font-semibold'>Brand:</h3>
                                <p className='text-gray-600'>Boat</p>
                            </div>
                            <div className='flex flex-row gap-4 justify-between'>
                                <h3 className='text-lg text-gray-800 font-semibold'>Type:</h3>
                                <p className='text-gray-600'>Headphone</p>
                            </div>
                            <div className='flex flex-row gap-4 justify-between'>
                                <h3 className='text-lg text-gray-800 font-semibold'>Availability:</h3>
                                <p className='text-gray-600'>In Stock</p>
                            </div>
                            <div className='flex flex-row gap-4 justify-between'>
                                <h3 className='text-lg text-gray-800 font-semibold'>Size:</h3>
                                <p className='text-gray-600'>S M L</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CompareProduct;
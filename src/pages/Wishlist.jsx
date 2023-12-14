import React from 'react';
import { RxCross2 } from "react-icons/rx";
import BreadCrumb from '../components/BreadCrumb';
import HeadphoneImg from '../images/headphone.jpg';

const Wishlist = () => {
    return (
        <div className='w-screen bg-gray-200'>
            <div>
                <BreadCrumb title={"Wishlist"} />
            </div>

            <div className='w-11/12 mx-auto py-8'>
                <div className='flex flex-row flex-wrap gap-2'>
                    <div className='bg-white relative flex flex-col gap-4 justify-between rounded-md w-full max-w-[280px] p-4'>
                        <div className='w-full mx-auto pb-5'>
                            <img src={HeadphoneImg} alt="" />
                        </div>
                        <RxCross2 fontSize={30} className='absolute right-4 hover:cursor-pointer text-gray-700' />
                        <h2 className='text-xl text-gray-800 font-semibold'>Lorem ipsum dolor sit.</h2>
                        <p className='text-lg text-gray-600 font-medium'>Rs. 500</p>
                    </div>
                    <div className='bg-white relative flex flex-col gap-4 justify-between rounded-md w-full max-w-[280px] p-4'>
                        <div className='w-full mx-auto pb-5'>
                            <img src={HeadphoneImg} alt="" />
                        </div>
                        <RxCross2 fontSize={30} className='absolute right-4 hover:cursor-pointer text-gray-700' />
                        <h2 className='text-xl text-gray-800 font-semibold'>Lorem ipsum dolor sit.</h2>
                        <p className='text-lg text-gray-600 font-medium'>Rs. 500</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Wishlist;;;
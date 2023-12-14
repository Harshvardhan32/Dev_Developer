import React from 'react';
import Headphone from '../images/headphone.jpg';
import { RiDeleteBinLine } from "react-icons/ri";

const CartItem = () => {
    return (
        <div className='w-full flex flex-row max-[850px]:flex-col justify-between gap-10'>

            <div className='flex flex-row gap-4 justify-between w-full'>
                <div className='flex flex-row max-[400px]:flex-col gap-4 justify-between'>
                    <div className='max-w-[300px] max-[400px]:w-[90px]'>
                        <img src={Headphone} alt="" className='w-full' />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h3 className='text-lg text-gray-800 font-semibold'>Kids Headphone</h3>
                        <p className='text-gray-600'>Size: S</p>
                        <p className='text-gray-600'>Color: #AB546D</p>
                    </div>
                </div>
                <p className='text-lg text-gray-800 font-semibold'>Rs. 500</p>

            </div>

            <div className='flex flex-row gap-4 justify-between h-fit w-full'>
                <div className='flex flex-row gap-x-4'>
                    <input type='number'
                        name=''
                        defaultValue={1}
                        min={1}
                        max={100}
                        className='w-[60px] px-2 py-2 border-[1px] border-gray-400 rounded-md outline-gray-600'
                        id=''
                    />
                    <div className='bg-gray-800 p-3 rounded-full hover:cursor-pointer'>
                        <RiDeleteBinLine fill='#FFF' />
                    </div>
                </div>
                <p className='text-lg text-gray-800 font-semibold'>Rs. 500</p>
            </div>
        </div>
    );
};

export default CartItem;;
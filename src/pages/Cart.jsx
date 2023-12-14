import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem';

const Cart = () => {
    return (
        <div className='w-screen bg-gray-200'>
            <div className='flex flex-col gap-6 py-6'>

                <div>
                    <BreadCrumb title={'Cart'} />
                </div>

                <div className='flex flex-col gap-10 justify-between w-11/12 mx-auto bg-white rounded-md items-center p-5'>

                    <div className='flex flex-row gap-x-10 gap-y-4 max-[850px]:flex-col justify-between w-full border-b-[1px] pb-6 border-gray-300'>
                        <div className='flex flex-row gap-4 justify-between w-full'>
                            <p className='uppercase text-lg text-gray-600'>Product</p>
                            <p className='uppercase text-lg text-gray-600'>Price</p>
                        </div>
                        <div className='flex flex-row gap-4 justify-between w-full'>
                            <p className='uppercase text-lg text-gray-600'>Quantity</p>
                            <p className='uppercase text-lg text-gray-600'>Total</p>
                        </div>
                    </div>

                    <CartItem />

                    <div className='flex flex-col gap-6 w-full'>
                        <Link to='/store' className='w-fit bg-gray-800 py-2 px-6 rounded-full text-white hover:bg-gray-700'>
                            Continue Shopping
                        </Link>

                        <div className='flex flex-row max-[400px]:flex-col gap-6 w-full justify-between'>
                            <p>Order special instructions</p>
                            <div className='flex flex-col gap-4 justify-end'>
                                <div className='flex flex-row gap-6 items-center justify-end'>
                                    <p className='text-gray-600'>Subtotal</p>
                                    <p className='text-lg text-gray-800 font-semibold'>Rs. 500</p>
                                </div>
                                <p className='text-gray-600'>Taxes and shipping calculated at checkout</p>
                                <Link to='/checkout' className='min-w-[200px] text-center bg-gray-800 py-2 px-6 rounded-full text-white hover:bg-gray-700'>
                                    Checkout
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Cart;
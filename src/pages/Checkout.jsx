import React from 'react';
import { Link } from 'react-router-dom';
import { MdArrowBackIos } from "react-icons/md";
import Headphone from '../images/headphone.jpg';

const Checkout = () => {
    return (
        <div className='w-screen bg-gray-200'>
            <div className='py-8'>

                <div className='w-11/12 mx-auto flex flex-row gap-10 bg-white rounded-md p-8'>

                    <div className='flex flex-col gap-4 min-w-[45%]'>
                        <div className='flex flex-col gap-2 w-fit'>
                            <h2 className='text-3xl text-gray-800 font-medium'>Dev</h2>
                            <p>
                                <Link to='/cart'>Cart &gt;</Link> Information &gt; Shipping
                            </p>
                        </div>

                        <div className='flex flex-col gap-1 text-gray-600 w-fit'>
                            <p className='text-xl text-gray-800'>Contact Information</p>
                            <p className=''>Sandeep (sandeep34@gmail.com)</p>
                            <Link to='/login' className='text-gray-800 w-fit'>Log out</Link>
                            <label className='flex flex-row gap-2'>
                                <input type="checkbox" />
                                Email me with news and offers
                            </label>
                        </div>

                        <div className='w-fit'>
                            <p className='text-xl text-gray-800'>Shipping Address</p>
                        </div>

                        {/* <div>
                            <select name="" id="">
                                <option value="">Us</option>
                            </select>
                        </div> */}

                        <div className='w-full flex flex-col gap-4 text-gray-800'>
                            <select name="" id="" defaultValue={'DEFAULT'} className='bg-gray-50 p-2 outline-none border-[1px] border-black border-opacity-50 rounded-md'>
                                <option value="DEFAULT" disabled>Select Country</option>
                            </select>
                            <div className='flex flex-row gap-4 justify-between'>
                                <label className='w-full'>
                                    <input
                                        type="text"
                                        placeholder='First name (optional)'
                                        className='bg-gray-50 outline-none border-[1px] border-black border-opacity-50 w-full font-normal rounded-md p-2'
                                    />
                                </label>
                                <label className='w-full'>
                                    <input
                                        type="text"
                                        placeholder='First name'
                                        className='bg-gray-50 outline-none border-[1px] border-black border-opacity-50 w-full font-normal rounded-md p-2'
                                    />
                                </label>
                            </div>
                            <label className='w-full'>
                                <input
                                    type="text"
                                    placeholder='Address'
                                    className='bg-gray-50 outline-none border-[1px] border-black border-opacity-50 w-full font-normal rounded-md p-2'
                                />
                            </label>
                            <label className='w-full'>
                                <input
                                    type="text"
                                    placeholder='Apartment, suite, etc. (optional)'
                                    className='bg-gray-50 outline-none border-[1px] border-black border-opacity-50 w-full font-normal rounded-md p-2'
                                />
                            </label>

                            <div className='flex flex-row gap-4 justify-between'>
                                <label htmlFor="">
                                    <input
                                        type="text"
                                        placeholder='City'
                                        className='bg-gray-50 outline-none border-[1px] border-black border-opacity-50 w-full font-normal rounded-md p-2'
                                    />
                                </label>
                                <select name="" id="" defaultValue={'DEFAULT'} className='bg-gray-50 max-w-[190px] w-full p-2 outline-none border-[1px] border-black border-opacity-50 rounded-md'>
                                    <option value="DEFAULT" disabled >Select State</option>
                                    <option value="">hetywvbces</option>
                                </select>
                                <label htmlFor="">
                                    <input
                                        type="text"
                                        placeholder='ZIP Code'
                                        className='bg-gray-50 outline-none border-[1px] border-black border-opacity-50 w-full font-normal rounded-md p-2'
                                    />
                                </label>
                            </div>
                        </div>

                        <div className='flex flex-row gap-4 pt-2 items-center justify-between'>
                            <Link to='/cart' className='text-gray-800 flex flex-row gap-1 items-center'>
                                <MdArrowBackIos fontSize={20} />
                                Return to Cart
                            </Link>
                            <Link className='bg-gray-800 py-3 px-5 text-white rounded-full hover:opacity-90'>
                                Continue to shipping
                            </Link>
                        </div>

                    </div>

                    <div className='w-full flex flex-col gap-4'>
                        <div className='flex flex-row gap-4 justify-between p-2 bg-gray-100 rounded-md items-center'>
                            <div className='flex flex-row gap-4'>
                                <div className='relative max-w-[250px]'>
                                    <img src={Headphone} alt="" className='w-full bg-transparent' />
                                    <p className='absolute top-0 right-1 text-center text-white rounded-full px-1 bg-gray-600 w-[25px] aspect-square'>0</p>
                                </div>
                                <div>
                                    <p className='text-gray-800 text-lg font-semibold'>Kid headphone</p>
                                    <p className='text-gray-600'>S / #AB546D</p>
                                </div>
                            </div>
                            <div>
                                <p className='text-gray-600'>Rs. 100.00</p>
                            </div>
                        </div>
                        <div className='flex flex-row gap-4 justify-between w-full py-3 border-t-[1px] border-gray-400'>
                            <p>Subtotal</p>
                            <p>Rs. 500</p>
                        </div>
                        <div className='flex flex-row gap-4 justify-between w-full'>
                            <p>Shipping</p>
                            <p>Rs. 500</p>
                        </div>
                        <div className='flex flex-row gap-4 justify-between w-full border-t-[1px] border-gray-400 pt-3 text-lg text-gray-800 font-semibold'>
                            <p>Total</p>
                            <p>Rs. 1000</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Checkout;
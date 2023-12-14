import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BreadCrumb from '../components/BreadCrumb';
import ProdustList from '../components/HomePage/ProductSection';

const OurStore = () => {

    const [showDropdown, setShowDropdown] = useState(false);

    const dropdownHandler = () => {
        if (showDropdown === false) {
            setShowDropdown(true);
        } else {
            setShowDropdown(false);
        }
    };

    return (
        <div className='w-screen bg-gray-200'>
            <div className='flex flex-col gap-6'>

                <div>
                    <BreadCrumb title={'Our Store'} />
                </div>

                <div className='flex flex-row max-[800px]:flex-col gap-5 w-11/12 mx-auto pt-4 pb-8'>

                    {/* lest section */}

                    <div className='flex flex-col gap-4 w-[23%] max-[800px]:w-[100%]'>

                        <div className='bg-white flex flex-col gap-4 rounded-md py-4 px-6'>
                            <h3 className='text-lg font-semibold text-gray-800'>Shop by Categories</h3>
                            <div className='flex flex-col gap-2 text-sm text-gray-600'>
                                <Link to='/'>Home</Link>
                                <Link to='/store'>Our Store</Link>
                                <Link to='/blogs'>Blogs</Link>
                                <Link to='/contact'>Contact</Link>
                            </div>
                        </div>

                        <div className='bg-white flex flex-col gap-4 rounded-md py-4 px-6'>

                            <h3 className='text-lg font-semibold text-gray-800'>Filter by</h3>

                            <div className='flex flex-col gap-2 pl-2'>
                                <h4 className='text-md font-semibold text-gray-800'>Availability</h4>
                                <label htmlFor="" className='flex flex-row gap-3 text-gray-600'>
                                    <input
                                        type="checkbox"
                                        placeholder='From'
                                        className=''
                                        id='floatingInput'
                                    />
                                    In stock (21)
                                </label>
                                <label htmlFor="" className='flex flex-row gap-3 text-gray-600'>
                                    <input
                                        type="checkbox"
                                        placeholder='To'
                                        className=''
                                        id='floatingInput1'
                                    />
                                    Out of stock (1)
                                </label>
                            </div>

                            <div>
                                <div className='flex flex-col gap-2 pl-2'>
                                    <h4 className='text-md font-semibold text-gray-800'>Price</h4>

                                    <div className='flex flex-wrap gap-3'>
                                        <label htmlFor="" className='flex flex-row items-center gap-2 text-gray-500'>
                                            Rs.
                                            <input
                                                type='text'
                                                placeholder='From'
                                                id=''
                                                className='py-2 px-2 bg-gray-100 w-[70%] rounded-sm outline-none'
                                            />
                                        </label>
                                        <label htmlFor="" className='flex flex-row items-center gap-2 text-gray-500'>
                                            Rs.
                                            <input
                                                type="text"
                                                placeholder='From'
                                                id=''
                                                className='py-2 px-2 bg-gray-100 w-[70%] rounded-sm outline-none'
                                            />
                                        </label>
                                    </div>

                                    <div className='flex flex-col gap-2'>
                                        <label htmlFor="" className='flex flex-row gap-3 text-gray-600'>
                                            <input
                                                type="checkbox"
                                                placeholder='From'
                                                className=''
                                                id='floatingInput'
                                            />
                                            S (2)
                                        </label>
                                        <label htmlFor="" className='flex flex-row gap-3 text-gray-600'>
                                            <input
                                                type="checkbox"
                                                placeholder='To'
                                                className=''
                                                id='floatingInput1'
                                            />
                                            M(2)
                                        </label>
                                    </div>
                                </div>

                            </div>

                        </div>

                        {/* product tags */}
                        <div className='bg-white flex flex-col gap-4 rounded-md py-4 px-6'>
                            <h3 className='text-lg font-semibold text-gray-800'>Product Tags</h3>
                            <div className='flex gap-3 flex-wrap'>
                                <span className='bg-gray-100 py-1 px-2 rounded-md'>Headphones</span>
                                <span className='bg-gray-100 py-1 px-2 rounded-md'>Laptop</span>
                                <span className='bg-gray-100 py-1 px-2 rounded-md'>Mobile</span>
                            </div>
                        </div>

                    </div>

                    {/* right section */}
                    <div className='flex flex-col gap-4 w-full'>

                        {/* filter section */}
                        <div className='flex flex-row gap-5 justify-between bg-white py-2 px-4 rounded-md'>
                            <div className='flex flex-row gap-2 items-center'>
                                <p className='text-gray-900'>Sort By:</p>
                                <div className="relative inline-block text-left bg-gray-100 py-1 px-2 rounded-md items-center">
                                    <button type="button" onClick={dropdownHandler} className="inline-flex w-full justify-center gap-x-5 text-gray-500" id="menu-button" aria-expanded="true" aria-haspopup="true">
                                        Best Selling
                                        <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="#6B7280" aria-hidden="true">
                                            <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                                        </svg>
                                    </button>
                                    <div className={`${showDropdown ? 'block' : 'hidden'} absolute z-10 mt-3 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`} role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
                                        <div className="py-1" role="none">
                                            <p className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-0">Alphabetically, A-Z</p>
                                            <p className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-1">Alphabetically, Z-A</p>
                                            <p className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-2">Price, Low to High</p>
                                            <p className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-2">Price, High to Low</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <p className='text-gray-600'>21 products</p>

                        </div>

                        {/* product List Section */}
                        <ProdustList />

                    </div>

                </div>

            </div>
        </div>
    );
};

export default OurStore;
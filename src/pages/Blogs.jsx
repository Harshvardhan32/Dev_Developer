import React from 'react';
import { Link } from 'react-router-dom';
import BreadCrumb from '../components/BreadCrumb';
import BlogSection from '../components/HomePage/BlogSection';

const Blogs = () => {
    return (
        <div className='w-screen bg-gray-200'>
            <div className='flex flex-col gap-6'>

                <div>
                    <BreadCrumb title={'Blogs'} />
                </div>

                <div className='flex flex-row justify-between gap-5 w-11/12 mx-auto pt-4 pb-8'>

                    <div className='bg-white max-[600px]:hidden w-fit min-w-[300px] h-fit flex flex-col gap-4 rounded-md py-4 px-6'>
                        <h3 className='text-lg font-semibold text-gray-800'>Shop by Categories</h3>
                        <div className='flex flex-col gap-2 text-sm text-gray-600'>
                            <Link to='/'>Home</Link>
                            <Link to='/store'>Our Store</Link>
                            <Link to='/blogs'>Blogs</Link>
                            <Link to='/contact'>Contact</Link>
                        </div>
                    </div>

                    <div className='max-[600px]:mx-auto'>
                        <BlogSection />
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Blogs;;
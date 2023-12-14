import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import BlogImage from '../images/blog-1.jpg';
import { BsArrowLeft } from "react-icons/bs";
import { Link } from 'react-router-dom';

const BlogDetails = () => {
    return (
        <div className='w-screen bg-gray-200'>
            <div className='flex flex-col gap-6'>

                <div>
                    <BreadCrumb title={'Blogs'} />
                </div>

                <div className='w-11/12 mx-auto flex flex-col gap-4 pt-4 pb-8'>

                    <h2 className='text-2xl font-semibold text-gray-800'>A Beautiful Sunday Morning</h2>
                    <div>
                        <img src={BlogImage} alt="" className='w-full rounded-md' />
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias consequuntur animi expedita magnam. Dicta, architecto at hic accusamus autem excepturi unde quos molestiae velit amet magnam repudiandae repellendus, iste adipisci explicabo itaque harum voluptates temporibus ea nesciunt. Voluptatibus, ducimus pariatur quo, vel, voluptatum facere mollitia maxime voluptates repellendus quisquam adipisci.</p>
                    <div>
                        <Link to='/blogs' className='flex flex-row gap-2 items-center font-semibold text-gray-800'>
                            <BsArrowLeft fontSize={25} />
                            Back to blog
                        </Link>
                        {/* Panding */}
                        <div></div>
                    </div>

                    {/* Comment section */}
                    <div className='bg-white w-full rounded-md p-6 flex flex-col gap-4'>
                        <h2 className='text-2xl font-semibold text-gray-600'>Leave A Comment</h2>
                        <form>
                            <div className='flex flex-col gap-6'>
                                <div className='flex flex-row gap-6'>
                                    <label className='w-full'>
                                        <input
                                            type="text"
                                            placeholder='Name *'
                                            required
                                            className='bg-gray-100 w-full text-gray-800 py-2 px-3 rounded-md outline-none'
                                        />
                                    </label>
                                    <label className='w-full'>
                                        <input
                                            type="email"
                                            placeholder='Email *'
                                            required
                                            className='bg-gray-100 w-full text-gray-800 py-2 px-3 rounded-md outline-none'
                                        />
                                    </label>
                                </div>
                                <label>
                                    <textarea
                                        type="email"
                                        placeholder='Comment *'
                                        required
                                        className='bg-gray-100 h-28 w-full text-gray-800 py-2 px-3 rounded-md outline-none'
                                    />
                                </label>
                                <div>
                                    <button className='w-fit bg-gray-800 py-2 px-6 rounded-full text-white hover:bg-gray-700'>Post Comment</button>
                                </div>
                            </div>
                        </form>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default BlogDetails;
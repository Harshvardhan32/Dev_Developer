import React, { useState } from 'react';
import BreadCrumb from '../components/BreadCrumb';
import ReactStars from "react-rating-stars-component";
import SingleProductDetails from '../components/HomePage/SingleProductDetails';
import PopularProduct from '../components/PopularProduct';

const SingleProduct = () => {

    // const [orderedProduct, setOrderedProduct] = useState(true);
    const [showWriteReview, setShowWriteReview] = useState(true);

    const commentShowHandler = () => {
        if (showWriteReview === true) {
            setShowWriteReview(false);
        } else {
            setShowWriteReview(true);
        }
    };

    return (
        <div className='w-screen bg-gray-200'>
            <div className='flex flex-col gap-6'>

                <div>
                    <BreadCrumb title={'Product Name'} />
                </div>

                <div className='w-11/12 flex flex-col gap-8 mx-auto py-5'>

                    {/* Single product details */}
                    <SingleProductDetails />

                    <div className='flex flex-col gap-2'>
                        <h2 className='text-2xl text-gray-800 font-semibold'>Description</h2>
                        <p className='bg-white p-5 rounded-md text-gray-600 text-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis itaque corrupti fugiat magnam assumenda perferendis repudiandae. Culpa, praesentium earum consectetur sunt odio sapiente doloremque alias omnis eos recusandae voluptas laborum vel quisquam dolor, animi facere voluptatum adipisci laboriosam quas corrupti. Tenetur dicta officia non! Doloremque debitis architecto nostrum ea soluta animi illo odio esse molestiae enim quos at, aliquam facere culpa, earum aspernatur consequuntur vero! Exercitationem nam nostrum suscipit omnis.</p>
                    </div>

                    <div className='flex flex-col gap-2'>
                        <h2 className='text-2xl text-gray-800 font-semibold'>Reviews</h2>
                        <div className='bg-white flex flex-col gap-5 p-5 rounded-md text-gray-600 text-md'>
                            <p className='text-xl text-gray-800 font-semibold' id='reviews'>Customer Reviews</p>
                            <div className='flex flex-row max-[500px]:flex-col justify-between border-b-[1px] border-gray-400 pb-4'>
                                <div className=' flex flex-row gap-2 items-center'>
                                    <ReactStars
                                        count={5}
                                        size={24}
                                        value={3}
                                        edit={false}
                                        activeColor="#ffd700"
                                    />
                                    <p>Based on 2 reviews</p>
                                </div>
                                <p onClick={commentShowHandler} className='underline text-gray-800 hover:cursor-pointer'>Write a review</p>
                            </div>
                            <div className={`${showWriteReview ? "block" : 'hidden'}`}>
                                <form className=' flex flex-col gap-4 pt-8'>
                                    <div className='flex flex-col gap-4 w-full text-gray-500'>
                                        <div>
                                            Write a Review
                                            <ReactStars
                                                count={5}
                                                size={24}
                                                activeColor="#ffd700"
                                            />
                                        </div>
                                        <label className='w-full'>
                                            <textarea
                                                type="text"
                                                id=''
                                                className='bg-gray-100 py-2 px-3 max-[300px]:min-w-[150px] max-[500px]:min-w-[200px] min-w-[320px] w-full h-28 rounded-md outline-none'
                                                placeholder='Comments'
                                            />
                                        </label>
                                    </div>
                                    <button className='w-fit py-2 px-4 rounded-full bg-gray-800 text-white hover:opacity-90'>Submit Review</button>
                                </form>
                            </div>

                            <div className='flex flex-col gap-4'>
                                <div className='flex flex-row gap-4 items-center'>
                                    <p className='text-lg text-gray-800 font-semibold'>Shivam Singh</p>
                                    <ReactStars
                                        count={5}
                                        size={24}
                                        value={4}
                                        activeColor="#ffd700"
                                    />
                                </div>
                                <p className='text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore explicabo tempore fugiat ipsum vitae? Nulla odio facilis soluta aperiam, dicta itaque deleniti impedit, ex sapiente accusamus mollitia esse nesciunt sit non laboriosam iure natus. Ut aspernatur expedita tempore debitis, id unde accusantium assumenda, distinctio perferendis dolore dolor, doloribus quae pariatur!</p>
                            </div>

                        </div>
                    </div>

                    <div className=''>

                        <PopularProduct />

                    </div>

                </div>

            </div>
        </div>
    );
};

export default SingleProduct;
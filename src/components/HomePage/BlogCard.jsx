import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = ({ Img, date, title, description }) => {

    title = title.length > 30 ? `${title.slice(0,30)}...` : title;
    description = description.length > 100 ? `${description.slice(0,100)}...` : description;

    return (
        <div className='flex flex-col gap-4 shadow-xl bg-white min-w-[320px] max-w-[400px] rounded-md'>
            <div>
                <img src={Img} alt="LatestPost" className='rounded-t-md' />
            </div>
            <div className='flex flex-col gap-2 p-5'>
                <p className='text-sm text-gray-600'>{date}</p>
                <h2 className='text-xl text-gray-800 font-semibold'>{title}</h2>
                <p className='text-sm text-gray-600 pb-4'>{description}</p>
                <Link to='/blog/:id' className='uppercase w-fit bg-gray-700 py-2 px-5 rounded-full text-white hover:bg-gray-600'>Read More</Link>
            </div>
        </div>
    );
};

export default BlogCard;
import React from 'react';

const Product = ({ heading, totalItam, Img }) => {
    return (
        <div className='flex flex-row gap-2 justify-between items-center py-5 px-2'>

            <div className='flex flex-col gap-2 max-w-[40%]'>
                <div className='text-xl font-semibold text-gray-800'>{heading}</div>
                <div className='text-sm text-gray-600'>{totalItam}</div>
            </div>
            <div className='max-w-[100px]'>
                <img src={Img} alt="" />
            </div>

        </div>
    );
};

export default Product;
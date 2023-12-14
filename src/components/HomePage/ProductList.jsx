import React from 'react';
import Product from './Product';
import Headphone from '../../images/headphone.jpg';

const ProductList = () => {
    return (
        <div className='bg-white rounded-md flex gap-5 flex-wrap justify-center p-2'>
            <Product
                heading={'Computers & Laptop'}
                totalItam={'8 items'}
                Img={Headphone}
            />
            <Product
                heading={'Computers & Laptop'}
                totalItam={'8 items'}
                Img={Headphone}
            />
            <Product
                heading={'Computers & Laptop'}
                totalItam={'8 items'}
                Img={Headphone}
            />
            <Product
                heading={'Computers & Laptop'}
                totalItam={'8 items'}
                Img={Headphone}
            />
            <Product
                heading={'Computers & Laptop'}
                totalItam={'8 items'}
                Img={Headphone}
            />
            <Product
                heading={'Computers & Laptop'}
                totalItam={'8 items'}
                Img={Headphone}
            />
        </div>
    );
};

export default ProductList;
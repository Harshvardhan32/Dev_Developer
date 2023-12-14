import React from 'react';
import { Link } from 'react-router-dom';

const BreadCrumb = (props) => {

    const { title } = props;

    return (
        <div className='w-scree bg-white'>
            <div className='w-11/12 mx-auto py-2'>
                <p className='text-lg text-gray-800'>
                    <Link to='/'>Home &gt; </Link> {title}
                </p>
            </div>
        </div>
    );
};

export default BreadCrumb;
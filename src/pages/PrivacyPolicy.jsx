import React from 'react';
import BreadCrumb from '../components/BreadCrumb';

const PrivacyPolicy = () => {
    return (
        <div className='w-screen bg-gray-200 min-h-[50vh]'>
            <div className='flex flex-col gap-6 pb-6'>

                <div>
                    <BreadCrumb title={'Privacy Policy'} />
                </div>

                <div className='w-11/12 flex flex-col gap-4 bg-white mx-auto p-5 rounded-md'>
                    <div className='flex flex-col gap-2'>
                        <div className='text-2xl font-semibold text-gray-800'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                        <div className='flex flex-row gap-2 items-center text-gray-600'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro odit blanditiis, beatae ex corrupti laboriosam numquam id corporis consequuntur provident asperiores quis at eligendi aliquid nostrum velit, necessitatibus, natus rem!</div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <div className='text-2xl font-semibold text-gray-800'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                        <div className='flex flex-row gap-2 items-center text-gray-600'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro odit blanditiis, beatae ex corrupti laboriosam numquam id corporis consequuntur provident asperiores quis at eligendi aliquid nostrum velit, necessitatibus, natus rem!</div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <div className='text-2xl font-semibold text-gray-800'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                        <div className='flex flex-row gap-2 items-center text-gray-600'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro odit blanditiis, beatae ex corrupti laboriosam numquam id corporis consequuntur provident asperiores quis at eligendi aliquid nostrum velit, necessitatibus, natus rem!</div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default PrivacyPolicy;;;
import React from 'react';
import BreadCrumb from '../components/BreadCrumb';

const About = () => {
  return (
    <div className='w-screen bg-gray-200 min-h-[50vh]'>
      <div className='flex flex-col gap-6 pb-6'>

        <div>
          <BreadCrumb title={'About Us'} />
        </div>

        <div className='w-11/12 flex flex-col gap-4 bg-white mx-auto p-5 rounded-md'>
        </div>

      </div>
    </div>
  );
};

export default About;
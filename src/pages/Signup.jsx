import React, { useState } from 'react';
import BreadCrumb from '../components/BreadCrumb';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const Signup = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className='w-screen bg-gray-200'>
            <div>
                <BreadCrumb title={'Account'} />
            </div>
            <div className='flex w-11/12 mx-auto items-center justify-center min-h-[70vh] pt-4 pb-8'>
                <div className='bg-white flex flex-col gap-4 rounded-md py-4 px-6'>
                    <p className='text-lg text-center text-gray-800 font-medium'>Create Your Account</p>
                    <form className='flex flex-col gap-6 text-gray-800'>
                        <label htmlFor="">
                            <input
                                type="text"
                                required
                                className='bg-gray-100 py-2 px-3 max-[300px]:min-w-[150px] max-[500px]:min-w-[200px] min-w-[320px] rounded-md outline-none'
                                placeholder='Name *'
                            />
                        </label>
                        <label htmlFor="">
                            <input
                                type="email"
                                required
                                className='bg-gray-100 py-2 px-3 max-[300px]:min-w-[150px] max-[500px]:min-w-[200px] min-w-[320px] rounded-md outline-none'
                                placeholder='Email *'
                            />
                        </label>
                        <label htmlFor="">
                            <input
                                type="tel"
                                className='bg-gray-100 py-2 px-3 max-[300px]:min-w-[150px] max-[500px]:min-w-[200px] min-w-[320px] rounded-md outline-none'
                                placeholder='Phone number'
                                minLength={10}
                                maxLength={10}
                            />
                        </label>
                        <div className='relative flex flex-col gap-2'>
                            <label className='flex flex-col gap-2'>
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    required
                                    className='bg-gray-100 py-2 px-3 max-[300px]:min-w-[150px] max-[500px]:min-w-[200px] min-w-[320px] rounded-md outline-none'
                                    placeholder='Password *'
                                />
                            </label>
                            <div className='absolute text-gray-600 right-2 top-2 text-[23px] hover:cursor-pointer'>
                                {showPassword ? <AiOutlineEyeInvisible onClick={() => setShowPassword(false)} /> : <AiOutlineEye onClick={() => setShowPassword(true)} />}
                            </div>
                        </div>
                        <div className='flex flex-row gap-4 items-center justify-center pb-2'>
                            <button type='submit' className='w-fit  py-1 px-3 rounded-full bg-gray-800 text-white hover:opacity-90'>Create</button>
                        </div>
                    </form>
                </div>
            </div >
        </div >
    );
};

export default Signup;
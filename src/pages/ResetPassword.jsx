import React, { useState } from 'react';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import BreadCrumb from '../components/BreadCrumb';

const ResetPassword = () => {

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    return (
        <div className='w-screen bg-gray-200'>
            <div>
                <BreadCrumb title={'Reset Password'} />
            </div>
            <div className='flex w-11/12 mx-auto items-center justify-center min-h-[70vh] pt-4 pb-8'>
                <div className='bg-white flex flex-col gap-4 rounded-md py-4 px-6'>
                    <p className='text-lg text-center text-gray-800 font-medium'>Reset Password</p>
                    <form className='flex flex-col gap-6 text-gray-800'>
                        <div className='relative flex flex-col gap-2'>
                            <label htmlFor="">
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
                        <div className='relative flex flex-col gap-2'>
                            <label htmlFor="">
                                <input
                                    type={showConfirmPassword ? 'text' : 'password'}
                                    required
                                    className='bg-gray-100 py-2 px-3 max-[300px]:min-w-[150px] max-[500px]:min-w-[200px] min-w-[320px] rounded-md outline-none'
                                    placeholder='Confirm Password *'
                                />
                            </label>
                            <div className='absolute text-gray-600 right-2 top-2 text-[23px] hover:cursor-pointer'>
                                {showConfirmPassword ? <AiOutlineEyeInvisible onClick={() => setShowConfirmPassword(false)} /> : <AiOutlineEye onClick={() => setShowConfirmPassword(true)} />}
                            </div>
                        </div>
                        <div className='flex flex-row gap-4 items-center justify-center pb-2'>
                            <button type='submit' className='w-fit bg-gray-800 py-1 px-3 rounded-full text-white hover:bg-gray-700'>Login</button>
                        </div>
                    </form>
                </div>
            </div >
        </div >
    );
};

export default ResetPassword;
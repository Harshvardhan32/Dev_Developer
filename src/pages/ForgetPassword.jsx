import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import { Link } from 'react-router-dom';

const ForgetPassword = () => {
    return (
        <div className='w-screen bg-gray-200'>
            <div>
                <BreadCrumb title={'Forget Password'} />
            </div>
            <div className='flex w-11/12 mx-auto items-center justify-center min-h-[70vh] pt-4 pb-8'>
                <div className='bg-white flex flex-col gap-4 rounded-md py-4 px-6'>
                    <p className='text-lg text-center text-gray-800 font-medium'>Reset Your Password</p>
                    <p className='text-sm text-center text-gray-600'>We will send you an email to reset your password.</p>
                    <form className='flex flex-col gap-6 text-gray-800'>
                        <label htmlFor="">
                            <input
                                type="email"
                                required
                                id=''
                                className='bg-gray-100 py-2 px-3 max-[300px]:min-w-[150px] max-[500px]:min-w-[200px] min-w-[320px] rounded-md outline-none'
                                placeholder='Email *'
                            />
                        </label>
                        <div className='flex flex-row gap-4 items-center justify-center pb-2'>
                            <button type='submit' className='w-fit bg-gray-800 py-1 px-3 rounded-full text-white hover:opacity-90'>Submit</button>
                            <Link to='/login' className='w-fit bg-slate-200 py-1 px-3 rounded-full text-black hover:opacity-80'>Cancel</Link>
                        </div>
                    </form>
                </div>
            </div >
        </div>
    );
};

export default ForgetPassword;;
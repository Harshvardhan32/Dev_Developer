import React from 'react';
import { Link } from 'react-router-dom';
import BreadCrumb from '../components/BreadCrumb';
import { MdCall, MdEmail } from "react-icons/md";
import { IoHome } from "react-icons/io5";
import { IoIosInformationCircle } from "react-icons/io";

const Contact = () => {
    return (
        <div className='w-screen bg-gray-200'>
            <div className='flex flex-col gap-6'>

                <div>
                    <BreadCrumb title={'Contact'} />
                </div>

                <div className='w-11/12 mx-auto py-5'>

                    <div className='flex flex-row max-[700px]:flex-col gap-5 bg-white mx-auto rounded-md p-5'>
                        <div className='flex flex-col gap-4 w-[40%] max-[700px]:w-full max-[1000px]:w-[50%] max-[800px]:w-[60%]'>
                            <div className='text-2xl font-semibold text-gray-800'>Contact</div>
                            <div>
                                <form action="" className='flex flex-col gap-6'>
                                    <label htmlFor="">
                                        <input
                                            type="text"
                                            className='bg-gray-100 w-full py-2 px-3 rounded-md text-gray-600 outline-none'
                                            placeholder='Name'
                                        />
                                    </label>

                                    <label htmlFor="">
                                        <input
                                            type="email"
                                            required
                                            className='bg-gray-100 w-full py-2 px-3 rounded-md text-gray-600 outline-none'
                                            placeholder='Email *'
                                        />
                                    </label>

                                    <label htmlFor="">
                                        <input
                                            type="tel"
                                            id=''
                                            className='bg-gray-100 w-full py-2 px-3 rounded-md text-gray-600 outline-none'
                                            placeholder='Phone number'
                                            minLength={10}
                                            maxLength={10}
                                        />
                                    </label>

                                    <label htmlFor="">
                                        <textarea
                                            type="text"
                                            id=''
                                            className='bg-gray-100 w-full py-2 px-3 h-28 rounded-md text-gray-600 outline-none'
                                            placeholder='Comment'
                                            minLength={40}
                                            maxLength={2000}
                                            accept='numberOnly'
                                        />
                                        <p className='text-sm text-gray-400 font-light'>Maximum Length: 2000</p>
                                    </label>
                                    <button className='w-fit bg-gray-800 py-2 px-4 rounded-full text-white hover:bg-gray-700'>Send</button>
                                </form>
                            </div>
                        </div>

                        <div className='flex flex-col gap-4 max-[700px]:w-full'>
                            <div className='text-2xl font-semibold text-gray-800'>
                                Get In Touch With Us
                            </div>
                            <div className='flex flex-col gap-4'>
                                <p className='flex flex-row gap-2 items-center text-gray-600'><IoHome fontSize={23} />Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                                <p className='flex flex-row gap-2 items-center text-gray-600'><MdCall fontSize={23} /><Link to='tel:+91 7865438975'>+91 7865438975 </Link></p>
                                <p className='flex flex-row gap-2 items-center text-gray-600'><MdEmail fontSize={23} /><Link to='mailto:demosupport@gmail.com'>demosupport@gmail.com</Link></p>
                                <p className='flex flex-row gap-2 items-center text-gray-600'><IoIosInformationCircle fontSize={23} />Monday - Friday, 10 AM - 6 PM</p>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    );
};

export default Contact;
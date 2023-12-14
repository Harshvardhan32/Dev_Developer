import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='w-screen pt-10 bg-[#232f3e]'>
            <div className='w-11/12 mx-auto text-white pb-8'>

                <div className='flex flex-row max-[550px]:flex-col max-[550px]:pl-5 gap-10 justify-around'>
                    <div className='flex flex-col gap-4'>
                        <h2 className='font-semibold text-lg'>Contact Us</h2>
                        <Link to='tel:+91 7865438975'>+91 7865349856</Link>
                        <Link to='mailto:demosupport@gmail.com'>demo@gmail.com</Link>
                        <div className='flex flex-row gap-3'>
                            <FaFacebook fontSize={25} fill='#9CA3AF' className='hover:cursor-pointer' />
                            <FaInstagram fontSize={25} fill='#9CA3AF' className='hover:cursor-pointer' />
                            <FaTwitter fontSize={25} fill='#9CA3AF' className='hover:cursor-pointer' />
                        </div>
                    </div>

                    <div className='flex flex-col gap-4'>
                        <h2 className='font-semibold text-lg'>Information</h2>
                        <Link to='/privacy-policy'>Privacy Policy</Link>
                        <Link to='/refund-policy'>Refund Policy</Link>
                        <Link to='/shipping-policy'>Shipping Policy</Link>
                        <Link to='/term-conditions'>Terms of Service Policy</Link>
                    </div>

                    <div className='flex flex-col gap-4'>
                        <h2 className='font-semibold text-lg'>Account</h2>
                        <a href='#search'>Search</a>
                        <Link to='/about'>About Us</Link>
                        <Link to='/faq'>FAQ</Link>
                        <Link to='/contact'>Contact</Link>
                    </div>

                </div>
            </div>

            <div className='w-screen h-[0.8px] bg-white'></div>

            <div className='w-11/12 mx-auto text-white py-5'>
                <div className='text-center'>
                    <p>Copyright &copy; {new Date().getFullYear()} | All right Reserved.</p>
                </div>
            </div>

        </div>
    );
};

export default Footer;
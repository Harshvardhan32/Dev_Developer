import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';
import Compare from '../images/compare.svg';
import Wishlist from '../images/wishlist.svg';
import User from '../images/user.svg';
import Cart from '../images/cart.svg';
import { RiMenuFill } from "react-icons/ri";

const Header = () => {

    const [mobileMenu, setMobileMenu] = useState(false);
    const [showMenu, setShowMenu] = useState(false);

    const mobileMenuHandler = () => {
        if (mobileMenu === true) {
            setMobileMenu(false);
        } else {
            setMobileMenu(true);
        }
    };

    const menuHandler = () => {
        if (showMenu === true) {
            setShowMenu(false);
        } else {
            setShowMenu(true);
        }
    };

    return (
        <div className='w-screen bg-[#131921]'>

            {/* upper header */}
            <div className="w-11/12 mx-auto relative z-50">
                <div className="w-full flex flex-row gap-5 items-center justify-between py-4">

                    {/* Main Logo */}
                    <div>
                        <h2>
                            <Link to='/' className='text-white text-4xl font-semibold'>Dev</Link>
                        </h2>
                    </div>

                    {/* Search bar */}
                    <div className="input-group w-full max-w-[400px] flex flex-row">
                        <input
                            type="text"
                            id='search'
                            className="outline-none w-full py-2 px-2 rounded-l-sm"
                            placeholder="Search Product Here..."
                            aria-label="Search Product Here..."
                            aria-describedby="basic-addon2"
                        />
                        <span className="bg-[#232F3E] hover:cursor-pointer p-3 rounded-r-sm" id="basic-addon2">
                            <BsSearch fill='#fff' />
                        </span>
                    </div>

                    {/* Other Links */}
                    <div className="max-[1200px]:hidden flex flex-row gap-5 justify-between text-white">
                        <Link to='/compare-product' className='flex flex-row gap-2 items-center'>
                            <img src={Compare} alt="Compare" className='w-[24px]' />
                            <p>Compare <br />Products</p>
                        </Link>
                        <Link to='/wishlist' className='flex flex-row gap-2 items-center'>
                            <img src={Wishlist} alt="Wishlist" className='w-[24px]' />
                            <p>Favourite <br />Wishlist</p>
                        </Link>
                        <Link to='/login' className='flex flex-row gap-2 items-center'>
                            <img src={User} alt="User" className='w-[24px]' />
                            <p>Log in <br />My Account</p>
                        </Link>
                        <Link to='/cart' className='flex flex-row gap-2'>
                            <img src={Cart} alt="Cart" className='w-[24px]' />
                            <div className='flex flex-col gap-1'>
                                <div className='bg-white flex justify-center rounded-full p-1 items-center w-fit aspect-square text-black'>0</div>
                                <p>$ 500</p>
                            </div>
                        </Link>
                    </div>

                    {/* mobile menu icon */}
                    <div className='text-white font-semibold hidden max-[1200px]:block hover:cursor-pointer'>
                        <RiMenuFill fontSize={30} onClick={mobileMenuHandler} />
                    </div>
                </div>

                {/* mobile menu */}
                <div className='hidden max-[1200px]:block'>
                    <div className='absolute -right-4 top-[71px] pl-20'>
                        {
                            mobileMenu &&
                            <div className='bg-[#131921] text-white flex flex-col gap-y-5 pl-10 pr-10 pt-5 pb-10 mt-2 mr-2 rounded-lg'>
                                <Link to='/compare-product' onClick={mobileMenuHandler} className='flex flex-row gap-2 items-center'>
                                    <img src={Compare} alt="Compare" className='w-[24px]' />
                                    <p>Compare <br />Products</p>
                                </Link>
                                <Link to='/wishlist' onClick={mobileMenuHandler} className='flex flex-row gap-2 items-center'>
                                    <img src={Wishlist} alt="Wishlist" className='w-[24px]' />
                                    <p>Favourite <br />Wishlist</p>
                                </Link>
                                <Link to='/login' onClick={mobileMenuHandler} className='flex flex-row gap-2 items-center'>
                                    <img src={User} alt="User" className='w-[24px]' />
                                    <p>Log in <br />My Account</p>
                                </Link>
                                <Link to='/cart' onClick={mobileMenuHandler} className='flex flex-row gap-2'>
                                    <img src={Cart} alt="Cart" className='w-[24px]' />
                                    <div className='flex flex-col gap-1'>
                                        <div className='bg-white flex justify-center rounded-full p-1 items-center w-fit aspect-square text-black'>0</div>
                                        <p>$ 500</p>
                                    </div>
                                </Link>
                            </div>
                        }
                    </div>
                </div>

            </div>

            {/* Lower header */}
            <div className='bg-[#232f3e]'>
                <div className='w-11/12 flex flex-row gap-16 items-center mx-auto'>

                    <div className='text-white py-3  font-semibold hidden max-[500px]:block hover:cursor-pointer'>
                        <RiMenuFill fontSize={30} onClick={menuHandler} />
                    </div>

                    <div className='flex flex-row gap-10 text-white uppercase py-3 max-[500px]:hidden'>
                        <NavLink to='/'>Home</NavLink>
                        <NavLink to='/store'>Our Store</NavLink>
                        <NavLink to='/blogs'>Blogs</NavLink>
                        <NavLink to='/contact'>Contact</NavLink>
                    </div>
                </div>

            </div>

            <div className='hidden max-[1200px]:block'>
                <div className='absolute left-0 z-50'>
                    {
                        showMenu &&
                        <div className='bg-[#232f3e] py-5 mt-2 ml-2 rounded-lg flex flex-col gap-4 justify-start text-white uppercase pl-10 pr-10'>
                            <NavLink to='/' onClick={menuHandler}>Home</NavLink>
                            <NavLink to='/store' onClick={menuHandler}>Our Store</NavLink>
                            <NavLink to='/blogs' onClick={menuHandler}>Blogs</NavLink>
                            <NavLink to='/contact' onClick={menuHandler}>Contact</NavLink>
                        </div>
                    }
                </div>
            </div>

        </div>
    );
};

export default Header;
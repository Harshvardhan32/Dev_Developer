import React from 'react';
import MainBanner from '../images/main-banner-1.jpg';
import CATBanner1 from '../images/catbanner-01.jpg';
import CATBanner2 from '../images/catbanner-02.jpg';
import CATBanner3 from '../images/catbanner-03.jpg';
import CATBanner4 from '../images/catbanner-04.jpg';
import { Services } from '../utils/Data';
import BlogSection from '../components/HomePage/BlogSection';
import ProductList from '../components/HomePage/ProductList';
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import ProdustSection from '../components/HomePage/ProductSection';

const Home = () => {
    return (
        <div className='w-screen bg-gray-200'>
            <div className='w-11/12 mx-auto pt-4'>

                <div className='flex flex-row max-[700px]:flex-col max-[700px]:items-center gap-4 justify-evenly'>
                    <div className='max-w-[500px]'>
                        <img src={MainBanner} alt='' className='rounded-md' />
                    </div>
                    <div className='flex flex-col gap-4 max-w-[500px]'>
                        <div className='flex flex-row gap-4'>
                            <div>
                                <img src={CATBanner1} alt='' className='rounded-md' />
                            </div>
                            <div>
                                <img src={CATBanner2} alt='' className='rounded-md' />
                            </div>
                        </div>
                        <div className='flex flex-row gap-4'>
                            <div>
                                <img src={CATBanner3} alt='' className='rounded-md' />
                            </div>
                            <div>
                                <img src={CATBanner4} alt='' className='rounded-md' />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex flex-row flex-wrap justify-between py-10'>
                    <div className='w-full flex flex-row flex-wrap gap-8 items-center justify-between'>
                        {
                            Services?.map((service, index) => {
                                return (
                                    <div className='flex flex-row gap-4 items-center' key={index}>
                                        {service.image}
                                        <div>
                                            <h3 className='text-lg font-semibold text-gray-800'>{service.title}</h3>
                                            <p className='text-sm text-gray-600'>{service.tagline}</p>
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </div>

                </div>

                <ProductList />

                <div className='py-8 flex flex-col gap-8'>
                    
                    <div className='flex flex-row gap-10 justify-between items-center'>
                        <p className='text-3xl font-semibold text-gray-800'>Featured Collection</p>
                        <div className='flex flex-row gap-1 items-center'>
                            <IoIosArrowBack className='hover:cursor-pointer' opacity='70%' fontSize={25} />
                            <IoIosArrowForward className='hover:cursor-pointer' opacity='70%' fontSize={25} />
                        </div>
                    </div>

                    {/* <FeaturedSection */}
                    <ProdustSection
                        scroll={true}
                    />

                </div>

                <div className='flex flex-col gap-8'>
                    <div className='flex flex-row gap-10 justify-between items-center'>
                        <p className='text-3xl font-semibold text-gray-800'> Our Letest Blogs</p>
                        <div className='flex flex-row gap-1 items-center'>
                            <IoIosArrowBack className='hover:cursor-pointer' opacity='70%' fontSize={25} />
                            <IoIosArrowForward className='hover:cursor-pointer' opacity='70%' fontSize={25} />
                        </div>
                    </div>
                    <BlogSection
                        scroll={true}
                    />
                </div>

            </div>
        </div >
    );
};

export default Home;
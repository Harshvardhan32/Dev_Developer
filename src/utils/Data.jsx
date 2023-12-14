import { LiaShippingFastSolid } from 'react-icons/lia';
import { GoGift } from 'react-icons/go';
import { BiSupport, BiSolidOffer } from 'react-icons/bi';
import { MdPayment } from 'react-icons/md';

export const Services = [
    {
        title: 'Free Shipping',
        tagline: 'From all orders over Rs.500',
        image: <LiaShippingFastSolid fontSize={30} />
    },
    {
        title: 'Daily Surprise Offers',
        tagline: 'Save upto 25% off',
        image: <GoGift fontSize={30} />
    },
    {
        title: 'Support 24/7',
        tagline: 'Shop with an expert',
        image: <BiSupport fontSize={30} />
    },
    {
        title: 'Affordable Prices',
        tagline: 'Get factory Direct Price',
        image: <BiSolidOffer fontSize={30} />
    },
    {
        title: 'Secure Payments',
        tagline: '100% protected payments',
        image: <MdPayment fontSize={30} />
    }
];

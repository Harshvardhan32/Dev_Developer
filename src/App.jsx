import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import OurStore from './pages/OurStore';
import Blogs from './pages/Blogs';
import CompareProduct from './pages/CompareProduct';
import Wishlist from './pages/Wishlist';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ForgetPassword from './pages/ForgetPassword';
import Cart from './pages/Cart';
import ResetPassword from './pages/ResetPassword';
import BlogDetails from './pages/BlogDetails';
import PrivacyPolicy from './pages/PrivacyPolicy';
import RefundPolicy from './pages/RefundPolicy';
import ShippingPolicy from './pages/ShippingPolicy';
import TermAndCondition from './pages/TermAndCondition';
import SingleProduct from './pages/SingleProduct';
import Checkout from './pages/Checkout';
import FAQ from './pages/FAQ';

function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Layout />} >
                    <Route index element={<Home />} />
                    <Route path='about' element={<About />} />
                    <Route path='contact' element={<Contact />} />
                    <Route path='faq' element={<FAQ />} />
                    <Route path='store' element={<OurStore />} />
                    <Route path='cart' element={<Cart />} />
                    <Route path='checkout' element={<Checkout />} />
                    <Route path='store/product/:id' element={<SingleProduct />} />
                    <Route path='blogs' element={<Blogs />} />
                    <Route path='blog/:id' element={<BlogDetails />} />
                    <Route path='contact' element={<Contact />} />
                    <Route path='compare-product' element={<CompareProduct />} />
                    <Route path='wishlist' element={<Wishlist />} />
                    <Route path='login' element={<Login />} />
                    <Route path='signup' element={<Signup />} />
                    <Route path='forget-password' element={<ForgetPassword />} />
                    <Route path='cart' element={<Cart />} />
                    <Route path='reset-password' element={<ResetPassword />} />
                    <Route path='privacy-policy' element={<PrivacyPolicy />} />
                    <Route path='refund-policy' element={<RefundPolicy />} />
                    <Route path='shipping-policy' element={<ShippingPolicy />} />
                    <Route path='term-conditions' element={<TermAndCondition />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;

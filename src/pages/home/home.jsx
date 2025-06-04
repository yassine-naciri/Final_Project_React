import React from 'react';
import MainLayout from '../../layouts/Mainlayout';
import HomeCarousel from './partials/HeroSection';
import MainItems from './partials/MainItems';
import Footer from '../../layouts/footer';
import FeaturedProducts from './partials/FeaturedProducts';
import SoldItem from './partials/Sold';
import OurProduct from './partials/Products';
import OurBlog from './partials/Blogs';

const HomePage = () => {
    return (
        <MainLayout>
            <HomeCarousel />
            <MainItems/>
            <FeaturedProducts/>
            <SoldItem/>
            <OurProduct/>
            <OurBlog/>
            <Footer/>
        </MainLayout>
    );
};

export default HomePage;
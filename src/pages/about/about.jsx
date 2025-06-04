import React from 'react';
import MainLayout from '../../layouts/Mainlayout';
import TheAbout from './partials/theabout';
import Footer from '../../layouts/footer';

const AboutPage = () => {
    return (
        <MainLayout>
            <TheAbout/>
            <Footer/>
        </MainLayout>
    );
};

export default AboutPage;
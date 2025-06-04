import React from 'react';
import MainLayout from '../../layouts/Mainlayout';
import MainBlog from './partials/MainBlog';
import Footer from '../../layouts/footer';

const BlogPage = () => {
    return (
        <>
            <MainLayout>
                <MainBlog />
                <Footer />
            </MainLayout>
        </>
    );
};

export default BlogPage;
import React from 'react';
import MainLayout from '../../layouts/Mainlayout';

import Footer from '../../layouts/footer';
import SignUpPage from './partials/signup';

const SignUp = () => {
    return (
        <MainLayout>
            <SignUpPage />
            <Footer />
        </MainLayout>
    );
};

export default SignUp;
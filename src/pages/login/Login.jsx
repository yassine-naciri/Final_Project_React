import React from 'react';
import MainLayout from '../../layouts/Mainlayout';
import LoginPage from './partials/LoginPage';
import Footer from '../../layouts/footer';

const Login = () => {
    return (
        <MainLayout>
            <LoginPage />
            <Footer />
        </MainLayout>
    );
};

export default Login;
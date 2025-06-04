import React from 'react';
import MainLayout from '../../layouts/Mainlayout';
import ContactSections from './partials/contact';
import Footer from '../../layouts/footer';

const ContactPage = () => {
    return (
        <MainLayout>
            <ContactSections />
            <Footer />
        </MainLayout>
    );
};

export default ContactPage;
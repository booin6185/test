// This is the layout for the food landing page

import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './styles.css';

const Layout = ({ children }) => {
    return (
        <div>
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;
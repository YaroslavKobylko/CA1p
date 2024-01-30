import React from 'react';
import Header from '../../../components/Header';
import TopBar from '../../../components/TopBar';
import Footer from '../../../components/Footer';

const Layout = ({ children }) => {
  return (
    <div>
      <TopBar />
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
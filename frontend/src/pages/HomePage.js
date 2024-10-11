import React from 'react';
import Feed from '../components/Feed';
import Sidebar from '../layouts/Sidebar';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';

const HomePage = () => {
  return (
    <>
      <Header />
      <div className="main-content">
        <Sidebar />
        <Feed />
      </div>
      <Footer />
    </>
  );
};

export default HomePage;

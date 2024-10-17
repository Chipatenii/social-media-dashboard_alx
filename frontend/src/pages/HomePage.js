import React from 'react';
import Feed from '/src/components/Feed';
import Sidebar from '/src/layouts/Sidebar';
import Header from '/src/layouts/Header';
import Footer from '/src/layouts/Footer';

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

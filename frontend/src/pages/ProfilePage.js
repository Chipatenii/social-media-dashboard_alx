import React from 'react';
import Profile from '/src/components/Profile';
import Header from '/src/layouts/Header';
import Footer from '/src/layouts/Footer';

const ProfilePage = () => {
  return (
    <>
      <Header />
      <div className="profile-page">
        <Profile />
      </div>
      <Footer />
    </>
  );
};

export default ProfilePage;

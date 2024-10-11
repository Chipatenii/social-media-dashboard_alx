import React from 'react';
import Profile from '../components/Profile';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';

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

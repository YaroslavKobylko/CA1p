import React from 'react';
import Header from '../../components/Header'; // Позначте правильний шлях до вашого Header.js
import TopBar from '../../components/TopBar';
import MainPage from '../../modules/MainPage'; // Позначте правильний шлях до вашого ContentModule.js
import BigPhotoPage from '../../modules/BigPhotoPage'; // Позначте правильний шлях до вашого ContentModule.js
import SpeedPage from '../../modules/SpeedPage'; // Позначте правильний шлях до вашого ContentModule.js
import BuildingPage from '../../modules/BuildingPage'; // Позначте правильний шлях до вашого ContentModule.js
import StraightPage from '../../modules/StraightPage'; // Позначте правильний шлях до вашого ContentModule.js
import CustomersPage from '../../modules/CustomersPage'; // Позначте правильний шлях до вашого ContentModule.js
import PricingPage from '../../modules/PricingPage'; // Позначте правильний шлях до вашого ContentModule.js
import BlogPage from '../../modules/BlogPage'; // Позначте правильний шлях до вашого ContentModule.js
import StayUpPage from '../../modules/StayUpPage'; // Позначте правильний шлях до вашого ContentModule.js
import Footer from '../../components/Footer'; // Позначте правильний шлях до вашого ContentModule.js

const HomePage = () => {
  return (
    <div className="main-page">
      <TopBar />
      <Header />
      <MainPage />
      <BigPhotoPage />
      <SpeedPage />
      <BuildingPage />
      <StraightPage />
      <CustomersPage />
      <PricingPage />
      <BlogPage />
      <StayUpPage />
      <Footer />
    </div>
  );
};

export default HomePage;
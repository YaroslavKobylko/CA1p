import React from 'react';
import MainPage from '../../../modules/MainPage'; // Позначте правильний шлях до вашого ContentModule.js
import BigPhotoPage from '../../../modules/BigPhotoPage'; // Позначте правильний шлях до вашого ContentModule.js
import SpeedPage from '../../../modules/SpeedPage'; // Позначте правильний шлях до вашого ContentModule.js
import BuildingPage from '../../../modules/BuildingPage'; // Позначте правильний шлях до вашого ContentModule.js
import StraightPage from '../../../modules/StraightPage'; // Позначте правильний шлях до вашого ContentModule.js
import CustomersPage from '../../../modules/CustomersPage'; // Позначте правильний шлях до вашого ContentModule.js
import PricingPage from '../../../modules/PricingPage'; // Позначте правильний шлях до вашого ContentModule.js
import BlogPage from '../../../modules/BlogPage'; // Позначте правильний шлях до вашого ContentModule.js
import StayUpPage from '../../../modules/StayUpPage'; // Позначте правильний шлях до вашого ContentModule.js
import Layout from '../../../modules/Layout'; // Позначте правильний шлях до вашого ContentModule.js

const HomePage = () => {
  return (
      <Layout>
      <main>
      <MainPage />
      <BigPhotoPage />
      <SpeedPage />
      <BuildingPage />
      <StraightPage />
      <CustomersPage />
      <PricingPage />
      <BlogPage />
      <StayUpPage />
      </main>
      </Layout>
  );
};

export default HomePage;
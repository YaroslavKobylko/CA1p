import React from 'react';
import MainModule from '../../../modules/MainModule'; // Позначте правильний шлях до вашого ContentModule.js
import BigPhotoModule from '../../../modules/BigPhotoModule'; // Позначте правильний шлях до вашого ContentModule.js
import SpeedModule from '../../../modules/SpeedModule'; // Позначте правильний шлях до вашого ContentModule.js
import BuildingModule from '../../../modules/BuildingModule'; // Позначте правильний шлях до вашого ContentModule.js
import StraightModule from '../../../modules/StraightModule'; // Позначте правильний шлях до вашого ContentModule.js
import CustomersModule from '../../../modules/CustomersModule'; // Позначте правильний шлях до вашого ContentModule.js
import PricingModule from '../../../modules/PricingModule'; // Позначте правильний шлях до вашого ContentModule.js
import BlogModule from '../../../modules/BlogModule'; // Позначте правильний шлях до вашого ContentModule.js
import StayUpModule from '../../../modules/StayUpModule'; // Позначте правильний шлях до вашого ContentModule.js
import Layout from '../../../modules/Layout'; // Позначте правильний шлях до вашого ContentModule.js

const HomePage = () => {
  return (
      <Layout>
      <main>
      <MainModule />
      <BigPhotoModule />
      <SpeedModule />
      <BuildingModule />
      <StraightModule />
      <CustomersModule />
      <PricingModule />
      <BlogModule />
      <StayUpModule />
      </main>
      </Layout>
  );
};

export default HomePage;
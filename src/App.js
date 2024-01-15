import React from 'react';
import './App.css';
import TopBar from './components/TopBar/TopBar'; // імпорт вашого компоненту
import Header from './components/Header/Header'; // імпорт вашого компоненту
import MainPage from './components/MainPage/MainPage'; // імпорт вашого компоненту

function App() {
  return (
    <div>
      <TopBar />
      <Header />
      <MainPage />
    </div>
  );
}

export default App;
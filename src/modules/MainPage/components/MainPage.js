import React from 'react';
import './MainPage.scss';
import VstavkaMain from '../../../components/VstavkaMain';
import VstavkaMainText from '../../../components/VstavkaMainText';

const MainPage = () => {
    return (
        <main className='main'>
            <div className='main-container'>
            <VstavkaMain />
            <VstavkaMainText />
            </div>
        </main>
    );
}

export default MainPage;
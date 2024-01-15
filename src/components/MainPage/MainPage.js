import React from 'react';
import './MainPage.sass';
import SVGComponent1 from '../../UI/VstavkaMain1';
import SVGComponent2 from '../../UI/VstavkaMain2';
import SVGComponent3 from '../../UI/VstavkaMain3';

const Header = () => {
    return (
        <main className='main'>
            <div className='main-container'>
            <SVGComponent1 />
            <SVGComponent2 />
            <SVGComponent3 />
            </div>
        </main>
    );
}

export default Header;
import React from 'react';
import HeaderSVG from '../../../UI/HeaderSVG/HeaderSVG';
import './Header.scss';

const Header = () => {
  return (
    <header className='header'>
        <div className='header-container'>
            <HeaderSVG/>
            <nav className='header-nav'>
                <div className='frame2'>
                <div className='rectangle'></div>
                    <div className='our-story'>Our Story</div>
                </div>
                <div className='frame3'>
                    <div className='rectangle'></div>
                    <div className='blog'>Blog</div>
                </div>
                <div className='frame7'>
                    <div className='rectangle'></div>
                    <div className='contact'>Contact</div>
                </div>
                <div className='frame8'>
                    <div className='rectangle'></div>
                    <div className='pricing'>Pricing</div>
                </div>
                <div className='frame4'>
                    <div className='frame5'>
                    <div className='rectangle2'></div>
                    <div className='log-in'>Log in</div>
                    </div>
                    <div className='frame6'>
                    <div className='rectangle3'></div>
                    <div className='try-for-free'>Try for free</div>
                    </div>
                </div>
    </nav>
        </div>
    </header>
  );
}

export default Header;
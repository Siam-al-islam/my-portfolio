import React from 'react';
import Social from './Social';

const Footer = () => {
    return (
        <footer className="footer pt-20 pb-10 px-3">
            <aside>
                <p>
                    <span className='text-white text-xl font-semibold uppercase'>Siam Al Islam</span>
                    <br />
                    Siam Al Islam &copy; 2024 - All right reserved
                </p>
            </aside>
            <nav>
                <Social />
            </nav>
        </footer>
    );
};

export default Footer;
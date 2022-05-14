import React from 'react';

const Footer = () => {
    return (

        <footer>
            <div className="footer p-10 bg-base-300 text-base-content">
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Emergency Checkup</a>
                    <a className="link link-hover">Monthly Checkup</a>
                    <a className="link link-hover">Weekly Checkup</a>
                    <a className="link link-hover">Deep Checkup</a>
                </div>
                <div>
                    <span className="footer-title">ORAL HEALTH</span>
                    <a className="link link-hover">Fluoride Treatement</a>
                    <a className="link link-hover">Cavity Filling</a>
                    <a className="link link-hover">Teath Whitening</a>
                </div>
                <div>
                    <span className="footer-title">OUR ADDRESS</span>
                    <div>
                        <p>New York - 001010 Hudson</p>
                    </div>
                </div>
            </div>
            <div className='p-4 bg-base-300 text-base-content'>
                <p>Copyright © 2022 - All right reserved by BEXIMCO Industries Ltd</p>
            </div>
        </footer>
    );
};

export default Footer;
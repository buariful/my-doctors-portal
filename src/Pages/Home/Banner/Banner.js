import React from 'react';
import banner from '../../../assets/images/chair.png';
import Button from '../../../Shared/Button/Button';
import bg from '../../../assets/images/bg.png'
const Banner = () => {
    return (
        <div className="bg-no-repeat bg-cover bg-center" style={{ 'background': `url(${bg})` }}>
            <div className="hero min-h-screen lg:w-10/12 mx-auto">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={banner} className="max-w-sm rounded-lg shadow-2xl" alt='banner' />
                    <div className='text-left'>
                        <h1 className="text-5xl font-bold">Visit us to recovery and boost yourself.</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <Button>Get started</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
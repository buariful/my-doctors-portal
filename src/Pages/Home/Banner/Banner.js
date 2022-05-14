import React from 'react';
import banner from '../../../assets/images/chair.png';
import Button from '../../../Shared/Button/Button';
import bg from '../../../assets/images/bg.png'
const Banner = () => {
    return (
        <div className="bg-no-repeat bg-cover bg-center" style={{ 'background': `url(${bg})` }}>
            <div class="hero min-h-screen lg:w-10/12 mx-auto">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img src={banner} class="max-w-sm rounded-lg shadow-2xl" alt='banner' />
                    <div className='text-left'>
                        <h1 class="text-5xl font-bold">Visit us to recovery and boost yourself.</h1>
                        <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <Button>Get started</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
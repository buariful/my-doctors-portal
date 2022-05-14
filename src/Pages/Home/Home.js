import React from 'react';
import Banner from './Banner/Banner';
import Info from './Info/Info';
import Service from './Service/Service';
import cavity from '../../assets/images/cavity.png'
import fluoride from '../../assets/images/fluoride.png'
import whitening from '../../assets/images/whitening.png'
import Dental from './Dental/Dental';
import HAppointment from './HAppointment/HAppointment';
import Testimonials from './Testimonials/Testimonials';
import Contact from './Contact/Contact';
import Footer from '../../Shared/Footer/Footer';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            {/* services ---------------------------*/}
            <div className='w-11/12 mx-auto'>
                <h2 className='uppercase text-secondary font-bold text-2xl mt-16 mb-3'>our services </h2>
                <h1 className='text-4xl capitalize mb-10 text-accent'>Services we provide</h1>

                <div className="grid md:mt-16 md:grid-cols-3">
                    <Service img={fluoride} title='Fluoride Treatment' description='Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'></Service>

                    <Service img={cavity} title='Cavity Filling' description='Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'></Service>

                    <Service img={whitening} title='Teeth Whitening' description='Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'></Service>
                </div>
            </div>

            <Dental></Dental>
            <HAppointment></HAppointment>
            <Testimonials></Testimonials>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;
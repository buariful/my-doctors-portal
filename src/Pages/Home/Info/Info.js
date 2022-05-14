import React from 'react';
import Clock from '../../../assets/icons/clock.svg'
import Marker from '../../../assets/icons/marker.svg'
import Phone from '../../../assets/icons/phone.svg'
import InfoCard from './InfoCard';


const Info = () => {
    return (
        <div className='grid md:grid-cols-3 sm:grid-cols-1 w-11/12 mx-auto gap-5 mt-20'>
            <InfoCard img={Clock} title={'Opening Hours'} bgclass={'bg-gradient-to-r from-primary to-secondary'} description={'Lorem Ipsum is simply dummy text of the pri'}></InfoCard>
            <InfoCard img={Marker} title={'Visit our Location'} bgclass={'bg-accent'} description={'Brooklyn, NY 10036, United States'}></InfoCard>
            <InfoCard img={Phone} bgclass={'bg-gradient-to-r from-primary to-secondary'} title={'Call Us'} description={'Contact us now'}></InfoCard>
        </div>
    );
};

export default Info;
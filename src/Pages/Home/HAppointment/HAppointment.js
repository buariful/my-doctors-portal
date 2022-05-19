import React from 'react';
import doctor from '../../../assets/images/doctor-small.png'
import Button from '../../../Shared/Button/Button';
import doctorBg from '../../../assets/images/appointment.png'

const HAppointment = () => {
    return (
        <div className='flex items-center mt-32 px-14' style={{ background: `url(${doctorBg})` }}>
            <div className='flex-1 hidden md:block' >

                <img src={doctor} alt="doctor" className='w-full ml-auto' style={{ "marginTop": "-82px" }} />
            </div>
            <div className='text-left flex-1 text-white'>
                <h2 className='uppercase text-secondary font-bold text-xl mb-3'>our services </h2>
                <h1 className='text-2xl capitalize text-white mb-3'>Make an appointment Today</h1>
                <p className='my-5'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <Button>Get started</Button>
            </div>
        </div>
    );
};

export default HAppointment;
import React, { useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import AppointmentBanner from './AppointmentBanner';
import AvailableSloths from './AvailableSloths';


const Appointment = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div>
            <AppointmentBanner date={date} setDate={setDate}></AppointmentBanner>
            <AvailableSloths date={date}></AvailableSloths>
            <Footer></Footer>
        </div>
    );
};

export default Appointment;
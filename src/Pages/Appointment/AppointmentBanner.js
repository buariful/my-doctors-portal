import React from 'react';
import chair from '../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';


const AppointmentBanner = ({ date, setDate }) => {


    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} alt="chair" />
                <div>
                    <DayPicker
                        mode="single"
                        selected={date}
                        onDayClick={setDate}
                    ></DayPicker>
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;
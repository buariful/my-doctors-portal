import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppServices from './AppServices';
import Bookingmodal from './Bookingmodal';



const AvailableSloths = ({ date }) => {

    const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);


    const formattedDate = format(date, 'PP');
    useEffect(() => {
        fetch(`http://localhost:5000/available?date=${formattedDate}`)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [formattedDate])



    return (
        <div className='w-11/12 mx-auto mt-12 mb'>
            <h1 className='text-secondary font-semibold text-2xl mb-3'>Available services on {format(date, 'PP')}</h1>
            <div className="grid md:gird-cols-2 lg:grid-cols-3 gap-5">
                {services.map(service => <AppServices key={service._id} service={service} setTreatment={setTreatment}></AppServices>)}
            </div>
            {treatment && <Bookingmodal x={treatment} date={date} setTreatment={setTreatment}></Bookingmodal>}
        </div>
    );
};

export default AvailableSloths;
import React from 'react';

const AppServices = ({ service, setTreatment }) => {
    const { name, slots } = service;
    console.log(slots)
    return (
        <div className="card bg-white shadow-xl">
            <div className="card-body">
                <h2 className="text-secondary text-center font-semibold text-xl">{name}</h2>
                <p className='text-xs'>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} availabe</p>
                <div className="justify-end">

                    <label htmlFor='booking-modal' disabled={slots.length === 0} className="btn modal-button text-sm bg-gradient-to-r from-secondary to-primary text-white border-none font-bold" onClick={() => { setTreatment(service) }}>Buy Now</label>
                </div>
            </div>
        </div>
    );
};

export default AppServices;
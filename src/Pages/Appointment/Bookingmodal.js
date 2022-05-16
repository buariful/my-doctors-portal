import React from 'react';
import { format } from 'date-fns';


const Bookingmodal = ({ x, date, setTreatment }) => {
    const { name, slots } = x;
    const handleSubmit = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(name, email, password);
        setTreatment('');
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold text-secondary">Booking for :{name}</h3>

                    <form className='mt-4 grid grid-cols-1 gap-4 w-10/12 mx-auto' onSubmit={handleSubmit}>
                        <input type="text" disabled value={format(date, 'PP')} placeholder="Type here" className="input mx-auto input-bordered w-full max-w-xs" />

                        <select className="select select-bordered w-full max-w-xs mx-auto" name='slot'>

                            {slots.map(slot => <option value={slot}>{slot}</option>)}
                        </select>

                        <input type="text" placeholder="Your name" className="input mx-auto input-bordered w-full max-w-xs" name='name' />
                        <input type="email" placeholder="Type email" className="input mx-auto input-bordered w-full max-w-xs" name='email' />
                        <input type="password" placeholder="Type password" className="input mx-auto input-bordered w-full max-w-xs" name='password' />
                        <input type="submit" className="input mx-auto bg-gradient-to-r from-secondary to-primary text-white w-full max-w-xs cursor-pointer font-semibold" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Bookingmodal;
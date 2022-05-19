import React from 'react';
import { format } from 'date-fns';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';


const Bookingmodal = ({ x, date, setTreatment }) => {
    const { _id, name, slots } = x;

    const [user, loading, error] = useAuthState(auth);
    const formattedDate = format(date, 'PP');

    const handleSubmit = event => {
        event.preventDefault();
        const slot = event.target.slot.value;
        const booking = {
            treatmentId: _id,
            treatment: name,
            slot: slot,
            patientName: user.displayName,
            patient: user.email,
            date: formattedDate
        }
        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.success) {
                    toast(`appointment is set, ${formattedDate} at ${slot}`)
                }
                else {
                    toast.error(`already have and appointment on , ${data.booking?.date} at ${slot}`)
                }
            })

        // to close modal
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

                            {slots.map((slot, index) => <option key={index} value={slot}>{slot}</option>)}
                        </select>

                        <input type="text" placeholder={user?.displayName || ''} disabled className="input mx-auto input-bordered w-full max-w-xs" name='name' />
                        <input type="email" placeholder={user?.email || ''} disabled className="input mx-auto input-bordered w-full max-w-xs" name='email' />
                        <input type="password" placeholder="Type password" className="input mx-auto input-bordered w-full max-w-xs" name='password' />
                        <input type="submit" className="input mx-auto bg-gradient-to-r from-secondary to-primary text-white w-full max-w-xs cursor-pointer font-semibold" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Bookingmodal;
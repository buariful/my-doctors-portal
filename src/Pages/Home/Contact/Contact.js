import React from 'react';
import contactBg from '../../../assets/images/appointment.png'

const Contact = () => {
    return (
        <div className='md:py-6 mt-20 py-20' style={{ "backgroundImage": `url(${contactBg})` }}>
            <h2 className='uppercase text-secondary font-bold text-2xl mt-16 mb-3'>Contact Us </h2>
            <h1 className='text-4xl capitalize mb-10 text-white'>Stay connected with us</h1>

            <form className='w-10/12 md:w-1/3 mx-auto'>
                <input type="email" name="email" className='border-none rounded-lg pl-3 py-2 w-full focus:outline-green-200 mb-4' placeholder='Enter your email' />

                <input type="text" name="subject" className='border-none rounded-lg pl-3 py-2 w-full focus:outline-green-200 mb-4' placeholder='Subject' />

                <textarea type="email" name="email" className='border-none rounded-lg pl-3 py-2 w-full focus:outline-green-200 mb-4' placeholder='Your message' rows="4" />
                <button className="btn bg-gradient-to-l from-primary to-secondary text-white border-none px-5">Submit</button>
            </form>
        </div>
    );
};

export default Contact;
import React from 'react';
import people1 from '../../../assets/images/people1.png'
import people2 from '../../../assets/images/people2.png'
import people3 from '../../../assets/images/people3.png'
import icon from '../../../assets/icons/quote.svg'


const Testimonials = () => {
    return (
        <div className='w-10/12 mx-auto'>
            <div className='w-11/12 py-12 mx-auto testimonial flex items-center justify-between'>
                <div className='text-left'>
                    <h2 className='uppercase text-secondary font-bold text-xl mb-3'>Testimonials </h2>
                    <h1 className='text-2xl capitalize text-accent font-semibold mb-3'>What Our Patients Says</h1>
                </div>
                <div>
                    <img src={icon} alt="icon" width={"100px"} />
                </div>
            </div>

            <div className='my-10 md:flex gap-5 '>
                <div className="card w-96 shadow-xl bg-base-100 py-4 px-4 mx-auto mt-5">
                    <p className='text-left mb-2'>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>
                    <div className='flex items-center'>
                        <img src={people1} alt="people1" className='mr-3 border-secondary border-2 p-1 rounded-full' />
                        <div>
                            <h2 className='font-bold'>Wilson Hanry</h2>
                            <p className='font-semibold'>California</p>
                        </div>
                    </div>
                </div>

                <div className="card w-96 shadow-xl bg-base-100 py-4 px-4 mx-auto mt-5">
                    <p className='text-left mb-2'>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>
                    <div className='flex items-center'>
                        <img src={people2} alt="people1" className='mr-3 border-secondary border-2 p-1 rounded-full' />
                        <div>
                            <h2 className='font-bold'>Wilson Hanry</h2>
                            <p className='font-semibold'>California</p>
                        </div>
                    </div>
                </div>

                <div className="card w-96 shadow-xl bg-base-100 py-4 px-4 mx-auto mt-5">
                    <p className='text-left mb-2'>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>
                    <div className='flex items-center'>
                        <img src={people3} alt="people1" className='mr-3 border-secondary border-2 p-1 rounded-full' />
                        <div>
                            <h2 className='font-bold'>Wilson Hanry</h2>
                            <p className='font-semibold'>California</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
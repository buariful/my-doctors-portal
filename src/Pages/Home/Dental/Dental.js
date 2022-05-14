import React from 'react';
import treatement from '../../../assets/images/treatment.png'
import Button from '../../../Shared/Button/Button';


const Dental = () => {
    return (
        <div>
            <div className="hero md:w-9/12 mx-auto mt-16">
                <div className="hero-content flex-col lg:flex-row gap-20">
                    <img src={treatement} alt='treatement' className='md:w-1/3 w-96 mx-auto rounded-md' />
                    <div className='text-left'>
                        <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                        <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <Button>Get started</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dental;
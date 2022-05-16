import React from 'react';

const Service = ({ img, title, description }) => {
    return (
        <div>
            <div className="card mx-auto w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={img} alt={title} className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title font-semibold text-accent">{title}</h2>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default Service;
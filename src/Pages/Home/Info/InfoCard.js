import React from 'react';

const InfoCard = (props) => {
    console.log(props.img)
    return (
        <div className={`card text-white shadow-xl px-5 py-4 md:flex md:flex-row ${props.bgclass}`}>
            <figure><img src={props.img} alt="Album" /></figure>
            <div className="card-body text-left">
                <h2 className="card-title">{props.title}</h2>
                <p>{props.description}</p>
            </div>
        </div>

    );
};

export default InfoCard;
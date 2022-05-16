import React from 'react';

const Button = ({ children }) => {
    return (
        <div>
            <button className="btn bg-gradient-to-r from-primary to-secondary text-white border-none">{children}</button>
        </div>
    );
};

export default Button;
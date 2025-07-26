import React from 'react';
import "../css/BorderedSection.css";

const BorderedSection = ({ children }) => {
    return (
        <div className='bordered-section'>
            <div className="bordered-section__content">
                {children}
            </div>
        </div>
    );
}

export default BorderedSection;

import React from 'react';
import './Destination.css';
const Destination = ({ Data, handleSelectedDestination }) => {
    return (
        <div
            className="img-card"
            onClick={() => handleSelectedDestination(Data.id)}
        >
            <img src={Data.image} height="400vh" width="100%" alt="" />
            <h4 className="img-caption">{Data.Name}</h4>
        </div>
    );
};

export default Destination;

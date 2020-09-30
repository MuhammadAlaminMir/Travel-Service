import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DestinationHotels from '../DestinationDetails/DestinationHotel';
import Header from '../Header/Header';

import './Hotels.css';

const Hotels = () => {
    const { locationId } = useParams();
    const [data, setData] = useState([]);
    useEffect(() => {
        const DestinationHotel = DestinationHotels;
        setData(DestinationHotel);
    }, []);
    console.log(locationId, data);
    return (
        <div>
            <Header />
            <div className="container">
                <div className="row ">
                    <div className="col-lg-3 col-md-3 card">
                        {data.map((fakeData) => (
                            <img
                                src={fakeData.image}
                                alt=""
                                width="100%"
                                key={fakeData.id}
                                className="img"
                            />
                        ))}
                    </div>
                    <div className="col-lg-3 col-md-3 card">
                        {data.map((fakeData) => (
                            <div
                                style={{
                                    marginTop: '2vh',
                                    border: '1px solid white',
                                }}
                            >
                                <h6>{fakeData.title}</h6>
                                <p>
                                    <small>{fakeData.room}</small>
                                </p>
                                <p>
                                    <small>{fakeData.kitchen}</small>
                                </p>
                                <p>
                                    <small>{fakeData.sortDescription}</small>
                                </p>
                                <div className="price">
                                    <p>
                                        <small>
                                            <img src={fakeData.icon} alt="" />
                                            {fakeData.ratings}
                                        </small>
                                    </p>
                                    <p>
                                        <small>
                                            {fakeData.price}/night{' '}
                                            {fakeData.total}
                                            <small>total</small>
                                        </small>
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="col-lg-6 col-md-6"></div>
                </div>
            </div>
        </div>
    );
};

export default Hotels;

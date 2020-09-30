import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import DestinationImage from '../Destination/Destination';
import DestinationDetails from '../DestinationDetails/DestinationDetails';
import Header from '../Header/Header';
import './home.css';
const Home = () => {
    const [Destination, setDestination] = useState([]);
    useEffect(() => {
        const Data = DestinationDetails;
        setDestination(Data);
    }, []);
    const [selectedDestination, setSelectedDestination] = useState({
        id: 1,
        image: 'https://i.ibb.co/rZF3rxh/Sajek.png',

        Name: 'Sajek Valley',
        sortDescription:
            'Sajek valley: Sajek is a union at Baghaichari Upazila in Rangamati districts. Basically it is name of a river which separates Bangladesh from India. The river flows into the Karnafuli River in the Chittagong Hill Tracts. Sajek Valley is situated in the North angle of Rangamati, near the Mizoram border boundary area. The valley is 1,800 ft high form sea lavel. .',
        description:
            'Sajek valley: Sajek is a union at Baghaichari Upazila in Rangamati districts. ',
    });
    const handleSelectedDestination = (id) => {
        const destination = Destination.filter((data) => data.id === id);
        const [newDestination] = destination;

        setSelectedDestination(newDestination);
    };

    return (
        <div className="home ">
            <Header />

            <br />
            <br />

            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-4">
                        <h1>{selectedDestination.Name}</h1>
                        <p>{selectedDestination.sortDescription}</p>
                        <Link to={`/booking/${selectedDestination.id}`}>
                            <button
                                className="btn"
                                style={{
                                    width: '104px',
                                    height: '44px',

                                    background: '#F9A51A',
                                    borderRadius: ' 5px',
                                }}
                            >
                                Booking
                            </button>
                        </Link>
                    </div>
                    <div className="col-lg-8 col-md-8">
                        {Destination.map((data) => (
                            <DestinationImage
                                Data={data}
                                key={data.id}
                                handleSelectedDestination={
                                    handleSelectedDestination
                                }
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;

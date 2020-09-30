import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import DateTime from '../Date/DataTime';
import DestinationDetails from '../DestinationDetails/DestinationDetails';
import Header from '../Header/Header';
import './Booking.css';
const Booking = () => {
    const { destinationId } = useParams();
    const perseId = JSON.parse(destinationId);
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

    useEffect(() => {
        const destination = Destination.filter((data) => data.id === perseId);

        const [objDestination] = destination;
        setSelectedDestination(objDestination);
    }, [Destination, perseId]);

    return (
        <div id="booking">
            <Header />

            <div className="container">
                <div className="row body">
                    <div className="col-lg-6 col-md-6">
                        {selectedDestination !== undefined && (
                            <div>
                                <h1>{selectedDestination.Name}</h1>

                                <p>{selectedDestination.sortDescription}</p>
                            </div>
                        )}
                    </div>
                    <div className="col-lg-6 col-md-6 form">
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label className="label">
                                    Origin
                                </Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter Your Current Location"
                                    name="origin"
                                    style={{
                                        fontWeight: '700',
                                    }}
                                />
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label className="label">
                                    Destination
                                </Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter Your Destination"
                                    name="destination"
                                    style={{
                                        fontWeight: '700',
                                    }}
                                />
                            </Form.Group>
                            <div className="date">
                                <span>From:</span>

                                <DateTime />
                                <span>To:</span>
                                <DateTime />
                            </div>
                            <Button
                                className=" d-flex justify-content-center"
                                style={{
                                    width: '100%',
                                    height: '44px',

                                    background: '#F9A51A',

                                    fontWeight: '700',
                                    borderRadius: ' 5px',
                                }}
                            >
                                Start Booking
                            </Button>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Booking;

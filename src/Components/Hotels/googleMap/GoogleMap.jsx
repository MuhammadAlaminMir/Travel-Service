import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class GoogleMap extends Component {
    static defaultProps = {
        center: {
            lat: 59.95,
            lng: 30.33,
        },
        zoom: 11,
    };

    render() {
        return (
            // Important! Always set the container height explicitly
            <div style={{ height: '100vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{
                        key: 'AIzaSyCg9AQJ2xYYGW41PcihW5wRfw4x4jEFblU',
                    }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                    <AnyReactComponent
                        lat={59.955413}
                        lng={30.337844}
                        text="My Marker"
                    />
                </GoogleMapReact>
            </div>
        );
    }
}

export default GoogleMap;

// export default GoogleApiWrapper({
//     apiKey: 'AIzaSyCg9AQJ2xYYGW41PcihW5wRfw4x4jEFblU',
//     language: 'RU',
// })(GoogleMap);

import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

export default class MapContainer extends Component {
    static defaultProps = {
        center: {
            lat: 38.850033,
            lng: -96.6500523
        },
        zoom: 4
    };

    render() {
        return (
            <div id= "map" style={{ height: '400px', width: '900px' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyA2P1oNRY7Jp7sbMsyojQg8N9jzqtG8y3U' }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                </GoogleMapReact>
            </div>
        );
    }
}
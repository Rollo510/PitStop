import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const mapStyles = {
    width: '70%',
    height: '70%',
    margin: '5%',
    zoom: '100%',
};

class MapContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            markers: [],
            marker: {
                available: false,
                position: {
                    lat: this.lat,
                    lng: this.lng
                }
            }
        };
    }

    onClick = (t, map, coord) => {
        const { latLng } = coord;
        let { marker } = this.state;
        marker.position.lat = latLng.lat();
        marker.position.lng = latLng.lng();
        this.setState({
            markers: [...this.state.markers, marker],
            marker
        });
    };

    render() {
        const { marker } = this.state;
        return (<Map
            google={this.props.google}
            style={mapStyles}
            disableDoubleClickZoom
            zoom={6}
            initialCenter={{
                lat: 29.7589382,
                lng: -95.3676974,
            }}
            onClick={this.onClick}>
            <Marker position={{ lat: marker.position.lat, lng: marker.position.lng }} />
        </Map>);
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyA2P1oNRY7Jp7sbMsyojQg8N9jzqtG8y3U'
})(MapContainer);
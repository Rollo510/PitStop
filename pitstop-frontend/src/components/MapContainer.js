import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import { connect } from 'react-redux'
import { newStop } from '../redux/actions/tripActions'

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
        const newMarker = { position: {
            lat: latLng.lat,
            lng: latLng.lng
        }}
        newMarker.position.lat = latLng.lat();
        newMarker.position.lng = latLng.lng();
        this.setState({
            markers: [...this.state.markers, newMarker],
            marker: newMarker
        });
        this.props.newStop(this.state.marker)
    };

    generateMarkers = () => {
        return this.state.markers.map(
            marker => {
                return (
                    <Marker 
                    key={marker.id}
                    position={{ lat: marker.position.lat, lng: marker.position.lng }}
                    />
                )
            }
        )
    }


    render() {
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
            {this.generateMarkers()}
        </Map>);
    }
}


export default GoogleApiWrapper({
    apiKey: 'AIzaSyA2P1oNRY7Jp7sbMsyojQg8N9jzqtG8y3U'
})(connect(null, { newStop })(MapContainer));
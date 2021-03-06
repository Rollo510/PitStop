import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import { connect } from 'react-redux'
import { newStop, storeMarkers, clearMarkers } from '../redux/actions/tripActions'

const API_KEY = process.env.REACT_APP_API_KEY;

const mapStyles = {
    zoom: '100%',
};

class MapContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            marker: {
                available: false,
                position: {
                    lat: this.lat,
                    lng: this.lng
                }
            }
        };
    }

    componentDidMount(){
        this.props.clearMarkers();
    }

    onClick = (t, map, coord) => {
        const { latLng } = coord;
        const newMarker = { position: {
            lat: latLng.lat,
            lng: latLng.lng
        }}
        newMarker.position.lat = latLng.lat();
        newMarker.position.lng = latLng.lng();
        this.props.storeMarkers(newMarker)
        this.setState({
            marker: newMarker
        });
    };

    generateMarkers = () => {
            return this.props.markers.map(
                marker => {
                    return (
                        <Marker 
                        key={marker.id}
                        // onClick={(e) => this.deleteMarkers(e.position)}
                        position={{ lat: marker.position.lat, lng: marker.position.lng }}
                        />
                    )
                }
            )
    }

    
    // deleteMarkers(position) {
    //         let foundMarker = this.props.markers.find((element) => {
    //             return element.position === position;
    //         })
    //         console.log(foundMarker)
    //     }


    render() {
        return (<Map id="map-container"
            google={this.props.google}
            style={mapStyles}
            disableDoubleClickZoom
            zoom={6}
            initialCenter={{
                lat: 29.7589382,
                lng: -95.3676974,
            }}
            onClick={this.onClick}>
            { this.generateMarkers() }
        </Map>);
    }
}

    const mapStateToProps = (state) => {
        return { 
            markers: state.markers
        }
    }

export default GoogleApiWrapper({
    apiKey: `${API_KEY}`
})(connect(mapStateToProps, { newStop, storeMarkers, clearMarkers })(MapContainer));
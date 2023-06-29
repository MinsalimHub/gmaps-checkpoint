import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: '400px',
  height: '400px',
};

const MapContainer = (props) => {
  return (
    <Map
      google={props.google}
      zoom={14}
      style={mapStyles}
      initialCenter={{
        lat: 37.7749, // latitude of your desired map center
        lng: -122.4194, // longitude of your desired map center
      }}
    />
  );
};

export default GoogleApiWrapper({
  apiKey: 'EMPTY', // Replace with your Google Maps API key
})(MapContainer);

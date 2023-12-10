import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import L from 'leaflet';
import markerIcon from '../Assets/663342.png';

const Map = ({ position }) => (
    
  <MapContainer
    center={[40.7128, -74.0060]} // I set the default to city hall NYC
    zoom={15} // Default zoom level
    style={{ height: '400px', width: '400px' }}
  >
    <TileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    />
        {/* You can add markers or other map components here */}
    <Marker position={position} icon={L.icon({ iconUrl: markerIcon, iconSize: [32, 32] })}>
      <Popup>Practice Location</Popup>
    </Marker>
  </MapContainer>
);

export default Map;

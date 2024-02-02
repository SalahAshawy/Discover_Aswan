import React from 'react';
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polygon
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './popup.css';
import {data} from './data'

const center = [24.088938, 32.899829]; // Aswan city coordinates
const MapContainerr= () => {
return (
 <div className="map-container">
    <MapContainer
        center={center}
        zoom={15} // Adjust zoom level as needed
        style={{ width: '100%', height: '100%', margin: '0 auto' }} // Center map and adjust size
        >
        <TileLayer
            url="https://api.maptiler.com/maps/basic/256/{z}/{x}/{y}.png?key=Xwk0FvpqOqCZ9vxDK2SD"
            attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
            />
        {/* Render markers dynamically */}
        {data.map(marker => (
            <Marker key={marker.name} position={marker.coordinates}>
                <Popup className="custom-popup">
                    <div className="popup-content">
                        <h3>{marker.name}</h3>
                        <p>Type: {marker.type}</p>
                        <p>{marker.description}</p>
                        {/* Link to Landscape component */}
                        <Link to={`landscape/${marker.id}`}>Go to Landscape</Link>
                    </div>
                </Popup>

            </Marker>
        ))}
    </MapContainer>
</div>
);
};
export default MapContainerr;

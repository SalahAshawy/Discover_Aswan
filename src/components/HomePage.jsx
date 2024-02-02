import React from 'react';
import 'leaflet/dist/leaflet.css';
import './popup.css';
import './Map.css'
import MapContainerr from "./MapContainer"
import Navbar from './Navbar';
import "./HomePage.css"
import Header from './Header';

function homePage() {
  return (
    <div className='home'>
      <Navbar />

      <Header />


    </div>
  );
};

export default homePage;

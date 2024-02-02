import React from 'react';
import { useParams } from 'react-router-dom';
import { data } from './data';
import { Card } from 'react-bootstrap'; // Import Bootstrap components
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Landscape.css'; // Import CSS file for Landscape component styling
import Navbar from "./Navbar"

const Landscape = () => {
  const { id } = useParams();
  const land = data.find(item => item.id === parseInt(id));

  if (!land) {
    return <div>Landscape not found</div>;
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 5000,
    arrows: true, // Show arrows
  };

  return (
    <div className='bo'>
      <Navbar/>

    <div className="container mt-4 landscape-container dark-mode">
      <Slider {...settings}>
        {land.images.map((image, index) => (
          <div key={index} className="landscape-slide">
            <img src={process.env.PUBLIC_URL + '/' + image} alt={`Slide ${index}`} className="img-fluid" />
          </div>
        ))}
      </Slider>
      <div className="landscape-details text-white"> {/* Add text-white class to change font color to white */}
        <h2 className="fw-bold text-uppercase">{land.name}</h2>
        <p className="fw-normal">{land.details}</p>
      </div>
    </div>
        </div>
  );
};

export default Landscape;

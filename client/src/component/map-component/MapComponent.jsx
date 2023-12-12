import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

export default function MapComponent({ city, address }) {
  const containerStyle = {
    width: '100%',
    height: '400px',
  };

  const [center, setCenter] = useState({ lat: 0, lng: 0 });

  useEffect(() => {
    const getCoordinates = async () => {
      try {
        const response = await fetch(
          `https://maps.googleapis.com/maps/api/geocode/json?address=${address},${city}&key=AIzaSyBXMCIrIIiDsN4Y00G-2Kx3uiZCUMplatU`
        );
        const data = await response.json();

        if (data.results && data.results.length > 0) {
          const location = data.results[0].geometry.location;
          setCenter({ lat: location.lat, lng: location.lng });
        }
      } catch (error) {
        console.error('Error fetching coordinates:', error);
      }
    };

    getCoordinates();
  }, [city, address]);


  return (
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={14}>
        </GoogleMap>
  );
}
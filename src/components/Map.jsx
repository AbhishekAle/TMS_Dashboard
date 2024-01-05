import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Map = () => {
  const [location, setLocation] = useState(null);
  const [userInput, setUserInput] = useState(null);
  const [error, setError] = useState(null);

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          setLocation([latitude, longitude]);
        },
        (error) => {
          setError(error.message);
        }
      );
    } else {
      setError("Geolocation is not supported by this browser.");
    }
  };

  const handleClick = () => {
    getLocation();
  };

  return (
    <div>
      <button onClick={handleClick}>Get Location</button>
      {location && (
        <MapContainer
          id="map"
          center={location}
          zoom={15}
          style={{ height: "300px", width: "30rem" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={location}>
            <Popup>
              <p>Latitude: {location[0]}</p>
              <p>Longitude: {location[1]}</p>
            </Popup>
          </Marker>
        </MapContainer>
      )}
    </div>
  );
};

export default Map;

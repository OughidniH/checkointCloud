import React, { useEffect, useState } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

const Mapscloud = (props) => {
  const mapStyles = {
    width: "100%",
    height: "100%",
  };
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    });
  }, []); // Ajouter le tableau de dépendances vide ici pour exécuter le useEffect au montage initial seulement
  console.log(latitude);
  console.log(longitude);
  return (
    <>
      <div>
        {latitude} ccc {longitude}
      </div>
      <br />
      <Map
        google={props.google}
        zoom={14}
        style={mapStyles}
        center={{
          lat: { latitude },
          lng: { longitude },
        }}
      >
        <Marker
          position={{
            lat: { latitude },
            lng: { longitude },
          }}
        />
      </Map>
    </>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyCbkJDmmAUH2nD_imNNCLKg7b9U4ARokQw",
})(Mapscloud);

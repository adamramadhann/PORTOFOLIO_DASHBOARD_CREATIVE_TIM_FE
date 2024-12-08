import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import ImageCopy14 from '/image copy 14.png'


const TitikPosition = ({ setPosition }) => {
  useMapEvents({
    click: (e) => {
      const { lat, lng } = e.latlng; 
      setPosition({ lat, lng });
    },
  });
  return null;
};

// Komponen utama peta
const MyMap = () => {
  const [positions, setPositions] = useState(null); 

  return (
    <div className="h-[650px] mt-6 pb-5 rounded-md shadow-md bg-white p-3 w-full  ">
       <div className='flex mb-5 gap-5 items-end' >
       <div className='w-20 h-20 -mt-10 z-20 rounded-md flex items-center justify-center  bg-blue-200 '> 
          <img src={ImageCopy14} alt="" className='w-12 h-12'  />
        </div>
        <h1 className='text-xl' >Fullscren Map</h1>
       </div>
      {/*  kontainer utama peta */}
      <MapContainer
        center={[-1.4949003148806717, 121.27193997128175]} 
        zoom={5} // Zoom level
        style={{ height: '570px', width: '100%', zIndex: '0' }} 
        className='map-tiles'
      >
        {/* Layer ubin (tile) dari OpenStreetMap */}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        {/* Komponen untuk mendeteksi klik dan menyimpan posisi */}
        <TitikPosition setPosition={setPositions} />

        {/* Jika posisi telah diatur, tambahkan Marker di lokasi tersebut */}
        {positions && (
          <Marker position={[positions.lat, positions.lng]}>
            <Popup>
              {/* Menampilkan koordinat latitude dan longitude dengan 3 digit desimal */}
              Lat: {positions.lat.toFixed(3)}, Lng: {positions.lng.toFixed(3)}
            </Popup>
          </Marker>
        )}
      </MapContainer>
    </div>
  );
};

export default MyMap;

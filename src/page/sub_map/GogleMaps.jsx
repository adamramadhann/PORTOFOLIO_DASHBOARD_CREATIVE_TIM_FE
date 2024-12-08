import React, { useState } from 'react'
import { MapContainer, Marker, Popup, TileLayer, useMapEvent } from 'react-leaflet'
import ImageCopy14 from '/image copy 14.png'
import ImageCopy13 from '/image copy 13.png'
import ImageCopy15 from '/image copy 15.png'

const GogleMaps = () => {

  const [position, setPosition] = useState(null)
  const [position2, setPosition2] = useState(null)
  const [position3, setPosition3] = useState(null)

  const MapSatelit = ({mapSatelit}) => {
    useMapEvent({
      click : (e) => {
        const {lat, lng} = e.latlng
        setPosition({lat, lng})
      }
    })
  }
  const MapRegular = ({reguler}) => {
    useMapEvent({
      click : (e) => {
        const {lat, lng} = e.latlng
        setPosition2({lat, lng})
      }
    })
  }
  const MapCustom = ({costum}) => {
    useMapEvent({
      click : (e) => {
        const {lat, lng} = e.latlng
        setPosition3({lat, lng})
      }
    })
  } 
  const geojsonData = {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        geometry: {
          type: "LineString",
          coordinates: [
            [106.794728, -6.404857], // Titik awal jalan
            [106.800728, -6.410857], // Titik akhir jalan
          ],
        },
        properties: {
          name: "Jalan Contoh",
        },
      },
    ],
  };
  const TebalJalanMap = () => {
    const lineStyle = {
      color: "red",
      weight: 5,
      opacity: 0.8,
    };
  
    return null;
  };
  
  return (
    <div className='flex flex-col py-7  gap-20 w-full' >
          <div className='w-full  h-[370px] flex justify-between flex-col shadow-[0_0_15px_rgba(0,0,0,0.2)] ' >
            <div className='flex relative  left-5 -top-8 gap-3 text-end items-end  ' >
                <div className='w-20 h-20 rounded-md flex items-center justify-center  bg-blue-200 '> 
                  <img src={ImageCopy14} alt="" className='w-12 h-12'  />
                </div>
                <h1 className='text-xl' >Satellite Map</h1>
            </div>
            <MapContainer
                center={[-2.6858023079458095, 119.01109637857856]} 
                zoom={5} 
                scrollWheelZoom={false}
                style={{
                  height : "800px",
                  width: "100%",
                  zIndex : '0'
                }}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles courtesy of CartoDB'
                  url="https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}"
                />
                <MapSatelit mapSatelit={setPosition} />
                {
                  position && (
                  <Marker position={[position.lat, position.lng]}> 
                    <Popup  >Titik di Indonesia</Popup>
                  </Marker>
                  )
                }
            </MapContainer>
          </div>
          <div className='w-full flex gap-10' >
              <div className='flex-1 pt-16 px-1  relative h-[370px] shadow-[0_0_15px_rgba(0,0,0,0.2)]' >
              <div className='flex absolute  left-5 -top-8 gap-3 text-end items-end  ' >
                <div className='w-20 h-20 flex items-center justify-center bg-blue-200 rounded-md'>
                <img src={ImageCopy13} alt="" className='w-12 h-12' />
                </div>
                <h1 className='text-xl' >Regular Map</h1>
            </div>
            <MapContainer
                center={[-6.401587813473384, 106.79342289442684]} 
                zoom={12} 
                scrollWheelZoom={false}
                style={{
                  height : "300px",
                  width: "100%",
                }}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles courtesy of CartoDB'
                  url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png"
                />
                <MapRegular reguler={setPosition2} />
                  {
                    position2 && (
                    <Marker position={[position2.lat, position2.lng]}> 
                      <Popup  >Titik di Indonesia</Popup>
                    </Marker>
                    )
                  }
            </MapContainer>
              </div>
              <div className='flex-1 pt-16 px-1  relative h-[370px] shadow-[0_0_15px_rgba(0,0,0,0.2)]' >
              <div className='flex absolute  left-5 -top-8 gap-3 text-end items-end  ' >
                <div className='w-20 h-20 flex items-center justify-center rounded-md bg-blue-200 '>
                  <img src={ImageCopy15} alt="" className='w-10 h-10' />
                </div>
                <h1 className='text-xl' >Custom Skin & Settings  Map</h1>
            </div>
            <MapContainer
                center={[-6.401587813473384, 106.79342289442684]} 
                zoom={12} 
                scrollWheelZoom={false}
                style={{
                  height : "300px",
                  width: "100%",
                  zIndex : '0'
                }}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles courtesy of CartoDB'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <MapCustom costum={position3} />
                  {
                    position3 && (
                      <Marker position={[position3.lat, position3.lng]}> 
                    <Popup  >Titik di Indonesia</Popup>
                  </Marker>
                    )
                  }
            </MapContainer>
              </div>
          </div>
    </div>
  )
}

export default GogleMaps
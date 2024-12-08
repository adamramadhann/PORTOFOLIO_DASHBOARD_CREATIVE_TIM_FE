import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { tableDashboard } from "../data/dataDami";
import { GiWorld } from "react-icons/gi";

const TableWord = () => {
  return (
      <div className="w-full text-gray-500 h-96 mt-10 mb-28  pb-10 bg-white px-5 shadow-[0_0_15px_rgba(0,0,0,0.2)]">
        <div className="flex gap-10 pt-5">
          <div className="w-[70px] h-[70px] bg-green-500 relative -top-9 left-5 flex items-center justify-center rounded-md">
          <GiWorld className="text-white" size={40} />
          </div>
          <h1 className="text-xl font-bold" >Global Sales by Top Locations</h1>
        </div>
        <div className="flex w-full h-full -mt-5  gap-10">
          <div className="flex-1 overflow-x-hidden max-h-[300px] overflow-y-auto pr-2 transform duration-700 ">
            <table className="w-[600px] ">
              <tbody className="list-none w-[95%] flex items-center  flex-col" >
                {
                    tableDashboard.map((item, index) => (
                        <tr className={`flex  px-3 py-2 items-center pr-10 w-[95%] justify-between border-t-2`}>
                            <td className="flex items-center gap-10">
                                <img src={item.flag} className="w-10 h-10" alt="" />
                                <li>{item.country}</li>
                            </td>
                            <td className="flex gap-14">
                                <li className="" >{item.amount}</li>
                                <li>{item.persent}</li>
                            </td>
                        </tr>
                    ))
                }
              </tbody>
            </table>
          </div>
          <div className="flex-1 z-10">
            <MapContainer
                center={[0,0]} 
                zoom={1} 
                scrollWheelZoom={false}
                style={{
                  height: "300px",
                  width: "100%",
                }}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles courtesy of CartoDB'
                  url="https://cartodb-basemaps-a.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png"
                />
                <Marker position={[-6.32273185961196, 106.78118861926649]}> 
                  <Popup  >Titik di Indonesia</Popup>
                </Marker>
              </MapContainer>
          </div>
        </div>
      </div>
  );
};

export default TableWord;

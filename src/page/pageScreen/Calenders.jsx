import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react"; 
import dayGridPlugin from "@fullcalendar/daygrid"; 
import timeGridPlugin from "@fullcalendar/timegrid"; 
import interactionPlugin from "@fullcalendar/interaction"; 

const Calenders = () => {


  const [event, setEvent] = useState([
    {
      title: "contoh kegiatan ",
      date: "2024-12-25",
    },
  ]);

 const hanldeDateEvent = (val) => {
  const info = prompt("masukan kegiatan anda !")

  if(info) {
    setEvent([
      ...event,
      {
        title : info,
        date : val.dateStr
      }
    ])
  }
 }


 

  return (
    <div className="relative  overflow-y-auto px-5 w-full ">
        <h1 className="text-2xl text-center mb-16 text-shadow-lg">Calender Screen</h1>
      <div className="flex w-full items-center justify-center" >
      <div className="bg-white max-w-[1200px] p-5 rounded-md mb-2 shadow-[0_0_15px_rgba(0,0,0,0.2)] w-full" > 
        <div className="" >
        <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        editable={true}
        selectable={true}
        events={event}
        dateClick={hanldeDateEvent}
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        eventBorderColor="black"
        height="auto"
        contentHeight="auto"
      />
        </div>
      </div>
      </div>
    </div>
  );
};

export default Calenders;

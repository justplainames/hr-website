import React, {useState} from 'react'
import {Calendar, dateFnsLocalizer} from 'react-big-calendar';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from "date-fns/getDay"
import "react-big-calendar/lib/css/react-big-calendar.css"
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"
import TeamLeaveData from './TeamLeaveData'



const locales = {
  'en-US': require("date-fns/locale/en-US")
}

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales
})


const calendarStyle = ({id}) => {
  const color = ['#264653', '#2a9d8f', '#e9c46a', '#f4a261','#e76f51' ]
	return {
	  style: {
		backgroundColor: color[id%5],
		color: 'black' 
	  }
	}
}


function TeamLeave() {
  var updated = []
  TeamLeaveData.map((person) => {
    const [sday,smonth,syear] = person.start.split("/")
    const [eday,emonth,eyear] = person.end.split("/")
    const start = `${smonth}/${sday}/${syear}`
    const end = `${emonth}/${eday}/${eyear}`
    updated.push({...person, start:new Date(start), end:new Date(end)})
  });
  console.log(TeamLeaveData)
  console.log(updated)

  return (
    <div className="app">
     <h1>Team Calendar</h1>
      <Calendar 
      localizer={localizer} 
      events={updated} 
      startAccessor="start" 
      endAccessor="end" 
      style={{height: 600, margin: "50px"}}
      eventPropGetter={calendarStyle}/>
    </div>
  )
}

export default TeamLeave

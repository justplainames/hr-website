import React, { useState, useEffect } from 'react'
import { Calendar, dateFnsLocalizer  } from 'react-big-calendar';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from "date-fns/getDay"
import "./react-big-calendar.css"
import TeamLeaveData from './TeamLeaveData'
import Modal from './Modal'
import { Typography, Box } from '@material-ui/core'
import Recommendation from './Recommendation'
import axios from 'axios'
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

// Customize toolbar
class CustomToolbar extends React.Component {
  render() {
    let { localizer: { messages }, label } = this.props
    return (
      <div className="rbc-toolbar">
        <span className="rbc-btn-group">
          <button type="button" onClick={this.navigate.bind(null, 'PREV')}>Prev</button>
          <button type="button" onClick={this.navigate.bind(null, 'TODAY')}>Current</button>
          <button type="button" onClick={this.navigate.bind(null, 'NEXT')}>Next</button>
        </span>
        <span className="rbc-toolbar-label">{label}</span>
        <span className="rbc-btn-group">
          <button type="button" onClick={this.view.bind(null, 'month')}>Month</button>
          <button type="button" onClick={this.view.bind(null, 'agenda')}>Employee</button>
        </span>
      </div>
    )
  }
  navigate = action => {
    this.props.onNavigate(action)
  }
  view = action => {
    this.props.onView(action)
  }
}

// Customize Event
const calendarStyle = ({ id }) => {
  const color = ['#C8F902', '#f5bfd2', '#a1cdce', '#e5db9c', '#beb4c5', '#e6a57e',]
  return {
    style: {
      backgroundColor: color[id % 6],
      color: 'black',
      border: "black 1px solid ",
      borderRadius: "5px",
    }
  }
}

// Main
function TeamLeave() {


  var updated = []
  TeamLeaveData.map((person) => {
    const [sday, smonth, syear] = person.start.split("/")
    const [eday, emonth, eyear] = person.end.split("/")
    const start = `${smonth}/${sday}/${syear}`
    const end = `${emonth}/${eday}/${eyear}`
    updated.push({ start: new Date(start), end: new Date(end) })
  });



  const [newUpdated, setNewUpdated] = useState([])

  // const fetchapplied = async (id) => {
  //        axios.get('http://localhost:5000/applied', {
  //           params: {
  //               id: id
  //           }
  //       })
  //           .then(res => {
  //               console.log(res.data.applies)
  //               res.data.applies.map((leave) => {
  //                 let [sday,smonth,syear] = leave.from.split("/")
  //                 let [eday,emonth,eyear] = leave.to.split("/")
  //                 emonth = parseInt(emonth)+1
  //                 smonth = parseInt(smonth)+1
  //                 const start = new Date(`${smonth}/${sday}/${syear}`)
  //                 const end = new Date(`${emonth}/${eday}/${eyear}`)
  //                 setNewUpdated((newUpdated) =>[...newUpdated ,{id:6, title:"MaryTan", type:leave.types, start:start, end:end}])
  //               })
  //           })
  // }

  const fetchallapplied = async () => {
    axios.get('http://localhost:5000/allapplied').then(res => {
      console.log(res.data)
      res.data.map((applies) => {
        const name = applies.name
        applies.applies.map((individual) => {
          let [smonth, sday, syear] = individual.from.split("/")
          let [emonth, eday, eyear] = individual.to.split("/")
          emonth = parseInt(emonth) + 1
          smonth = parseInt(smonth) + 1
          const start = new Date(`${smonth}/${sday}/${syear}`)
          const end = new Date(`${emonth}/${eday}/${eyear}`)

          setNewUpdated((newUpdated) => [...newUpdated, { id: individual._id, title: name, type: individual.types, start: start, end: end }])
        })
      })
    })

  }


  const [selectedEvent, setSelectedEvent] = useState(false)
  const [data, setData] = useState({})

  const [selectedSlots, setSelectedSlots] = useState(false)
  const [slots, setSlots] = useState([])


  const handleSelectedEvent = (event) => {
    setData(event)
    setSelectedEvent(!selectedEvent)
  }

  const handleSelectSlot = (event) => {
    setSlots(event.slots)
    setSelectedSlots(!selectedEvent)
  }

  useEffect(() => {
    fetchallapplied()
 
  }, []);


  return (
    <>
      {selectedEvent && <Modal openPopup={setSelectedEvent} newData={data} />}
      {selectedSlots && <Recommendation openPopup={setSelectedSlots} newSlots={slots} />}
      <Typography variant="h3">
        Team Calendar
      </Typography>
          <Calendar
        selectable
        onSelectEvent={(e) => handleSelectedEvent(e)}
        onSelectSlot={(e) => handleSelectSlot(e)}
        localizer={localizer}
        events={newUpdated}
        startAccessor="start"
        endAccessor="end"
        style={{ width: '70vw', height: '70vh', margin: "50px" }}
        popup={true}
        
        eventPropGetter={calendarStyle}
        components={{
          toolbar: CustomToolbar,
        }} />
    </>
  )
}



export default TeamLeave

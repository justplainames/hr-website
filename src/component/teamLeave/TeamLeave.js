import React, {useState} from 'react'
import {Calendar, dateFnsLocalizer} from 'react-big-calendar';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from "date-fns/getDay"
import "react-big-calendar/lib/css/react-big-calendar.css"
import TeamLeaveData from './TeamLeaveData'
import Modal from './Modal'



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

function TeamLeave( {test}) {
  var updated = []
  TeamLeaveData.map((person) => {
    const [sday,smonth,syear] = person.start.split("/")
    const [eday,emonth,eyear] = person.end.split("/")
    const start = `${smonth}/${sday}/${syear}`
    const end = `${emonth}/${eday}/${eyear}`
    updated.push({...person, start:new Date(start), end:new Date(end)})
  });





// Customize toolbar
  class CustomToolbar extends React.Component {
    render() {
        let { localizer: { messages }, label } = this.props
        return(
            <div className="rbc-toolbar">
                <span className="rbc-btn-group">
                    <button type="button" onClick={this.navigate.bind(null, 'PREV')}>Prev</button>
                    <button type="button" onClick={this.navigate.bind(null, 'TODAY')}>Current</button>
                    <button type="button" onClick={this.navigate.bind(null, 'NEXT')}>Next</button>
                </span>
                <span className="rbc-toolbar-label">{label}
                
                </span>
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



  const [selectedEvent, setSelectedEvent] = useState(false)
  const [data, setData] = useState({})


  const handleSelectedEvent = (event) => {
        setData(event)
        setSelectedEvent(!selectedEvent)
  }

  // const Modal = () => {
  //   console.log("test")
  //       return (
  //           <div className="popup">
  //             <div className='popup-inner'>
  //               <button className="close-btn">close</button>
  //             </div>
              
  //           </div>
  //       )
  //   }




  return (
    <>
    {selectedEvent && <Modal closeModal={setSelectedEvent} newData={data}/>}
    <div className="app">
    {/* {selectedEvent && <Modal />} */}
     <h1>Team Calendar</h1>
      <Calendar 
      onSelectEvent={(e)=> handleSelectedEvent(e)}
      localizer={localizer} 
      events={updated} 
      startAccessor="start" 
      endAccessor="end" 
      style={{height:500, margin: "50px"}}
      popup ={true}
      eventPropGetter={calendarStyle}
      
      
      components={{
        toolbar: CustomToolbar,
      }}/>
      
    </div>
    </>
  )
}



export default TeamLeave

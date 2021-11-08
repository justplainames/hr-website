import format from 'date-fns/format'
import React from 'react'
import "./Modal.css"


function Modal({ closeModal, newData }) {
    var id = newData.id
    const color = ['#f5bfd2', '#a1cdce', '#e5db9c', '#beb4c5','#e6a57e' ]
    return (
        <div className="modalBackground">
           <div className="modalContainer">
               <div className="titleCloseBtn">
                    <button onClick={()=> closeModal(false)}>X</button>
                </div>
               <div className="title" style={{backgroundColor: color[id%5]}} >
                    <h1>{newData.title}</h1>
                </div>
               <div className="body">
                    <p>Leave Type: {newData.type}</p>
                </div>
                 <div className="body">
                    <p>Start: {format(newData.start, "dd/MM/yyyy")}</p>
                    <p>End: {format(newData.end, "dd/MM/yyyy")}</p>
                </div>
           </div>
        </div>
    )
}

export default Modal

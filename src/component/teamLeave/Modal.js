import format from 'date-fns/format'
import React from 'react'
//import "./Modal.css"

function Modal({ closeModal, newData }) {
    console.log("test")
    console.log(newData)
    return (
        <div className="modalBackground">
           <div className="modalContainer">
               <div className="titleCloseBtn">
                    <button onClick={()=> closeModal(false)}>X</button>
                </div>
               <div className="title">
                    <h1>{newData.title}</h1>
                </div>
               <div className="body">
                    <p>Leave Type:{newData.type}</p>
                    <p>Start: {format(newData.start, "dd/MM/yyyy")}</p>
                    <p>End: {format(newData.end, "dd/MM/yyyy")}</p>
                </div>
           </div>
        </div>
    )
}

export default Modal

import format from 'date-fns/format'
import React from 'react'
import Controls from "./controls/Controls"
import {Close} from '@material-ui/icons/';
import {Grid, Typography, Dialog, DialogTitle, DialogContent} from '@material-ui/core'
import "./Modal.css"


function Modal({ openPopup, newData }) {
    var id = newData.id
    const color = ['#f5bfd2', '#a1cdce', '#e5db9c', '#beb4c5','#e6a57e' ]
    console.log(newData.start)
    return (
        <Dialog open={openPopup} styles={{maxWidth: "10px" }}>
            <DialogTitle style={{outlineColor:"black", outlineWidth:"20px", minWidth:"10px"}}>
                <div style={{display:'flex'}}>
                    <Typography variant='h6' component='div' style={{flexGrow: 1, backgroundColor: color[id%5], borderRadius: "30px", paddingLeft:"10px" }}>{newData.title}</Typography>         
                <Controls.ActionButton color="secondary" onClick={() => {openPopup(false)}}>
                    <Close />
                </Controls.ActionButton>
                </div>
            </DialogTitle>
            <DialogContent dividers>
            <div className="body">
                <p>Leave Type: {newData.type}</p>
            </div>
                <div className="body">
                <p>Start: {format(newData.start, "dd/MM/yyyy")}</p>
                <p>End: {format(newData.end, "dd/MM/yyyy")}</p>
            </div>
           </DialogContent>
        </Dialog>
    )
}

export default Modal

import React, {useState, useEffect} from 'react'
import "./ModalRecommendation.css"
import {Grid, Typography, Dialog, DialogTitle, DialogContent} from '@material-ui/core'
import {useForm, Form} from './useForm';
import Controls from "./controls/Controls"
import TeamLeaveData from './TeamLeaveData';
import { makeStyles } from '@material-ui/core';
import {Close} from '@material-ui/icons/';



const initialFValues = {
    name: '',
    startDate: '',
    endDate: '',
    comments: '',
}

function Recommendation({ openPopup, newSlots }) {
    
    let info = newSlots
    console.log(info[0])
    initialFValues.startDate = info[0]
    initialFValues.endDate=info[info.length-1]
    const validate = (fieldValues = values) => {
        let temp = {...errors}
        if('name' in fieldValues){
            temp.name = fieldValues.name.length !=0 ? "" : "This field is required"}
        setErrors({
            ...temp
        })

        if(fieldValues = values){
            return Object.values(temp). every(x => x == "" )
        }
    }
    
    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm
    } = useForm(initialFValues, true, validate)


    

    const handleSubmit = e => {
        e.preventDefault()
        if (validate()){
            window.alert("Add code to Post data")
            openPopup(false)
        }

    }

    return (
        <Dialog open={openPopup}>
            <DialogTitle>
                <div style={{display:'flex'}}>
                    <Typography variant='h6' component='div' style={{flexGrow: 1}}>Recommend Leave</Typography>         
                <Controls.ActionButton color="secondary" onClick={() => {openPopup(false)}}>
                    <Close />
                </Controls.ActionButton>
                </div>
            </DialogTitle>
            <DialogContent dividers>
                <Form onSubmit = {handleSubmit}>
                    <Grid container>
                        <Grid item xs={6}>
                            <Controls.Select 
                            name="name"
                            label="Employee Name"
                            value={values.name}
                            onChange={handleInputChange}
                            items={TeamLeaveData}
                            error={errors.name}
                            />
                            <Controls.Input
                            name='comments'
                            label='Comments'
                            value={values.comments}
                            onChange={handleInputChange}
                            />
                        </Grid>
                        <Grid item xs={6}>       
                            <Controls.DatePicker
                                marginTop="0px"
                                name="startDate"
                                label="Start"
                                value={values.startDate}
                                onChange={handleInputChange}
                            /> 
                            <Controls.DatePicker
                                name="endDate"
                                label="End"
                                value={values.endDate}
                                onChange={handleInputChange}
                            /> 
                            <div>
                                <Controls.Button
                                type="submit"
                                text="submit"
                                />  
                                <Controls.Button
                                color="default"
                                text="reset"
                                onClick={resetForm}
                                />  
                            </div>    
                        </Grid>                   
                    </Grid>
                </Form>
            </DialogContent>
    </Dialog>
    )
}

export default Recommendation

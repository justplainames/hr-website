import React, {useState, useEffect} from 'react'
import "./ModalRecommendation.css"
import {FormControl, InputLabel, Grid, Box, MenuItem, Button, Typography} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import {useForm, Form} from './useForm';
import Controls from "./controls/Controls"
import TeamLeaveData from './TeamLeaveData';
import id from 'date-fns/esm/locale/id/index.js';


const initialFValues = {
    name: '',
    startDate: '',
    endDate: '',
    comments: '',
}


function Recommendation({ closeModal, newSlots }) {

    const info = newSlots

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
            closeModal(false)
        }

    }

    return (
        <div className="modalBackground">
           <div className="modalContainer">
               <Button onClick={()=> closeModal(false)}>X</Button>
               <Box sx={{pb:6}}> 
                    <Typography>Recommend Leave</Typography>      
                </Box>
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
           </div>
        </div>
    )
}

export default Recommendation

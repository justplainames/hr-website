import React, {useState, useEffect} from 'react'
import "./ModalRecommendation.css"
import {Grid, Typography, Dialog, DialogTitle, DialogContent} from '@material-ui/core'
import {useForm, Form} from './useForm';
import Controls from "./controls/Controls"
import TeamLeaveData from './TeamLeaveData';
import { makeStyles } from '@material-ui/core';
import {Close} from '@material-ui/icons/';
import moment from 'moment';
import axios from 'axios';

const initialFValues = {
    name: '',
    startDate: '',
    endDate: '',
    comments: '',
    id:'',
}

const yourDate = new Date()
const TodayDate = moment(yourDate).format('MM/DD/YYYY')

function Recommendation({ openPopup, newSlots }) {
    const [teams, setteam] = useState([])

    useEffect(() => {
        function createteam(title, label) {
            return { title, label };
        }
        const userdetails = JSON.parse(localStorage.getItem("details")).team
        //    setsupevisors(oldArray=>[...oldArray, createsuper(details.name,details.id)])
        const team = []
        userdetails.map((details) => { team.push(createteam(details.id, details.name)) })
        setteam(team)
        console.log(teams)
      }, []);
    

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


    function getDifferenceInDays(startdate , enddate) {

        if (isNaN(((Math.abs(enddate -startdate)) / (1000 * 60 * 60 * 24)) + 1)) {
            return 1
        }
        else {
            return (((Math.abs(enddate -startdate)) / (1000 * 60 * 60 * 24)) + 1);
        }
    
    }


    const handleSubmit = e => {
        e.preventDefault()
        console.log(values)
        const startdate = moment(values.startDate).format('MM/DD/YYYY')
        const enddate = moment(values.endDate).format('MM/DD/YYYY')
        const myid = JSON.parse(localStorage.getItem("details"))._id
        const myname = JSON.parse(localStorage.getItem("details")).name
        if (validate()){
            window.alert("Recommended Successfully!")
            axios.post('http://localhost:5000/createreco', {
                "userId": values.name,
                "types": 'annual',
                "requester": { "id": myid, "name": myname },
                "days": getDifferenceInDays(startdate,enddate),
                "from": startdate,
                "to": enddate,
                "daytype": 'Full',
                "remarks": values.comments,
                "requestedon": TodayDate,
                "recomemdedby":myid,
                "approvedby": '',
                "status": { "approved": false, "read": false, "accepted": "null" , "isrecommended": true },

            }).then(res => {
                setTimeout(() => {
                    setTimeout(() => {
                        window.location.pathname = '/leave';
                    }, 500);
                    openPopup(false)
                }, 1000);

            }).catch(error => {

            })



          
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
                            items={teams}
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

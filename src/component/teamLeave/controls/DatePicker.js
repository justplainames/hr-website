import React from 'react'
import { KeyboardDatePicker, MuiPickersUtilsProvider} from "@material-ui/pickers"
import DateFnsUtils from '@date-io/date-fns'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  root: {
    "& .MuiInputBase-root": {
      padding: 0,
      "& .MuiButtonBase-root": {
        padding: 0,
        paddingRight: 10
      },
      "& .MuiInputBase-input": {
        padding: 18.5,
        margin: 0,
        paddingLeft: 20,
      }
    }
  }
});

function DatePicker(props) {
    const classes = useStyles();
    const {name, label, value, onChange} = props

    const convertToDefEventPara = (name, value) => ({
        target: {
            name, value
        }
    })
    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker disableToolbar variant="inline" inputVariant="outlined"
            label={label}
            format="dd/MM/yyyy"
            name={name}
            value={value}
            onChange={date =>onChange(convertToDefEventPara(name,date))}
            className={classes.root}
        />

    
        </MuiPickersUtilsProvider>
    )
}

export default DatePicker

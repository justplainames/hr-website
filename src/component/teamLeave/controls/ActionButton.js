import React from 'react'
import { Button, makeStyles } from '@material-ui/core'

const useStyles = makeStyles (theme => ({
    root: {
        minWidth: 0,
        margin: theme.spacing(0.5),
        padding: 0
    },
    secondary: {
        backgroundColor: theme.palette.secondary.light,
        '& .MuiButton-label': {
            color: "white",
        }
    },
    primary: {
        backgroundColor: theme.palette.primary.light,
        '& .MuiButton-label': {
            color: theme.palette.primary.main,
        }
    }
}))

function ActionButton(props) {

    const {color, children, onClick} = props;
    const classes = useStyles()
    console.log(children)
    console.log("s")
    return (
        <Button
            className={`${classes.root} ${classes[color]}`} onClick={onClick}>
            {children}
        </Button>
    )
}

export default ActionButton

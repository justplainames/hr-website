import React from 'react'

import { Button } from '@mui/material'

import LogInIcon from '@mui/icons-material/Close'
// import '../loginPopup/Popup.css'
function loginForgotPasswordPopup(props) {
  return props.trigger ? (
    <div className='popup'>
      <div className='popup-inner'>
        <Button
          className='close-btn'
          endIcon={<LogInIcon />}
          variant='contained'
          color='error'
          size='small'
          onClick={() => props.setTrigger(false)}
        >
          close
        </Button>

        {props.children}
      </div>
    </div>
  ) : (
    ''
  )
}

export default loginForgotPasswordPopup

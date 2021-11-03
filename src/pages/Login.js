// import './App.css'
import React from 'react'
import { Button } from '@mui/material'
import TextField from '@mui/material/TextField'
//ICONS
import SaveIcon from '@mui/icons-material/Save'
import DiscardIcon from '@mui/icons-material/Delete'
import LogInIcon from '@mui/icons-material/Login'
import LogoutIcon from '@mui/icons-material/Logout'
import CheckedIcon from '@mui/icons-material/CheckCircleOutlineSharp'
import Money from '@mui/icons-material/MonetizationOn'
import Logo from '../assets/logo.svg'

import './Login.css'
function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <div className='Login'>
          <img src={Logo} alt='logo' />
          <h4>HR APP</h4>
          <div className='LoginTextField'>
            <TextField
              className='App-TextField'
              id='Email_TF'
              label='E-MAIL'
              variant='filled'
              type='email'
              error={false}
              // helperText='Please enter a valid email address'
              required
            />
            <br />
            <TextField
              margin='normal'
              id='Password_TF'
              label='Password'
              variant='filled'
              type='password'
              error={false}
              required
              // helperText='Incorrect password, please try again'
            />
          </div>
          <div className='Buttons'>
            <Button
              fullWidth={true}
              className='LoginButton'
              endIcon={<LogInIcon />}
              variant='contained'
              color='info'
              size='small'
              style={{ fontSize: 22, marginTop: 30 }}
              href='#'
            >
              Log In
            </Button>
            <Button
              variant='text'
              color='inherit'
              size='small'
              style={{ fontSize: 10 }}
              href='#'
            >
              Forgot Password?
            </Button>
          </div>
        </div>
      </header>
    </div>
  )
}

export default App

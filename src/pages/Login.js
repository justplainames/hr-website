// import './App.css'
import React from 'react'

import TextField from '@mui/material/TextField'
import { useState, useEffect } from 'react'
import {
  Button,
  FormHelperText,
  IconButton,
  Input,
  InputAdornment,
  FormControl,
  InputLabel,
} from '@mui/material'

//ICONS & Logo
import { VisibilityOff, Visibility } from '@mui/icons-material'
import LogInIcon from '@mui/icons-material/Login'
import Logo from '../assets/logo.svg'
import './Login.css'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState(true)
  const [passwordError, setPasswordError] = useState(false)
  const [emailHelperText, setEmailHelperText] = useState('')
  const [passwordHelperText, setPasswordHelperText] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    // if field(s) are empty or incorrect input
    if ((!emailError || passwordError) && (!email || !password)) {
      alert('Please ensure inputs are correct and enter all required fields')
    } else if (!email || !password) {
      console.log(email + ' ---- ' + password)
      //if field(s) are just empty
      alert('Please input Empty fields')
    } else if (!emailError || passwordError) {
      //if one of the fields have error

      alert('Please ensure inputs are correct.')
    } else {
      // if fields are not empty and have no error
      alert(
        'No Issues\n' +
          'Email :' +
          email.toLocaleLowerCase() +
          '\nPassword :' +
          password
      )
      //Check email and password for match
      //if credentials correct
      if (
        email.toLocaleLowerCase() == 'hci@gmail.com' &&
        password == 'hcipassword123'
      ) {
        alert('LOGIN to HR APP')
        //if credentials wrong, prompt user for correct input
      } else {
        alert('Incorrect credentials, please try again ')
      }
    }
  }

  //Check email input
  const checkEmail = (e) => {
    setEmail(e)
    //Email validation
    const re =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    //Boolean for email valid or invalid
    const validEmail = re.test(e)
    //if email invalid
    if (!validEmail) {
      setEmailHelperText('Incorrect email input, please re-enter email.')
      setEmailError(false)
    } //if email valid
    else {
      setEmailHelperText('')
      setEmailError(true)
    }
  }

  //check password input field
  const checkPassword = (password) => {
    setPassword(password)
    if (!password) {
      setPasswordHelperText('Password field is empty')
      setPasswordError(true)
    } else {
      setPasswordError(false)
      setPasswordHelperText('')
    }
  }
  /////////////////////////////
  const [values, setValues] = useState({
    amount: '',
    password: '',
    showPassword: false,
  })

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value })
  }

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    })
  }

  const handleMouseDownPassword = (event) => {
    event.preventDefault()
  }
  return (
    <header className='App-header'>
      <div className='Login'>
        <img src={Logo} alt='logo' />
        <h4>HR APP</h4>
        <h6>email : hci@gmail.com</h6>
        <h6>password : hcipassword123</h6>
        <form noValidate autoComplete='off' onSubmit={handleSubmit}>
          <FormControl
            sx={{ m: 1, width: '25ch' }}
            variant='standard'
            error={!emailError}
            required
            noValidate
            autoComplete='off'
            on
          >
            <InputLabel>Email</InputLabel>
            <Input onBlur={(e) => checkEmail(e.target.value)}></Input>
            <FormHelperText id='component-error-text'>
              {emailHelperText}
            </FormHelperText>
          </FormControl>
          <br />
          <FormControl
            sx={{ m: 1, width: '25ch' }}
            variant='standard'
            error={passwordError}
            required
          >
            <InputLabel>Password</InputLabel>
            <Input
              id='standard-adornment-password'
              onBlur={() => checkPassword(values.password)}
              type={values.showPassword ? 'text' : 'password'}
              value={values.password}
              onChange={handleChange('password')}
              endAdornment={
                <InputAdornment position='end'>
                  <IconButton
                    aria-label='toggle password visibility'
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
            <FormHelperText id='component-error-text'>
              {passwordHelperText}
            </FormHelperText>
            <Button
              type='submit'
              fullWidth={true}
              className='LoginButton'
              endIcon={<LogInIcon />}
              variant='contained'
              color='info'
              size='small'
              style={{ fontSize: 22, marginTop: 30 }}
              // href='#'
            >
              Log In
            </Button>

            <Button
              variant='text'
              color='inherit'
              size='small'
              style={{ marginTop: '10px', fontSize: 10 }}
              href='#'
            >
              Forgot Password?
            </Button>
          </FormControl>
        </form>
      </div>
    </header>
  )
}

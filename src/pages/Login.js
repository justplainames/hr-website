// import './App.css'
import React from 'react'
import axios from 'axios'
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
import { VisibilityOff, Visibility, Send, CodeSharp, ConstructionOutlined } from '@mui/icons-material'
import LogInIcon from '@mui/icons-material/Login'
import Logo from '../assets/logo.svg'
import './Login.css'

import Popup from '../component/loginPopup/Popup'
import '../component/loginPopup/Popup.css'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState(true)
  const [passwordError, setPasswordError] = useState(false)
  const [emailHelperText, setEmailHelperText] = useState('')
  const [passwordHelperText, setPasswordHelperText] = useState('')
  const [forgotPasswordPopupButton, setForgotPasswordPopupButton] =
    useState(false)
  const [popupEmail, setPopupEmail] = useState('')
  const [popupEmailError, setPopupEmailError] = useState(true)
  const [popupEmailHelperText, setPopupEmailHelperText] = useState('')
  const [popupEmailSubmitTextField, setPopupEmailSubmitTextField] =
    useState(false)
  const [popupEmailSubmitButton, setPopupEmailSubmitButton] = useState(true)
  const [popupEmailSucessMessage, setPopupEmailSucessMessage] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    // if field(s) are empty or incorrect input
    if ((!emailError || passwordError) && (!email || !password)) {
      alert('Please ensure inputs are correct and enter all required fields')
    } //if field(s) are just empty
    else if (!email || !password) {
      alert('Please input Empty fields')
    } //if one of the fields have error
    else if (!emailError || passwordError) {
      alert('Please ensure inputs are correct.')
    } else {
      //Check email and password for match
      //if credentials correct
        axios
          .post('http://localhost:5000/login', {
            email: email,
            password: password,
          })
          .then((res) => {
            
          if(res.data ==='Invalid Credentials')
          {
            alert('Invalid Credentials')
          }
          else if(res.data ==='Email is not registered')
          {
            alert('Email is not registered')
          }
          else{
            console.log(res.data)
            localStorage.setItem("isAuthenticated", res.data._id)
            localStorage.setItem("role", res.data.role)
            localStorage.setItem("details", JSON.stringify(res.data))
           window.location.pathname = '/'
          }
          })
          .catch((error) => {
            console.error(error)
            
          })

        //if credentials wrong, prompt user for correct input
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

  //Check popup email input
  const checkPopupEmail = (e) => {
    setPopupEmail(e)
    //Email validation
    const re =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    //Boolean for email valid or invalid
    const validEmail = re.test(e)
    //if email invalid
    if (!validEmail) {
      setPopupEmailHelperText('Incorrect email input, please re-enter email.')
      setPopupEmailSubmitButton(true)
      setPopupEmailError(false)
    } //if email valid
    else {
      setPopupEmailSubmitButton(false)
      setPopupEmailHelperText('')
      setPopupEmailError(true)
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
  //////////////////////////////
  const handlePopupSubmit = () => {
    if (!popupEmailError) {
      alert('Invalid E-mail address')
    } else {
      setPopupEmailSubmitButton(true)
      setPopupEmailSubmitTextField(true)
      setPopupEmailSucessMessage('E-Mail sent, please check your inbox ')
    }
    console.log(!popupEmailError)
  }
  /////////////////////////////
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
              onClick={() => setForgotPasswordPopupButton(true)}
            >
              Forgot Password?
            </Button>
          </FormControl>
        </form>
        <Popup
          trigger={forgotPasswordPopupButton}
          setTrigger={setForgotPasswordPopupButton}
        >
          <div className='popup-box'>
            <br />
            <p>Having trouble signing in?</p>

            <br />
            <p>
              Enter your email below to receive instructions on how to recover
              account
            </p>
            <br />
            <TextField
              id='outlined-basic'
              label='Outlined'
              variant='outlined'
              onChange={(e) => setPopupEmail(e.target.value)}
              label='Recovery email'
              onBlur={() => checkPopupEmail(popupEmail)}
              error={!popupEmailError}
              helperText={popupEmailHelperText}
              fullWidth
              disabled={popupEmailSubmitTextField}
            />

            <br />

            <p style={{ color: 'Green' }}>{popupEmailSucessMessage}</p>
            <br />
            <Button
              endIcon={<Send />}
              variant='contained'
              color='info'
              size='small'
              onClick={handlePopupSubmit}
              disabled={popupEmailSubmitButton}
            >
              Send
            </Button>
          </div>
        </Popup>
      </div>
    </header>
  )
}

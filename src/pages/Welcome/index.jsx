import React from 'react'
import logo from '../../assets/images/JOYSTICK-logo.png';
import './welcome.css'

export default function WelcomePage() {
  return (
    <header className="Welcome-page">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to JOYSTICK Gamefi Project
        </p>
      </header>
  )
}

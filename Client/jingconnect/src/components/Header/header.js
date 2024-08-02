import React from 'react'
import './header.css'

const Header = () => {

  return(
    <>
    <header className="header">
      <div className="header-logo">
        <h1>MySocial</h1>
      </div>
      <nav className="header-nav">
        <ul>
          <li><a href="/home">Home</a></li>
          <li><a href="/profile">Profile</a></li>
          <li><a href="/messages">Messages</a></li>
          <li><a href="/settings">Settings</a></li>
          <li><a href="/login">Login</a></li>
        </ul>
      </nav>
    </header>
    </>
  )

}

export default Header;
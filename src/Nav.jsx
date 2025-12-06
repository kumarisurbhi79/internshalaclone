import React from 'react'
import logo from './logo.png'
import chat from './chat.png'
import email from './email.png'
function Nav() {
  return (
    <div className='nav'>
        <img id="logo" src={logo} alt="Logo" />
        <div className='sa'>
        <p>Internship </p>
        <p>Placement Courses <a id="m">Offer</a></p>
        <p>Jobs</p>
        <p>IS PRO</p>
        <img id="chat" src={chat} alt="chat" />
         <img id="email" src={email} alt="email" />
         </div>
    </div>
   
  )
}

export default Nav
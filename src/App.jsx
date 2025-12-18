import React from 'react'
import Content from './Content.jsx'
import './Navbar.css'
import Navbar from './Navbar.jsx'
import About from './About.jsx'
import Services from './Services.jsx'
import Card from './Card.jsx'
import Button from './Button.jsx'
import Modal from './Modal.jsx'
import Footer from './Footer.jsx'
function App() {
  return (

    <div>
      <Content/>
      <Navbar/>
      <About/>
      <Services/>
      <Card/>
      <Button/>
      <Modal/>
      <Footer/>
    </div>
    
  )
}

export default App
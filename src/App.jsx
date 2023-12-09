import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from './components/Footer'
import Marquee from 'react-fast-marquee'
import PNB from './Images/PNB.png'
import HDFC from './Images/HDFC.png'
import BOB from './Images/BOB.png'
import AXIS from './Images/Axis.png'
import BOI from './Images/BOI.png'
import ICICI from './Images/ICICI.png'
import './App.css'



const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App
import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './templates/Home'
import Gallery from './templates/Gallery'
import WorkoutsAndClasses from './templates/WorkoutsAndClasses'
import Prices from './templates/Prices'
import Contact from './templates/Contact'
import '../src/assets/css/index.css'
import NavBar from './templates/NavBar'
import Metrics from './templates/Metrics'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <NavBar />
    <Home />
    <Gallery />
    <Metrics />
    <WorkoutsAndClasses />
    <Prices />
    <Contact />
  </>,
)

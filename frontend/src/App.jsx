import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavbarComponent from './Components/NavbarComponent'
import HomeComponent from './Components/HomeComponent'
import AboutMeComponent from './Components/AboutMeComponent'
import ProjectsComponent from './Components/ProjectsComponent'



function App() {
  
  

  return (
    <>
      <NavbarComponent />
      <HomeComponent  />
      <AboutMeComponent />
      
    </>
  )
}

export default App

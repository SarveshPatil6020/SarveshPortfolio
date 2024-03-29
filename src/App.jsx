import React from 'react'
import Footer from './components/Footer'
import Home from "./components/Home"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css'
import Design from './components/Design'
import About from './components/About'
import Certificate from "./components/Certificate"
import Skills from './components/Skills'
import AboutUs from './components/AboutUs'
import Project from './components/Project'
import Navigation from './components/Navigation/Navigation'
import Contact from './components/Contact'
const App = () => {
  return (
    <>
<div className="bg-black bg-no-repeat bg-center bg-cover">

<div className="App">
<Design/>
<BrowserRouter>
<Navigation />
{/* <Navbar />  */}
<Routes>
  <Route path="" element={<Home />}/>
  <Route path="/about" element={<About />}/>
  <Route path="/contact" element={<Contact />}/>
  <Route path="/cert" element={<Certificate />}/>
  <Route path="/skill" element={<Skills />}/>
  <Route path="/abt" element={<AboutUs />}/>
  <Route path="/pro" element={<Project />}/>




  
  
</Routes>
<Footer />
</BrowserRouter>
</div>
</div>


</>

 


  )
}

export default App
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
import Cert from './components/Certifiacate/Cert'
import Pro from "./components/Project/Pro"
const App = () => {
  return (
    <>
<div className="bg-black bg-no-repeat bg-center bg-cover">

<div className="App">
<Design/>
<BrowserRouter>
<Navigation />

<Routes>
  <Route path="SarveshPortfolio/about" element={<About />}/>
  <Route path="SarveshPortfolio/contact" element={<Contact />}/>
  <Route path="SarveshPortfolio/cert" element={<Certificate />}/>
  <Route path="SarveshPortfolio/skill" element={<Skills />}/>
  <Route path="SarveshPortfolio/abt" element={<AboutUs />}/>
  <Route path="SarveshPortfolio/pro" element={<Project />}/>  
  <Route path="SarveshPortfolio/cet" element={<Cert/>}/>  
  <Route path="SarveshPortfolio/pr" element={<Pro/>}/>  
  <Route path="SarveshPortfolio/" element={<Home/>}/>  




  
  
</Routes>
<Footer />
</BrowserRouter>
</div>
</div>


</>

 


  )
}

export default App
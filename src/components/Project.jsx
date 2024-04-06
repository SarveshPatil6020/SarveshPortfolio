import React from 'react';
import img1 from "../assets/images/Projects/VIIR.png"
import img2 from "../assets/images/Projects/stremlit.png"
import img3 from "../assets/images/Projects/fundatech.png"
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // Importing icons from React Icons library
import "./Project.css"
const placeholderImage = 'https://via.placeholder.com/400';


const Project = () => {
  return (
    
    <div> 
      <h1 className="text-5xl font-bold font-size-3.5rem   pb-2 mb-20 ml-20 mr-20 mt-20 text-left " style={{ color: "#149bf5",borderBottomWidth: "3px", borderBottomColor: "#149bf5"}}>PROJECTS</h1>
      
      <div className="rounded-t-lg  flex items-center justify-center mr-20 ml-20 p-2 bg-gray-900 shadow-lg ">
    <div className="mr-10 border border-white border-double rounded-lg p-1 transition transform hover:scale-105">
      <img src={img1} alt="Blog Image" className="rounded-lg shadow-lg " style={{ width: '40rem', height: '25rem' }} />
    </div>

    <div className=" border border-white p-10 rounded-lg"style={{ width: '40rem', height: '23rem' }}>
      <h2 className="text-2xl text-custom-blue font-semibold text-left">VIIR Park</h2>
      <p className="text-white mb-10">
      <span className="text-custom-blue">Language Used-</span> React, Node js, express DataBase- Mongo DB</p>
      <p className="text-white mb-10">
      Vishwakarma Incubation, Innovation and Research (VIIR)Park.
      &nbsp;&nbsp;&nbsp;
      VIIR Park provides ecosystem for startups with a vision to nurture the young and innovative minds. Students, Faculty members, Alumni, Industry or any grass root innovators can Incubate from TRL0 to TRL9 at VIIR Park        
      </p>
      <div className="flex">
      <a href="https://github.com/SarveshPatil6020/viit_incub.git" className="btn2">Git hub</a>
        <div className="w-2"></div>
      </div>
    </div>
  </div>
   



  <div className=" flex items-center justify-center mr-20 ml-20 p-2 bg-gray-900 shadow-lg ">
<div className="w-1/2 border border-white p-10 rounded-lg"style={{ width: '40rem', height: '23rem' }}>
  <h2 className="text-2xl text-custom-blue font-semibold text-left">Perforamance Analyzer</h2>
  <p className="text-white mb-10"><span className="text-custom-blue">Language Used-</span> Python, streamlit, html  DataBase- Firebase</p>
  <p className="text-white mb-10">The Student Performance Analysis Website is a Streamlit-based platform enabling users to upload student data, visualize performance trends, and gain insights through interactive charts. With features like data upload, visualization options, and user authentication</p>
  <div className="flex">
  <a href="https://github.com/SarveshPatil6020/Streamlit_python.git" className="btn2">Git hub</a>

    <div className="w-2"></div>
 
  </div>
</div>

<div className="ml-10 border border-white border-double rounded-lg p-1 transition transform hover:scale-105">
  <img src={img2} alt="Blog Image" className="rounded-lg shadow-lg" style={{ width: '40rem', height: '25rem' }} />
</div>
</div>



<div className="rounded-b-lg flex items-center justify-center mr-20 ml-20 p-2 bg-gray-900  shadow-lg ">
    <div className="mr-10 border border-white border-double rounded-lg p-1 transition transform hover:scale-105">
      <img src={img3} alt="Blog Image" className="rounded-lg shadow-lg" style={{ width: '40rem', height: '25rem' }} />
    </div>

    <div className=" border border-white p-10 rounded-lg"style={{ width: '40rem', height: '23rem' }}>
      <h2 className="text-2xl text-custom-blue font-semibold text-left">FundaTech</h2>
      <p className="text-white mb-10"><span className="text-custom-blue">Language Used-</span> php, javascript, bootstrap DataBase-Mysql</p>
      <p className="text-white mb-10">The website aims to educate beginners in stock market investments by providing fundamental analysis of companies. It offers users access to company histories and financial data, aiding informed decision-making.User feedback and reviews enhance the learning experience</p>
      <div className=" flex">
      
        <a href="https://github.com/SarveshPatil6020/FundaTech.git" className="btn2">Git hub</a>
        <div className="w-2"></div>
        
      </div>
    </div>
  </div>

      <div className="btn-group mt-5 flex justify-center"> 
      <a href="pr" className="btn">View all Project</a>
    </div>
      </div>
  );  
};

export default Project;




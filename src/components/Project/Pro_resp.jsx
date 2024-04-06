import React from 'react';
import img1 from "../../assets/images/Projects/VIIR.png"
import img2 from "../../assets/images/Projects/stremlit.png"
import img3 from "../../assets/images/Projects/fundatech.png"


import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // Importing icons from React Icons library




const Pro_resp = () => {
  return (
    
    <div> 
      <h1 className="text-5xl font-bold font-size-3.5rem   pb-2 pl-5 mb-20 ml-20 mr-20  mt-20 text-left " style={{ color: "#149bf5",borderBottomWidth: "3px", borderBottomColor: "#149bf5"}}>PROJECTS</h1>
      
      
      
      <div className="rounded-t-lg flex flex-col sm:flex-row items-center justify-center p-2 shadow-lg">
      <div className="mr-10 mb-4 sm:mb-0  transition transform hover:scale-105">
  
  <img src={img1} alt="Blog Image" className="rounded-lg shadow-lg ml-5 w-full max-w-xl h-auto sm:w-64 sm:h-auto block sm:hidden" style={{ width: '100%', maxWidth: '40rem', height: 'auto' }} />
</div>


  <div className="p-4 mr-20 sm:p-10 rounded-lg">
    <h2 className="text-2xl text-custom-blue font-semibold text-left">VIIR Park</h2>
    <p className="text-white mb-4"><span className="text-custom-blue">Language Used-</span> React, Node js, express DataBase- Mongo DB</p>
    <p className="text-white mb-4"> Vishwakarma Incubation, Innovation and Research (VIIR)Park.
      &nbsp;&nbsp;&nbsp;
      VIIR Park provides ecosystem for startups with a vision to nurture the young and innovative minds. Students, Faculty members, Alumni, Industry or any grass root innovators can Incubate from TRL0 to TRL9 at VIIR Park        </p>
    <div className="flex">
    <a href="abt" className="btn2">Git hub</a>
      <div className="w-2"></div>
    </div>
  </div>
</div>


<hr className="mr-0 sm:mr-20 ml-0 sm:ml-20 mb-5 mt-5"/>
  
<div className="rounded-t-lg flex flex-col sm:flex-row items-center justify-center p-2 shadow-lg">
      <div className="mr-10 mb-4 sm:mb-0  transition transform hover:scale-105">
  <img src={img2} alt="Blog Image" className="rounded-lg shadow-lg ml-5 w-full max-w-xl h-auto sm:w-64 sm:h-auto block sm:hidden" style={{ width: '100%', maxWidth: '40rem', height: 'auto' }} />
</div>


  <div className="p-4 mr-20 sm:p-10 rounded-lg">
    <h2 className="text-2xl text-custom-blue font-semibold text-left">Perforamance Analyzer</h2>
    <p className="text-white mb-4"><span className="text-custom-blue">Language Used-</span> Python, streamlit, html  DataBase- Firebase</p>
    <p className="text-white mb-4">The Student Performance Analysis Website is a Streamlit-based platform enabling users to upload student data, visualize performance trends, and gain insights through interactive charts. With features like data upload, visualization options, and user authentication</p>
    <div className="flex">
    <a href="abt" className="btn2">Git hub</a>
      <div className="w-2"></div>
    </div>
  </div>
</div>


<hr className="mr-0 sm:mr-20 ml-0 sm:ml-20 mb-5 mt-5"/>


<div className="rounded-t-lg flex flex-col sm:flex-row items-center justify-center p-2 shadow-lg">
      <div className="mr-10 mb-4 sm:mb-0  transition transform hover:scale-105">
  <img src={img3} alt="Blog Image" className="rounded-lg ml-5 shadow-lg w-full max-w-xl h-auto sm:w-64 sm:h-auto block sm:hidden" style={{ width: '100%', maxWidth: '40rem', height: 'auto' }} />
</div>


  <div className="p-4 mr-20 sm:p-10 rounded-lg">
    <h2 className="text-2xl text-custom-blue font-semibold text-left">FundaTech</h2>
    <p className="text-white mb-4"><span className="text-custom-blue">Language Used-</span>php, javascript, bootstrap DataBase-Mysql</p>
    <p className="text-white mb-4">The website aims to educate beginners in stock market investments by providing fundamental analysis of companies. It offers users access to company histories and financial data, aiding informed decision-making.User feedback and reviews enhance the learning experience</p>
    <div className="flex">
    <a href="abt" className="btn2">Git hub</a>
      <div className="w-2"></div>
    </div>
  </div>
</div>
<div className="btn-group mt-5 flex justify-center"> 
      <a href="pr" className="btn">View all Project</a>
    </div>

<hr className="mr-0 sm:mr-20 ml-0 sm:ml-20 mb-5 mt-5"/>














      

    
      </div>
  );  
};

export default Pro_resp;




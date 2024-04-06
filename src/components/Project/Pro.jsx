import React from 'react';
import img1 from "../../assets/images/Projects/VIIR.png"
import img2 from "../../assets/images/Projects/stremlit.png"
import img3 from "../../assets/images/Projects/fundatech.png"
import img4 from "../../assets/images/Projects/portfolio.png"
import img5 from "../../assets/images/Projects/netflix.png"
import img6 from "../../assets/images/Projects/automation.png"

import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // Importing icons from React Icons library

const placeholderImage = 'https://via.placeholder.com/400';


const Pro = () => {
  return (
    
    <div> 
      <h1 className="text-5xl font-bold font-size-3.5rem   pb-2 pl-5 mb-20 ml-20 mr-20 mt-20 text-left " style={{ color: "#149bf5",borderBottomWidth: "3px", borderBottomColor: "#149bf5"}}>PROJECTS</h1>
      
      
      
      <div className="rounded-t-lg flex flex-col sm:flex-row items-center justify-center p-2 shadow-lg">
      <div className="mr-10 mb-4 sm:mb-0">
  <img src={img1} alt="Blog Image" className="rounded-lg ml-20  shadow-lg w-full max-w-xl h-auto sm:w-64 sm:h-auto hidden lg:block  transition transform hover:scale-105" style={{ width: '40rem', maxWidth: '40rem', height: '24rem' }} />
  <img src={img1} alt="Blog Image" className="rounded-lg ml-5 shadow-lg w-full max-w-xl h-auto sm:w-64 sm:h-auto block sm:hidden  transition transform hover:scale-105" style={{ width: '100%', maxWidth: '40rem', height: 'auto' }} />
</div>


  <div className="p-4 mr-20 sm:p-10 rounded-lg">
    <h2 className="text-2xl text-custom-blue font-semibold text-left">VIIR Park</h2>
    <p className="text-white mb-4"><span className="text-custom-blue">Language Used-</span> React, Node js, express DataBase- Mongo DB</p>
    <p className="text-white mb-4"> Vishwakarma Incubation, Innovation and Research (VIIR)Park.
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      VIIR Park provides ecosystem for startups with a vision to nurture the young and innovative minds. Students, Faculty members, Alumni, Industry or any grass root innovators can Incubate from TRL0 to TRL9 at VIIR Park  </p>
    <div className="flex">
    <a href="https://github.com/SarveshPatil6020/viit_incub.git" className="btn2">Git hub</a>
      <div className="w-2"></div>
    </div>  
  </div>
</div>


<hr className="mr-0 sm:mr-20 ml-0 sm:ml-20 mb-5 mt-5"/>
  
<div className="rounded-t-lg flex flex-col sm:flex-row items-center justify-center p-2 shadow-lg">
      <div className="mr-10 mb-4 sm:mb-0">
  <img src={img2} alt="Blog Image" className="rounded-lg ml-20  shadow-lg w-full max-w-xl h-auto sm:w-64 sm:h-auto hidden lg:block  transition transform hover:scale-105" style={{ width: '40rem', maxWidth: '40rem', height: '24rem' }} />
  <img src={img2} alt="Blog Image" className="rounded-lg ml-5 shadow-lg w-full max-w-xl h-auto sm:w-64 sm:h-auto block sm:hidden  transition transform hover:scale-105" style={{ width: '100%', maxWidth: '40rem', height: 'auto' }} />
</div>


  <div className="p-4 mr-20 sm:p-10 rounded-lg">
    <h2 className="text-2xl text-custom-blue font-semibold text-left">Perforamance Analyzer</h2>
    <p className="text-white mb-4"><span className="text-custom-blue">Language Used-</span> Python, streamlit, html  DataBase- Firebase</p>
    <p className="text-white mb-4">The Student Performance Analysis Website is a Streamlit-based platform enabling users to upload student data, visualize performance trends, and gain insights through interactive charts. With features like data upload, visualization options, and user authentication</p>
    <div className="flex">
    <a href="https://github.com/SarveshPatil6020/Streamlit_python.git" className="btn2">Git hub</a>
      <div className="w-2"></div>
    </div>
  </div>
</div>


<hr className="mr-0 sm:mr-20 ml-0 sm:ml-20 mb-5 mt-5"/>


<div className="rounded-t-lg flex flex-col sm:flex-row items-center justify-center p-2 shadow-lg">
      <div className="mr-10 mb-4 sm:mb-0">
  <img src={img3} alt="Blog Image" className="rounded-lg ml-20  shadow-lg w-full max-w-xl h-auto sm:w-64 sm:h-auto hidden lg:block  transition transform hover:scale-105" style={{ width: '40rem', maxWidth: '40rem', height: '24rem' }} />
  <img src={img3} alt="Blog Image" className="rounded-lg ml-5 shadow-lg w-full max-w-xl h-auto sm:w-64 sm:h-auto block sm:hidden  transition transform hover:scale-105" style={{ width: '100%', maxWidth: '40rem', height: 'auto' }} />
</div>


  <div className="p-4 mr-20 sm:p-10 rounded-lg">
  <h2 className="text-2xl text-custom-blue font-semibold text-left">FundaTech</h2>
    <p className="text-white mb-4"><span className="text-custom-blue">Language Used-</span> php, javascript, bootstrap DataBase-Mysql</p>
    <p className="text-white mb-4">The website aims to educate beginners in stock market investments by providing fundamental analysis of companies. It offers users access to company histories and financial data, aiding informed decision-making.User feedback and reviews enhance the learning experience</p>
    <div className="flex">
    <a href="https://github.com/SarveshPatil6020/FundaTech.git" className="btn2">Git hub</a>
      <div className="w-2"></div>
    </div>
  </div>
</div>


<hr className="mr-0 sm:mr-20 ml-0 sm:ml-20 mb-5 mt-5"/>



<div className="rounded-t-lg flex flex-col sm:flex-row items-center justify-center p-2 shadow-lg">
      <div className="mr-10 mb-4 sm:mb-0">
  <img src={img4} alt="Blog Image" className="rounded-lg ml-20 border border-white shadow-lg w-full max-w-xl h-auto sm:w-64 sm:h-auto hidden lg:block  transition transform hover:scale-105" style={{ width: '40rem', maxWidth: '40rem', height: '24rem' }} />
  <img src={img4} alt="Blog Image" className="rounded-lg ml-5 border border-white shadow-lg w-full max-w-xl h-auto sm:w-64 sm:h-auto block sm:hidden  transition transform hover:scale-105" style={{ width: '100%', maxWidth: '40rem', height: 'auto' }} />
</div>


  <div className="p-4 mr-20 sm:p-10 rounded-lg">
    <h2 className="text-2xl text-custom-blue font-semibold text-left">Portfolio Website</h2>
    <p className="text-white mb-4"><span className="text-custom-blue">Language Used-</span> React, Tailwind, js, Git </p>
    <p className="text-white mb-4">My portfolio website showcases my skills, projects, and experiences in a clean and intuitive design. Visitors can explore my professional journey, view project details, and connect with me easily. It's optimized for performance and responsive across devices, reflecting my commitment to web development excellence.
    
    </p>
    <div className="flex">
    <a href="https://github.com/SarveshPatil6020/SarveshPortfolio.git" className="btn2">Git hub</a>
      <div className="w-2"></div>
    </div>
  </div>

</div>

<hr className="mr-0 sm:mr-20 ml-0 sm:ml-20 mb-5 mt-5"/>




<div className="rounded-t-lg flex flex-col sm:flex-row items-center justify-center p-2 shadow-lg">
      <div className="mr-10 mb-4 sm:mb-0">
  <img src={img5} alt="Blog Image" className="rounded-lg ml-20  shadow-lg w-full max-w-xl h-auto sm:w-64 sm:h-auto hidden lg:block  transition transform hover:scale-105" style={{ width: '40rem', maxWidth: '40rem', height: '24rem' }} />
  <img src={img5} alt="Blog Image" className="rounded-lg ml-5 shadow-lg w-full max-w-xl h-auto sm:w-64 sm:h-auto block sm:hidden  transition transform hover:scale-105" style={{ width: '100%', maxWidth: '40rem', height: 'auto' }} />
</div>


  <div className="p-4 mr-20 sm:p-10 rounded-lg">
    <h2 className="text-2xl text-custom-blue font-semibold text-left">Netflix Data Visualization</h2>
    <p className="text-white mb-4"><span className="text-custom-blue">Technology Used-</span> Power Bi</p>
    <p className="text-white mb-4">My Power BI visualization analyzes Netflix data by country, show type, and rating, highlighting trends by release year. It provides insights into the distribution of movies and TV shows, enabling a comprehensive understanding of Netflix content globally. The visualization's dynamic features offer an interactive exploration of Netflix's diverse catalog, aiding in strategic decision-making and content planning.</p>
    <div className="flex">
    <a href="https://github.com/SarveshPatil6020/Netflix_dsml.git" className="btn2">Git hub</a>
      <div className="w-2"></div>
    </div>
  </div>
</div>

<hr className="mr-0 sm:mr-20 ml-0 sm:ml-20 mb-5 mt-5"/>




<div className="rounded-t-lg flex flex-col sm:flex-row items-center justify-center p-2 shadow-lg">
      <div className="mr-10 mb-4 sm:mb-0">
  <img src={img6} alt="Blog Image" className="rounded-lg ml-20  shadow-lg w-full max-w-xl h-auto sm:w-64 sm:h-auto hidden lg:block  transition transform hover:scale-105" style={{ width: '40rem', maxWidth: '40rem', height: '24rem' }} />
  <img src={img6} alt="Blog Image" className="rounded-lg ml-5 shadow-lg w-full max-w-xl h-auto sm:w-64 sm:h-auto block sm:hidden  transition transform hover:scale-105" style={{ width: '100%', maxWidth: '40rem', height: 'auto' }} />
</div>


  <div className="p-4 mr-20 sm:p-10 rounded-lg">
    <h2 className="text-2xl text-custom-blue font-semibold text-left">Data Segregation Bot</h2>
    <p className="text-white mb-4"><span className="text-custom-blue">Technology Used-</span> Automation Anywhere, API's</p>
    <p className="text-white mb-4">Develop and design an  intelligent document summarization bot by intgrating ChatGPT to generate coherent summaries of lengthy documents. The bot should be capable of understanding the context, identifying key information, and producing human-like summaries that capture the essence of the document.</p>
    <div className="flex">
      <div className="w-2"></div>
    </div>
  </div>
</div>


<hr className="mr-0 sm:mr-20 ml-0 sm:ml-20 mb-5 mt-5"/>










      

    
      </div>
  );  
};

export default Pro;




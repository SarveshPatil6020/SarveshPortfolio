import React from 'react'
import { Link } from 'react-router-dom';
import img1 from "../assets/images/cert_1.png"
import img2 from "../assets/images/Certificates/Alter.png"
import img3 from "../assets/images/Certificates/FLOSS.png"
import "./Certificate.css"


const Card = ({ imageUrl, description, Title }) => {
  return (


   
    <div className="custom-card ">
          <img className="w-full h-74 object-cover transition transform hover:scale-105" src={imageUrl} alt="Card" />
          <div className="px-6 py-4">
              <div className="font-bold text-xl text-custom-blue mb-2 text-center">{Title}</div>
              <p className="text-gray-700 text-base text-white text-left">{description}</p>
          </div>
      </div>
);
};

const Certificate = () => {
  return (

    <>
<h1 className="custom-title">
  CERTIFICATIONS
</h1>
    <div className="flex flex-wrap justify-center">

    <div className="hide">
    <Link to="/SarveshPortfolio/cet">
<button  className="custom-button absolute top-30 right-40 m-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-full flex items-center">
              View All
              <svg className="ml-2 w-6 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
          </button></Link>
          </div>
          <Card
              imageUrl={img1}
              Title="CCNA Introduction To Cyber security"
              description="" />
          <Card
              imageUrl={img2}
              Title="Alteryx Foundation Course"
              description=" " />
          <Card
              imageUrl={img3}
              Title="COEP Floss Event"
              description="" />
          <div className="mt-1 flex justify-center"> 
          <div className="hide1">           
          <Link className="btn" to="/SarveshPortfolio/cet">View all Certificates</Link>
</div>

    </div>
      </div></>
  );
};

export default Certificate;

import React from 'react'
import img1 from "../assets/images/cert_1.png"
import "./Certificate.css"


const Card = ({ imageUrl, description }) => {
  return (


   
    <div className="custom-card bg-gray-800 rounded overflow-hidden m-4 mt-20 mb-20 b-8 border border-gray-300 glow-on-hover">
          <img className="w-full h-74 object-cover transition transform hover:scale-105" src={imageUrl} alt="Card" />
          <div className="px-6 py-4">
              <div className="font-bold text-xl text-white mb-2 text-left">Card Title</div>
              <p className="text-gray-700 text-base text-white text-left">{description}</p>
          </div>


          {/* <button className="absolute top-20 right-40 mt-2 mr-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        View All
    </button> */}
      </div>
);
};

const Certificate = () => {
  return (

    <><h1 className="text-5xl font-bold font-size-3.5rem   pb-2 mb-2 ml-20 mr-20 mt-20 text-left " style={{ color: "#149bf5",borderBottomWidth: "3px", borderBottomColor: "#149bf5",borderBottomStyle: "solid"}}>ACHIEVEMENTS </h1><div className="flex flex-wrap justify-center">
<button className="absolute top-30 right-40 m-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-full flex items-center">
              View All
              <svg className="ml-2 w-6 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
          </button>
          <Card
              imageUrl={img1}
              description="Description for Card 1" />
          <Card
              imageUrl={img1}
              description="Description for Card 2" />
          <Card
              imageUrl={img1}
              description="Description for Card 3" />
      </div></>
  );
};

export default Certificate;

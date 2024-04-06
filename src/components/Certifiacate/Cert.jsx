import React, { useState } from 'react';
import img1 from "../../assets/images/cert_1.png"
import img2 from "../../assets/images/Certificates/Alter.png"
import img3 from "../../assets/images/Certificates/CCNA.png"
import img4 from "../../assets/images/Certificates/FLOSS.png"
import img5 from "../../assets/images/Certificates/Prodigy.png"
import img6 from "../../assets/images/Certificates/hardware.png"
import img7 from "../../assets/images/Certificates/blueprism.png"
import img8 from "../../assets/images/Certificates/cpp.png"
import img9 from "../../assets/images/Certificates/DSML.png"
import img10 from "../../assets/images/Certificates/java-1.png"
import img11 from "../../assets/images/Certificates/java.png"
import img12 from "../../assets/images/Certificates/AWS.png"
import "./Cert.css"
const Cert = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    img12,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img1,
  ];

  const handleImageChange = (index) => {
    setCurrentIndex(index);
  };

  return (
     <div>
         <hr className="divider"/>
     <h2 className="header">Certifications</h2>
     <h3 className="sub-header">These certifications represent my dedication to continuous learning and expertise in various domains, enhancing my skills to deliver exceptional results</h3>

    <div className="image-slider-container">
    <img
      src={images[currentIndex]}
      alt={`Image ${currentIndex + 1}`}
      className="slider-image"
    />
    <div className="image-bar">
      {images.map((_, index) => (
        <button
          key={index}
          onClick={() => handleImageChange(index)}
          className={currentIndex === index ? 'active' : ''}
        >
          {index + 1}
        </button>
      ))}
    </div>
  </div>
  </div> 
);
};

export default Cert;

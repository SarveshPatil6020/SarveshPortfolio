import React from 'react';
import img1 from "../assets/images/cert_1.png"
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // Importing icons from React Icons library

const placeholderImage = 'https://via.placeholder.com/400';

// const Title = styled.div`
// color: white;
// font-size: 42px;
// text-align: left;
// font-weight: 600;
// margin-top: 20px;
//   color: ${({ theme }) => theme.text_primary};
//   @media (max-width: 768px) {
// margin-top: 12px;
//       font-size: 32px;
//   }
// `;
const Project = () => {
  return (
    
    <div> 
      <h1 className="text-5xl font-bold font-size-3.5rem   pb-2 mb-20 ml-20 mr-20 mt-20 text-left " style={{ color: "#149bf5",borderBottomWidth: "3px", borderBottomColor: "#149bf5"}}>PROJECTS</h1>
      {/* <h1 className='text-left text-white '>Projects</h1> */}
      <div className="rounded-t-lg flex items-center justify-center mr-20 ml-20 p-2 bg-gray-900 shadow-lg ">
    {/* Left side with image */}
    <div className="mr-10">
      <img src={img1} alt="Blog Image" className="rounded-lg shadow-lg" style={{ width: '40rem', height: '25rem' }} />
    </div>

    <div className=" border border-white p-10 rounded-lg"style={{ width: '40rem', height: '23rem' }}>
      <h2 className="text-2xl text-white font-semibold text-left">Project Name</h2>
      <p className="text-white mb-10">Technology Used-</p>
      <p className="text-white mb-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, culpa fugit sint doloribus in blanditiis illo! Quis hic inventore ex provident dolorum nesciunt, error alias quisquam accusantium ipsam, iure ab?</p>
      <div className="flex">
        {/* View and Buy buttons */}
        <button className="flex items-center px-12 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600">
          View
        </button>
        <div className="w-2"></div>
        <button className="flex items-center px-12 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600">
          Buy
        </button>
      </div>
    </div>
  </div>
   



  <div className=" flex items-center justify-center mr-20 ml-20 p-2 bg-gray-900 shadow-lg ">
{/* Left side with image */}


<div className="w-1/2 border border-white p-10 rounded-lg"style={{ width: '40rem', height: '23rem' }}>
  <h2 className="text-2xl text-white font-semibold text-left">Hello</h2>
  <p className="text-white mb-10">HI</p>
  <p className="text-white mb-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, culpa fugit sint doloribus in blanditiis illo! Quis hic inventore ex provident dolorum nesciunt, error alias quisquam accusantium ipsam, iure ab?</p>
  <div className="flex">
    {/* View and Buy buttons */}
    <button className="flex items-center px-12 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600">
      View
    </button>
    <div className="w-2"></div>
    <button className="flex items-center px-12 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600">
      Buy
    </button>
  </div>
</div>

<div className="ml-10 ">
  <img src={img1} alt="Blog Image" className="rounded-lg shadow-lg" style={{ width: '40rem', height: '25rem' }} />
</div>
</div>



<div className="rounded-b-lg flex items-center justify-center mr-20 ml-20 p-2 bg-gray-900  shadow-lg ">
    {/* Left side with image */}
    <div className="mr-10 ">
      <img src={img1} alt="Blog Image" className="rounded-lg shadow-lg" style={{ width: '40rem', height: '25rem' }} />
    </div>

    <div className=" border border-white p-10 rounded-lg"style={{ width: '40rem', height: '23rem' }}>
      <h2 className="text-2xl text-white font-semibold text-left">Project Name</h2>
      <p className="text-white mb-10">Technology Used-</p>
      <p className="text-white mb-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, culpa fugit sint doloribus in blanditiis illo! Quis hic inventore ex provident dolorum nesciunt, error alias quisquam accusantium ipsam, iure ab?</p>
      <div className="flex">
        {/* View and Buy buttons */}
        <button className="flex items-center px-12 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600">
          View
        </button>
        <div className="w-2"></div>
        <button className="flex items-center px-12 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600">
          Buy
        </button>
      </div>
    </div>
  </div>

      
    <button className="width:100%  mt-4 px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 style={{ marginLeft: '6px', marginRight: '6px' }">
        View All Projects
      </button>
    
      </div>
  );  
};

export default Project;







// import React, { useState, useEffect } from 'react';
// const Project = () => {
//  // Define random values for demonstration
//  const randomImage = "https://via.placeholder.com/500"; // Example random image URL
//  const randomProjectName = "Random Project"; // Example random project name
//  const randomProjectLink = "https://example.com"; // Example random project link
//  const randomTechnologies = "React, Tailwind CSS"; // Example random technologies used
//  const randomAbstract = "Lorem ipsum dolor sit amet, consectetur adipiscing elit."; // Example random abstract
//   // State to track the side of the content
//   const [isLeftSide, setIsLeftSide] = useState(true);

//   useEffect(() => {
//     // Function to toggle the side every 5 seconds
//     const interval = setInterval(() => {
//       setIsLeftSide(prevState => !prevState);
//     }, 5000);

//     // Clear the interval on component unmount
//     return () => clearInterval(interval);
//   }, []);


//     return (
//         <div className="flex items-center justify-center p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out">
//           {/* Conditional rendering based on the state of isLeftSide */}
//           {isLeftSide ? (
//             <>
//               {/* Left side content */}
//               <div className="w-1/2 mr-6 transition-all duration-1000 ease-in-out">
//                 <img src={randomImage} alt={randomProjectName} className="rounded-lg shadow-lg" style={{ width: '100%', maxWidth: '400px' }} />
//               </div>
//               {/* Right side content */}
//               <div className="w-1/2 text-white transition-all duration-1000 ease-in-out">
//                 <h2 className="text-2xl font-semibold mb-2">{randomProjectName}</h2>
//                 <p className="text-gray-300 mb-4">{randomAbstract}</p>
//                 <p className="text-gray-300 mb-4">Technologies used: {randomTechnologies}</p>
//                 <a href={randomProjectLink} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
//                   View Project
//                 </a>
//               </div>
//             </>
//           ) : (
//             <>
//               {/* Right side content */}
//               <div className="w-1/2 text-white transition-all duration-1000 ease-in-out">
//                 <h2 className="text-2xl font-semibold mb-2">{randomProjectName}</h2>
//                 <p className="text-gray-300 mb-4">{randomAbstract}</p>
//                 <p className="text-gray-300 mb-4">Technologies used: {randomTechnologies}</p>
//                 <a href={randomProjectLink} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
//                   View Project
//                 </a>
//               </div>
//               {/* Left side content */}
//               <div className="w-1/2 mr-6 transition-all duration-3000 ease-in-out">
//                 <img src={randomImage} alt={randomProjectName} className="rounded-lg shadow-lg" style={{ width: '100%', maxWidth: '400px' }} />
//               </div>
//             </>
//           )}
//         </div>
//       );
// }

// export default Project




// import React, { useState, useEffect } from 'react';
// // import "./Project.css"
// const Project= () => {
//   // Define random values for demonstration
//   const randomImage = "https://via.placeholder.com/500"; // Example random image URL
//   const randomProjectName = "Random Project"; // Example random project name
//   const randomProjectLink = "https://example.com"; // Example random project link
//   const randomTechnologies = "React, Tailwind CSS"; // Example random technologies used
//   const randomAbstract = "Lorem ipsum dolor sit amet, consectetur adipiscing elit."; // Example random abstract

//   const [swapContent, setSwapContent] = useState(false);

//   useEffect(() => {
//     // Set timeout to hide both sides for 1 second, then toggle swapContent state every 6 seconds (5 seconds for content + 1 second empty frame)
//     const timer = setTimeout(() => {
//       // Hide both sides by setting swapContent to false
//       setSwapContent(false);

//       // After 1 second, toggle swapContent to true to show the next side
//       setTimeout(() => {
//         setSwapContent((prev) => !prev);
//       }, 1000);
//     }, 6000);

//     // Clear the timeout when the component unmounts or when swapContent changes
//     return () => clearTimeout(timer);
//   }, [swapContent]);

//   return (
//     <div className="flex items-center justify-center p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out">
//       {/* Project Image */}
//       <div className={`w-1/2 mr-6 ${swapContent ? 'order-2' : ''}`} style={{ transition: 'margin-right 2s, color 1s' }}>
//         <img
//           src={randomImage}
//           alt={randomProjectName}
//           className="rounded-lg shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-110"
//           style={{ width: '100%', maxWidth: '400px' }}
//         />
//       </div>

//       {/* Project Information */}
//       <div className={`w-1/2 text-white ${swapContent ? 'order-1' : ''}`} style={{ transition: 'margin-right 2s, color 1s' }}>
//         <h2 className="text-2xl font-semibold mb-2">{randomProjectName}</h2>
//         <p className="text-gray-300 mb-4">{randomAbstract}</p>
//         <p className="text-gray-300 mb-4">Technologies used: {randomTechnologies}</p>
//         <a href={randomProjectLink} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
//           View Project
//         </a>
//       </div>
//     </div>
//   );
// };


// export default Project;

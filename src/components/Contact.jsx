import React from 'react';
import "./Certificate.css"
const Contact = () => {
  return (
    (
      <div className="bordercss"><h1 className=" borderhead text-5xl font-bold font-size-3.5rem   pb-2 mb-2 ml-20 mr-20 mt-20 text-center " style={{ color: "#149bf5",borderBottomWidth: "3px", borderBottomColor: "#149bf5"}}>CONTACT</h1>
      <div className="flex justify-center items-center min-h-screen text-white ">
        <div className="max-w-7xl w-full bg-gray-800 shadow-md rounded-md overflow-hidden md:flex ">
          <div className="md:w-1/2 p-4 md:p-8 ">
            <h2 className="text-xl md:text-2xl font-bold mb-4">Contact Me</h2>
            <form action="https://formspree.io/f/xjvnawdl"
               method="POST">
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm text-gray-400 font-medium mb-1">Name</label>
                <input type="text" id="name" name="name" required className="w-full border border-gray-600 rounded-md px-3 py-2 bg-white-400 text-black focus:outline-none focus:border-blue-400" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm text-gray-400 font-medium mb-1">Email</label>
                <input type="email" id="email" name="email" required className="w-full border border-gray-600 rounded-md px-3 py-2 bg-white-400 text-black focus:outline-none focus:border-blue-400" />
              </div>
              <div className="mb-4">
                <label htmlFor="phone" className="block text-sm text-gray-400 font-medium mb-1">Phone No</label>
                <input type="tel" id="phone" name="phone" required className="w-full border border-gray-600 rounded-md px-3 py-2 bg-white-400 text-black focus:outline-none focus:border-blue-400" />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm text-gray-400 font-medium mb-1">Message</label>
                <textarea id="message" name="message" rows="4"  required className="w-full border border-gray-600 rounded-md px-3 py-2 bg-white-400 text-black focus:outline-none focus:border-blue-400"></textarea>
              </div>
              <button type="submit" value="your response has been send" className="w-full bg-blue-500 text-white font-semibold px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">Submit</button>
            </form>
          </div>
          <div className="bg-blue-200 md:w-1/2 p-4 md:p-8">
            <h2 className="text-xl text-black md:text-2xl font-bold mb-4">Contact Information</h2>
            <p className="text-bold text-black mb-2">Phone: <a href="tel:+91 9579256020">+91 9579256020</a></p>
            <p className="text-bold text-black mb-2">Email: <a href="mailto:sarvesh98patil81@gmail.com">sarvesh98patil81@gmail.com</a></p>
            <p className="text-bold text-black mb-2">Address: Hadapsar, Pune, India</p>
            <iframe title="Map" className="w-full border border-black rounded-md h-80 mt-9" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.0937568724803!2d73.95504717496182!3d18.479411882606197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2e9e86ae4bbe1%3A0xc45cede9a80f66cb!2sGreen%20County%20Phase%202!5e0!3m2!1sen!2sin!4v1711255274428!5m2!1sen!2sin" ></iframe>
     
          </div>
        </div>
      </div>
      </div>
    )
    );
};

export default Contact;




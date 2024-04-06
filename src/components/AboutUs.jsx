import React from 'react'
import badge1 from "../assets/images/Badges/alteryx_b.png"
import badge2 from "../assets/images/Badges/CCNA_N_B.png"
import badge3 from "../assets/images/Badges/CCNA_C_B.png"
import badge4 from "../assets/images/Badges/aws_B.png"
import profilep from "../assets/images/IMG_3068.jpg"
import "./AboutUs.css"

const AboutUs = () => {

    const openTab = (tabName) => {
        const tabLinks = document.getElementsByClassName("tab-links");
        const tabContents = document.getElementsByClassName("tab-contents");
      
        for (let tabLink of tabLinks) {
          tabLink.classList.remove("active-link");
        }
        for (let tabContent of tabContents) {
          if (tabContent.id === tabName) {
            if (tabContent.classList.contains("active-tab")) {
              tabContent.classList.remove("active-tab");
            } else {
              tabContent.classList.add("active-tab");
            }
          } else {
            tabContent.classList.remove("active-tab");
          }
        }
      
        event.currentTarget.classList.add("active-link");
      };
      
  return (
    <div id="about">
          <div className="container">
              <div className="row">
                  <div className="about-col-1">
                      <img src={profilep}></img>
                  </div>
                  <div className="about-col-2 bg-gray-900">
                      <h1 className="sub-title text-blue-300 ">About Me</h1>
                      <p className="text-lg text-black bg-blue-300 rounded-xl bg-rounded p-1">
                      I am a committed and forward-thinking student pursuing a B.tech in Computer Engineering at Viit, Pune With a full of excitement about the opportunities and learning new things. I also like to take  leadership responsibilities, guiding and motivating teams to accomplish our objectives.
                      </p>
                      <div className="tab-titles bg-blue-300 rounded-xl bg-rounded">
                          <p className="tab-links active-link" onClick={() => openTab('skills')}>Education</p>
                          <p className="tab-links" onClick={() => openTab('experience')}>Badges</p>
                          {/* <p className="tab-links" onClick={() => openTab('education')}>Experience</p> */}
                      </div>
                      <div className="tab-contents active-tab" id="skills">
                          <ul>
                              <li><span>Diploma in Computer Engineering</span><br />Cusrow Wadia Institute Of Technology, Pune</li>
                              <li><span>B.Tech In Computer Engineering</span><br />Vishwakarma Institute Of Information Technology, Pune</li>
                        
                          </ul>
                      </div>

                      <div className="tab-contents" id="experience">
                        <div className="tab-contentss" id="experiences">
                        <div className="experiences-item">
    <div><img className="img_b" src={badge4} alt="Logo 2"  />
        <a className="text-blue-300 " href="https://www.credly.com/badges/ea22c7d5-cc03-43c0-9cac-51fb316a12fc/public_url">view</a>
        </div>
    </div>
    <div className="experiences-item">
      <div >
        <img className="img_b" src={badge1} alt="Logo 1" />
        <a className="text-blue-300 " href="https://www.credly.com/badges/3355ac34-3291-4c26-923e-abaa361dc298/public_url">view</a>
      </div>
    </div>
    <div className="experiences-item">
        <div><img className="img_b" src={badge2} alt="Logo 2"  />
        <a className="text-blue-300 " href="https://www.credly.com/badges/e63bbf90-1823-4ce0-b657-3bfb471c7e87/public_url">view</a>
        </div>
    </div>
    
    <div className="experiences-item">
        <div>
        <img className="img_b" src={badge3} alt="Logo 3" />
        <a className="text-blue-300 " href="https://www.credly.com/badges/8597b101-c4e9-4e2b-801c-42e2900c68a0/public_url">view</a>
         </div>
    
    </div>
</div>


</div>


                      <div className="tab-contents" id="education">
                          <ul>
                              <li><span>web developlment</span><br />Desinging web application</li>
                              
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      
  )
}

export default AboutUs;

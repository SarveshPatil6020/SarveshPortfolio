import React from 'react'
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
                  <div className="about-col-2">
                      <h1 className="sub-title ">About Me</h1>
                      <p>
                      I am a committed and forward-thinking student pursuing a B.tech in Computer Engineering at Viit,pune With a full of excitement about the opportunities and learning new things. I also like to take  leadership responsibilities, guiding and motivating teams to accomplish our objectives.
                      </p>
                      <div className="tab-titles">
                          <p className="tab-links active-link" onClick={() => openTab('skills')}>Education</p>
                          <p className="tab-links" onClick={() => openTab('experience')}>Badges</p>
                          <p className="tab-links" onClick={() => openTab('education')}>Experience</p>
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
      <div>
        <img src={profilep} alt="Logo 1" style={{ width: '50px', height: '50px', marginRight: '10px' }}/>
        <span>Experience 1</span>
      </div>
    </div>
    <div className="experiences-item">
        <div><img src={profilep} alt="Logo 2" style={{ width: '50px', height: '50px', marginRight: '10px' }} />
        <span>Experience 2</span>
        </div>
    </div>
    <div className="experiences-item">
        <div>
        <img src={profilep} alt="Logo 3" style={{ width: '50px', height: '50px', marginRight: '10px' }}/>
        <span>Experience 3</span>
         </div>
    </div>
</div>
</div>


                      <div className="tab-contents" id="education">
                          <ul>
                              <li><span>UI?UX</span><br />Desinging web/app interfaces</li>
                              <li><span>UI?UX</span><br />Desinging web/app interfaces</li>
                              <li><span>UI?UX</span><br />Desinging web/app interfaces</li>
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      
  )
}

export default AboutUs;

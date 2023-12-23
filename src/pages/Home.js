/* eslint-disable jsx-a11y/anchor-has-content */
import React, { Component } from "react";
import AOS from "aos";
import Resume from "../assets/files/Resume-Jayashree-2023.pdf";
import "../core_ui/Home.css";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Link } from "react-router-dom";

export default class Home extends Component {
  componentDidMount() {
    AOS.init();
  }

  render() {
    const html = 80;
    const javascript = 85;
    const css = 70;
    // const php = 66;
    const angular = 56;
    const reactjs = 80;
    const django = 85;

    return (
      <div className="home">
        <div class="cursor"></div>
        <div className="section1">
          <div className="banner-text">
            <span>Hi there, </span>
            <h2>I'm Jayashree Acharya</h2>
            {/* <p>Web Designer &nbsp; | &nbsp; Developer</p> */}
            <p>Experienced software developer dedicated to crafting efficient and scalable applications, with a focus on problem-solving and delivering impactful solutions.</p>
          </div>
        </div>
        <div class="section2">
          <div class="uk-section">
            <div class="uk-container">
              <div class="uk-grid-match">
                <div>
                  <div class="uk-inline-clip uk-transition-toggle" tabindex="0">
                    <img
                      class="uk-transition-scale-up uk-transition-opaque profile-image"
                      src={process.env.PUBLIC_URL + './images/profile.jpg'}
                      alt=""
                    />
                  </div>
                </div>
                <div data-aos="fade-up" data-aos-duration="1500">
                  <h3 className="text-overlay">Resume</h3>
                  <h3>About Me</h3>
                  <p>
                    Hello, My Name is Jayashree Acharya. I'm a Software Developer
                    based in Mangalore, Karnataka, India, and I'm very
                    passionate and dedicated to my work. With 3 year experience
                    as a Software developer.
                  </p>
                  <div className="section-myself">
                    <table class="uk-table">
                      <tbody>
                        <tr>
                          <td class="uk-width-small">Name:</td>
                          <td class="uk-table-expand">Jayashree</td>
                        </tr>
                        <tr>
                          <td class="uk-width-small">Date of Birth:</td>
                          <td class="uk-table-expand">25 July 1997</td>
                        </tr>
                        <tr>
                          <td class="uk-width-small">Address:</td>
                          <td class="uk-table-expand">
                            Mangalore, Karnataka, India
                          </td>
                        </tr>
                        <tr>
                          <td class="uk-width-small">Email:</td>
                          <td class="uk-table-expand">
                            jayashreehacharya97@gmail.com
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <p uk-margin>
                      {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
                      <Link class="uk-button uk-button-default" to={Resume}  rel="noreferrer"
                          target="_blank">
                        Download cv &nbsp;
                        <span
                         
                          download="Resume - Jayashree - 2022"
                          uk-icon="download"
                        ></span>
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section3">
          <div class="uk-section">
            <div class="uk-container">
              <h3 className="text-overlay" data-aos="zoom-out-left" data-aos-duration="1000">Experience</h3>
              <h3 data-aos="zoom-out-right" data-aos-duration="1000">Skills & Experience</h3>
              <div className="container">
                <div className="container-section">
                  <div className="section" data-aos="flip-left" data-aos-duration="1500">
                    <CircularProgressbar
                      value={html}
                      text={`${html}%`}
                    />
                    <p>HTML</p>
                  </div>
                  <div className="section" data-aos="flip-left" data-aos-duration="1500">
                    <CircularProgressbar
                      value={javascript}
                      text={`${javascript}%`}
                    />
                    <p>Javascript</p>
                  </div>
                  <div className="section" data-aos="flip-left" data-aos-duration="1500">
                    <CircularProgressbar
                      value={css}
                      text={`${css}%`}
                    />
                    <p>CSS</p>
                  </div>
                  {/* <div className="section" data-aos="flip-left" data-aos-duration="1500">
                    <CircularProgressbar
                      value={php}
                      text={`${php}%`}
                    />
                    <p>PHP</p>
                  </div> */}
                  <div className="section" data-aos="flip-left" data-aos-duration="1500">
                    <CircularProgressbar
                      value={angular}
                      text={`${angular}%`}
                    />
                    <p>Angular</p>
                  </div>
                  <div className="section" data-aos="flip-left" data-aos-duration="1500">
                    <CircularProgressbar
                      value={reactjs}
                      text={`${reactjs}%`}
                    />
                    <p>React</p>
                  </div>
                  <div className="section" data-aos="flip-left" data-aos-duration="1500">
                    <CircularProgressbar
                      value={django}
                      text={`${django}%`}
                    />
                    <p>Django</p>
                  </div>
                </div>
                <div className="container-section">
                  <h3 className="sub-text" data-aos="zoom-out-right" data-aos-duration="1000">Experience</h3>
                  <div className="resume-box">
                  <ul class="uk-list">

                    <li>
                      <div class="icon">
                        <i class="fa fa-briefcase"></i>
                      </div>
                      <span class="time">May 2022 - Present</span>
                      <h5>Software Developer<br/><span class="place">Qliclabs Technologies Private Limited, Mangalore</span></h5>
                      <p class="open-sans-font">  Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit</p>
                    </li>

                    <li>
                      <div class="icon">
                        <i class="fa fa-briefcase"></i>
                      </div>
                      <span class="time">Jan 2021 - May 2022</span>
                      <h5> Jr. Software Developer & Digital Marketing<br/><span class="place">Sarvajna Private Limited, Puttur</span></h5>
                      <p class="open-sans-font">  Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit</p>
                    </li>
                    
                  </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section4">
          <div class="uk-section">
            <div class="uk-container">
              <h3 className="text-overlay" data-aos="zoom-out-left" data-aos-duration="1000">Works</h3>
              <h3 data-aos="zoom-out-right" data-aos-duration="1000">My Portfolio</h3>
              <div className="container">
                <Tabs>
                  <TabList>
                    <Tab><p>Title 1</p></Tab>
                    <Tab><p>Title 2</p></Tab>
                  </TabList>

                  <TabPanel>
                    <div className="section">
                      Webdevelopment 1
                    </div>
                    <div className="section">
                      Webdevelopment 1
                    </div>
                    <div className="section">
                      Webdevelopment 1
                    </div>
                    <div className="section">
                      Webdevelopment 1
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <h2>Any content 2</h2>
                  </TabPanel>
                </Tabs>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

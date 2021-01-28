import React from 'react';

import Layout from '../components/Layout';

// import { Link } from 'gatsby';
import Sidebar from '../components/Sidebar';
import config from '../../config';
const IndexPage = () => (
  <Layout>
    <Sidebar />
    <div className="container-fluid p-0">
      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="about"
      >
        <div className="w-100">
          <h1 className="mb-0">
            {config.firstName}
            <span className="text-primary">{config.lastName}</span>
          </h1>
          <div className="subheading mb-5">
            {config.address} · {config.phone} ·
            <a href={`mailto:${config.email}`}>{config.email}</a>
          </div>
          <p className="lead mb-5">
            {config.heroSubheader}
          </p>
          <div className="social-icons">
            {config.socialLinks.map(social => {
              const { icon, url } = social;
              return (
                <a key={url} href={url}>
                  <i className={`fab ${icon}`}></i>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex justify-content-center"
        id="experience"
      >
        <div className="w-100">
          <h2 className="mb-5">Experience</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Website Product Manager</h3>
              <div className="subheading mb-3">Armor Defense</div>
              <p>
                I work within the Marketing department to maintain the company website. I have managed a website redesign that has benefited from decreased bounce rate, increased time on page, increased inbounds 10% quarter over quarter,  
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Feb 2018 - Present</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Front End Web Developer</h3>
              <div className="subheading mb-3">Polygraph Media</div>
              <p>
              My projects included working on the Polygraph Media platform and managing the homepage. I also helped come
up with designs that would help solve certain problems within the platform. I 
created mockups/wireframes and assets for the company to use in marketing and
pitch decks. The ad platform helps brands/franchises with their Facebook Ad
lifecycle, from strategy, to buying, and monitoring at scale across many different
locations. We always try to innovate internally and see which tools have the potential
to scale. Tech stack included: Knockout.Js, HTML, CSS, JS, C#, CosmosDB, and
Source Tree for version control.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">January 2017 - Feb 2018</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Front End Developer and Designer</h3>
              <div className="subheading mb-3">Sandbox Commerce</div>
              <p>
              Worked on SandBox Commerce mobile app building platform, maintianed the company website, and created designs for store themes. I worked on design projects for the company
 that included creating assets, decks, and mockups/wireframes. The platform helps users create apps in a Wordpress-like format. Tech
stack included Angular, Express, MongoDB, Node.js, HTML, CSS, Materialize, React,
React-Native, Bootstrap, JQuery, NPM, Sketch, Invision.
                
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">December 2016 - January 2017</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div className="resume-content">
              <h3 className="mb-0">Junior Web Developer</h3>
              <div className="subheading mb-3">The New Office</div>
              <p>
              Worked on customizations for clients using Netsuite and Netsuite Commerce
Advanced. Primarily focused on front end development on e-commerce applications
for clients. Tech stack included Backbone.js, HTML, CSS, and Bootstrap.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">February 2015 - January 2016</span>
            </div>
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="education"
      >
        <div className="w-100">
          <h2 className="mb-5">Education</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">MakeSquare (Now HackReactor)</h3>
              <div className="subheading mb-3">Web Development Bootcamp</div>
              <div>FrontEnd </div>
              <p>Attended a 12 week immersive web development bootcamp.There were classes 60
hours a week and we focused on front-end and back-end development principles to
prepare students to become full-stack developers. Tech stack focus was on learning Ruby on Rails, Javascript, HTML, CSS, and SQL</p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">April 2014 - July 2014</span>
            </div>
          </div>
          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">University of Washington Seattle</h3>
              <div className="subheading mb-3">Bachelor of Science</div>
              <div>Psychology </div>
              <p>GPA: 3.75</p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">September 2005 - December 2009</span>
            </div>
          </div>

          
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="skills"
      >
        <div className="w-100">
          <h2 className="mb-5">Skills</h2>

          <div className="subheading mb-3">
            Programming Languages &amp; Tools
          </div>
          <ul className="list-inline dev-icons">
            <li className="list-inline-item">
              <i className="fab fa-html5"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-css3-alt"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-js-square"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-angular"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-react"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-node-js"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-sass"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-less"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-wordpress"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-gulp"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-grunt"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-npm"></i>
            </li>
          </ul>

          <div className="subheading mb-3">Workflow</div>
          <ul className="fa-ul mb-0">
          <li>
              <i className="fa-li fa fa-check"></i>
              Research, Design Thinking, User Experience
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Mobile-First, Responsive UI Design
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Cross Browser Testing &amp; Debugging
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Cross Functional Teams
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Agile Development &amp; Scrum
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Project Managing
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Digital Marketing, Digital Presence
            </li>
          </ul>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="projects"
      >
        <div className="w-100">
          <h2 className="mb-5">Projects</h2>
          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Front End Developer and Designer</h3>
              <div className="subheading mb-3">Sandbox Commerce</div>
              <p>
              Worked on SandBox Commerce mobile app building platform, maintianed the company website, and created designs for store themes. I worked on design projects for the company
 that included creating assets, decks, and mockups/wireframes. The platform helps users create apps in a Wordpress-like format. Tech
stack included Angular, Express, MongoDB, Node.js, HTML, CSS, Materialize, React,
React-Native, Bootstrap, JQuery, NPM, Sketch, Invision.
                
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">December 2016 - January 2017</span>
            </div>
          </div>
        </div>
      </section> 
      

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="interests"
      >
        <div className="w-100">
          <h2 className="mb-5">Interests</h2>
          <p>
            Apart from being a web developer, I enjoy most of my free time doing things to better myself. 
            I don't have much free time these days, though. My one year old daughter keeps me pretty occupied but very entertained. 
            I try to run when I can especially now that I am training for a half-marathon. Luna would join me on the runs but she has a hard stop at 5k.  
          </p>
          <p className="mb-0">
            When forced indoors, I follow a number of sci-fi and fantasy genre
            movies and television shows, I am an aspiring chef, and I spend a
            large amount of my free time exploring the latest technology
            advancements in the front-end web development world.
          </p>
        </div>
      </section>
      
      
    </div>
  </Layout>
);

export default IndexPage;

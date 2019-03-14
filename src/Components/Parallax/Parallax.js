import React, { Component } from "react";
import { Parallax } from "react-parallax";
import "./Parallax.scss";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";

import profile from "../../media/profile2.jpg";

const img =
  "https://images.unsplash.com/photo-1473277087567-8e0937304e17?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80";
// "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80";

const img2 = 'https://images.unsplash.com/photo-1416949929422-a1d9c8fe84af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000&q=80'
  // 'https://images.unsplash.com/photo-1460602692976-8eab38c11f9d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
  // "https://images.unsplash.com/photo-1492541641671-bd75cf01a094?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80";
const img3 =
  "https://images.unsplash.com/photo-1515266591878-f93e32bc5937?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80";
// "https://images.unsplash.com/photo-1505413687799-90481dfc0203?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
class ParallaxPage extends Component {
  state = {
    skills: [
      {
        skill: "JavaScript",
        img: "https://www.w3schools.com/whatis/img_js.png"
      },
      {
        skill: "React.js",
        img: "https://cdn.auth0.com/blog/react-js/react.png"
      },
      {
        skill: "Node.js",
        img:
          "https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png"
      },
      {
        skill: "Redux",
        img: "https://avatars0.githubusercontent.com/u/13142323?s=400&v=4"
      },
      {
        skill: "Git",
        img: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png"
      },
      {
        skill: "Jest",
        img:
          "https://seeklogo.com/images/J/jest-logo-F9901EBBF7-seeklogo.com.png"
      },
      {
        skill: "PostgreSQL",
        img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/2000px-Postgresql_elephant.svg.png"
      },
      {
        skill: "HTML",
        img:
          "https://d21ii91i3y6o6h.cloudfront.net/gallery_images/from_proof/1851/medium/1408470984/html5.png"
      },
      {
        skill: "CSS",
        img:
          "https://cdn1.iconfinder.com/data/icons/logotypes/32/badge-css-3-512.png"
      },
      {
        skill: "Express.js",
        img:
          "https://buzz-prod-photos.global.ssl.fastly.net/img/06b9ed56-ced3-4078-bfc8-ca0055a69d61"
      },
      {
        skill: "Socket.io",
        img:
          "https://cdn.freebiesupply.com/logos/large/2x/socket-io-logo-png-transparent.png"
      },
      {
        skill: "Postman",
        img:
          "https://cdn-images-1.medium.com/max/1200/1*fVBL9mtLJmHIH6YpU7WvHQ.png"
      }
    ]
  };

  scroll = () => {
    this.refs.skills.scrollIntoView();
  };
  render() {
    const skillsDisplay = this.state.skills.map((skill, index) => {
      return (
        <div key={index} className="skill flex-c">
          <img src={skill.img} className="skill-image" alt={skill.skill} />
          <p className="">{skill.skill}</p>
        </div>
      );
    });

    return (
      <>
        {/* eslint-disable-next-line */}
        <a name="home" />
        <Parallax blur={0} bgImage={img} bgImageAlt="the cat" strength={800}>
          <div style={{ height: "110vh" }}>
            <div className="title-hero flex-c">
              <h1>Kenny Crump</h1>
              <h3>Full-Stack Web Developer</h3>
              {/* <Title text='Kenny Crump' subtext='Full-Stack Web Developer'/> */}
            </div>
          </div>
        </Parallax>
        {/* <Parallax blur={0} bgImage={img3} bgImageAlt="the cat" strength={800}>
          <div style={{ height: "140vh", position: 'relative', top: '10%' }}> */}
        <div className="flex-c project-hero">
          {/* eslint-disable-next-line */}
          <a name="portfolio" />
          <h3 className="portfolio-title">PORTFOLIO</h3>
          <Projects />
        </div>
        {/* eslint-disable-next-line */}
        <a name="skills" />
        <Parallax blur={0} bgImage={img2} bgImageAlt="the cat" strength={800}>
          <div style={{ height: "115vh", position: "relative", top: "-10%" }}>
            <div ref="skills" className="skill-hero flex-c">
              <h3>SKILLS</h3>
              <div className="flex-r">{skillsDisplay}</div>
            </div>
          </div>
        </Parallax>
        {/* eslint-disable-next-line */}
        <a name="about" />
        <div className="flex-c about-hero">
              <h3>ABOUT ME</h3>
              <div className="about-text flex-c">
                <img src={profile} alt="profile pic" />
                <p>
                  I am a Pre-Med Student turned Web Developer. Upon finishing my
                  Microbiology degree and taking a break to explore other
                  interests, instead of immediately applying for Medical Schools,
                  I took an intro level computer science class and found my true
                  passion in coding. From there, I attended DevMountain's
                  full-immersive Web Development Bootcamp to learn the
                  ins-and-outs of web development and haven't looked back.
                </p>
                <p>
                  After my bootcamp experience, I was hired by DevMountain as a
                  Mentor for upcoming sessions of new students. Not only has it
                  been great to better master the curriculum through teaching,
                  debugging, and helping students with their projects, but I
                  have also had the opportunity to work on real projects used
                  internally by DevMountain.
                </p>
                <p>
                  I am always looking for new learning opportunities and ways
                  that I can improve as a developer.
                </p>
              </div>
            </div>
            {/* eslint-disable-next-line */}
        <a name="contact" />
        <Parallax blur={0} bgImage={img3} bgImageAlt="the cat" strength={800}>
          <div className='flex-c' style={{ height: "100vh", minHeight: '950px', position: "relative", top: "10%" }}>
          <Contact />
            
          </div>
        </Parallax>
      </>
    );
  }
}

export default ParallaxPage;

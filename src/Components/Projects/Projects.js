import React, { Component } from 'react'
import Slider from "react-slick";
import './Projects.scss'
import appointhubVideo from '../../media/AppointhubVideo.mp4'
import kodewarsVideo from '../../media/KodewarsVideo.mp4'
import attendanceTrackerVideo from '../../media/AttendanceTracker.mp4'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

class Projects extends Component {
    state = {  }
    render() { 
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            // nextArrow: <SampleNextArrow />,
            className: 'slider'
          };
        return ( 
            <Slider {...settings}>

                <div className="projects-container">
                    <h2>AppointHub  <i class="fab fa-github"></i></h2>
                    <p>Personal Project - Business and Schedule Manager</p>
                    <p><a target='_blank' rel="noopener noreferrer" href="https://www.appointhub.com">www.appointhub.com</a>  || <a href="https://github.com/KennyCrump/clone-wars">Github Repo</a></p>
                    <h4>Video Walkthrough</h4>
                    <div className='vid-div'>
                    <video className='project-video' title='kodewars'  controls>
                        <source src={appointhubVideo}/>
                    </video>
                    </div>
                    {/* <p>AppointHub covers all the needs of small businesses that are appointment-based.</p> */}
                    {/* <p className='fa-arrow'>See Project Details <i class="fas fa-arrow-right"> </i></p> */}
                </div>
                <div className="projects-container">
                    <h2>Kodewars</h2>
                    <p>Group Project - CodeWars-inspired Coding Challenge Site</p>
                    {/* eslint-disable-next-line */}
                    <p><a target='_blank' rel="noopener noreferrer" href="https://www.kodewars.net">www.kodewars.net</a> || <a target='_blank' href="https://github.com/KennyCrump/clone-wars">Github Repo</a></p>
                    <h4>Video Walkthrough</h4>
                    <div className='vid-div'>
                    <video className='project-video' title='kodewars'  controls>
                        <source src={kodewarsVideo}/>
                    </video>
                    </div>
                    {/* <p>AppointHub covers all the needs of small businesses that are appointment-based.</p> */}
                </div>
                <div className="projects-container">
                <h2>Attendance Tracker</h2>
                    <p>App for automating the tracking of student attendance</p>
                    <p>Used internally by DevMountain, no code available.</p>
                    <h4>Video Walkthrough</h4>
                    <div className='vid-div'>
                    <video className='project-video' title='kodewars'  controls>
                        <source src={attendanceTrackerVideo}/>
                    </video>
                    </div>
                    {/* <p>AppointHub covers all the needs of small businesses that are appointment-based.</p> */}
                </div>
            </Slider> 
    //         <Slider {...settings}>
    //     <div>
    //       <h3>1</h3>
    //     </div>
    //     <div>
    //       <h3>2</h3>
    //     </div>
    //     <div>
    //       <h3>3</h3>
    //     </div>
    //     <div>
    //       <h3>4</h3>
    //     </div>
    //     <div>
    //       <h3>5</h3>
    //     </div>
    //     <div>
    //       <h3>6</h3>
    //     </div>
    //   </Slider>
      
            );
    }
}
 
export default Projects;


  
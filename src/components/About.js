import React from "react"
import './about.css'
import Profile from '../profile.jpg'

const About = () => {
    return (
        <div class="about-container">
            <div class="about">
                <img class="profile" src={Profile} alt="Picture of Profile"/>
                <div class="about-text">
                    <h1>I'm Gaia, a fourth year computer science student at the University of Victoria.</h1>
                    <p>I am a team-player and proficient in Python and JavaScript programming. And am passionate about
                    creating full-stack web applications, and learning from having hands-on experience in front-end and back-end
                    development</p>
                </div>
                
            </div>
        </div>
    )
}

export default About;
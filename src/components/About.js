import React from "react"
import './about.css'
import Profile from '../profile.jpg'

const About = () => {
    return (
        <div class="about-container">
            <div>
                <img class="profile" src={Profile} alt="Picture of Profile"/>
                <p>I am fourth-year student who is a team-player and proficient in Python and JavaScript programming. And am passionate about
                    creating full-stack web applications, and learning from having hands-on experience in front-end and back-end
                    developmen</p>
            </div>
        </div>
    )
}

export default About;
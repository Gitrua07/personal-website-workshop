import React from "react"
import './contacts.css'

const Experience = () => {
    const contacts = [
        {
            socials: "LinkedIn",
            link: "https://www.linkedin.com/in/gaiaiturralde/"
        },
        {
            socials: "Email",
            link: "gaia.iturraldework@gmail.com"
        }
    ]
    return (
        <div className="experience-container">
            <div className="contacts-content">
                <h1>Contacts</h1>
                {contacts.map((contact, index) => (
                    <div key={index} className="contact-card">
                        <h2><strong>{contact.socials}</strong></h2>
                        <p>{contact.link}</p>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Experience;
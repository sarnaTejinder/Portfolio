import React from 'react'
import ContactForm from './contactForm'
import EmailRoundedIcon from '@material-ui/icons/EmailRounded';
import './contact.css'
function Contact(){
    return(
        <section className = "contact section" id="contact">
            <h2 className="section-title">Contact Me</h2>
            <p className="section-subtitle">Get in touch.</p>
            <div className="mail">
            
            <a className="mail-link" href = "mailto: tejindersarna1@gmail.com">
                <EmailRoundedIcon/>
                Send Email </a>
                <p className="email">tejindersarna1@gmail.com</p>
            
            </div>
            <ContactForm/>
            
            </section>
    )
}

export default Contact
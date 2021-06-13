import React from 'react'
import './contactform.css'

function ContactForm(){ 
    return(
        <form className="contact-form container">
        <div className="contact-input grid">
            <span>
                <label>Name</label>
                <input type="text" placeholder="Tejinder Sarna"/>
            </span>
            <span>
                <label>Email</label>
                <input type="email" placeholder="abc@example.com"/>
            </span>
            <span>
                <label>Message</label>
               <textarea rows={3} />
            </span>
        </div>
        <button className="button button-flex">Submit</button>
    </form>
    )
}

export default ContactForm
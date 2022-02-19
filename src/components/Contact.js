import './Contact.css';

import React from "react";
import emailjs from "emailjs-com";

function Contact(){

    function sendEmail(e){

        console.log("send email works");

        e.preventDefault();

        emailjs.sendForm('service_qzodqwq', 'template_orabqxo', e.target, 'user_4HbyR7QQnjW7xY0djN73M')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
        });

        e.target.reset();
    }

    return(
        
        <div className='container'>
            <form onSubmit={sendEmail}>
                <div className='form-wrapper'>
                    <h1>Send Us A Message</h1>
                    <div>
                        <input type='text' placeholder='Name' name="name" />
                        <input type='text' placeholder='Subject' name='subject'/>
                    </div>
                    
                    <input type='email' placeholder='Email Address' name="email"/><br/>
                    <textarea cols="30" rows="8" placeholder='Your Message' name='message'></textarea><br/>
                    <button type="submit" value="Send Message">Send Message</button>
                </div>

            </form>
        </div>

    );

}

export default Contact;
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./ContactInfo.css";

const ContactInfo = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

    emailjs
        .sendForm(
            'service_myrrrs3', 
            'template_0a8jwzq', 
            form.current, {
            publicKey: 'CYUMS4J2_W1SeIUOp',
        })
        e.target.reset()
    };

  return (
    <section className="ContactInfo section" id="contact">
        <h2 className="section-title">Get in touch</h2>
        <span className="section-subtitle">Contact me</span>

        <div className="contact-container container grid">
            <div className="contact-content">
                <h3 className="contact-title">Talk to me</h3>
            </div>

            <div className="contact-info">
                <div className="contact-card">
                    <i className="bx bx-mail-send contact-card-icon"></i>

                    <h3 className="contact-card-title">E-mail</h3>
                    <span className="contact-card-data">0494/12 34 56</span>

                    <a href="" className="contact-button">
                        Write me <i className="bx bx-right-arrow-alt
                        contact-button-icon"></i>
                    </a>
                </div>
            </div>

            <div className="contact-info">
                <div className="contact-card">
                    <i className="bx bxl-linkedin contact-card-icon"></i>

                    <h3 className="contact-card-title">LinkedIn</h3>
                    <span className="contact-card-data">0494/12 34 56</span>

                    <a href="" className="contact-button">
                        Write me <i className="bx bx-right-arrow-alt
                        contact-button-icon"></i>
                    </a>
                </div>
            </div>

            <div className="contact-info">
                <div className="contact-card">
                    <i className="bx bxl-github contact-card-icon"></i>

                    <h3 className="contact-card-title">GitHub</h3>
                    <span className="contact-card-data">0494/12 34 56</span>

                    <a href="" className="contact-button">
                        Write me <i className="bx bx-right-arrow-alt
                        contact-button-icon"></i>
                    </a>
                </div>
            </div>

            <div className="contact-content">
                <h3 className="contact-title">Write me your project</h3>

                <form ref={form} onSubmit={sendEmail} className="contact-form">
                    <div className="contact-form-div">
                        <label className="contact-form-tag">Mail</label>
                        <input 
                            type="email" 
                            name="email" 
                            className="contact-form-input" 
                            placeholder="Insert your email"
                        />
                    </div>

                    <div className="contact-form-div">
                        <label className="contact-form-tag">Name</label>
                        <input 
                            type="text" 
                            name="name" 
                            className="contact-form-input" 
                            placeholder="Insert your name"
                        />
                    </div>

                    <div className="contact-form-div contact-form-area">
                        <label className="contact-form-tag">Project</label>
                        <textarea 
                            name="message" 
                            cols="30" rows="10"
                            className="contact-form-input"
                            placeholder="Write your message">   
                        </textarea>
                    </div>

                    <button className="button button--flex">
                        Verzend e-mail
                        <i className="bx bx-right-arrow-alt contact-button-icon"></i>
                    </button>
                </form>
            </div>
        </div>
    </section>
  );
};

export default ContactInfo
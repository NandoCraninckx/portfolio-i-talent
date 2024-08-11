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
        <h2 className="section-title">Contacteer me</h2>
        <span className="section-subtitle">Via één van onderstaande kanalen</span>

        <div className="contact-container container grid">
            <div className="contact-content">
                <h3 className="contact-title">Socials</h3>
            

            <div className="contact-info">
                <div className="contact-card">
                    <i className="bx bxl-whatsapp contact-card-icon"></i>

                    <h3 className="contact-card-title">WhatsApp</h3>
                    <span className="contact-card-data">0494/12 34 56</span>

                    <a href="" className="contact-button">
                        Via WhatsApp <i className="bx bx-right-arrow-alt
                        contact-button-icon"></i>
                    </a>
                </div>

                <div className="contact-card">
                    <i className="bx bxl-linkedin contact-card-icon"></i>

                    <h3 className="contact-card-title">LinkedIn</h3>
                    <span className="contact-card-data">Nando Craninckx</span>

                    <a href="https://www.linkedin.com/in/nando-craninckx/" className="contact-button">
                        Via mijn LinkedIn-pagina <i className="bx bx-right-arrow-alt
                        contact-button-icon"></i>
                    </a>
                </div>

                <div className="contact-card">
                    <i className="bx bxl-github contact-card-icon"></i>

                    <h3 className="contact-card-title">GitHub</h3>
                    <span className="contact-card-data">NandoCraninckx</span>

                    <a href="https://github.com/NandoCraninckx" className="contact-button">
                        Via mijn GitHub-account <i className="bx bx-right-arrow-alt
                        contact-button-icon"></i>
                    </a>
                </div>

            </div>
        </div>

            <div className="contact-content">
                <h3 className="contact-title">Stuur een e-mail</h3>

                <form ref={form} onSubmit={sendEmail} className="contact-form">
                    <div className="contact-form-div">
                        <label className="contact-form-tag">E-mail</label>
                        <input 
                            type="email" 
                            name="email" 
                            className="contact-form-input" 
                            placeholder="Vul je e-mail in"
                        />
                    </div>

                    <div className="contact-form-div">
                        <label className="contact-form-tag">Naam</label>
                        <input 
                            type="text" 
                            name="name" 
                            className="contact-form-input" 
                            placeholder="Geef je naam op"
                        />
                    </div>

                    <div className="contact-form-div contact-form-area">
                        <label className="contact-form-tag">Bericht</label>
                        <textarea 
                            name="message" 
                            cols="30" rows="10"
                            className="contact-form-input"
                            placeholder="Laat een bericht achter">   
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
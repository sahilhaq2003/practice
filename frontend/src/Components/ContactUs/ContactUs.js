import React, { useRef, useState } from 'react';
import './ContactUs.css';
import emailjs from '@emailjs/browser';

function ContactUs() {
  const form = useRef();
  const [statusMessage, setStatusMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_xpwe0lt', 'template_quu6b2r', form.current, {
        publicKey: 'VGXK4KbDayroYVGHd',
      })
      .then(
        () => {
          setStatusMessage('✅ Message sent successfully!');
          form.current.reset();
        },
        (error) => {
          setStatusMessage('❌ Failed to send message. Please try again.');
          console.error('EmailJS error:', error.text);
        }
      );
  };

  return (
    <div className="contact-wrapper">
      <div className="contact-box">
        <h2 className="contact-title">Contact Us</h2>
        <form ref={form} onSubmit={sendEmail}>
          <div className="form-group">
            <label>Name</label>
            <input type="text" name="user_name" className="form-control" required />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" name="user_email" className="form-control" required />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea name="message" className="form-control" rows="5" required />
          </div>
          <button type="submit" className="btn-submit">Send</button>
          {statusMessage && <p className="status-message">{statusMessage}</p>}
        </form>
      </div>
    </div>
  );
}

export default ContactUs;

import React from 'react';
import classes from './Contact.module.css';
import BuiltIcon from '../../assets/images/bulit-icon.png'



function Contact() {
  return (
    <div className={classes.contact_section}>
      <div className={classes.container}>
        <div className={classes.row}>
          <div className={classes.col_sm_12}>
            <h1 className={classes.contact_taital}>Get In Touch</h1>
            <div className={classes.bulit_icon}>
              <img src={BuiltIcon} alt="Built Icon" />
            </div>
          </div>
        </div>
      </div>
      <div className={classes.containerFluid}>
        <div className={classes.contact_section_2}>
          <div className={classes.row}>
            <div className={classes.col_md_12}>
              <div className={classes.mail_section_1}>
                <input type="text" className={classes.mail_text} placeholder="Your Name" name="yourName" />
                <input type="email" className={classes.mail_text} placeholder="Your Email" name="yourEmail" />
                <input type="tel" className={classes.mail_text} placeholder="Your Phone" name="yourPhone" />
                <textarea className={classes.massage_bt} placeholder="Message" rows="5" id="comment" name="message"></textarea>
                <div className={classes.send_bt}>
                  <a href="#" className={classes.send_link}>SEND</a>
                </div>
              </div>
            </div>
            <div className={classes.map_main}>
              <div className={classes.map_responsive}>
                <iframe
                  src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=Eiffel+Tower+Paris+France"
                  width="100%"
                  height="500"
                  frameBorder="0"
                  style={{ border: 0 }}
                  allowFullScreen
                  title="Location Map"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

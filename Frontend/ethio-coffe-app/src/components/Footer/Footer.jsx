import React from 'react';
import classes from './Footer.module.css'; // Corrected the import syntax
import Teligram from '../../assets/images/teligram-icon.png'

function Footer() {
  return (
   <>
    <div className={`${classes.footer_section} layout_padding`}> {/* Fixed className usage */}
      <div className={classes.container}>
        <div className={classes.row}>
          <div className={classes.col_md_12}>
            <h1 className={classes.address_text}>Address</h1>
            <p className={classes.footer_text}>
              Here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use
            </p>
            <div className={classes.location_text}>
              <ul>
                <li>
                  <a href="#">
                    <i className={`${classes.fa} fa-phone`} aria-hidden="true"></i>
                    <span className={classes.padding_left_10}>+01 1234567890</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className={`${classes.fa} fa-envelope`} aria-hidden="true"></i>
                    <span className={classes.padding_left_10}>demo@gmail.com</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className={classes.form_group}>
              <textarea
                className={classes.update_mail}
                placeholder="Your Email"
                rows="5"
                id="comment"
                name="Your Email"
              ></textarea>
              <div className={classes.subscribe_bt}>
                <a href="#">

                  <img src={Teligram} alt="Subscribe" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
       <div class="copyright_section">
       <div class="container">
          <div class="row">
             <div class="col-lg-6 col-sm-12">
                <p class="copyright_text">2020 All Rights Reserved. Design by <a href="https://html.design">Free Html Templates</a></p>
             </div>
             <div class="col-lg-6 col-sm-12">
                <div class="footer_social_icon">
                   <ul>
                      <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                      <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                      <li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                      <li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                   </ul>
                </div>
             </div>
          </div>
       </div>
    </div>
    </>
  );
}

export default Footer;

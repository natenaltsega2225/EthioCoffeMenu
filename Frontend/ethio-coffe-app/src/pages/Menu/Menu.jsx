import React from 'react';
import styles from './Menu.module.css'; // Make sure to use a CSS module import
import bulletIcon from '../../assets/images/bulit-icon.png'; // Corrected image import
import Types from '../../assets/images/icon-4.png'

function Menu() {
  return (
    <div className={styles.coffee_section}>
      <div className={styles.container}>
        <div className={styles.row}>
          <h1 className={styles.coffee_taital}>OUR Coffee </h1>
          <div className={styles.bulit_icon}>
            <img src={bulletIcon} alt="Bullet Icon" />
          </div>
        </div>
      </div>

      <div className={styles.coffee_section_2}>
        <div id="main_slider" className={`carousel slide`} data-ride="carousel">
          <div className={`carousel-inner`}>
            {[0, 1, 2].map((_, index) => (
              <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                <div className={styles.containerFluid}>
                  <div className={styles.row}>
                    {['TYPES OF COFFEE', 'BEAN VARIETIES', 'COFFEE & PASTRY', 'COFFEE TO GO'].map((title, i) => (
                      <div className={`col-lg-3 col-md-6`} key={i}>
                        <div className={styles.coffee_img}>
                          {/* <img src={Types}alt={title} /> */}
                        </div>
                        <h3 className={styles.types_text}>{title}</h3>
                        <p className={styles.looking_text}>Looking at its layout. The point of</p>
                        <div className={styles.read_bt}>
                          <a href="#">Read More</a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <a className={`carousel-control-prev`} href="#main_slider" role="button" data-slide="prev">
            <i className="fa fa-arrow-left"></i>
          </a>
          <a className={`carousel-control-next`} href="#main_slider" role="button" data-slide="next">
            <i className="fa fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Menu;

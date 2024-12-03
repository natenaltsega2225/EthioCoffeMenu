import React from 'react';
import Menu from '../Menu/Menu';
import classes from './Home.module.css'; // Corrected the import syntax
import ClientOne from '../../assets/images/client-img1.png'
import ClientTwo from '../../assets/images/client-img2.png'
import ClientThree from '../../assets/images/client-img3.png'
import Contact from '../Contact/Contact';

function Home() {
  return (
    <>
      <Menu />
      <div className={`${classes.client_section} layout_padding`}> {/* Fixed className usage */}
        <div className={classes.container}>
          <div className={classes.row}>
            <div className={classes.col_md_12}>
              <h1 className={classes.about_taital}>What Customer Says About Our Service</h1>
              <div className={classes.bulit_icon}>
                <img src="../../assets/images/bulit-icon.png" alt="Bullet Icon" />
              </div>
            </div>
          </div>
          <div className={classes.client_section_2}>
            <div className={classes.client_taital_main}>
              <div className={classes.client_left}>
                <div className={classes.client_img}>
                  <img src={ClientOne} alt="Client 1" />
                </div>
              </div>
              <div className={classes.client_right}>
                <h3 className={classes.moark_text}>Joy Moark</h3>
                <p className={classes.client_text}>
                  Ethio Coffee House has been a staple for the Ethiopian community in Nashville for over a decade, possibly 2!
                  Love their coffee - it's the real deal!
                  Highly recommend the Egg with Meat or Quanta FirFir, but prepare for it to have quite the kick!
                </p>
              </div>
            </div>
            <div className={classes.client_taital_main}>
              <div className={classes.client_left}>
                <div className={classes.client_img}>
                  <img src={ClientTwo} alt="Client 2" />
                </div>
              </div>
              <div className={classes.client_right}>
                <h3 className={classes.moark_text}>Cameron C.</h3>
                <p className={classes.client_text}>
                  This place is great! From the calming smells and energy as you walk in, to the amazing food and barista. Everything done with care and love here. New regular right here no doubt.
                </p>
              </div>
            </div>
            <div className={classes.client_taital_main}>
              <div className={classes.client_left}>
                <div className={classes.client_img}>
                  <img src={ClientThree}alt="Client 3" />
                </div>
              </div>
              <div className={classes.client_right}>
                <h3 className={classes.moark_text}>Samantha W.</h3>
                <p className={classes.client_text}>
                  Right by my house, very quiet and small place. Coffee is good and muffins are great. Owners are very nice.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Contact/>
    </>
  );
}

export default Home;

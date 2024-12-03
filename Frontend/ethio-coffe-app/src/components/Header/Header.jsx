import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/img-4.png'
import classes from './Header.module.css';

function Header() {
  return (
    <div className={classes.header_section}>
      <div className={classes.containerFluid}>
        <nav className={`${classes.navbar} navbar-expand-lg navbar-light bg-light`}>
          <a className={classes.navbarBrand} href="index.html">
            <img src={Logo} alt="Logo" />
          </a>
          <button
            className={`${classes.navbarToggler}`}
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className={`${classes.navbarTogglerIcon}`}></span>
          </button>
          <div className={`${classes.collapse} navbar-collapse`} id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link to="/" className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">About</Link>
              </li>
              <li className="nav-item">
                <Link to="/menu" className="nav-link">Menu</Link>
              </li>
              <li className="nav-item">
                <Link to="/order" className="nav-link">Order</Link>
              </li>
              <li className="nav-item">
                <Link to="/blog" className="nav-link">Blog</Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link">Contact</Link>
              </li>
            </ul>

            <form className={`${classes.formInline} my-2 my-lg-0`}>
              <div className={classes.loginBt}>
                <ul>
                  <li><a href="#"><span className={classes.userIcon}><i className="fa fa-user" aria-hidden="true"></i></span>Login</a></li>
                  <li><a href="#"><i className="fa fa-search" aria-hidden="true"></i></a></li>
                </ul>
              </div>
            </form>
          </div>
        </nav>
      </div>

      <div className={`${classes.bannerSection} layout_padding`}>
        <div className={classes.container}>
          <div id="banner_slider" className={`${classes.carousel} slide`} data-ride="carousel">
            <div className={`${classes.carouselInner}`}>
              <div className={`${classes.carouselItem} active`}>
                <div className={classes.row}>
                  <div className={`${classes.colMd6}`}>
                    {/* <div className={classes.bannerImg}><img src="../../assets/images/banner-img.png" alt="Banner" /></div> */}
                  </div>
                  <div className={`${classes.colMd6}`}>
                    <div className={classes.bannerTaitalMain}>
                      <h1 className={classes.bannerTaital}>Coffee</h1>
                      <h5 className={classes.tastyText}>Tasty Of DozeCafe</h5>
                      <p className={classes.bannerText}>More-or-less normal distribution of letters, as opposed to using</p>
                      <div className={classes.btnMain}>
                        <div className={classes.aboutBt}><a href="#">About Us</a></div>
                        <div className={`${classes.callnowBt} active`}><a href="#">Call Us Now</a></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Add additional carousel items here */}
            </div>
            <a className={`${classes.carouselControlPrev}`} href="#banner_slider" role="button" data-slide="prev">
              <i className="fa fa-arrow-left"></i>
            </a>
            <a className={`${classes.carouselControlNext}`} href="#banner_slider" role="button" data-slide="next">
              <i className="fa fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

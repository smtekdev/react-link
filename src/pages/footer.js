import React from "react";

function Footer(){
        return(
          <div>
        <div className="footer rev-7-footer">
          <div className="container">
            <div className="footer-subscribe">
              <div className="row align-items-center">
                <div className="col-xxl-3 col-xl-4">
                  <h3>Subscribe Our Newsletter Now</h3>
                </div>
                <div className="col-xxl-4 col-xl-4 col-lg-9 col-11 col-xs-12">
                  <form action="#" className="footer-subs-form">
                    <input type="text" name="Subscription-form" id="footer-subscribe-input" placeholder="Your Email Address" />
                    <button className="subs-btn">Subscribe</button>
                  </form>
                </div>
                <div className="col-xxl-5 col-xl-4">
                  <div className="footer-socials">
                    <h3 className="footer-title">Join us on</h3>
                    <ul>
                      <li>
                        <a href="#" target="_blank">
                          <img src="assets/assets/images/socials/fb.png" alt="facebook logo" />
                        </a>
                      </li>
                      <li>
                        <a href="#" target="_blank">
                          <img src="assets/assets/images/socials/pt.png" alt="pinterest logo" />
                        </a>
                      </li>
                      <li>
                        <a href="#" target="_blank">
                          <img src="assets/assets/images/socials/lk.png" alt="linkedin logo" />
                        </a>
                      </li>
                      <li>
                        <a href="#" target="_blank">
                          <img src="assets/assets/images/socials/tw.png" alt="twitter logo" />
                        </a>
                      </li>
                      <li>
                        <a href="#" target="_blank">
                          <img src="assets/assets/images/socials/in.png" alt="instagram logo" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="main-footer">
            <div className="container">
              <div className="custom-row">
                <div className="custom-col-2">
                  <div className="footer-about">
                    <div className="footer-logo">
                      <img src="assets/assets/images/logos/logo-7.png" alt="Logo" style={{maxWidth: '220%'}} />
                    </div>
                    <ul>
                      <li>
                        <div className="icon">
                          <span><i className="flaticon-map" /></span>
                        </div>
                        <div className="txt">
                          <span>4920 Trails End Road Ft United States, FL 33311</span>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <span><i className="flaticon-email" /></span>
                        </div>
                        <div className="txt">
                          <a href="#">info@example.com</a>
                          <a href="#">test@example.com</a>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <span><i className="flaticon-telephone" /></span>
                        </div>
                        <div className="txt">
                          <a href="#">+123 456 679 123</a>
                          {/* <a href="tel:+123456789">+123 456 789</a> */}
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="custom-col-2">
                  <div className="link-wrap">
                    <div className="footer-link">
                      <h3 className="footer-title">My Account</h3>
                      <ul>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">Blogs</a></li>
                        <li><a href="#">Terms Of Use</a></li>
                        <li><a href="#">Privacy Policies</a></li>
                      </ul>
                    </div>
                    <div className="footer-link">
                      <h3 className="footer-title">Information</h3>
                      <ul>
                        <li><a href="#">My Order</a></li>
                        <li><a href="#">Wishlist</a></li>
                        <li><a href="#">My Credit</a></li>
                        <li><a href="#">Login</a></li>
                        <li><a href="#">Personal Info</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="custom-col-2">
                  <div className="link-wrap">
                    <div className="footer-link">
                      <h3 className="footer-title">Custom Links</h3>
                      <ul>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">Blogs</a></li>
                        <li><a href="#">Terms Of Use</a></li>
                        <li><a href="#">Privacy Policies</a></li>
                      </ul>
                    </div>
                    <div className="footer-link">
                      <h3 className="footer-title">Categories</h3>
                      <ul>
                        <li><a href="#">My Order</a></li>
                        <li><a href="#">Wishlist</a></li>
                        <li><a href="#">My Credit</a></li>
                        <li><a href="#">Login</a></li>
                        <li><a href="#">Personal Info</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="copyright">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-12 text-center">
                  <p>© Copyright Westcoast Animations All Right Reserved</p>
                </div>
                <div className="col-12">
                  <div className="part-img d-flex justify-content-center">
                    <img src="assets/assets/images/payment-gateway.png" alt="Image" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        );
    }


export default Footer;
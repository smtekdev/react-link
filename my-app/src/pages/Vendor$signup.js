function Vendor$signup(){
    return(
        
        <div>
        {/*------------------------------- BANNER SECTION STARTS HERE -------------------------------*/}
        {/*------------------------------- BANNER SECTION ENDS HERE -------------------------------*/}
        {/*------------------------------- TOP-PRODUCTS SECTION STARTS HERE -------------------------------*/}
        <div className="page-content pt-150 pb-150">
          <div className="container">
            <div className="row">
              <div className="col-xl-8 col-lg-10 col-md-12 m-auto">
                <div className="row">
                  <div className="col-lg-6 col-md-8">
                    <div className="login_wrap widget-taber-content background-white">
                      <div className="padding_eight_all bg-white">
                        <div className="heading_s1">
                          <h1 className="mb-5">Create an Vendor Account</h1>
                          <p className="mb-30">Already have an account? <a href="page-login.html">Login</a></p>
                        </div>
                        <form method="post">
                          <div className="form-group">
                            <input type="text" required name="username" placeholder="Username" />
                          </div>
                          <div className="form-group">
                            <input type="text" required name="email" placeholder="Email" />
                          </div>
                          <div className="form-group">
                            <input type="text" required name="store name" placeholder="Store Name" />
                          </div>
                          <div className="form-group">
                            <input required type="password" name="password" placeholder="Password" />
                          </div>
                          <div className="form-group">
                            <input required type="password" name="password" placeholder="Confirm password" />
                          </div>
                          <div className="login_footer form-group">
                            <div className="chek-form">
                              <input type="text" required name="email" placeholder="Security code *" />
                            </div>
                            <span className="security-code">
                              <b className="text-new">8</b>
                              <b className="text-hot">6</b>
                              <b className="text-sale">7</b>
                              <b className="text-best">5</b>
                            </span>
                          </div>
                          <div className="payment_option mb-50">
                            {/* <div class="custome-radio">
                                                <input class="form-check-input" required="" type="radio" name="payment_option" id="exampleRadios3" checked="">
                                                <label class="form-check-label" for="exampleRadios3" data-bs-toggle="collapse" data-target="#bankTranfer" aria-controls="bankTranfer">I am a customer</label>
                                            </div> */}
                            {/* <div class="custome-radio">
                                                <input class="form-check-input" required="" type="radio" name="payment_option" id="exampleRadios4" checked="">
                                                <label class="form-check-label" for="exampleRadios4" data-bs-toggle="collapse" data-target="#checkPayment" aria-controls="checkPayment">I am a vendor</label>
                                            </div> */}
                          </div>
                          <div className="login_footer form-group mb-50">
                            <div className="chek-form">
                              <div className="custome-checkbox">
                                <input className="form-check-input" type="checkbox" name="checkbox" id="exampleCheckbox12" defaultValue />
                                <label className="form-check-label" htmlFor="exampleCheckbox12"><span>I agree to terms &amp; Policy.</span></label>
                              </div>
                            </div>
                            <a href="page-privacy-policy.html"><i className="fi-rs-book-alt mr-5 text-muted" />Lean more</a>
                          </div>
                          <div className="form-group mb-30">
                            <button type="submit" className="btn btn-fill-out btn-block hover-up font-weight-bold" name="login">Submit &amp; Register</button>
                          </div>
                          <p className="font-xs text-muted"><strong>Note:</strong>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy</p>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 pr-30 d-none d-lg-block">
                    <div className="card-login mt-115">
                      <a href="#" className="social-login facebook-login">
                        <img src="assets/imgs/theme/icons/logo-facebook.svg" alt="" />
                        <span>Continue with Facebook</span>
                      </a>
                      <a href="#" className="social-login google-login">
                        <img src="assets/imgs/theme/icons/logo-google.svg" alt="" />
                        <span>Continue with Google</span>
                      </a>
                      <a href="#" className="social-login apple-login">
                        <img src="assets/imgs/theme/icons/logo-apple.svg" alt="" />
                        <span>Continue with Apple</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
                          <img src="assets/images/socials/fb.png" alt="facebook logo" />
                        </a>
                      </li>
                      <li>
                        <a href="#" target="_blank">
                          <img src="assets/images/socials/pt.png" alt="pinterest logo" />
                        </a>
                      </li>
                      <li>
                        <a href="#" target="_blank">
                          <img src="assets/images/socials/lk.png" alt="linkedin logo" />
                        </a>
                      </li>
                      <li>
                        <a href="#" target="_blank">
                          <img src="assets/images/socials/tw.png" alt="twitter logo" />
                        </a>
                      </li>
                      <li>
                        <a href="#" target="_blank">
                          <img src="assets/images/socials/in.png" alt="instagram logo" />
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
                      <img src="assets/images/logos/logo-7.png" alt="Logo" style={{maxWidth: '220%'}} />
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
                    <img src="assets/images/payment-gateway.png" alt="Image" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*------------------------------- TOP-PRODUCTS SECTION ENDS HERE -------------------------------*/}
        {/*------------------------------- ADS SECTION STARTS HERE -------------------------------*/}
        {/* <section class="ads-section rev-7-ads-section">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-md-6">
                    <div class="single-ad">
                        <span class="single-ad-sub-title">Organic</span>
                        <h4 class="single-ad-title">Fresh and organic <br> Grocery shop</h4>
                        <a href="#" class="single-ad-btn">Shop Now</a>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="single-ad single-ad-2">
                        <span class="single-ad-sub-title">Wide Range</span>
                        <h4 class="single-ad-title">Natural Mixed <br> Fruit Juice</h4>
                        <a href="#" class="single-ad-btn">Shop Now</a>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6">
                    <div class="single-ad single-ad-3">
                        <span class="single-ad-sub-title">Organic</span>
                        <h4 class="single-ad-title">Green Leafy <br> Vegetables</h4>
                        <a href="#" class="single-ad-btn">Shop Now</a>
                    </div>
                </div>
            </div>
        </div>
    </section> */}
        {/*------------------------------- ADS SECTION STARTS HERE -------------------------------*/}
        {/*------------------------------- FLASH SALE & NEWEST-PRODUCTS SECTION STARTS HERE -------------------------------*/}
        {/* <section class="rev-7-flash-newest rev-7-top-product">
        <div class="container">
            <div class="row">
                <div class="col-xxl-4 col-lg-3">
                    <div class="flash-sale-container">
                        <div class="section-heading rev-7-section-heading flash-sale-heading d-flex align-items-center justify-content-between">
                            <div class="d-flex align-items-center flex-row flex-lg-column flex-xl-row">
                                <img src="assets/images/icons/flash-sale-icon.png" alt="flash sale icon">
                                <h2 class="flash-sale-title">flash sale!</h2>
                            </div>

                            <div class="slider-nav"></div>
                        </div>

                        <div class="flash-sale-slider">
                            <div class="flash-sale-card">
                                <div class="flash-sale-img">
                                    <img src="assets/images/flash-deal/rev-7-flash-deal.png" alt="product image">
                                </div>
                                <div class="rev-7-product-tag rev-7-product-tag-1">50%</div>
                                <div class="part-txt">
                                    <h5>Smoothie Strawberry juice</h5>
                                    <span class="price"><span class="strike text-decoration-line-through">$96.00</span> $75.00</span>
                                    <div class="star">
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                    </div>
                                    <div class="flash-deal">
                                        <div class="countdown-wrap">
                                            <div id="rev-7-flashSaleCountdown" class="countdown syotimer"></div>
                                        </div>
                                    </div>
                                    <p class="stock">Available : <span>277 / 420 inStock</span></p>
                                </div>
                            </div>

                            <div class="flash-sale-card">
                                <div class="flash-sale-img">
                                    <img src="assets/images/flash-deal/rev-7-flash-deal.png" alt="product image">
                                </div>

                                <div class="part-txt">
                                    <div class="rev-7-product-tag rev-7-product-tag-1">50%</div>
                                    <h5>Smoothie Strawberry juice</h5>
                                    <span class="price"><span class="strike text-decoration-line-through">$96.00</span> $75.00</span>
                                    <div class="star">
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                    </div>
                                    <div class="flash-deal">
                                        <div class="countdown-wrap">
                                            <div id="rev-7-flashSaleCountdown2" class="countdown syotimer"></div>
                                        </div>
                                    </div>
                                    <p class="stock">Available : <span>277 / 420 inStock</span></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="special-area">
                        <span>Wide Range</span>
                        <h3>Green Leafy Vegetables <br> Meat & Milk</h3>
                        <a href="#" class="def-btn rev-7-def-btn">Shop Now</a>
                    </div>
                </div>

                <div class="col-xxl-8 col-lg-9">
                    <div class="section-heading rev-7-section-heading">
                        <div class="row">
                            <div class="col-xxl-6">
                                <h2 class="section-title">Newest Products</h2>
                            </div>
                            <div class="col-xxl-6">
                                <div class="top-product-tab-navs">
                                    <ul class="nav nav-tabs  justify-content-center justify-content-xxl-end" id="myTab2" role="tablist">
                                        <li class="nav-item" role="presentation">
                                            <button class="nav-link active" id="newest-third-tab" data-bs-toggle="tab" data-bs-target="#newest-third-tab-pane" type="button" role="tab" aria-controls="newest-third-tab-pane" aria-selected="false">Fish & Seafood</button>
                                        </li>
                                        <li class="nav-item" role="presentation">
                                            <button class="nav-link" id="newest-fourth-tab" data-bs-toggle="tab" data-bs-target="#newest-fourth-tab-pane" type="button" role="tab" aria-controls="newest-fourth-tab-pane" aria-selected="false">Grocery Deals</button>
                                        </li>
                                        <li class="nav-item" role="presentation">
                                            <button class="nav-link" id="newest-fifth-tab" data-bs-toggle="tab" data-bs-target="#newest-fifth-tab-pane" type="button" role="tab" aria-controls="newest-fifth-tab-pane" aria-selected="false">Dairy</button>
                                        </li>
                                        <li class="nav-item" role="presentation">
                                            <button class="nav-link" id="newest-sixth-tab" data-bs-toggle="tab" data-bs-target="#newest-sixth-tab-pane" type="button" role="tab" aria-controls="newest-sixth-tab-pane" aria-selected="false">Produce</button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="product-tabs-container">
                        <div class="tab-content" id="myTabContent2">
                            <div class="tab-pane fade show active" id="newest-third-tab-pane" role="tabpanel" aria-labelledby="newest-third-tab" tabindex="0">
                                <div class="products-container">
                                    <div class="single-product-card rev-7-single-product">
                                        <img src="assets/images/products/product-11.jpg" alt="product image" class="rev-7-single-product__img">
                                        <div class="rev-7-single-product__txt">
                                            <div class="rev-7-single-product__info">
                                                <span class="product-category">Vegetables</span>
                                                <a href="#">large red apple</a>
                                                <p class="price">
                                                    $120.00 <span>-</span>
                                                    <span class="strike text-decoration-line-through">$160.00</span>
                                                </p>
                                            </div>

                                            <div class="rev-7-single-product__actions d-flex justify-content-between">
                                                <div class="product-count cart-product-count">
                                                    <div class="quantity rapper-quantity">
                                                        <input type="number" min="1" max="100" step="1" value="1" readonly="">
                                                        <div class="quantity-nav">
                                                            <div class="quantity-button quantity-down">
                                                                <i class="fa-solid fa-minus"></i>
                                                            </div>
                                                            <div class="quantity-button quantity-up">
                                                                <i class="fa-solid fa-plus"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <button class="add-to-cart-option"><i class="fa-light fa-cart-shopping"></i></button>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="single-product-card rev-7-single-product">
                                        <img src="assets/images/products/product-12.jpg" alt="product image" class="rev-7-single-product__img">
                                        <div class="rev-7-single-product__txt">
                                            <div class="rev-7-single-product__info">
                                                <span class="product-category">Vegetables</span>
                                                <a href="#">large red apple</a>
                                                <p class="price">
                                                    $120.00 <span>-</span>
                                                    <span class="strike text-decoration-line-through">$160.00</span>
                                                </p>
                                            </div>

                                            <div class="rev-7-single-product__actions d-flex justify-content-between">
                                                <div class="product-count cart-product-count">
                                                    <div class="quantity rapper-quantity">
                                                        <input type="number" min="1" max="100" step="1" value="1" readonly="">
                                                        <div class="quantity-nav">
                                                            <div class="quantity-button quantity-down">
                                                                <i class="fa-solid fa-minus"></i>
                                                            </div>
                                                            <div class="quantity-button quantity-up">
                                                                <i class="fa-solid fa-plus"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <button class="add-to-cart-option"><i class="fa-light fa-cart-shopping"></i></button>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="single-product-card rev-7-single-product">
                                        <img src="assets/images/products/product-13.jpg" alt="product image" class="rev-7-single-product__img">
                                        <div class="rev-7-single-product__txt">
                                            <div class="rev-7-single-product__info">
                                                <span class="product-category">Vegetables</span>
                                                <a href="#">large red apple</a>
                                                <p class="price">
                                                    $120.00 <span>-</span>
                                                    <span class="strike text-decoration-line-through">$160.00</span>
                                                </p>
                                            </div>

                                            <div class="rev-7-single-product__actions d-flex justify-content-between">
                                                <div class="product-count cart-product-count">
                                                    <div class="quantity rapper-quantity">
                                                        <input type="number" min="1" max="100" step="1" value="1" readonly="">
                                                        <div class="quantity-nav">
                                                            <div class="quantity-button quantity-down">
                                                                <i class="fa-solid fa-minus"></i>
                                                            </div>
                                                            <div class="quantity-button quantity-up">
                                                                <i class="fa-solid fa-plus"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <button class="add-to-cart-option"><i class="fa-light fa-cart-shopping"></i></button>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="single-product-card rev-7-single-product">
                                        <img src="assets/images/products/product-14.jpg" alt="product image" class="rev-7-single-product__img">
                                        <div class="rev-7-single-product__txt">
                                            <div class="rev-7-single-product__info">
                                                <span class="product-category">Vegetables</span>
                                                <a href="#">large red apple</a>
                                                <p class="price">
                                                    $120.00 <span>-</span>
                                                    <span class="strike text-decoration-line-through">$160.00</span>
                                                </p>
                                            </div>

                                            <div class="rev-7-single-product__actions d-flex justify-content-between">
                                                <div class="product-count cart-product-count">
                                                    <div class="quantity rapper-quantity">
                                                        <input type="number" min="1" max="100" step="1" value="1" readonly="">
                                                        <div class="quantity-nav">
                                                            <div class="quantity-button quantity-down">
                                                                <i class="fa-solid fa-minus"></i>
                                                            </div>
                                                            <div class="quantity-button quantity-up">
                                                                <i class="fa-solid fa-plus"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <button class="add-to-cart-option"><i class="fa-light fa-cart-shopping"></i></button>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="single-product-card rev-7-single-product">
                                        <img src="assets/images/products/product-15.jpg" alt="product image" class="rev-7-single-product__img">
                                        <div class="rev-7-single-product__txt">
                                            <div class="rev-7-single-product__info">
                                                <span class="product-category">Vegetables</span>
                                                <a href="#">large red apple</a>
                                                <p class="price">
                                                    $120.00 <span>-</span>
                                                    <span class="strike text-decoration-line-through">$160.00</span>
                                                </p>
                                            </div>

                                            <div class="rev-7-single-product__actions d-flex justify-content-between">
                                                <div class="product-count cart-product-count">
                                                    <div class="quantity rapper-quantity">
                                                        <input type="number" min="1" max="100" step="1" value="1" readonly="">
                                                        <div class="quantity-nav">
                                                            <div class="quantity-button quantity-down">
                                                                <i class="fa-solid fa-minus"></i>
                                                            </div>
                                                            <div class="quantity-button quantity-up">
                                                                <i class="fa-solid fa-plus"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <button class="add-to-cart-option"><i class="fa-light fa-cart-shopping"></i></button>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="single-product-card rev-7-single-product">
                                        <img src="assets/images/products/product-16.jpg" alt="product image" class="rev-7-single-product__img">
                                        <div class="rev-7-single-product__txt">
                                            <div class="rev-7-single-product__info">
                                                <span class="product-category">Vegetables</span>
                                                <a href="#">large red apple</a>
                                                <p class="price">
                                                    $120.00 <span>-</span>
                                                    <span class="strike text-decoration-line-through">$160.00</span>
                                                </p>
                                            </div>

                                            <div class="rev-7-single-product__actions d-flex justify-content-between">
                                                <div class="product-count cart-product-count">
                                                    <div class="quantity rapper-quantity">
                                                        <input type="number" min="1" max="100" step="1" value="1" readonly="">
                                                        <div class="quantity-nav">
                                                            <div class="quantity-button quantity-down">
                                                                <i class="fa-solid fa-minus"></i>
                                                            </div>
                                                            <div class="quantity-button quantity-up">
                                                                <i class="fa-solid fa-plus"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <button class="add-to-cart-option"><i class="fa-light fa-cart-shopping"></i></button>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="single-product-card rev-7-single-product">
                                        <img src="assets/images/products/product-17.jpg" alt="product image" class="rev-7-single-product__img">
                                        <div class="rev-7-single-product__txt">
                                            <div class="rev-7-single-product__info">
                                                <span class="product-category">Vegetables</span>
                                                <a href="#">large red apple</a>
                                                <p class="price">
                                                    $120.00 <span>-</span>
                                                    <span class="strike text-decoration-line-through">$160.00</span>
                                                </p>
                                            </div>

                                            <div class="rev-7-single-product__actions d-flex justify-content-between">
                                                <div class="product-count cart-product-count">
                                                    <div class="quantity rapper-quantity">
                                                        <input type="number" min="1" max="100" step="1" value="1" readonly="">
                                                        <div class="quantity-nav">
                                                            <div class="quantity-button quantity-down">
                                                                <i class="fa-solid fa-minus"></i>
                                                            </div>
                                                            <div class="quantity-button quantity-up">
                                                                <i class="fa-solid fa-plus"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <button class="add-to-cart-option"><i class="fa-light fa-cart-shopping"></i></button>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="single-product-card rev-7-single-product">
                                        <img src="assets/images/products/product-18.jpg" alt="product image" class="rev-7-single-product__img">
                                        <div class="rev-7-single-product__txt">
                                            <div class="rev-7-single-product__info">
                                                <span class="product-category">Vegetables</span>
                                                <a href="#">large red apple</a>
                                                <p class="price">
                                                    $120.00 <span>-</span>
                                                    <span class="strike text-decoration-line-through">$160.00</span>
                                                </p>
                                            </div>

                                            <div class="rev-7-single-product__actions d-flex justify-content-between">
                                                <div class="product-count cart-product-count">
                                                    <div class="quantity rapper-quantity">
                                                        <input type="number" min="1" max="100" step="1" value="1" readonly="">
                                                        <div class="quantity-nav">
                                                            <div class="quantity-button quantity-down">
                                                                <i class="fa-solid fa-minus"></i>
                                                            </div>
                                                            <div class="quantity-button quantity-up">
                                                                <i class="fa-solid fa-plus"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <button class="add-to-cart-option"><i class="fa-light fa-cart-shopping"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="tab-pane fade" id="newest-fourth-tab-pane" role="tabpanel" aria-labelledby="newest-fourth-tab" tabindex="0">
                                <div class="products-container">
                                    <div class="single-product-card rev-7-single-product">
                                        <img src="assets/images/products/product-11.jpg" alt="product image" class="rev-7-single-product__img">
                                        <div class="rev-7-single-product__txt">
                                            <div class="rev-7-single-product__info">
                                                <span class="product-category">Vegetables</span>
                                                <a href="#">large red apple</a>
                                                <p class="price">
                                                    $120.00 <span>-</span>
                                                    <span class="strike text-decoration-line-through">$160.00</span>
                                                </p>
                                            </div>

                                            <div class="rev-7-single-product__actions d-flex justify-content-between">
                                                <div class="product-count cart-product-count">
                                                    <div class="quantity rapper-quantity">
                                                        <input type="number" min="1" max="100" step="1" value="1" readonly="">
                                                        <div class="quantity-nav">
                                                            <div class="quantity-button quantity-down">
                                                                <i class="fa-solid fa-minus"></i>
                                                            </div>
                                                            <div class="quantity-button quantity-up">
                                                                <i class="fa-solid fa-plus"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <button class="add-to-cart-option"><i class="fa-light fa-cart-shopping"></i></button>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="single-product-card rev-7-single-product">
                                        <img src="assets/images/products/product-12.jpg" alt="product image" class="rev-7-single-product__img">
                                        <div class="rev-7-single-product__txt">
                                            <div class="rev-7-single-product__info">
                                                <span class="product-category">Vegetables</span>
                                                <a href="#">large red apple</a>
                                                <p class="price">
                                                    $120.00 <span>-</span>
                                                    <span class="strike text-decoration-line-through">$160.00</span>
                                                </p>
                                            </div>

                                            <div class="rev-7-single-product__actions d-flex justify-content-between">
                                                <div class="product-count cart-product-count">
                                                    <div class="quantity rapper-quantity">
                                                        <input type="number" min="1" max="100" step="1" value="1" readonly="">
                                                        <div class="quantity-nav">
                                                            <div class="quantity-button quantity-down">
                                                                <i class="fa-solid fa-minus"></i>
                                                            </div>
                                                            <div class="quantity-button quantity-up">
                                                                <i class="fa-solid fa-plus"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <button class="add-to-cart-option"><i class="fa-light fa-cart-shopping"></i></button>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="single-product-card rev-7-single-product">
                                        <img src="assets/images/products/product-13.jpg" alt="product image" class="rev-7-single-product__img">
                                        <div class="rev-7-single-product__txt">
                                            <div class="rev-7-single-product__info">
                                                <span class="product-category">Vegetables</span>
                                                <a href="#">large red apple</a>
                                                <p class="price">
                                                    $120.00 <span>-</span>
                                                    <span class="strike text-decoration-line-through">$160.00</span>
                                                </p>
                                            </div>

                                            <div class="rev-7-single-product__actions d-flex justify-content-between">
                                                <div class="product-count cart-product-count">
                                                    <div class="quantity rapper-quantity">
                                                        <input type="number" min="1" max="100" step="1" value="1" readonly="">
                                                        <div class="quantity-nav">
                                                            <div class="quantity-button quantity-down">
                                                                <i class="fa-solid fa-minus"></i>
                                                            </div>
                                                            <div class="quantity-button quantity-up">
                                                                <i class="fa-solid fa-plus"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <button class="add-to-cart-option"><i class="fa-light fa-cart-shopping"></i></button>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="single-product-card rev-7-single-product">
                                        <img src="assets/images/products/product-14.jpg" alt="product image" class="rev-7-single-product__img">
                                        <div class="rev-7-single-product__txt">
                                            <div class="rev-7-single-product__info">
                                                <span class="product-category">Vegetables</span>
                                                <a href="#">large red apple</a>
                                                <p class="price">
                                                    $120.00 <span>-</span>
                                                    <span class="strike text-decoration-line-through">$160.00</span>
                                                </p>
                                            </div>

                                            <div class="rev-7-single-product__actions d-flex justify-content-between">
                                                <div class="product-count cart-product-count">
                                                    <div class="quantity rapper-quantity">
                                                        <input type="number" min="1" max="100" step="1" value="1" readonly="">
                                                        <div class="quantity-nav">
                                                            <div class="quantity-button quantity-down">
                                                                <i class="fa-solid fa-minus"></i>
                                                            </div>
                                                            <div class="quantity-button quantity-up">
                                                                <i class="fa-solid fa-plus"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <button class="add-to-cart-option"><i class="fa-light fa-cart-shopping"></i></button>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="single-product-card rev-7-single-product">
                                        <img src="assets/images/products/product-15.jpg" alt="product image" class="rev-7-single-product__img">
                                        <div class="rev-7-single-product__txt">
                                            <div class="rev-7-single-product__info">
                                                <span class="product-category">Vegetables</span>
                                                <a href="#">large red apple</a>
                                                <p class="price">
                                                    $120.00 <span>-</span>
                                                    <span class="strike text-decoration-line-through">$160.00</span>
                                                </p>
                                            </div>

                                            <div class="rev-7-single-product__actions d-flex justify-content-between">
                                                <div class="product-count cart-product-count">
                                                    <div class="quantity rapper-quantity">
                                                        <input type="number" min="1" max="100" step="1" value="1" readonly="">
                                                        <div class="quantity-nav">
                                                            <div class="quantity-button quantity-down">
                                                                <i class="fa-solid fa-minus"></i>
                                                            </div>
                                                            <div class="quantity-button quantity-up">
                                                                <i class="fa-solid fa-plus"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <button class="add-to-cart-option"><i class="fa-light fa-cart-shopping"></i></button>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="single-product-card rev-7-single-product">
                                        <img src="assets/images/products/product-16.jpg" alt="product image" class="rev-7-single-product__img">
                                        <div class="rev-7-single-product__txt">
                                            <div class="rev-7-single-product__info">
                                                <span class="product-category">Vegetables</span>
                                                <a href="#">large red apple</a>
                                                <p class="price">
                                                    $120.00 <span>-</span>
                                                    <span class="strike text-decoration-line-through">$160.00</span>
                                                </p>
                                            </div>

                                            <div class="rev-7-single-product__actions d-flex justify-content-between">
                                                <div class="product-count cart-product-count">
                                                    <div class="quantity rapper-quantity">
                                                        <input type="number" min="1" max="100" step="1" value="1" readonly="">
                                                        <div class="quantity-nav">
                                                            <div class="quantity-button quantity-down">
                                                                <i class="fa-solid fa-minus"></i>
                                                            </div>
                                                            <div class="quantity-button quantity-up">
                                                                <i class="fa-solid fa-plus"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <button class="add-to-cart-option"><i class="fa-light fa-cart-shopping"></i></button>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="single-product-card rev-7-single-product">
                                        <img src="assets/images/products/product-17.jpg" alt="product image" class="rev-7-single-product__img">
                                        <div class="rev-7-single-product__txt">

                                            <div class="rev-7-single-product__info">
                                                <span class="product-category">Vegetables</span>
                                                <a href="#">large red apple</a>
                                                <p class="price">
                                                    $120.00 <span>-</span>
                                                    <span class="strike text-decoration-line-through">$160.00</span>
                                                </p>
                                            </div>

                                            <div class="rev-7-single-product__actions d-flex justify-content-between">
                                                <div class="product-count cart-product-count">
                                                    <div class="quantity rapper-quantity">
                                                        <input type="number" min="1" max="100" step="1" value="1" readonly="">
                                                        <div class="quantity-nav">
                                                            <div class="quantity-button quantity-down">
                                                                <i class="fa-solid fa-minus"></i>
                                                            </div>
                                                            <div class="quantity-button quantity-up">
                                                                <i class="fa-solid fa-plus"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <button class="add-to-cart-option"><i class="fa-light fa-cart-shopping"></i></button>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="single-product-card rev-7-single-product">
                                        <img src="assets/images/products/product-18.jpg" alt="product image" class="rev-7-single-product__img">
                                        <div class="rev-7-single-product__txt">
                                            <div class="rev-7-single-product__info">
                                                <span class="product-category">Vegetables</span>
                                                <a href="#">large red apple</a>
                                                <p class="price">
                                                    $120.00 <span>-</span>
                                                    <span class="strike text-decoration-line-through">$160.00</span>
                                                </p>
                                            </div>

                                            <div class="rev-7-single-product__actions d-flex justify-content-between">
                                                <div class="product-count cart-product-count">
                                                    <div class="quantity rapper-quantity">
                                                        <input type="number" min="1" max="100" step="1" value="1" readonly="">
                                                        <div class="quantity-nav">
                                                            <div class="quantity-button quantity-down">
                                                                <i class="fa-solid fa-minus"></i>
                                                            </div>
                                                            <div class="quantity-button quantity-up">
                                                                <i class="fa-solid fa-plus"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <button class="add-to-cart-option"><i class="fa-light fa-cart-shopping"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="tab-pane fade" id="newest-fifth-tab-pane" role="tabpanel" aria-labelledby="newest-fifth-tab" tabindex="0">
                                <div class="products-container">
                                    <div class="single-product-card rev-7-single-product">
                                        <img src="assets/images/products/product-11.jpg" alt="product image" class="rev-7-single-product__img">
                                        <div class="rev-7-single-product__txt">
                                            <div class="rev-7-single-product__info">
                                                <span class="product-category">Vegetables</span>
                                                <a href="#">large red apple</a>
                                                <p class="price">
                                                    $120.00 <span>-</span>
                                                    <span class="strike text-decoration-line-through">$160.00</span>
                                                </p>
                                            </div>

                                            <div class="rev-7-single-product__actions d-flex justify-content-between">
                                                <div class="product-count cart-product-count">
                                                    <div class="quantity rapper-quantity">
                                                        <input type="number" min="1" max="100" step="1" value="1" readonly="">
                                                        <div class="quantity-nav">
                                                            <div class="quantity-button quantity-down">
                                                                <i class="fa-solid fa-minus"></i>
                                                            </div>
                                                            <div class="quantity-button quantity-up">
                                                                <i class="fa-solid fa-plus"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <button class="add-to-cart-option"><i class="fa-light fa-cart-shopping"></i></button>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="single-product-card rev-7-single-product">
                                        <img src="assets/images/products/product-12.jpg" alt="product image" class="rev-7-single-product__img">
                                        <div class="rev-7-single-product__txt">
                                            <div class="rev-7-single-product__info">
                                                <span class="product-category">Vegetables</span>
                                                <a href="#">large red apple</a>
                                                <p class="price">
                                                    $120.00 <span>-</span>
                                                    <span class="strike text-decoration-line-through">$160.00</span>
                                                </p>
                                            </div>

                                            <div class="rev-7-single-product__actions d-flex justify-content-between">
                                                <div class="product-count cart-product-count">
                                                    <div class="quantity rapper-quantity">
                                                        <input type="number" min="1" max="100" step="1" value="1" readonly="">
                                                        <div class="quantity-nav">
                                                            <div class="quantity-button quantity-down">
                                                                <i class="fa-solid fa-minus"></i>
                                                            </div>
                                                            <div class="quantity-button quantity-up">
                                                                <i class="fa-solid fa-plus"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <button class="add-to-cart-option"><i class="fa-light fa-cart-shopping"></i></button>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="single-product-card rev-7-single-product">
                                        <img src="assets/images/products/product-13.jpg" alt="product image" class="rev-7-single-product__img">
                                        <div class="rev-7-single-product__txt">
                                            <div class="rev-7-single-product__info">
                                                <span class="product-category">Vegetables</span>
                                                <a href="#">large red apple</a>
                                                <p class="price">
                                                    $120.00 <span>-</span>
                                                    <span class="strike text-decoration-line-through">$160.00</span>
                                                </p>
                                            </div>

                                            <div class="rev-7-single-product__actions d-flex justify-content-between">
                                                <div class="product-count cart-product-count">
                                                    <div class="quantity rapper-quantity">
                                                        <input type="number" min="1" max="100" step="1" value="1" readonly="">
                                                        <div class="quantity-nav">
                                                            <div class="quantity-button quantity-down">
                                                                <i class="fa-solid fa-minus"></i>
                                                            </div>
                                                            <div class="quantity-button quantity-up">
                                                                <i class="fa-solid fa-plus"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <button class="add-to-cart-option"><i class="fa-light fa-cart-shopping"></i></button>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="single-product-card rev-7-single-product">
                                        <img src="assets/images/products/product-14.jpg" alt="product image" class="rev-7-single-product__img">
                                        <div class="rev-7-single-product__txt">
                                            <div class="rev-7-single-product__info">
                                                <span class="product-category">Vegetables</span>
                                                <a href="#">large red apple</a>
                                                <p class="price">
                                                    $120.00 <span>-</span>
                                                    <span class="strike text-decoration-line-through">$160.00</span>
                                                </p>
                                            </div>

                                            <div class="rev-7-single-product__actions d-flex justify-content-between">
                                                <div class="product-count cart-product-count">
                                                    <div class="quantity rapper-quantity">
                                                        <input type="number" min="1" max="100" step="1" value="1" readonly="">
                                                        <div class="quantity-nav">
                                                            <div class="quantity-button quantity-down">
                                                                <i class="fa-solid fa-minus"></i>
                                                            </div>
                                                            <div class="quantity-button quantity-up">
                                                                <i class="fa-solid fa-plus"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <button class="add-to-cart-option"><i class="fa-light fa-cart-shopping"></i></button>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="single-product-card rev-7-single-product">
                                        <img src="assets/images/products/product-15.jpg" alt="product image" class="rev-7-single-product__img">
                                        <div class="rev-7-single-product__txt">
                                            <div class="rev-7-single-product__info">
                                                <span class="product-category">Vegetables</span>
                                                <a href="#">large red apple</a>
                                                <p class="price">
                                                    $120.00 <span>-</span>
                                                    <span class="strike text-decoration-line-through">$160.00</span>
                                                </p>
                                            </div>

                                            <div class="rev-7-single-product__actions d-flex justify-content-between">
                                                <div class="product-count cart-product-count">
                                                    <div class="quantity rapper-quantity">
                                                        <input type="number" min="1" max="100" step="1" value="1" readonly="">
                                                        <div class="quantity-nav">
                                                            <div class="quantity-button quantity-down">
                                                                <i class="fa-solid fa-minus"></i>
                                                            </div>
                                                            <div class="quantity-button quantity-up">
                                                                <i class="fa-solid fa-plus"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <button class="add-to-cart-option"><i class="fa-light fa-cart-shopping"></i></button>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="single-product-card rev-7-single-product">
                                        <img src="assets/images/products/product-16.jpg" alt="product image" class="rev-7-single-product__img">
                                        <div class="rev-7-single-product__txt">
                                            <div class="rev-7-single-product__info">
                                                <span class="product-category">Vegetables</span>
                                                <a href="#">large red apple</a>
                                                <p class="price">
                                                    $120.00 <span>-</span>
                                                    <span class="strike text-decoration-line-through">$160.00</span>
                                                </p>
                                            </div>

                                            <div class="rev-7-single-product__actions d-flex justify-content-between">
                                                <div class="product-count cart-product-count">
                                                    <div class="quantity rapper-quantity">
                                                        <input type="number" min="1" max="100" step="1" value="1" readonly="">
                                                        <div class="quantity-nav">
                                                            <div class="quantity-button quantity-down">
                                                                <i class="fa-solid fa-minus"></i>
                                                            </div>
                                                            <div class="quantity-button quantity-up">
                                                                <i class="fa-solid fa-plus"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <button class="add-to-cart-option"><i class="fa-light fa-cart-shopping"></i></button>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="single-product-card rev-7-single-product">
                                        <img src="assets/images/products/product-17.jpg" alt="product image" class="rev-7-single-product__img">
                                        <div class="rev-7-single-product__txt">
                                            <div class="rev-7-single-product__info">
                                                <span class="product-category">Vegetables</span>
                                                <a href="#">large red apple</a>
                                                <p class="price">
                                                    $120.00 <span>-</span>
                                                    <span class="strike text-decoration-line-through">$160.00</span>
                                                </p>
                                            </div>

                                            <div class="rev-7-single-product__actions d-flex justify-content-between">
                                                <div class="product-count cart-product-count">
                                                    <div class="quantity rapper-quantity">
                                                        <input type="number" min="1" max="100" step="1" value="1" readonly="">
                                                        <div class="quantity-nav">
                                                            <div class="quantity-button quantity-down">
                                                                <i class="fa-solid fa-minus"></i>
                                                            </div>
                                                            <div class="quantity-button quantity-up">
                                                                <i class="fa-solid fa-plus"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <button class="add-to-cart-option"><i class="fa-light fa-cart-shopping"></i></button>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="single-product-card rev-7-single-product">
                                        <img src="assets/images/products/product-18.jpg" alt="product image" class="rev-7-single-product__img">
                                        <div class="rev-7-single-product__txt">
                                            <div class="rev-7-single-product__info">
                                                <span class="product-category">Vegetables</span>
                                                <a href="#">large red apple</a>
                                                <p class="price">
                                                    $120.00 <span>-</span>
                                                    <span class="strike text-decoration-line-through">$160.00</span>
                                                </p>
                                            </div>

                                            <div class="rev-7-single-product__actions d-flex justify-content-between">
                                                <div class="product-count cart-product-count">
                                                    <div class="quantity rapper-quantity">
                                                        <input type="number" min="1" max="100" step="1" value="1" readonly="">
                                                        <div class="quantity-nav">
                                                            <div class="quantity-button quantity-down">
                                                                <i class="fa-solid fa-minus"></i>
                                                            </div>
                                                            <div class="quantity-button quantity-up">
                                                                <i class="fa-solid fa-plus"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <button class="add-to-cart-option"><i class="fa-light fa-cart-shopping"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="tab-pane fade" id="newest-sixth-tab-pane" role="tabpanel" aria-labelledby="newest-sixth-tab" tabindex="0">
                                <div class="products-container">
                                    <div class="single-product-card rev-7-single-product">
                                        <img src="assets/images/products/product-11.jpg" alt="product image" class="rev-7-single-product__img">
                                        <div class="rev-7-single-product__txt">
                                            <div class="rev-7-single-product__info">
                                                <span class="product-category">Vegetables</span>
                                                <a href="#">large red apple</a>
                                                <p class="price">
                                                    $120.00 <span>-</span>
                                                    <span class="strike text-decoration-line-through">$160.00</span>
                                                </p>
                                            </div>

                                            <div class="rev-7-single-product__actions d-flex justify-content-between">
                                                <div class="product-count cart-product-count">
                                                    <div class="quantity rapper-quantity">
                                                        <input type="number" min="1" max="100" step="1" value="1" readonly="">
                                                        <div class="quantity-nav">
                                                            <div class="quantity-button quantity-down">
                                                                <i class="fa-solid fa-minus"></i>
                                                            </div>
                                                            <div class="quantity-button quantity-up">
                                                                <i class="fa-solid fa-plus"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <button class="add-to-cart-option"><i class="fa-light fa-cart-shopping"></i></button>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="single-product-card rev-7-single-product">
                                        <img src="assets/images/products/product-12.jpg" alt="product image" class="rev-7-single-product__img">
                                        <div class="rev-7-single-product__txt">
                                            <div class="rev-7-single-product__info">
                                                <span class="product-category">Vegetables</span>
                                                <a href="#">large red apple</a>
                                                <p class="price">
                                                    $120.00 <span>-</span>
                                                    <span class="strike text-decoration-line-through">$160.00</span>
                                                </p>
                                            </div>

                                            <div class="rev-7-single-product__actions d-flex justify-content-between">
                                                <div class="product-count cart-product-count">
                                                    <div class="quantity rapper-quantity">
                                                        <input type="number" min="1" max="100" step="1" value="1" readonly="">
                                                        <div class="quantity-nav">
                                                            <div class="quantity-button quantity-down">
                                                                <i class="fa-solid fa-minus"></i>
                                                            </div>
                                                            <div class="quantity-button quantity-up">
                                                                <i class="fa-solid fa-plus"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <button class="add-to-cart-option"><i class="fa-light fa-cart-shopping"></i></button>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="single-product-card rev-7-single-product">
                                        <img src="assets/images/products/product-13.jpg" alt="product image" class="rev-7-single-product__img">
                                        <div class="rev-7-single-product__txt">
                                            <div class="rev-7-single-product__info">
                                                <span class="product-category">Vegetables</span>
                                                <a href="#">large red apple</a>
                                                <p class="price">
                                                    $120.00 <span>-</span>
                                                    <span class="strike text-decoration-line-through">$160.00</span>
                                                </p>
                                            </div>

                                            <div class="rev-7-single-product__actions d-flex justify-content-between">
                                                <div class="product-count cart-product-count">
                                                    <div class="quantity rapper-quantity">
                                                        <input type="number" min="1" max="100" step="1" value="1" readonly="">
                                                        <div class="quantity-nav">
                                                            <div class="quantity-button quantity-down">
                                                                <i class="fa-solid fa-minus"></i>
                                                            </div>
                                                            <div class="quantity-button quantity-up">
                                                                <i class="fa-solid fa-plus"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <button class="add-to-cart-option"><i class="fa-light fa-cart-shopping"></i></button>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="single-product-card rev-7-single-product">
                                        <img src="assets/images/products/product-14.jpg" alt="product image" class="rev-7-single-product__img">
                                        <div class="rev-7-single-product__txt">
                                            <div class="rev-7-single-product__info">
                                                <span class="product-category">Vegetables</span>
                                                <a href="#">large red apple</a>
                                                <p class="price">
                                                    $120.00 <span>-</span>
                                                    <span class="strike text-decoration-line-through">$160.00</span>
                                                </p>
                                            </div>

                                            <div class="rev-7-single-product__actions d-flex justify-content-between">
                                                <div class="product-count cart-product-count">
                                                    <div class="quantity rapper-quantity">
                                                        <input type="number" min="1" max="100" step="1" value="1" readonly="">
                                                        <div class="quantity-nav">
                                                            <div class="quantity-button quantity-down">
                                                                <i class="fa-solid fa-minus"></i>
                                                            </div>
                                                            <div class="quantity-button quantity-up">
                                                                <i class="fa-solid fa-plus"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <button class="add-to-cart-option"><i class="fa-light fa-cart-shopping"></i></button>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="single-product-card rev-7-single-product">
                                        <img src="assets/images/products/product-15.jpg" alt="product image" class="rev-7-single-product__img">
                                        <div class="rev-7-single-product__txt">
                                            <div class="rev-7-single-product__info">
                                                <span class="product-category">Vegetables</span>
                                                <a href="#">large red apple</a>
                                                <p class="price">
                                                    $120.00 <span>-</span>
                                                    <span class="strike text-decoration-line-through">$160.00</span>
                                                </p>
                                            </div>

                                            <div class="rev-7-single-product__actions d-flex justify-content-between">
                                                <div class="product-count cart-product-count">
                                                    <div class="quantity rapper-quantity">
                                                        <input type="number" min="1" max="100" step="1" value="1" readonly="">
                                                        <div class="quantity-nav">
                                                            <div class="quantity-button quantity-down">
                                                                <i class="fa-solid fa-minus"></i>
                                                            </div>
                                                            <div class="quantity-button quantity-up">
                                                                <i class="fa-solid fa-plus"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <button class="add-to-cart-option"><i class="fa-light fa-cart-shopping"></i></button>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="single-product-card rev-7-single-product">
                                        <img src="assets/images/products/product-16.jpg" alt="product image" class="rev-7-single-product__img">
                                        <div class="rev-7-single-product__txt">

                                            <div class="rev-7-single-product__info">
                                                <span class="product-category">Vegetables</span>
                                                <a href="#">large red apple</a>
                                                <p class="price">
                                                    $120.00 <span>-</span>
                                                    <span class="strike text-decoration-line-through">$160.00</span>
                                                </p>
                                            </div>

                                            <div class="rev-7-single-product__actions d-flex justify-content-between">
                                                <div class="product-count cart-product-count">
                                                    <div class="quantity rapper-quantity">
                                                        <input type="number" min="1" max="100" step="1" value="1" readonly="">
                                                        <div class="quantity-nav">
                                                            <div class="quantity-button quantity-down">
                                                                <i class="fa-solid fa-minus"></i>
                                                            </div>
                                                            <div class="quantity-button quantity-up">
                                                                <i class="fa-solid fa-plus"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <button class="add-to-cart-option"><i class="fa-light fa-cart-shopping"></i></button>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="single-product-card rev-7-single-product">
                                        <img src="assets/images/products/product-17.jpg" alt="product image" class="rev-7-single-product__img">
                                        <div class="rev-7-single-product__txt">
                                            <div class="rev-7-single-product__info">
                                                <span class="product-category">Vegetables</span>
                                                <a href="#">large red apple</a>
                                                <p class="price">
                                                    $120.00 <span>-</span>
                                                    <span class="strike text-decoration-line-through">$160.00</span>
                                                </p>
                                            </div>

                                            <div class="rev-7-single-product__actions d-flex justify-content-between">
                                                <div class="product-count cart-product-count">
                                                    <div class="quantity rapper-quantity">
                                                        <input type="number" min="1" max="100" step="1" value="1" readonly="">
                                                        <div class="quantity-nav">
                                                            <div class="quantity-button quantity-down">
                                                                <i class="fa-solid fa-minus"></i>
                                                            </div>
                                                            <div class="quantity-button quantity-up">
                                                                <i class="fa-solid fa-plus"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <button class="add-to-cart-option"><i class="fa-light fa-cart-shopping"></i></button>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="single-product-card rev-7-single-product">
                                        <img src="assets/images/products/product-18.jpg" alt="product image" class="rev-7-single-product__img">
                                        <div class="rev-7-single-product__txt">
                                            <div class="rev-7-single-product__info">
                                                <span class="product-category">Vegetables</span>
                                                <a href="#">large red apple</a>
                                                <p class="price">
                                                    $120.00 <span>-</span>
                                                    <span class="strike text-decoration-line-through">$160.00</span>
                                                </p>
                                            </div>

                                            <div class="rev-7-single-product__actions d-flex justify-content-between">
                                                <div class="product-count cart-product-count">
                                                    <div class="quantity rapper-quantity">
                                                        <input type="number" min="1" max="100" step="1" value="1" readonly="">
                                                        <div class="quantity-nav">
                                                            <div class="quantity-button quantity-down">
                                                                <i class="fa-solid fa-minus"></i>
                                                            </div>
                                                            <div class="quantity-button quantity-up">
                                                                <i class="fa-solid fa-plus"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <button class="add-to-cart-option"><i class="fa-light fa-cart-shopping"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section> */}
        {/*------------------------------- FLASH SALE & NEWEST-PRODUCTS SECTION ENDS HERE -------------------------------*/}
        {/*------------------------------- BEST SELLING SECTION STARTS HERE -------------------------------*/}
        {/* <section class="rev-7-best-selling">
        <div class="container">
            <div class="section-heading rev-7-section-heading">
                <div class="row">
                    <div class="col-xxl-6">
                        <h2 class="section-title">top best selling Products</h2>
                    </div>
                    <div class="col-xxl-6">
                        <div class="top-product-tab-navs">
                            <ul class="nav nav-tabs  justify-content-center justify-content-xxl-end" id="myTab3" role="tablist">
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link active" id="best-selling-first-tab" data-bs-toggle="tab" data-bs-target="#best-selling-first-tab-pane" type="button" role="tab" aria-controls="best-selling-first-tab-pane" aria-selected="false">Fish & Seafood</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="best-selling-second-tab" data-bs-toggle="tab" data-bs-target="#best-selling-second-tab-pane" type="button" role="tab" aria-controls="best-selling-second-tab-pane" aria-selected="false">Grocery Deals</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="best-selling-third-tab" data-bs-toggle="tab" data-bs-target="#best-selling-third-tab-pane" type="button" role="tab" aria-controls="best-selling-third-tab-pane" aria-selected="false">Dairy</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="best-selling-fourth-tab" data-bs-toggle="tab" data-bs-target="#best-selling-fourth-tab-pane" type="button" role="tab" aria-controls="best-selling-fourth-tab-pane" aria-selected="false">Produce</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>


            <div class="row">
                <div class="col-xl-9 col-lg-8">
                    <div class="product-tabs-container">
                        <div class="tab-content" id="myTabContent3">
                            <div class="tab-pane fade show active" id="best-selling-first-tab-pane" role="tabpanel" aria-labelledby="best-selling-first-tab" tabindex="0">
                                <div class="products-container">
                                    <div class="single-product-card rev-7-single-product">
                                        <img src="assets/images/products/product-11.jpg" alt="product image" class="rev-7-single-product__img">
                                        <div class="rev-7-single-product__txt">
                                            <div class="rev-7-single-product__info">
                                                <a href="#">large red apple</a>
                                                <p class="price">
                                                    $120.00 <span>-</span>
                                                    <span class="strike text-decoration-line-through">$160.00</span>
                                                </p>
                                                <div class="star">
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="single-product-card rev-7-single-product">
                                        <img src="assets/images/products/product-12.jpg" alt="product image" class="rev-7-single-product__img">
                                        <div class="rev-7-single-product__txt">
                                            <div class="rev-7-single-product__info">
                                                <a href="#">large red apple</a>
                                                <p class="price">
                                                    $120.00 <span>-</span>
                                                    <span class="strike text-decoration-line-through">$160.00</span>
                                                </p>
                                                <div class="star">
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="single-product-card rev-7-single-product">
                                        <img src="assets/images/products/product-13.jpg" alt="product image" class="rev-7-single-product__img">
                                        <div class="rev-7-single-product__txt">
                                            <div class="rev-7-single-product__info">
                                                <a href="#">large red apple</a>
                                                <p class="price">
                                                    $120.00 <span>-</span>
                                                    <span class="strike text-decoration-line-through">$160.00</span>
                                                </p>
                                                <div class="star">
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="single-product-card rev-7-single-product">
                                        <img src="assets/images/products/product-14.jpg" alt="product image" class="rev-7-single-product__img">
                                        <div class="rev-7-single-product__txt">
                                            <div class="rev-7-single-product__info">
                                                <a href="#">large red apple</a>
                                                <p class="price">
                                                    $120.00 <span>-</span>
                                                    <span class="strike text-decoration-line-through">$160.00</span>
                                                </p>
                                                <div class="star">
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="single-product-card rev-7-single-product">
                                        <img src="assets/images/products/product-15.jpg" alt="product image" class="rev-7-single-product__img">
                                        <div class="rev-7-single-product__txt">
                                            <div class="rev-7-single-product__info">
                                                <a href="#">large red apple</a>
                                                <p class="price">
                                                    $120.00 <span>-</span>
                                                    <span class="strike text-decoration-line-through">$160.00</span>
                                                </p>
                                                <div class="star">
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="single-product-card rev-7-single-product">
                                        <img src="assets/images/products/product-16.jpg" alt="product image" class="rev-7-single-product__img">
                                        <div class="rev-7-single-product__txt">
                                            <div class="rev-7-single-product__info">
                                                <a href="#">large red apple</a>
                                                <p class="price">
                                                    $120.00 <span>-</span>
                                                    <span class="strike text-decoration-line-through">$160.00</span>
                                                </p>
                                                <div class="star">
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="single-product-card rev-7-single-product">
                                        <img src="assets/images/products/product-17.jpg" alt="product image" class="rev-7-single-product__img">
                                        <div class="rev-7-single-product__txt">
                                            <div class="rev-7-single-product__info">
                                                <a href="#">large red apple</a>
                                                <p class="price">
                                                    $120.00 <span>-</span>
                                                    <span class="strike text-decoration-line-through">$160.00</span>
                                                </p>
                                                <div class="star">
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="single-product-card rev-7-single-product">
                                        <img src="assets/images/products/product-18.jpg" alt="product image" class="rev-7-single-product__img">
                                        <div class="rev-7-single-product__txt">
                                            <div class="rev-7-single-product__info">
                                                <a href="#">large red apple</a>
                                                <p class="price">
                                                    $120.00 <span>-</span>
                                                    <span class="strike text-decoration-line-through">$160.00</span>
                                                </p>
                                                <div class="star">
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="single-product-card rev-7-single-product">
                                        <img src="assets/images/products/product-19.jpg" alt="product image" class="rev-7-single-product__img">
                                        <div class="rev-7-single-product__txt">
                                            <div class="rev-7-single-product__info">
                                                <a href="#">large red apple</a>
                                                <p class="price">
                                                    $120.00 <span>-</span>
                                                    <span class="strike text-decoration-line-through">$160.00</span>
                                                </p>
                                                <div class="star">
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="tab-pane fade" id="best-selling-second-tab-pane" role="tabpanel" aria-labelledby="best-selling-second-tab" tabindex="0">
                                <div class="products-container">
                                    <div class="single-product-card rev-7-single-product">
                                        <img src="assets/images/products/product-11.jpg" alt="product image" class="rev-7-single-product__img">
                                        <div class="rev-7-single-product__txt">
                                            <div class="rev-7-single-product__info">
                                                <a href="#">large red apple</a>
                                                <p class="price">
                                                    $120.00 <span>-</span>
                                                    <span class="strike text-decoration-line-through">$160.00</span>
                                                </p>
                                                <div class="star">
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="single-product-card rev-7-single-product">
                                        <img src="assets/images/products/product-12.jpg" alt="product image" class="rev-7-single-product__img">
                                        <div class="rev-7-single-product__txt">
                                            <div class="rev-7-single-product__info">
                                                <a href="#">large red apple</a>
                                                <p class="price">
                                                    $120.00 <span>-</span>
                                                    <span class="strike text-decoration-line-through">$160.00</span>
                                                </p>
                                                <div class="star">
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="single-product-card rev-7-single-product">
                                        <img src="assets/images/products/product-13.jpg" alt="product image" class="rev-7-single-product__img">
                                        <div class="rev-7-single-product__txt">
                                            <div class="rev-7-single-product__info">
                                                <a href="#">large red apple</a>
                                                <p class="price">
                                                    $120.00 <span>-</span>
                                                    <span class="strike text-decoration-line-through">$160.00</span>
                                                </p>
                                                <div class="star">
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="single-product-card rev-7-single-product">
                                        <img src="assets/images/products/product-14.jpg" alt="product image" class="rev-7-single-product__img">
                                        <div class="rev-7-single-product__txt">
                                            <div class="rev-7-single-product__info">
                                                <a href="#">large red apple</a>
                                                <p class="price">
                                                    $120.00 <span>-</span>
                                                    <span class="strike text-decoration-line-through">$160.00</span>
                                                </p>
                                                <div class="star">
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="single-product-card rev-7-single-product">
                                        <img src="assets/images/products/product-15.jpg" alt="product image" class="rev-7-single-product__img">
                                        <div class="rev-7-single-product__txt">
                                            <div class="rev-7-single-product__info">
                                                <a href="#">large red apple</a>
                                                <p class="price">
                                                    $120.00 <span>-</span>
                                                    <span class="strike text-decoration-line-through">$160.00</span>
                                                </p>
                                                <div class="star">
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="single-product-card rev-7-single-product">
                                        <img src="assets/images/products/product-16.jpg" alt="product image" class="rev-7-single-product__img">
                                        <div class="rev-7-single-product__txt">
                                            <div class="rev-7-single-product__info">
                                                <a href="#">large red apple</a>
                                                <p class="price">
                                                    $120.00 <span>-</span>
                                                    <span class="strike text-decoration-line-through">$160.00</span>
                                                </p>
                                                <div class="star">
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="single-product-card rev-7-single-product">
                                        <img src="assets/images/products/product-17.jpg" alt="product image" class="rev-7-single-product__img">
                                        <div class="rev-7-single-product__txt">
                                            <div class="rev-7-single-product__info">
                                                <a href="#">large red apple</a>
                                                <p class="price">
                                                    $120.00 <span>-</span>
                                                    <span class="strike text-decoration-line-through">$160.00</span>
                                                </p>
                                                <div class="star">
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="single-product-card rev-7-single-product">
                                        <img src="assets/images/products/product-18.jpg" alt="product image" class="rev-7-single-product__img">
                                        <div class="rev-7-single-product__txt">
                                            <div class="rev-7-single-product__info">
                                                <a href="#">large red apple</a>
                                                <p class="price">
                                                    $120.00 <span>-</span>
                                                    <span class="strike text-decoration-line-through">$160.00</span>
                                                </p>
                                                <div class="star">
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="single-product-card rev-7-single-product">
                                        <img src="assets/images/products/product-19.jpg" alt="product image" class="rev-7-single-product__img">
                                        <div class="rev-7-single-product__txt">
                                            <div class="rev-7-single-product__info">
                                                <a href="#">large red apple</a>
                                                <p class="price">
                                                    $120.00 <span>-</span>
                                                    <span class="strike text-decoration-line-through">$160.00</span>
                                                </p>
                                                <div class="star">
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="tab-pane fade" id="best-selling-third-tab-pane" role="tabpanel" aria-labelledby="best-selling-third-tab" tabindex="0">
                                <div class="products-container">
                                    <div class="single-product-card rev-7-single-product">
                                        <img src="assets/images/products/product-11.jpg" alt="product image" class="rev-7-single-product__img">
                                        <div class="rev-7-single-product__txt">
                                            <div class="rev-7-single-product__info">
                                                <a href="#">large red apple</a>
                                                <p class="price">
                                                    $120.00 <span>-</span>
                                                    <span class="strike text-decoration-line-through">$160.00</span>
                                                </p>
                                                <div class="star">
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="single-product-card rev-7-single-product">
                                        <img src="assets/images/products/product-12.jpg" alt="product image" class="rev-7-single-product__img">
                                        <div class="rev-7-single-product__txt">
                                            <div class="rev-7-single-product__info">
                                                <a href="#">large red apple</a>
                                                <p class="price">
                                                    $120.00 <span>-</span>
                                                    <span class="strike text-decoration-line-through">$160.00</span>
                                                </p>
                                                <div class="star">
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="single-product-card rev-7-single-product">
                                        <img src="assets/images/products/product-13.jpg" alt="product image" class="rev-7-single-product__img">
                                        <div class="rev-7-single-product__txt">
                                            <div class="rev-7-single-product__info">
                                                <a href="#">large red apple</a>
                                                <p class="price">
                                                    $120.00 <span>-</span>
                                                    <span class="strike text-decoration-line-through">$160.00</span>
                                                </p>
                                                <div class="star">
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="single-product-card rev-7-single-product">
                                        <img src="assets/images/products/product-14.jpg" alt="product image" class="rev-7-single-product__img">
                                        <div class="rev-7-single-product__txt">
                                            <div class="rev-7-single-product__info">
                                                <a href="#">large red apple</a>
                                                <p class="price">
                                                    $120.00 <span>-</span>
                                                    <span class="strike text-decoration-line-through">$160.00</span>
                                                </p>
                                                <div class="star">
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="single-product-card rev-7-single-product">
                                        <img src="assets/images/products/product-15.jpg" alt="product image" class="rev-7-single-product__img">
                                        <div class="rev-7-single-product__txt">
                                            <div class="rev-7-single-product__info">
                                                <a href="#">large red apple</a>
                                                <p class="price">
                                                    $120.00 <span>-</span>
                                                    <span class="strike text-decoration-line-through">$160.00</span>
                                                </p>
                                                <div class="star">
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="single-product-card rev-7-single-product">
                                        <img src="assets/images/products/product-16.jpg" alt="product image" class="rev-7-single-product__img">
                                        <div class="rev-7-single-product__txt">
                                            <div class="rev-7-single-product__info">
                                                <a href="#">large red apple</a>
                                                <p class="price">
                                                    $120.00 <span>-</span>
                                                    <span class="strike text-decoration-line-through">$160.00</span>
                                                </p>
                                                <div class="star">
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="single-product-card rev-7-single-product">
                                        <img src="assets/images/products/product-17.jpg" alt="product image" class="rev-7-single-product__img">
                                        <div class="rev-7-single-product__txt">
                                            <div class="rev-7-single-product__info">
                                                <a href="#">large red apple</a>
                                                <p class="price">
                                                    $120.00 <span>-</span>
                                                    <span class="strike text-decoration-line-through">$160.00</span>
                                                </p>
                                                <div class="star">
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="single-product-card rev-7-single-product">
                                        <img src="assets/images/products/product-18.jpg" alt="product image" class="rev-7-single-product__img">
                                        <div class="rev-7-single-product__txt">
                                            <div class="rev-7-single-product__info">
                                                <a href="#">large red apple</a>
                                                <p class="price">
                                                    $120.00 <span>-</span>
                                                    <span class="strike text-decoration-line-through">$160.00</span>
                                                </p>
                                                <div class="star">
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="single-product-card rev-7-single-product">
                                        <img src="assets/images/products/product-19.jpg" alt="product image" class="rev-7-single-product__img">
                                        <div class="rev-7-single-product__txt">
                                            <div class="rev-7-single-product__info">
                                                <a href="#">large red apple</a>
                                                <p class="price">
                                                    $120.00 <span>-</span>
                                                    <span class="strike text-decoration-line-through">$160.00</span>
                                                </p>
                                                <div class="star">
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="tab-pane fade" id="best-selling-fourth-tab-pane" role="tabpanel" aria-labelledby="best-selling-fourth-tab" tabindex="0">
                                <div class="products-container">
                                    <div class="single-product-card rev-7-single-product">
                                        <img src="assets/images/products/product-11.jpg" alt="product image" class="rev-7-single-product__img">
                                        <div class="rev-7-single-product__txt">
                                            <div class="rev-7-single-product__info">
                                                <a href="#">large red apple</a>
                                                <p class="price">
                                                    $120.00 <span>-</span>
                                                    <span class="strike text-decoration-line-through">$160.00</span>
                                                </p>
                                                <div class="star">
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="single-product-card rev-7-single-product">
                                        <img src="assets/images/products/product-12.jpg" alt="product image" class="rev-7-single-product__img">
                                        <div class="rev-7-single-product__txt">
                                            <div class="rev-7-single-product__info">
                                                <a href="#">large red apple</a>
                                                <p class="price">
                                                    $120.00 <span>-</span>
                                                    <span class="strike text-decoration-line-through">$160.00</span>
                                                </p>
                                                <div class="star">
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="single-product-card rev-7-single-product">
                                        <img src="assets/images/products/product-13.jpg" alt="product image" class="rev-7-single-product__img">
                                        <div class="rev-7-single-product__txt">
                                            <div class="rev-7-single-product__info">
                                                <a href="#">large red apple</a>
                                                <p class="price">
                                                    $120.00 <span>-</span>
                                                    <span class="strike text-decoration-line-through">$160.00</span>
                                                </p>
                                                <div class="star">
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="single-product-card rev-7-single-product">
                                        <img src="assets/images/products/product-14.jpg" alt="product image" class="rev-7-single-product__img">
                                        <div class="rev-7-single-product__txt">
                                            <div class="rev-7-single-product__info">
                                                <a href="#">large red apple</a>
                                                <p class="price">
                                                    $120.00 <span>-</span>
                                                    <span class="strike text-decoration-line-through">$160.00</span>
                                                </p>
                                                <div class="star">
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="single-product-card rev-7-single-product">
                                        <img src="assets/images/products/product-15.jpg" alt="product image" class="rev-7-single-product__img">
                                        <div class="rev-7-single-product__txt">
                                            <div class="rev-7-single-product__info">
                                                <a href="#">large red apple</a>
                                                <p class="price">
                                                    $120.00 <span>-</span>
                                                    <span class="strike text-decoration-line-through">$160.00</span>
                                                </p>
                                                <div class="star">
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="single-product-card rev-7-single-product">
                                        <img src="assets/images/products/product-16.jpg" alt="product image" class="rev-7-single-product__img">
                                        <div class="rev-7-single-product__txt">
                                            <div class="rev-7-single-product__info">
                                                <a href="#">large red apple</a>
                                                <p class="price">
                                                    $120.00 <span>-</span>
                                                    <span class="strike text-decoration-line-through">$160.00</span>
                                                </p>
                                                <div class="star">
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="single-product-card rev-7-single-product">
                                        <img src="assets/images/products/product-17.jpg" alt="product image" class="rev-7-single-product__img">
                                        <div class="rev-7-single-product__txt">
                                            <div class="rev-7-single-product__info">
                                                <a href="#">large red apple</a>
                                                <p class="price">
                                                    $120.00 <span>-</span>
                                                    <span class="strike text-decoration-line-through">$160.00</span>
                                                </p>
                                                <div class="star">
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="single-product-card rev-7-single-product">
                                        <img src="assets/images/products/product-18.jpg" alt="product image" class="rev-7-single-product__img">
                                        <div class="rev-7-single-product__txt">
                                            <div class="rev-7-single-product__info">
                                                <a href="#">large red apple</a>
                                                <p class="price">
                                                    $120.00 <span>-</span>
                                                    <span class="strike text-decoration-line-through">$160.00</span>
                                                </p>
                                                <div class="star">
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="single-product-card rev-7-single-product">
                                        <img src="assets/images/products/product-19.jpg" alt="product image" class="rev-7-single-product__img">
                                        <div class="rev-7-single-product__txt">
                                            <div class="rev-7-single-product__info">
                                                <a href="#">large red apple</a>
                                                <p class="price">
                                                    $120.00 <span>-</span>
                                                    <span class="strike text-decoration-line-through">$160.00</span>
                                                </p>
                                                <div class="star">
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-xl-3 col-lg-4">
                    <div class="best-selling-img-container">
                        <img src="assets/images/bg/rev-7-best-selling.jpg" alt="product image">
                    </div>
                </div>
            </div>
        </div>
    </section> */}
        {/*------------------------------- BEST SELLING SECTION ENDS HERE -------------------------------*/}
        {/*------------------------------- TESTIMONIAL SECTION STARTS HERE -------------------------------*/}
        {/* <section class="rev-7-testimonial-section">
        <div class="container">
            <div class="testimonial-slider">
                <div class="single-testimony">
                    <img src="assets/images/headshot/person-2.png" alt="person">
                    <h6>Steven Phills</h6>
                    <span class="label">Sr. Executive</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quo odio iure dolore accusantium soluta, adipisci distinctio. Molestiae dolorem aliquam est quia earum, assumenda quidem rerum autem? Sunt, libero enim.</p>
                </div>

                <div class="single-testimony">
                    <img src="assets/images/headshot/person-3.png" alt="person">
                    <h6>Steven Phills</h6>
                    <span class="label">Sr. Executive</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quo odio iure dolore accusantium soluta, adipisci distinctio. Molestiae dolorem aliquam est quia earum, assumenda quidem rerum autem? Sunt, libero enim.</p>
                </div>

                <div class="single-testimony">
                    <img src="assets/images/headshot/person-2.png" alt="person">
                    <h6>Steven Phills</h6>
                    <span class="label">Sr. Executive</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quo odio iure dolore accusantium soluta, adipisci distinctio. Molestiae dolorem aliquam est quia earum, assumenda quidem rerum autem? Sunt, libero enim.</p>
                </div>

                <div class="single-testimony">
                    <img src="assets/images/headshot/person-3.png" alt="person">
                    <h6>Steven Phills</h6>
                    <span class="label">Sr. Executive</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quo odio iure dolore accusantium soluta, adipisci distinctio. Molestiae dolorem aliquam est quia earum, assumenda quidem rerum autem? Sunt, libero enim.</p>
                </div>
            </div>
        </div>
    </section> */}
        {/*------------------------------- TESTIMONIAL SECTION ENDS HERE -------------------------------*/}
        {/*------------------------------- BLOG SECTION STARTS HERE -------------------------------*/}
        {/* <div class="rev-7-blog-section">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-xl-6">
                    <div class="section-heading">
                        <h2>Update From Newsfeed</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde aliquam dolore cumque nam nihil. Eveniet ipsa id ad dolores perspiciatis!</p>
                    </div>
                </div>
            </div>

            <div class="row blogs-row">
                <div class="col-xl-4 col-md-6">
                    <div class="single-blog">
                        <div class="part-img">
                            <img src="assets/images/blog/blog-1.jpg" alt="blog image">
                            <span class="date">Jun 02, 2023</span>
                        </div>

                        <div class="part-txt">
                            <a href="#" class="single-blog-title">My Trifles Grows in World Delivering Impact on woman</a>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum in ab at iure! Ratione perferendis fugit quaerat nemo nostrum repudiandae, id labore, quibusdam ullam qui, ea a delectus nesciunt. Debitis.</p>
                            <a href="#" class="single-blog-btn">Read More</a>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-md-6">
                    <div class="single-blog">
                        <div class="part-img">
                            <img src="assets/images/blog/blog-2.jpg" alt="blog image">
                            <span class="date">Jun 02, 2023</span>
                        </div>

                        <div class="part-txt">
                            <a href="#" class="single-blog-title">My Trifles Grows in World Delivering Impact on woman</a>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum in ab at iure! Ratione perferendis fugit quaerat nemo nostrum repudiandae, id labore, quibusdam ullam qui, ea a delectus nesciunt. Debitis.</p>
                            <a href="#" class="single-blog-btn">Read More</a>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-md-6">
                    <div class="single-blog">
                        <div class="part-img">
                            <img src="assets/images/blog/blog-3.jpg" alt="blog image">
                            <span class="date">Jun 02, 2023</span>
                        </div>

                        <div class="part-txt">
                            <a href="#" class="single-blog-title">My Trifles Grows in World Delivering Impact on woman</a>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum in ab at iure! Ratione perferendis fugit quaerat nemo nostrum repudiandae, id labore, quibusdam ullam qui, ea a delectus nesciunt. Debitis.</p>
                            <a href="#" class="single-blog-btn">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> */}
        {/*-------------------------------  BLOG SECTION ENDS HERE -------------------------------*/}
        {/*-------------------------------  GALLERY SECTION STARTS HERE -------------------------------*/}
        {/* <section class="rev-7-gallery-section">
        <div class="gallery-images">
            <div class="single-image-container">
                <img src="assets/images/gallery/gallery-1.jpg" alt="gallery image">
                <button class="insta-icon"><i class="fa-brands fa-instagram"></i></button>
            </div>
            <div class="single-image-container">
                <img src="assets/images/gallery/gallery-2.jpg" alt="gallery image">
                <button class="insta-icon"><i class="fa-brands fa-instagram"></i></button>
            </div>
            <div class="single-image-container">
                <img src="assets/images/gallery/gallery-3.jpg" alt="gallery image">
                <button class="insta-icon"><i class="fa-brands fa-instagram"></i></button>
            </div>
            <div class="single-image-container">
                <img src="assets/images/gallery/gallery-4.jpg" alt="gallery image">
                <button class="insta-icon"><i class="fa-brands fa-instagram"></i></button>
            </div>
            <div class="single-image-container">
                <img src="assets/images/gallery/gallery-5.jpg" alt="gallery image">
                <button class="insta-icon"><i class="fa-brands fa-instagram"></i></button>
            </div>
            <div class="single-image-container">
                <img src="assets/images/gallery/gallery-6.jpg" alt="gallery image">
                <button class="insta-icon"><i class="fa-brands fa-instagram"></i></button>
            </div>
            <div class="single-image-container">
                <img src="assets/images/gallery/gallery-7.jpg" alt="gallery image">
                <button class="insta-icon"><i class="fa-brands fa-instagram"></i></button>
            </div>
        </div>
    </section> */}
        {/*-------------------------------  GALLERY SECTION ENDS HERE -------------------------------*/}
      </div>
      
    );
};


export default Vendor$signup;
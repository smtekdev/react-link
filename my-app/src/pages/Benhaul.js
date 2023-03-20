import React from "react";

function Benhaul(){
        return(
          
          <div>
        <div className="container">
        </div>
        {/*------------------------------- BANNER SECTION STARTS HERE -------------------------------*/}
        {/*------------------------------- BANNER SECTION ENDS HERE -------------------------------*/}
        {/*------------------------------- TOP-PRODUCTS SECTION STARTS HERE -------------------------------*/}
        <div className="row flex-row-reverse" style={{transform: 'none', marginTop: '5%'}}>
          <div className="col-lg-4-5">
            {/* <div class="shop-product-fillter">
                <div class="totall-product">
                    <p>We found <strong class="text-brand">29</strong> items for you!</p>
                </div>
                <div class="sort-by-product-area">
                    <div class="sort-by-cover mr-10">
                        <div class="sort-by-product-wrap">
                            <div class="sort-by">
                                <span><i class="fi-rs-apps"></i>Show:</span>
                            </div>
                            <div class="sort-by-dropdown-wrap">
                                <span> 50 <i class="fi-rs-angle-small-down"></i></span>
                            </div>
                        </div>
                        <div class="sort-by-dropdown">
                            <ul>
                                <li><a class="active" href="#">50</a></li>
                                <li><a href="#">100</a></li>
                                <li><a href="#">150</a></li>
                                <li><a href="#">200</a></li>
                                <li><a href="#">All</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="sort-by-cover">
                        <div class="sort-by-product-wrap">
                            <div class="sort-by">
                                <span><i class="fi-rs-apps-sort"></i>Sort by:</span>
                            </div>
                            <div class="sort-by-dropdown-wrap">
                                <span> Featured <i class="fi-rs-angle-small-down"></i></span>
                            </div>
                        </div>
                        <div class="sort-by-dropdown">
                            <ul>
                                <li><a class="active" href="#">Featured</a></li>
                                <li><a href="#">Price: Low to High</a></li>
                                <li><a href="#">Price: High to Low</a></li>
                                <li><a href="#">Release Date</a></li>
                                <li><a href="#">Avg. Rating</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div> */}
            <div className="col-xl-9 col-lg-8">
              <div className="row g-lg-4 g-3">
                <div className="product-col col-xxl-3 col-xl-4 col-lg-6 col-md-4 col-6">
                  <div className="single-product-card">
                    <div className="part-img">
                      <a href="#"><img src="assets/images/336121097-400x300.jfif" alt="Product" /></a>
                      <div className="cart-option cart-option-bottom">
                        <ul>
                          <li>
                            <a role="button" className="add-to-cart">
                              <i className="fa-light fa-cart-shopping" />
                            </a>
                          </li>
                          <li>
                            <a role="button" className="add-to-wish">
                              <i className="fa-light fa-heart" />
                            </a>
                          </li>
                          <li>
                            <a role="button" className="quick-view">
                              <i className="fa-light fa-image" />
                            </a>
                          </li>
                          <li>
                            <a href="#" className="view-product">
                              <i className="fa-light fa-eye" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="part-txt">
                      <h4 className="product-name"><a href="#">R1 400CC</a></h4>
                      <p className="dscr">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus aliquid laborum aperiam dolores. Dignissimos at harum corporis qui illo nam fugit recusandae ratione odit neque officia, accusamus ab, assumenda odio.</p>
                      <p className="price"><span>$96.00</span>$75.00</p>
                      <div className="star">
                        <i className="fa-solid fa-star-sharp rated" />
                        <i className="fa-solid fa-star-sharp rated" />
                        <i className="fa-solid fa-star-sharp rated" />
                        <i className="fa-solid fa-star-sharp rated" />
                        <i className="fa-solid fa-star-sharp" />
                      </div>
                      <button className="add-to-cart-btn">Add to Cart</button>
                    </div>
                  </div>
                </div>
                <div className="product-col col-xxl-3 col-xl-4 col-lg-6 col-md-4 col-6">
                  <div className="single-product-card">
                    <div className="part-img">
                      <span className="off-tag">15%</span>
                      <a href="#"><img src="assets/images/s-l500.jpg" alt="Product" /></a>
                      <div className="cart-option cart-option-bottom">
                        <ul>
                          <li>
                            <a role="button" className="add-to-cart">
                              <i className="fa-light fa-cart-shopping" />
                            </a>
                          </li>
                          <li>
                            <a role="button" className="add-to-wish">
                              <i className="fa-light fa-heart" />
                            </a>
                          </li>
                          <li>
                            <a role="button" className="quick-view">
                              <i className="fa-light fa-image" />
                            </a>
                          </li>
                          <li>
                            <a href="#" className="view-product">
                              <i className="fa-light fa-eye" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="part-txt">
                      <h4 className="product-name"><a href="#">Gaming Chair </a></h4>
                      <p className="dscr">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus aliquid laborum aperiam dolores. Dignissimos at harum corporis qui illo nam fugit recusandae ratione odit neque officia, accusamus ab, assumenda odio.</p>
                      <p className="price"><span>$96.00</span>$75.00</p>
                      <div className="star">
                        <i className="fa-solid fa-star-sharp rated" />
                        <i className="fa-solid fa-star-sharp rated" />
                        <i className="fa-solid fa-star-sharp rated" />
                        <i className="fa-solid fa-star-sharp rated" />
                        <i className="fa-solid fa-star-sharp" />
                      </div>
                      <button className="add-to-cart-btn">Add to Cart</button>
                    </div>
                  </div>
                </div>
                <div className="product-col col-xxl-3 col-xl-4 col-lg-6 col-md-4 col-6">
                  <div className="single-product-card">
                    <div className="part-img">
                      <a href="#"><img src="assets/images/338234527-400x300.jfif" alt="Product" /></a>
                      <div className="cart-option cart-option-bottom">
                        <ul>
                          <li>
                            <a role="button" className="add-to-cart">
                              <i className="fa-light fa-cart-shopping" />
                            </a>
                          </li>
                          <li>
                            <a role="button" className="add-to-wish">
                              <i className="fa-light fa-heart" />
                            </a>
                          </li>
                          <li>
                            <a role="button" className="quick-view">
                              <i className="fa-light fa-image" />
                            </a>
                          </li>
                          <li>
                            <a href="#" className="view-product">
                              <i className="fa-light fa-eye" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="part-txt">
                      <h4 className="product-name"><a href="#">Dji Mini Drone Camera</a></h4>
                      <p className="dscr">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus aliquid laborum aperiam dolores. Dignissimos at harum corporis qui illo nam fugit recusandae ratione odit neque officia, accusamus ab, assumenda odio.</p>
                      <p className="price"><span>$96.00</span>$75.00</p>
                      <div className="star">
                        <i className="fa-solid fa-star-sharp rated" />
                        <i className="fa-solid fa-star-sharp rated" />
                        <i className="fa-solid fa-star-sharp rated" />
                        <i className="fa-solid fa-star-sharp rated" />
                        <i className="fa-solid fa-star-sharp" />
                      </div>
                      <button className="add-to-cart-btn">Add to Cart</button>
                    </div>
                  </div>
                </div>
                <div className="product-col col-xxl-3 col-xl-4 col-lg-6 col-md-4 col-6">
                  <div className="single-product-card">
                    <div className="part-img">
                      <span className="off-tag">15%</span>
                      <a href="#"><img src="assets/images/s-l1600.jpg" alt="Product" /></a>
                      <div className="cart-option cart-option-bottom">
                        <ul>
                          <li>
                            <a role="button" className="add-to-cart">
                              <i className="fa-light fa-cart-shopping" />
                            </a>
                          </li>
                          <li>
                            <a role="button" className="add-to-wish">
                              <i className="fa-light fa-heart" />
                            </a>
                          </li>
                          <li>
                            <a role="button" className="quick-view">
                              <i className="fa-light fa-image" />
                            </a>
                          </li>
                          <li>
                            <a href="#" className="view-product">
                              <i className="fa-light fa-eye" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="part-txt">
                      <h4 className="product-name"><a href="#">Automotive EVAP</a></h4>
                      <p className="dscr">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus aliquid laborum aperiam dolores. Dignissimos at harum corporis qui illo nam fugit recusandae ratione odit neque officia, accusamus ab, assumenda odio.</p>
                      <p className="price"><span>$96.00</span>$75.00</p>
                      <div className="star">
                        <i className="fa-solid fa-star-sharp rated" />
                        <i className="fa-solid fa-star-sharp rated" />
                        <i className="fa-solid fa-star-sharp rated" />
                        <i className="fa-solid fa-star-sharp rated" />
                        <i className="fa-solid fa-star-sharp" />
                      </div>
                      <button className="add-to-cart-btn">Add to Cart</button>
                    </div>
                  </div>
                </div>
                <div className="product-col col-xxl-3 col-xl-4 col-lg-6 col-md-4 col-6">
                  <div className="single-product-card">
                    <div className="part-img">
                      <a href="#"><img src="assets/images/s-l500 (1).jpg" alt="Product" /></a>
                      <div className="cart-option cart-option-bottom">
                        <ul>
                          <li>
                            <a role="button" className="add-to-cart">
                              <i className="fa-light fa-cart-shopping" />
                            </a>
                          </li>
                          <li>
                            <a role="button" className="add-to-wish">
                              <i className="fa-light fa-heart" />
                            </a>
                          </li>
                          <li>
                            <a role="button" className="quick-view">
                              <i className="fa-light fa-image" />
                            </a>
                          </li>
                          <li>
                            <a href="#" className="view-product">
                              <i className="fa-light fa-eye" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="part-txt">
                      <h4 className="product-name"><a href="#">Spy Kids Show
                        </a></h4>
                      <p className="dscr">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus aliquid laborum aperiam dolores. Dignissimos at harum corporis qui illo nam fugit recusandae ratione odit neque officia, accusamus ab, assumenda odio.</p>
                      <p className="price"><span>$96.00</span>$75.00</p>
                      <div className="star">
                        <i className="fa-solid fa-star-sharp rated" />
                        <i className="fa-solid fa-star-sharp rated" />
                        <i className="fa-solid fa-star-sharp rated" />
                        <i className="fa-solid fa-star-sharp rated" />
                        <i className="fa-solid fa-star-sharp" />
                      </div>
                      <button className="add-to-cart-btn">Add to Cart</button>
                    </div>
                  </div>
                </div>
                <div className="product-col col-xxl-3 col-xl-4 col-lg-6 col-md-4 col-6">
                  <div className="single-product-card">
                    <div className="part-img">
                      <a href="#"><img src="assets/images/s-l500 (2).jpg" alt="Product" /></a>
                      <div className="cart-option cart-option-bottom">
                        <ul>
                          <li>
                            <a role="button" className="add-to-cart">
                              <i className="fa-light fa-cart-shopping" />
                            </a>
                          </li>
                          <li>
                            <a role="button" className="add-to-wish">
                              <i className="fa-light fa-heart" />
                            </a>
                          </li>
                          <li>
                            <a role="button" className="quick-view">
                              <i className="fa-light fa-image" />
                            </a>
                          </li>
                          <li>
                            <a href="#" className="view-product">
                              <i className="fa-light fa-eye" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="part-txt">
                      <h4 className="product-name"><a href="#">Stray Kids</a></h4>
                      <p className="dscr">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus aliquid laborum aperiam dolores. Dignissimos at harum corporis qui illo nam fugit recusandae ratione odit neque officia, accusamus ab, assumenda odio.</p>
                      <p className="price"><span>$96.00</span>$75.00</p>
                      <div className="star">
                        <i className="fa-solid fa-star-sharp rated" />
                        <i className="fa-solid fa-star-sharp rated" />
                        <i className="fa-solid fa-star-sharp rated" />
                        <i className="fa-solid fa-star-sharp rated" />
                        <i className="fa-solid fa-star-sharp" />
                      </div>
                      <button className="add-to-cart-btn">Add to Cart</button>
                    </div>
                  </div>
                </div>
                <div className="product-col col-xxl-3 col-xl-4 col-lg-6 col-md-4 col-6">
                  <div className="single-product-card">
                    <div className="part-img">
                      <a href="#"><img src="assets/images/337058667-400x300.jfif" alt="Product" /></a>
                      <div className="cart-option cart-option-bottom">
                        <ul>
                          <li>
                            <a role="button" className="add-to-cart">
                              <i className="fa-light fa-cart-shopping" />
                            </a>
                          </li>
                          <li>
                            <a role="button" className="add-to-wish">
                              <i className="fa-light fa-heart" />
                            </a>
                          </li>
                          <li>
                            <a role="button" className="quick-view">
                              <i className="fa-light fa-image" />
                            </a>
                          </li>
                          <li>
                            <a href="#" className="view-product">
                              <i className="fa-light fa-eye" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="part-txt">
                      <h4 className="product-name"><a href="#">IPhone 13Promax 128gb
                        </a></h4>
                      <p className="dscr">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus aliquid laborum aperiam dolores. Dignissimos at harum corporis qui illo nam fugit recusandae ratione odit neque officia, accusamus ab, assumenda odio.</p>
                      <p className="price"><span>$96.00</span>$75.00</p>
                      <div className="star">
                        <i className="fa-solid fa-star-sharp rated" />
                        <i className="fa-solid fa-star-sharp rated" />
                        <i className="fa-solid fa-star-sharp rated" />
                        <i className="fa-solid fa-star-sharp rated" />
                        <i className="fa-solid fa-star-sharp" />
                      </div>
                      <button className="add-to-cart-btn">Add to Cart</button>
                    </div>
                  </div>
                </div>
                <div className="product-col col-xxl-3 col-xl-4 col-lg-6 col-md-4 col-6">
                  <div className="single-product-card">
                    <div className="part-img">
                      <a href="#"><img src="assets/images/338034455-400x300.jfif" alt="Product" /></a>
                      <div className="cart-option cart-option-bottom">
                        <ul>
                          <li>
                            <a role="button" className="add-to-cart">
                              <i className="fa-light fa-cart-shopping" />
                            </a>
                          </li>
                          <li>
                            <a role="button" className="add-to-wish">
                              <i className="fa-light fa-heart" />
                            </a>
                          </li>
                          <li>
                            <a role="button" className="quick-view">
                              <i className="fa-light fa-image" />
                            </a>
                          </li>
                          <li>
                            <a href="#" className="view-product">
                              <i className="fa-light fa-eye" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="part-txt">
                      <h4 className="product-name"><a href="#">IPhone 12 Pro Max 256gb</a></h4>
                      <p className="dscr">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus aliquid laborum aperiam dolores. Dignissimos at harum corporis qui illo nam fugit recusandae ratione odit neque officia, accusamus ab, assumenda odio.</p>
                      <p className="price"><span>$96.00</span>$75.00</p>
                      <div className="star">
                        <i className="fa-solid fa-star-sharp rated" />
                        <i className="fa-solid fa-star-sharp rated" />
                        <i className="fa-solid fa-star-sharp rated" />
                        <i className="fa-solid fa-star-sharp rated" />
                        <i className="fa-solid fa-star-sharp" />
                      </div>
                      <button className="add-to-cart-btn">Add to Cart</button>
                    </div>
                  </div>
                </div>
                <div className="product-col col-xxl-3 col-xl-4 col-lg-6 col-md-4 col-6">
                  <div className="single-product-card">
                    <div className="part-img">
                      <a href="#"><img src="assets/images/338235700-400x300.jfif" alt="Product" /></a>
                      <div className="cart-option cart-option-bottom">
                        <ul>
                          <li>
                            <a role="button" className="add-to-cart">
                              <i className="fa-light fa-cart-shopping" />
                            </a>
                          </li>
                          <li>
                            <a role="button" className="add-to-wish">
                              <i className="fa-light fa-heart" />
                            </a>
                          </li>
                          <li>
                            <a role="button" className="quick-view">
                              <i className="fa-light fa-image" />
                            </a>
                          </li>
                          <li>
                            <a href="#" className="view-product">
                              <i className="fa-light fa-eye" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="part-txt">
                      <h4 className="product-name"><a href="#">IPhone 11 Pro Max
                        </a></h4>
                      <p className="dscr">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus aliquid laborum aperiam dolores. Dignissimos at harum corporis qui illo nam fugit recusandae ratione odit neque officia, accusamus ab, assumenda odio.</p>
                      <p className="price"><span>$96.00</span>$75.00</p>
                      <div className="star">
                        <i className="fa-solid fa-star-sharp rated" />
                        <i className="fa-solid fa-star-sharp rated" />
                        <i className="fa-solid fa-star-sharp rated" />
                        <i className="fa-solid fa-star-sharp rated" />
                        <i className="fa-solid fa-star-sharp" />
                      </div>
                      <button className="add-to-cart-btn">Add to Cart</button>
                    </div>
                  </div>
                </div>
                {/* <div class="product-col col-xxl-3 col-xl-4 col-lg-6 col-md-4 col-6">
                        <div class="single-product-card">
                            <div class="part-img">
                                <a href="#"><img src="assets/images/feat-product-5.jpg" alt="Product"></a>
                                <div class="cart-option cart-option-bottom">
                                    <ul>
                                        <li>
                                            <a role="button" class="add-to-cart">
                                                <i class="fa-light fa-cart-shopping"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a role="button" class="add-to-wish">
                                                <i class="fa-light fa-heart"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a role="button" class="quick-view">
                                                <i class="fa-light fa-image"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" class="view-product">
                                                <i class="fa-light fa-eye"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="part-txt">
                                <h4 class="product-name"><a href="#">Fabrilife Kids T-shirt</a></h4>
                                <p class="dscr">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus aliquid laborum aperiam dolores. Dignissimos at harum corporis qui illo nam fugit recusandae ratione odit neque officia, accusamus ab, assumenda odio.</p>
                                <p class="price"><span>$96.00</span>$75.00</p>
                                <div class="star">
                                    <i class="fa-solid fa-star-sharp rated"></i>
                                    <i class="fa-solid fa-star-sharp rated"></i>
                                    <i class="fa-solid fa-star-sharp rated"></i>
                                    <i class="fa-solid fa-star-sharp rated"></i>
                                    <i class="fa-solid fa-star-sharp"></i>
                                </div>
                                <button class="add-to-cart-btn">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                    <div class="product-col col-xxl-3 col-xl-4 col-lg-6 col-md-4 col-6">
                        <div class="single-product-card">
                            <div class="part-img">
                                <span class="off-tag">15%</span>
                                <a href="#"><img src="assets/images/feat-product-6.jpg" alt="Product"></a>
                                <div class="cart-option cart-option-bottom">
                                    <ul>
                                        <li>
                                            <a role="button" class="add-to-cart">
                                                <i class="fa-light fa-cart-shopping"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a role="button" class="add-to-wish">
                                                <i class="fa-light fa-heart"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a role="button" class="quick-view">
                                                <i class="fa-light fa-image"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" class="view-product">
                                                <i class="fa-light fa-eye"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="part-txt">
                                <h4 class="product-name"><a href="#">Monster Bottle</a></h4>
                                <p class="dscr">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus aliquid laborum aperiam dolores. Dignissimos at harum corporis qui illo nam fugit recusandae ratione odit neque officia, accusamus ab, assumenda odio.</p>
                                <p class="price"><span>$96.00</span>$75.00</p>
                                <div class="star">
                                    <i class="fa-solid fa-star-sharp rated"></i>
                                    <i class="fa-solid fa-star-sharp rated"></i>
                                    <i class="fa-solid fa-star-sharp rated"></i>
                                    <i class="fa-solid fa-star-sharp rated"></i>
                                    <i class="fa-solid fa-star-sharp"></i>
                                </div>
                                <button class="add-to-cart-btn">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                    <div class="product-col col-xxl-3 col-xl-4 col-lg-6 col-md-4 col-6">
                        <div class="single-product-card">
                            <div class="part-img">
                                <a href="#"><img src="assets/images/feat-product-7.jpg" alt="Product"></a>
                                <div class="cart-option cart-option-bottom">
                                    <ul>
                                        <li>
                                            <a role="button" class="add-to-cart">
                                                <i class="fa-light fa-cart-shopping"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a role="button" class="add-to-wish">
                                                <i class="fa-light fa-heart"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a role="button" class="quick-view">
                                                <i class="fa-light fa-image"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" class="view-product">
                                                <i class="fa-light fa-eye"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="part-txt">
                                <h4 class="product-name"><a href="#">Wireless Speaker</a></h4>
                                <p class="dscr">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus aliquid laborum aperiam dolores. Dignissimos at harum corporis qui illo nam fugit recusandae ratione odit neque officia, accusamus ab, assumenda odio.</p>
                                <p class="price"><span>$96.00</span>$75.00</p>
                                <div class="star">
                                    <i class="fa-solid fa-star-sharp rated"></i>
                                    <i class="fa-solid fa-star-sharp rated"></i>
                                    <i class="fa-solid fa-star-sharp rated"></i>
                                    <i class="fa-solid fa-star-sharp rated"></i>
                                    <i class="fa-solid fa-star-sharp"></i>
                                </div>
                                <button class="add-to-cart-btn">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                    <div class="product-col col-xxl-3 col-xl-4 col-lg-6 col-md-4 col-6">
                        <div class="single-product-card">
                            <div class="part-img">
                                <a href="#"><img src="assets/images/feat-product-8.jpg" alt="Product"></a>
                                <div class="cart-option cart-option-bottom">
                                    <ul>
                                        <li>
                                            <a role="button" class="add-to-cart">
                                                <i class="fa-light fa-cart-shopping"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a role="button" class="add-to-wish">
                                                <i class="fa-light fa-heart"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a role="button" class="quick-view">
                                                <i class="fa-light fa-image"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" class="view-product">
                                                <i class="fa-light fa-eye"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="part-txt">
                                <h4 class="product-name"><a href="#">Blood Pressure Indicator</a></h4>
                                <p class="dscr">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus aliquid laborum aperiam dolores. Dignissimos at harum corporis qui illo nam fugit recusandae ratione odit neque officia, accusamus ab, assumenda odio.</p>
                                <p class="price"><span>$96.00</span>$75.00</p>
                                <div class="star">
                                    <i class="fa-solid fa-star-sharp rated"></i>
                                    <i class="fa-solid fa-star-sharp rated"></i>
                                    <i class="fa-solid fa-star-sharp rated"></i>
                                    <i class="fa-solid fa-star-sharp rated"></i>
                                    <i class="fa-solid fa-star-sharp"></i>
                                </div>
                                <button class="add-to-cart-btn">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                    <div class="product-col col-xxl-3 col-xl-4 col-lg-6 col-md-4 col-6">
                        <div class="single-product-card">
                            <div class="part-img">
                                <a href="#"><img src="assets/images/feat-product-9.jpg" alt="Product"></a>
                                <div class="cart-option cart-option-bottom">
                                    <ul>
                                        <li>
                                            <a role="button" class="add-to-cart">
                                                <i class="fa-light fa-cart-shopping"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a role="button" class="add-to-wish">
                                                <i class="fa-light fa-heart"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a role="button" class="quick-view">
                                                <i class="fa-light fa-image"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" class="view-product">
                                                <i class="fa-light fa-eye"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="part-txt">
                                <h4 class="product-name"><a href="#">Hand Sanitizer</a></h4>
                                <p class="dscr">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus aliquid laborum aperiam dolores. Dignissimos at harum corporis qui illo nam fugit recusandae ratione odit neque officia, accusamus ab, assumenda odio.</p>
                                <p class="price"><span>$96.00</span>$75.00</p>
                                <div class="star">
                                    <i class="fa-solid fa-star-sharp rated"></i>
                                    <i class="fa-solid fa-star-sharp rated"></i>
                                    <i class="fa-solid fa-star-sharp rated"></i>
                                    <i class="fa-solid fa-star-sharp rated"></i>
                                    <i class="fa-solid fa-star-sharp"></i>
                                </div>
                                <button class="add-to-cart-btn">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                    <div class="product-col col-xxl-3 col-xl-4 col-lg-6 col-md-4 col-6">
                        <div class="single-product-card">
                            <div class="part-img">
                                <span class="off-tag">15%</span>
                                <a href="#"><img src="assets/images/feat-product-10.jpg" alt="Product"></a>
                                <div class="cart-option cart-option-bottom">
                                    <ul>
                                        <li>
                                            <a role="button" class="add-to-cart">
                                                <i class="fa-light fa-cart-shopping"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a role="button" class="add-to-wish">
                                                <i class="fa-light fa-heart"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a role="button" class="quick-view">
                                                <i class="fa-light fa-image"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" class="view-product">
                                                <i class="fa-light fa-eye"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="part-txt">
                                <h4 class="product-name"><a href="#">Wireless Headphone</a></h4>
                                <p class="dscr">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus aliquid laborum aperiam dolores. Dignissimos at harum corporis qui illo nam fugit recusandae ratione odit neque officia, accusamus ab, assumenda odio.</p>
                                <p class="price"><span>$96.00</span>$75.00</p>
                                <div class="star">
                                    <i class="fa-solid fa-star-sharp rated"></i>
                                    <i class="fa-solid fa-star-sharp rated"></i>
                                    <i class="fa-solid fa-star-sharp rated"></i>
                                    <i class="fa-solid fa-star-sharp rated"></i>
                                    <i class="fa-solid fa-star-sharp"></i>
                                </div>
                                <button class="add-to-cart-btn">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                    <div class="product-col col-xxl-3 col-xl-4 col-lg-6 col-md-4 col-6">
                        <div class="single-product-card">
                            <div class="part-img">
                                <a href="#"><img src="assets/images/feat-product-11.jpg" alt="Product"></a>
                                <div class="cart-option cart-option-bottom">
                                    <ul>
                                        <li>
                                            <a role="button" class="add-to-cart">
                                                <i class="fa-light fa-cart-shopping"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a role="button" class="add-to-wish">
                                                <i class="fa-light fa-heart"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a role="button" class="quick-view">
                                                <i class="fa-light fa-image"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" class="view-product">
                                                <i class="fa-light fa-eye"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="part-txt">
                                <h4 class="product-name"><a href="#">Cotton Jacket for Men</a></h4>
                                <p class="dscr">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus aliquid laborum aperiam dolores. Dignissimos at harum corporis qui illo nam fugit recusandae ratione odit neque officia, accusamus ab, assumenda odio.</p>
                                <p class="price"><span>$96.00</span>$75.00</p>
                                <div class="star">
                                    <i class="fa-solid fa-star-sharp rated"></i>
                                    <i class="fa-solid fa-star-sharp rated"></i>
                                    <i class="fa-solid fa-star-sharp rated"></i>
                                    <i class="fa-solid fa-star-sharp rated"></i>
                                    <i class="fa-solid fa-star-sharp"></i>
                                </div>
                                <button class="add-to-cart-btn">Add to Cart</button>
                            </div>
                        </div>
                    </div> */}
              </div>
            </div>
            {/*product grid*/}
            {/*End Deals*/}
          </div>
          <div className="col-lg-1-5 primary-sidebar sticky-sidebar" style={{position: 'relative', overflow: 'visible', boxSizing: 'border-box', minHeight: '1px'}}>
            {/* Fillter By Price */}
            <div className="theiaStickySidebar" style={{paddingTop: '0px', paddingBottom: '1px', position: 'static', transform: 'none', left: '12.0156px', top: '0px'}}><div className="sidebar-widget widget-store-info mb-30 bg-3 border-0">
                <div className="vendor-logo mb-30">
                  <img src="assets/images/fotor_2023-3-10_16_26_51.png" alt="" />
                </div>
                <div className="vendor-info">
                  <div className="product-category">
                    <span className="text-muted">Since 2012</span>
                  </div>
                  <h4 className="mb-5"><a href="#" className="text-heading">Ben Haul</a></h4>
                  <div className="product-rate-cover mb-15">
                    <div className="product-rate d-inline-block">
                      <div className="product-rating" style={{width: '90%'}} />
                    </div>
                    <span className="font-small ml-5 text-muted"> (4.0)</span>
                  </div>
                  <div className="vendor-des mb-30">
                    <p className="font-sm text-heading" />
                  </div>
                  <div className="follow-social mb-20">
                    {/* <h6 class="mb-15">Follow Us</h6> */}
                    <ul className="social-network">
                      <li className="hover-up">
                        <a href="#">
                          <img src="assets/imgs/theme/icons/social-tw.svg" alt="" />
                        </a>
                      </li>
                      <li className="hover-up">
                        <a href="#">
                          <img src="assets/imgs/theme/icons/social-fb.svg" alt="" />
                        </a>
                      </li>
                      <li className="hover-up">
                        <a href="#">
                          <img src="assets/imgs/theme/icons/social-insta.svg" alt="" />
                        </a>
                      </li>
                      <li className="hover-up">
                        <a href="#">
                          <img src="assets/imgs/theme/icons/social-pin.svg" alt="" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="vendor-info">
                    <ul className="font-sm mb-20">
                      <li><img className="mr-5" src="assets/imgs/theme/icons/icon-location.svg" alt="" /><strong>Address: </strong> <span>5171 W Campbell Ave undefined, Utah 53127 United States</span></li>
                      <li><img className="mr-5" src="assets/imgs/theme/icons/icon-contact.svg" alt="" /><strong>Call Us:</strong><span>(+91) - 540-025-124553</span></li>
                    </ul>
                    <a href="#" className="btn btn-xs">Contact Seller <i className="fi-rs-arrow-small-right" /></a>
                  </div>
                </div>
              </div><div className="sidebar-widget widget-category-2 mb-30">
                <h5 className="section-title style-1 mb-30">Category</h5>
                <ul>
                  <li>
                    <a href="#"> <img src="assets/imgs/theme/icons/category-1.svg" alt="" />Clothing</a><span className="count">28</span>
                  </li>
                  <li>
                    <a href="#"> <img src="assets/imgs/theme/icons/category-2.svg" alt="" />Services</a><span className="count">27</span>
                  </li>
                  <li>
                    <a href="#"> <img src="assets/imgs/theme/icons/category-3.svg" alt="" />Home Appliances</a><span className="count">31</span>
                  </li>
                  <li>
                    <a href="#"> <img src="assets/imgs/theme/icons/category-4.svg" alt="" />Beauty &amp; Spa</a><span className="count">50</span>
                  </li>
                  <li>
                    <a href="#"> <img src="assets/imgs/theme/icons/category-5.svg" alt="" />Fashion</a><span className="count">62</span>
                  </li>
                </ul>
              </div>
              {/* <div class="sidebar-widget price_range range mb-30">
                <h5 class="section-title style-1 mb-30">Fill by price</h5>
                <div class="price-filter">
                    <div class="price-filter-inner">
                        <div id="slider-range" class="mb-20 noUi-target noUi-ltr noUi-horizontal noUi-background"><div class="noUi-base"><div class="noUi-origin noUi-connect" style="left: 25%;"><div class="noUi-handle noUi-handle-lower"></div></div><div class="noUi-origin noUi-background" style="left: 50%;"><div class="noUi-handle noUi-handle-upper"></div></div></div></div>
                        <div class="d-flex justify-content-between">
                            <div class="caption">From: <strong id="slider-range-value1" class="text-brand">$500</strong></div>
                            <div class="caption">To: <strong id="slider-range-value2" class="text-brand">$1,000</strong></div>
                        </div>
                    </div>
                </div>
                <div class="list-group">
                    <div class="list-group-item mb-10 mt-10">
                        <label class="fw-900">Color</label>
                        <div class="custome-checkbox">
                            <input class="form-check-input" type="checkbox" name="checkbox" id="exampleCheckbox1" value="">
                            <label class="form-check-label" for="exampleCheckbox1"><span>Red (56)</span></label>
                            <br>
                            <input class="form-check-input" type="checkbox" name="checkbox" id="exampleCheckbox2" value="">
                            <label class="form-check-label" for="exampleCheckbox2"><span>Green (78)</span></label>
                            <br>
                            <input class="form-check-input" type="checkbox" name="checkbox" id="exampleCheckbox3" value="">
                            <label class="form-check-label" for="exampleCheckbox3"><span>Blue (54)</span></label>
                        </div>
                        <label class="fw-900 mt-15">Item Condition</label>
                        <div class="custome-checkbox">
                            <input class="form-check-input" type="checkbox" name="checkbox" id="exampleCheckbox11" value="">
                            <label class="form-check-label" for="exampleCheckbox11"><span>New (1506)</span></label>
                            <br>
                            <input class="form-check-input" type="checkbox" name="checkbox" id="exampleCheckbox21" value="">
                            <label class="form-check-label" for="exampleCheckbox21"><span>Refurbished (27)</span></label>
                            <br>
                            <input class="form-check-input" type="checkbox" name="checkbox" id="exampleCheckbox31" value="">
                            <label class="form-check-label" for="exampleCheckbox31"><span>Used (45)</span></label>
                        </div>
                    </div>
                </div>
                <a href="shop-grid-right.html" class="btn btn-sm btn-default"><i class="fi-rs-filter mr-5"></i> Fillter</a>
            </div> */}
            </div>
          </div>
        </div>
      </div>
      
        );
    };


export default Benhaul;
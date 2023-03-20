import React from "react";

function Cartergrayson(){
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
                  <img src="assets/images/pexels-joão-jesus-1080213-modified.png" alt="" />
                </div>
                <div className="vendor-info">
                  <div className="product-category">
                    <span className="text-muted">Since 2012</span>
                  </div>
                  <h4 className="mb-5"><a href="#tml" className="text-heading">Carter Grayson</a></h4>
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


export default Cartergrayson;
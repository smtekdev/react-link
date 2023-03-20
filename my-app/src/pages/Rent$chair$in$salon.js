import React from "react";

function Rent$chair$in$salon(){
        return(
            <div>
        {/*------------------------------- BANNER SECTION STARTS HERE -------------------------------*/}
        {/* Slideshow container */}
        {/* Full-width images with number and caption text */}
        {/* The dots/circles */}
        {/* <div style="text-align:center">
            <span class="dot" onclick="currentSlide(1)"></span>
            <span class="dot" onclick="currentSlide(2)"></span>
            <span class="dot" onclick="currentSlide(3)"></span>
          </div> */}
        {/* The dots/circles */}
        {/* <div style="text-align:center">
<span class="dot" onclick="currentSlide(1)"></span>
<span class="dot" onclick="currentSlide(2)"></span>
<span class="dot" onclick="currentSlide(3)"></span>
</div> */}
        {/* slider end */}
        {/*------------------------------- BANNER SECTION ENDS HERE -------------------------------*/}
        {/*------------------------------- BANNER SECTION START -------------------------------*/}
        <div className="banner banner-inner" style={{zIndex: -1}}>
          <div className="container">
            <div className="row justify-content-between align-items-center">
              <div className="col-lg-6 col-md-9 col-8">
                <div className="breadcrumb-txt">
                  <h1>Rent A Chair In Salon</h1>
                  <ul>
                    <li><a href="index-7.html"><i className="fa-regular fa-house" /></a></li>
                    <li>/</li>
                    <li>Home</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6 col-md-3 col-4">
                <div className="part-img">
                  <img src="assets/images/breadcrumb-img.png" alt="Image" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*------------------------------- BANNER SECTION END -------------------------------*/}
        {/*------------------------------- SHOP SECTION START -------------------------------*/}
        <div className="shop-wrap py-120">
          <div className="container">
            <div className="row g-4">
              <div className="col-xl-3 col-lg-4 sidebar-col">
                <div className="shop-sidebar">
                  <div className="sidebar-box">
                    <h3 className="sidebar-title">By Brands</h3>
                    <ul className="brand-filter" id="brandFilter">
                      <li>
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" defaultValue id="brand1" />
                          <label className="form-check-label" htmlFor="brand1"><span className="name">Club JM</span><span>(90)</span></label>
                        </div>
                      </li>
                      <li>
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" defaultValue id="brand2" />
                          <label className="form-check-label" htmlFor="brand2"><span className="name">EVANS21</span><span>(80)</span></label>
                        </div>
                      </li>
                      <li>
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" defaultValue id="brand3" />
                          <label className="form-check-label" htmlFor="brand3"><span className="name">Espresso</span><span>(43)</span></label>
                        </div>
                      </li>
                      <li>
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" defaultValue id="brand4" />
                          <label className="form-check-label" htmlFor="brand4"><span className="name">YOTIAN JAPAN</span><span>(97)</span></label>
                        </div>
                      </li>
                      <li>
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" defaultValue id="brand5" />
                          <label className="form-check-label" htmlFor="brand5"><span className="name">ORCHID</span><span>(18)</span></label>
                        </div>
                      </li>
                      <li>
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" defaultValue id="brand6" />
                          <label className="form-check-label" htmlFor="brand6"><span className="name">Pristik</span><span>(25)</span></label>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="sidebar-box">
                    <h3 className="sidebar-title">By Price</h3>
                    <div className="price-filter-wrap">
                      <div className="input-wrap">
                        <div className="input-group">
                          <span className="input-txt">$</span>
                          <input type="number" id="maxNumber" />
                        </div>
                        <div className="input-group">
                          <span className="input-txt">$</span>
                          <input type="number" id="minNumber" />
                        </div>
                      </div>
                      <div id="priceFilter" className="price-filter" />
                      <button id="filterPrice" className="def-btn">Filter now</button>
                    </div>
                  </div>
                  <div className="sidebar-box">
                    <h3 className="sidebar-title">Color</h3>
                    <ul className="brand-filter color-filter" id="colorFilter">
                      <li>
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" defaultValue id="Black" />
                          <label className="form-check-label" htmlFor="Black">Black</label>
                        </div>
                      </li>
                      <li>
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" defaultValue id="Pink" />
                          <label className="form-check-label" htmlFor="Pink">Pink</label>
                        </div>
                      </li>
                      <li>
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" defaultValue id="White" />
                          <label className="form-check-label" htmlFor="White">White</label>
                        </div>
                      </li>
                      <li>
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" defaultValue id="Blue" />
                          <label className="form-check-label" htmlFor="Blue">Blue</label>
                        </div>
                      </li>
                      <li>
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" defaultValue id="Orange" />
                          <label className="form-check-label" htmlFor="Orange">Orange</label>
                        </div>
                      </li>
                    </ul>
                  </div>
                  {/* <div class="sidebar-box">
                            <div class="title-wrap">
                                <h3 class="sidebar-title">New Arrival</h3>
                                <div class="new-arrival-nav"></div>
                            </div>
                            <ul class="new-arrival-slider">
                                <li>
                                    <div class="part-img">
                                        <a href="#"><img src="assets/images/feat-product-1.jpg" alt="Image"></a>
                                    </div>
                                    <div class="part-txt">
                                        <a href="#" class="title">Diamond wedding ring</a>
                                        <p class="price">$195.00 <span>229.99</span></p>
                                    </div>
                                </li>
                                <li>
                                    <div class="part-img">
                                        <a href="#"><img src="assets/images/feat-product-2.jpg" alt="Image"></a>
                                    </div>
                                    <div class="part-txt">
                                        <a href="#" class="title">Diamond wedding ring</a>
                                        <p class="price">$195.00 <span>229.99</span></p>
                                    </div>
                                </li>
                                <li>
                                    <div class="part-img">
                                        <a href="#"><img src="assets/images/feat-product-3.jpg" alt="Image"></a>
                                    </div>
                                    <div class="part-txt">
                                        <a href="#" class="title">Diamond wedding ring</a>
                                        <p class="price">$195.00 <span>229.99</span></p>
                                    </div>
                                </li>
                                <li>
                                    <div class="part-img">
                                        <a href="#"><img src="assets/images/feat-product-4.jpg" alt="Image"></a>
                                    </div>
                                    <div class="part-txt">
                                        <a href="#" class="title">Diamond wedding ring</a>
                                        <p class="price">$195.00 <span>229.99</span></p>
                                    </div>
                                </li>
                            </ul>
                        </div> */}
                  <div className="sidebar-new-arrival">
                    <div className="part-img">
                      {/* <a href="#"><img src="assets/images/new-arrival-4.jpg" alt="Image"></a> */}
                    </div>
                    <div className="part-txt">
                      <p>Season Sale!</p>
                      <h3>New Arrivals</h3>
                      {/* <a href="#">Shop Now</a> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-9 col-lg-8">
                <div className="shop-top-bar">
                  <div className="row align-items-center">
                    <div className="col-md-3 d-md-block d-none">
                      <h3 id="shopViewType">Shop Grid</h3>
                    </div>
                    <div className="col-md-9">
                      <div className="top-bar-right">
                        <select name="sorting" className="select">
                          <option value={0}>Default Sorting</option>
                          <option value={1}>Price (Low to heigh)</option>
                          <option value={2}>Price (Heigh to low)</option>
                          <option value={3}>Best match</option>
                          <option value={4}>Relevance</option>
                        </select>
                        <div className="show-wrap">
                          <span>Show:</span>
                          <select name="show" className="select">
                            <option value={1}>12</option>
                            <option value={2}>16</option>
                            <option value={3}>20</option>
                            <option value={4}>24</option>
                          </select>
                        </div>
                        <div className="view-wrap">
                          <button className="active" id="gridView"><i className="flaticon-apps" /></button>
                          <button id="listView"><i className="flaticon-menu" /></button>
                        </div>
                        <div className="top-pagination">
                          <input type="number" name="current" id="currentPage" defaultValue={1} min={1} />
                          <span>of 3</span>
                          <button><i className="fa-solid fa-right-long" /></button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row g-lg-4 g-3">
                  <div className="product-col col-xxl-3 col-xl-4 col-lg-6 col-md-4 col-6">
                    <div className="single-product-card">
                      <div className="part-img">
                        {/* <span class="off-tag">15%</span> */}
                        <a href="#"><img src="assets/images/sl1.jpeg" alt="Product" /></a>
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
                        <h4 className="product-name"><a href="#">Rent A Chair In Salon</a></h4>
                        <p className="dscr">Rent A Chair In Salon</p>
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
                        {/* <span class="off-tag">15%</span> */}
                        <a href="#"><img src="assets/images/sl2.jpeg" alt="Product" /></a>
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
                        <h4 className="product-name"><a href="#">Rent A Chair In Male Salon</a></h4>
                        <p className="dscr">Rent A Chair In Male Salon</p>
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
                        {/* <span class="off-tag">15%</span> */}
                        <a href="#"><img src="assets/images/sl3.jpeg" alt="Product" /></a>
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
                        <h4 className="product-name"><a href="#">Rent A Chair For Hair Tint</a></h4>
                        <p className="dscr">Rent A Chair For Hair Tint</p>
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
                        {/* <span class="off-tag">15%</span> */}
                        <a href="#"><img src="assets/images/sl4.jpeg" alt="Product" /></a>
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
                        <h4 className="product-name"><a href="#">Rent A Chair For Hair Trim</a></h4>
                        <p className="dscr">Rent A Chair For Hair Trim</p>
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
                        {/* <span class="off-tag">15%</span> */}
                        <a href="#"><img src="assets/images/sl5.jpeg" alt="Product" /></a>
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
                        <h4 className="product-name"><a href="#">Rent A Chair For Hair Color</a></h4>
                        <p className="dscr">Rent A Chair For Hair Color</p>
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
                        {/* <span class="off-tag">15%</span> */}
                        <a href="#"><img src="assets/images/sl6.webp" alt="Product" /></a>
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
                        <h4 className="product-name"><a href="#">Rent A Chair In Salon</a></h4>
                        <p className="dscr">Rent A Chair In Salon</p>
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
                                    <span class="off-tag">15%</span>
                                    <a href="#"><img src="assets/images/546030_1.webp" alt="Product"></a>
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
                                    <h4 class="product-name"><a href="#">Garnier Skin Naturals Micellar</a></h4>
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
                  {/* <div class="product-col col-xxl-3 col-xl-4 col-lg-6 col-md-4 col-6">
                            <div class="single-product-card">
                                <div class="part-img">
                                    <a href="#"><img src="assets/images/120mlAppricot.webp" alt="Product"></a>
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
                                    <h4 class="product-name"><a href="#">Organic Sweet Apricot Kernel Oil
                                    </a></h4>
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
                  {/* <div class="product-col col-xxl-3 col-xl-4 col-lg-6 col-md-4 col-6">
                            <div class="single-product-card">
                                <div class="part-img">
                                    <a href="#"><img src="assets/images/536474_1.jpg" alt="Product"></a>
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
                                    <h4 class="product-name"><a href="#">Gillette Satin Care</a></h4>
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
                  {/* <div class="product-col col-xxl-3 col-xl-4 col-lg-6 col-md-4 col-6">
                            <div class="single-product-card">
                                <div class="part-img">
                                    <a href="#"><img src="assets/images/3_1649e80e-8a97-425a-b159-09c1c59b0f41.webp" alt="Product"></a>
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
                                    <h4 class="product-name"><a href="#">Frizz Control Kit
                                    </a></h4>
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
                  {/* <div class="product-col col-xxl-3 col-xl-4 col-lg-6 col-md-4 col-6">
                            <div class="single-product-card">
                                <div class="part-img">
                                    <a href="#"><img src="assets/images/559217_1.webp" alt="Product"></a>
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
                                    <h4 class="product-name"><a href="#">Rica Aloevera After Wax </a></h4>
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
                  {/* <div class="product-col col-xxl-3 col-xl-4 col-lg-6 col-md-4 col-6">
                            <div class="single-product-card">
                                <div class="part-img">
                                    <a href="#"><img src="assets/images/Avocado120ml.webp" alt="Product"></a>
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
                                    <h4 class="product-name"><a href="#">Organic Avocado Oil
                                    </a></h4>
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
                <div className="bottom-pagination d-flex justify-content-center">
                  <ul>
                    <li>
                      <button><i className="fa-regular fa-angle-left" /></button>
                    </li>
                    <li>
                      <button className="active">1</button>
                    </li>
                    {/* <li>
                                <button>2</button>
                            </li> */}
                    <li>
                      <button><i className="fa-regular fa-angle-right" /></button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*------------------------------- SHOP SECTION END -------------------------------*/}
        {/*------------------------------- FEATURES SECTION START -------------------------------*/}
        {/*------------------------------- FEATURES SECTION END -------------------------------*/}
      </div>
        );
    };


export default Rent$chair$in$salon;
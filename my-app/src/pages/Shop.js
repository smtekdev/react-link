import React from "react";

function Shop(){
        return(
            <div>
        {/*------------------------------- BANNER SECTION START -------------------------------*/}
        <div className="banner banner-inner">
          <div className="container">
            <div className="row justify-content-between align-items-center">
              <div className="col-lg-6 col-md-9 col-8">
                <div className="breadcrumb-txt">
                  <h1>Shop Page</h1>
                  <ul>
                    <li><a href="index.html"><i className="fa-regular fa-house" /></a></li>
                    <li>/</li>
                    <li>Shop</li>
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
                  <div className="sidebar-box">
                    <div className="title-wrap">
                      <h3 className="sidebar-title">New Arrival</h3>
                      <div className="new-arrival-nav" />
                    </div>
                    <ul className="new-arrival-slider">
                      <li>
                        <div className="part-img">
                          <a href="#"><img src="assets/images/feat-product-1.jpg" alt="Image" /></a>
                        </div>
                        <div className="part-txt">
                          <a href="#" className="title">Diamond wedding ring</a>
                          <p className="price">$195.00 <span>229.99</span></p>
                        </div>
                      </li>
                      <li>
                        <div className="part-img">
                          <a href="#"><img src="assets/images/feat-product-2.jpg" alt="Image" /></a>
                        </div>
                        <div className="part-txt">
                          <a href="#" className="title">Diamond wedding ring</a>
                          <p className="price">$195.00 <span>229.99</span></p>
                        </div>
                      </li>
                      <li>
                        <div className="part-img">
                          <a href="#"><img src="assets/images/feat-product-3.jpg" alt="Image" /></a>
                        </div>
                        <div className="part-txt">
                          <a href="#" className="title">Diamond wedding ring</a>
                          <p className="price">$195.00 <span>229.99</span></p>
                        </div>
                      </li>
                      <li>
                        <div className="part-img">
                          <a href="#"><img src="assets/images/feat-product-4.jpg" alt="Image" /></a>
                        </div>
                        <div className="part-txt">
                          <a href="#" className="title">Diamond wedding ring</a>
                          <p className="price">$195.00 <span>229.99</span></p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="sidebar-new-arrival">
                    <div className="part-img">
                      <a href="#"><img src="assets/images/new-arrival-4.jpg" alt="Image" /></a>
                    </div>
                    <div className="part-txt">
                      <p>Season Sale!</p>
                      <h3>New Arrivals</h3>
                      <a href="#">Shop Now</a>
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
                        <a href="#"><img src="assets/images/flash-deal-1.jpg" alt="Product" /></a>
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
                        <h4 className="product-name"><a href="#">Casual Walking Sneaker</a></h4>
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
                        <a href="#"><img src="assets/images/flash-deal-2.jpg" alt="Product" /></a>
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
                        <h4 className="product-name"><a href="#">Sports Water Bottle</a></h4>
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
                        <a href="#"><img src="assets/images/flash-deal-3.jpg" alt="Product" /></a>
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
                        <h4 className="product-name"><a href="#">Mithai Black Forest Cake</a></h4>
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
                        <a href="#"><img src="assets/images/flash-deal-4.jpg" alt="Product" /></a>
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
                        <h4 className="product-name"><a href="#">Kerayin 55 Momentum</a></h4>
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
                        <a href="#"><img src="assets/images/flash-deal-5.jpg" alt="Product" /></a>
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
                        <h4 className="product-name"><a href="#">Gamepad Controller</a></h4>
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
                        <a href="#"><img src="assets/images/feat-product-1.jpg" alt="Product" /></a>
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
                        <h4 className="product-name"><a href="#">Fried Rice Set Menu</a></h4>
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
                        <a href="#"><img src="assets/images/feat-product-2.jpg" alt="Product" /></a>
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
                        <h4 className="product-name"><a href="#">Vintage Easy Chair</a></h4>
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
                        <a href="#"><img src="assets/images/feat-product-3.jpg" alt="Product" /></a>
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
                        <h4 className="product-name"><a href="#">Diamond Cut Finger Ring </a></h4>
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
                        <a href="#"><img src="assets/images/feat-product-4.jpg" alt="Product" /></a>
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
                        <h4 className="product-name"><a href="#">Ladies Shoulder Bag</a></h4>
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
                        <a href="#"><img src="assets/images/feat-product-5.jpg" alt="Product" /></a>
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
                        <h4 className="product-name"><a href="#">Fabrilife Kids T-shirt</a></h4>
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
                        <a href="#"><img src="assets/images/feat-product-6.jpg" alt="Product" /></a>
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
                        <h4 className="product-name"><a href="#">Monster Bottle</a></h4>
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
                        <a href="#"><img src="assets/images/feat-product-7.jpg" alt="Product" /></a>
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
                        <h4 className="product-name"><a href="#">Wireless Speaker</a></h4>
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
                        <a href="#"><img src="assets/images/feat-product-8.jpg" alt="Product" /></a>
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
                        <h4 className="product-name"><a href="#">Blood Pressure Indicator</a></h4>
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
                        <a href="#"><img src="assets/images/feat-product-9.jpg" alt="Product" /></a>
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
                        <h4 className="product-name"><a href="#">Hand Sanitizer</a></h4>
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
                        <a href="#"><img src="assets/images/feat-product-10.jpg" alt="Product" /></a>
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
                        <h4 className="product-name"><a href="#">Wireless Headphone</a></h4>
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
                        <a href="#"><img src="assets/images/feat-product-11.jpg" alt="Product" /></a>
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
                        <h4 className="product-name"><a href="#">Cotton Jacket for Men</a></h4>
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
                </div>
                <div className="bottom-pagination d-flex justify-content-center">
                  <ul>
                    <li>
                      <button><i className="fa-regular fa-angle-left" /></button>
                    </li>
                    <li>
                      <button className="active">1</button>
                    </li>
                    <li>
                      <button>2</button>
                    </li>
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
        <div className="features" id="feature">
          <div className="container">
            <div className="panel panel-shadow px-0">
              <div className="custom-row">
                <div className="custom-col">
                  <div className="single-feature">
                    <div className="part-icon">
                      <span><i className="flaticon-money-saving" /></span>
                    </div>
                    <div className="part-txt">
                      <h4>Free Delivery</h4>
                      <p>For all order over $99</p>
                    </div>
                  </div>
                </div>
                <div className="custom-col">
                  <div className="single-feature">
                    <div className="part-icon">
                      <span><i className="flaticon-dollar" /></span>
                    </div>
                    <div className="part-txt">
                      <h4>30 Days Return</h4>
                      <p>If goods have Problems</p>
                    </div>
                  </div>
                </div>
                <div className="custom-col">
                  <div className="single-feature">
                    <div className="part-icon">
                      <span><i className="flaticon-credit-card" /></span>
                    </div>
                    <div className="part-txt">
                      <h4>Secure Payment</h4>
                      <p>100% secure payment</p>
                    </div>
                  </div>
                </div>
                <div className="custom-col">
                  <div className="single-feature">
                    <div className="part-icon">
                      <span><i className="flaticon-call-center" /></span>
                    </div>
                    <div className="part-txt">
                      <h4>24/7 Support</h4>
                      <p>Dedicated support</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*------------------------------- FEATURES SECTION END -------------------------------*/}
      </div>
        );
    };


export default Shop;
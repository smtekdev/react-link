import React from "react";

function Header(){
        return(
          <div>
        <div className="rev-7-body">
          {/*------------------------------- PRODUCT QUICK VIEW PANEL START -------------------------------*/}
          <div className="product-quick-view-panel">
            <div className="img">
              <img className="quick-view-image" src="assets/assets/images/index.html" alt="image" />
            </div>
          </div>
          {/*------------------------------- PRODUCT QUICK VIEW PANEL END -------------------------------*/}
          {/*------------------------------- HEADER CART LIST START -------------------------------*/}
          <div className="header-cart-wrap rev-7-header-cart-wrap" id="headerCartWrap">
            <div className="cart-list">
              <div className="title">
                <h3>Shopping Cart</h3>
                <button className="cart-close"><i className="fa-regular fa-xmark" /></button>
              </div>
              <ul>
                <li>
                  <a href="#">
                    <div className="part-img">
                      <img src="assets/assets/images/feat-product-3.jpg" alt="Image" />
                    </div>
                    <div className="part-txt">
                      <span className="name">Diamond wedding ring</span>
                      <span>1 <i className="fa-regular fa-xmark" /> $5.00</span>
                    </div>
                  </a>
                  <button className="delete-btn"><i className="fa-regular fa-trash-can" /></button>
                </li>
                <li>
                  <a href="#">
                    <div className="part-img">
                      <img src="assets/assets/images/feat-product-2.jpg" alt="Image" />
                    </div>
                    <div className="part-txt">
                      <span className="name">Living Summer Chair</span>
                      <span>1 <i className="fa-regular fa-xmark" /> $5.00</span>
                    </div>
                  </a>
                  <button className="delete-btn"><i className="fa-regular fa-trash-can" /></button>
                </li>
                <li>
                  <a href="#">
                    <div className="part-img">
                      <img src="assets/assets/images/feat-product-10.jpg" alt="Image" />
                    </div>
                    <div className="part-txt">
                      <span className="name">Wireless Headphone</span>
                      <span>1 <i className="fa-regular fa-xmark" /> $5.00</span>
                    </div>
                  </a>
                  <button className="delete-btn"><i className="fa-regular fa-trash-can" /></button>
                </li>
              </ul>
              <div className="total">
                <p>Subtotal: <span>$15:00</span></p>
              </div>
              <div className="btn-box">
                <a href="#" className="def-btn">View Cart</a>
                <a href="#" className="def-btn">Checkout</a>
              </div>
            </div>
          </div>
          {/*------------------------------- HEADER CART LIST END -------------------------------*/}
          {/*------------------------------- HEADER WISH LIST START -------------------------------*/}
          <div className="header-cart-wrap rev-7-header-cart-wrap" id="headerWishWrap">
            <div className="cart-list">
              <div className="title">
                <h3>Wish List</h3>
                <button className="wish-close"><i className="fa-regular fa-xmark" /></button>
              </div>
              <ul>
                <li>
                  <a href="#">
                    <div className="part-img">
                      <img src="assets/assets/images/feat-product-3.jpg" alt="Image" />
                    </div>
                    <div className="part-txt">
                      <span className="name">Diamond wedding ring</span>
                      <span>1 <i className="fa-regular fa-xmark" /> $5.00</span>
                    </div>
                  </a>
                  <button className="delete-btn"><i className="fa-regular fa-trash-can" /></button>
                </li>
                <li>
                  <a href="#">
                    <div className="part-img">
                      <img src="assets/assets/images/feat-product-2.jpg" alt="Image" />
                    </div>
                    <div className="part-txt">
                      <span className="name">Living Summer Chair</span>
                      <span>1 <i className="fa-regular fa-xmark" /> $5.00</span>
                    </div>
                  </a>
                  <button className="delete-btn"><i className="fa-regular fa-trash-can" /></button>
                </li>
                <li>
                  <a href="#">
                    <div className="part-img">
                      <img src="assets/assets/images/feat-product-10.jpg" alt="Image" />
                    </div>
                    <div className="part-txt">
                      <span className="name">Wireless Headphone</span>
                      <span>1 <i className="fa-regular fa-xmark" /> $5.00</span>
                    </div>
                  </a>
                  <button className="delete-btn"><i className="fa-regular fa-trash-can" /></button>
                </li>
              </ul>
              <div className="total">
                <p>Subtotal: <span>$15:00</span></p>
              </div>
              <div className="btn-box">
                <a href="#" className="def-btn">View Wish List</a>
                <a href="#" className="def-btn">Add All To Cart</a>
              </div>
            </div>
          </div>
          {/*------------------------------- HEADER WISH LIST END -------------------------------*/}
          <div className="header-banner-bg-wrapper">
            {/*------------------------------- HEADER SECTION START -------------------------------*/}
            <div className="header rev-7-header">
              <div className="top-header">
                <div className="container">
                  <div className="row">
                    <div className="col-xxl-6 col-xl-7 col-lg-7" style={{paddingTop: '10px'}}>
                      <div className="top-header-link d-lg-flex d-none">
                        <span>Store Location: 1234 Heaven Stress, Beverly Hill, Melbourne, USA.</span>
                      </div>
                    </div>
                    <div className="col-xxl-6 col-xl-5 col-lg-5">
                      <ul className="top-header-link justify-content-lg-end justify-content-center"> 
                        <li>
                          <select name="currency" id="currency" className="select">
                            <option value="USD">Dollar(USD)</option>
                            <option value="USD">Ruble(RUB)</option>
                            {/* <option value="BDT">Taka (BDT)</option> */}
                          </select>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bottom-header-bg">
                <div className="container">
                  <div className="bottom-header">
                    <div className="container">
                      <div className="row justify-content-center justify-content-sm-between align-items-center g-lg-4 g-0">
                        <div className="col-lg-2 col-md-3 col-sm-3 col-5">
                          <div className="logo">
                            <a href="#">
                              <img src="assets/assets/images/logos/logo-6.png" alt="logo" style={{maxWidth: '148% !important'}} />
                            </a>
                          </div>
                        </div>
                        <div className="col-xxl-5 col-lg-6 col-md-6 col-sm-5 col-12 search-col">
                          <div className="header-search">
                            <form>
                              <div className="wrap">
                                <select name="category" className="select">
                                  <option value>All Categories</option>
                                  <option value={1}>Women's Fashion</option>
                                  <option value={2}>Men's Fashion</option>
                                  <option value={3}>Photography </option>
                                  <option value={4}>Watches &amp; Accessories</option>
                                  <option value={5}>TV &amp; Home Appliances</option>
                                  <option value={6}>Bags &amp; Shoes</option>
                                  <option value={7}>Toys , Kids &amp; Babies</option>
                                  <option value={8}>Headphone</option>
                                </select>
                                <span className="devider" />
                                <input type="search" name="search" placeholder="What do you need?" />
                              </div>
                              <button type="submit">
                                <span><i className="fa-light fa-magnifying-glass" /></span>
                              </button>
                            </form>
                          </div>
                        </div>
                        <div className="col-xxl-5 col-lg-4 col-md-3 col-sm-4 col-7">
                          <ul className="bottom-header-right d-flex align-items-center justify-content-end">
                            <li className="header-cart-options">
                              <a role="button" className="search-open d-sm-none"><i className="fa-light fa-magnifying-glass" /></a>
                              <a href="login.html" className="compare-list-btn">
                                Sign in
                              </a>
                              <a href="#" className="compare-list-btn">
                                /
                              </a>
                              <a href="user-signup.html" className="compare-list-btn">
                                Sign up
                              </a>
                              <a href="#" className="compare-list-btn">
                                <i className="fa-light fa-shuffle" />
                              </a>
                              <a role="button" className="wish-list-btn">
                                <i className="fa-light fa-heart" />
                                <span className="quantity">02</span>
                              </a>
                              <a role="button" className="cart-list-btn">
                                <i className="fa-light fa-cart-shopping" />
                                <span className="quantity">03</span>
                              </a>
                            </li>
                            <li className="user-short-info">
                              <span className="user-name d-lg-inline-block d-none" />                                           
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="menu-bar">
                    <div className="container">
                      <div className="row align-items-center">                                
                        <div className="col-xl-6 col-lg-6">
                          <nav className="navbar navbar-expand-lg">
                            <div className="container-fluid">
                              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon" />
                              </button>
                              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <nav id="revel-mobile-menu" className="revel-mobile-menu">
                                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item ">
                                      <a className="nav-link " href="index.html" id="homeDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Home
                                      </a>
                                    </li>
                                    <li className="nav-item dropdown">
                                      <a className="nav-link dropdown-toggle" href="#">New Products</a>
                                      <ul className="dropdown-menu" aria-labelledby="shopDropdown">
                                        <li><a className="dropdown-item" href="health-&-beauty.html">Health &amp; Beauty</a></li>
                                        <li><a className="dropdown-item" href="home-services.html">Home Services</a></li>
                                        <li><a className="dropdown-item" href="fashion.html">Fashion</a></li>
                                        <li><a className="dropdown-item" href="sports.html">Sports</a></li>
                                      </ul>
                                    </li>
                                    <li className="nav-item dropdown">
                                      <a className="nav-link dropdown-toggle" href="#" id="shopDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Discount Coupons
                                      </a>
                                      <ul className="dropdown-menu" aria-labelledby="shopDropdown">
                                        <li><a className="dropdown-item" href="salon-&-spa.html">Salon &amp; Spa</a></li>
                                        <li><a className="dropdown-item" href="food-&-drink.html">Food &amp; Drink</a></li>
                                        <li><a className="dropdown-item" href="clothing.html">Clothing</a></li>
                                        <li><a className="dropdown-item" href="home-appliances-coupons.html">Home Appliances</a></li>
                                        <li><a className="dropdown-item" href="fun-&-entertainment.html">Fun &amp; Entertainment</a></li>
                                        <li><a className="dropdown-item" href="sports-&-fitness.html">Sports &amp; Fitness</a></li>
                                        <li><a className="dropdown-item" href="department-stores.html">Department Stores</a></li>
                                      </ul>
                                    </li>
                                    <li className="nav-item dropdown">
                                      <a className="nav-link dropdown-toggle" href="#" id="pageDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Aftermarket
                                      </a>
                                      <ul className="dropdown-menu" aria-labelledby="pageDropdown">
                                        <li><a className="dropdown-item" href="home-appliances.html">Home Appliances</a></li>
                                        <li><a className="dropdown-item" href="automotive.html">Automotive</a></li>
                                        <li><a className="dropdown-item" href="furniture-&-home-decor.html">Furniture &amp; Home decor</a></li>
                                        <li><a className="dropdown-item" href="kids-entertainment.html">Kids Entertainment</a></li>  
                                      </ul>
                                    </li>
                                    <li className="nav-item dropdown">
                                      <a className="nav-link dropdown-toggle" href="#" id="blogDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Listings
                                      </a>
                                      <ul className="dropdown-menu" aria-labelledby="blogDropdown">
                                        <li><a className="dropdown-item" href="rent-a-chair-in-salon.html">Rent a Chair in Salon</a></li>
                                        <li><a className="dropdown-item" href="rent-a-house.html">Rent a House / Room</a></li>
                                        <li><a className="dropdown-item" href="rent-an-office.html">Rent an Office</a></li>
                                        <li><a className="dropdown-item" href="buying-&-selling.html">Buying &amp; Selling</a></li>
                                      </ul>
                                    </li>
                                    <li className="nav-item dropdown">
                                      <a className="nav-link dropdown-toggle" href="#" id="blogDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Services
                                      </a>
                                      <ul className="dropdown-menu" aria-labelledby="blogDropdown">
                                        <li><a className="dropdown-item" href="digital-world.html">Digital Services</a></li>
                                        <li><a className="dropdown-item" href="beauty-&-spa.html">Beauty &amp; Spa</a></li>
                                        <li><a className="dropdown-item" href="things-to-do.html">Things to do</a></li>
                                        <li><a className="dropdown-item" href="restaurant.html">Restaurant</a></li>
                                        <li><a className="dropdown-item" href="hotels-&-travels.html">Hotels &amp; Travels</a></li>
                                        <li><a className="dropdown-item" href="health-&-fitness.html">Health &amp; Fitness</a></li>
                                      </ul>
                                    </li>
                                    <li className="nav-item dropdown">
                                      <a className="nav-link dropdown-toggle" href="#" id="blogDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Consultations
                                      </a>
                                      <ul className="dropdown-menu" aria-labelledby="blogDropdown">
                                        <li><a className="dropdown-item" href="aromatherapy.html">Aromatherapy</a></li>
                                        <li><a className="dropdown-item" href="medical-services.html">Medical Services</a></li>
                                        <li><a className="dropdown-item" href="orthopaedic-therapy.html">Orthopaedic Therapy</a></li>
                                        <li><a className="dropdown-item" href="restaurant.html">Restaurant</a></li>
                                        <li><a className="dropdown-item" href="dance-sessions.html">	Dance Sessions</a></li>
                                        <li><a className="dropdown-item" href="fitness-classes.html">Fitness Classes</a></li>
                                      </ul>
                                    </li>
                                  </ul>
                                </nav>
                              </div>
                            </div>
                          </nav>
                        </div>
                        <div className="col-lg-3">
                          <div className="live-chat">
                            <div className="icon">
                              <img src="assets/assets/images/icons/help-center-icon.png" alt="icon" />
                            </div>
                            <div className="txt">
                              <span className="d-block">Hotline Free:</span>
                              <a className="d-block" href="tel:+997509153">(+100) 123 456 7890)</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*------------------------------- HEADER SECTION END -------------------------------*/}
            
            
           
            
            </div>
        </div>
        
      </div>
        );
      }
    

export default Header;
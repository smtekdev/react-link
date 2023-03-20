// import React from 'react';
// import ReactDOM from 'react-dom';
// import Header from './pages/Header';
// import Home from './pages/Home';
// import Footer from './pages/Footer';
// import logo from './logo.svg';
// import App from './App';
import React from "react"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Aromatherapy from "./pages/Aromatherapy"
import Automotive from "./pages/Automotive"
import BeautySpa from "./pages/BeautySpa"
import Benhaul from "./pages/Benhaul"
import Buying$selling from "./pages/Buying$selling"
import Cartergrayson from "./pages/Cartergrayson"
import Chicagoland$counselors from "./pages/Chicagoland$counselors"
import Clothing from "./pages/Clothing"
import Commando$machine from "./pages/Commando$machine"
import Costco$promo$code from "./pages/Costco$promo$code"
import Crosstown$fitness$classes from "./pages/Crosstown$fitness$classes"
import Dance$sessions from "./pages/Dance$sessions"
import Dance$sip$fitness$session from "./pages/Dance$sip$fitness$session"
import Department$stores from "./pages/Department$stores"
import Digital$world from "./pages/Digital$world"
import Discount$coupon from "./pages/Discount$coupon"
import Fashion from "./pages/Fashion"
import Fitness$classes from "./pages/Fitness$classes"
import Food$drink from "./pages/Food$drink"
import Footer from "./pages/Footer"
import Fun$entertainment from "./pages/Fun$entertainment"
import Furniture$home$decor from "./pages/Furniture$home$decor"
import Harry$donald from "./pages/Harry$donald"
import Headband$foldable from "./pages/Headband$foldable"
import Header from "./pages/Header"
import Health$and$fitness from "./pages/Health$and$fitness"
import Health$beauty from "./pages/Health$beauty"
import Home$appliances from "./pages/Home$appliances"
import Home$appliances$coupons from "./pages/Home$appliances$coupons"
import Home$services from "./pages/Home$services"
import Hotels$travels from "./pages/Hotels$travels"
import James$lincoln from "./pages/James$lincoln"
import John$ceamus from "./pages/John$ceamus"
import Kids$entertainment from "./pages/Kids$entertainment"
import Listing from "./pages/Listing"
import Login from "./pages/Login"
import Medical$services from "./pages/Medical$services"
import Orthopaedic$therapy from "./pages/Orthopaedic$therapy"
import Rent$chair$in$salon from "./pages/Rent$chair$in$salon"
import Rent$chair$in$salon$2 from "./pages/Rent$chair$in$salon$2"
import Rent$house from "./pages/Rent$house"
import Rent$office from "./pages/Rent$office"
import Restaurant from "./pages/Restaurant"
import Robert$kane from "./pages/Robert$kane"
import Salon$and$spa from "./pages/Salon$and$spa"
import Saptherapy$physical$rehab from "./pages/Saptherapy$physical$rehab"
import Seller from "./pages/Seller"
import Seller$login from "./pages/Seller$login"
import Services from "./pages/Services"
import Shop from "./pages/Shop"
import Sports from "./pages/Sports"
import Sports$fitness from "./pages/Sports$fitness"
import Things$to$do from "./pages/Things$to$do"
import Travel$tour from "./pages/Travel$tour"
import User$dashboard from "./pages/User$dashboard"
import User$signup from "./pages/User$signup"
import Vendor$signup from "./pages/Vendor$signup"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="Home" element={ <Home/> } />
        <Route path="Aromatherapy" element={ <Aromatherapy/> } />
        <Route path="Automotive" element={ <Automotive/> } />
        <Route path="BeautySpa" element={ <BeautySpa/> } />
        <Route path="Benhaul" element={ <Benhaul/> } />
        <Route path="Buying$selling" element={ <Buying$selling/> } />
        <Route path="Cartergrayson" element={ <Cartergrayson/> } />
        <Route path="Chicagoland$counselors" element={ <Chicagoland$counselors/> } />
        <Route path="Clothing" element={ <Clothing/> } />
        <Route path="Commando$machine" element={ <Commando$machine/> } />
        <Route path="Costco$promo$code" element={ <Costco$promo$code/> } />
        <Route path="Crosstown$fitness$classes" element={ <Crosstown$fitness$classes/> } />
        <Route path="Dance$sessions" element={ <Dance$sessions/> } />
        <Route path="Dance$sip$fitness$session" element={ <Dance$sip$fitness$session/> } />
        <Route path="Department$stores" element={ <Department$stores/> } />
        <Route path="Digital$world" element={ <Digital$world/> } />
        <Route path="Discount$coupon" element={ <Discount$coupon/> } />
        <Route path="Fashion" element={ <Fashion/> } />
        <Route path="Fitness$classes" element={ <Fitness$classes/> } />
        <Route path="Food$drink" element={ <Food$drink/> } />
        <Route path="Footer" element={ <Footer/> } />
        <Route path="Fun$entertainment" element={ <Fun$entertainment/> } />
        <Route path="Furniture$home$decor" element={ <Furniture$home$decor/> } />
        <Route path="Harry$donald" element={ <Harry$donald/> } />
        <Route path="Headband$foldable" element={ <Headband$foldable/> } />
        <Route path="Header" element={ <Header/> } />
        <Route path="Health$and$fitness" element={ <Health$and$fitness/> } />
        <Route path="Health$beauty" element={ <Health$beauty/> } />
        <Route path="Home$appliances" element={ <Home$appliances/> } />
        <Route path="Home$appliances$coupons" element={ <Home$appliances$coupons/> } />
        <Route path="Home$services" element={ <Home$services/> } />
        <Route path="Hotels$travels" element={ <Hotels$travels/> } />
        <Route path="James$lincoln" element={ <James$lincoln/> } />
        <Route path="John$ceamus" element={ <John$ceamus/> } />
        <Route path="Kids$entertainment" element={ <Kids$entertainment/> } />
        <Route path="Listing" element={ <Listing/> } />
        <Route path="Login" element={ <Login/> } />
        <Route path="Medical$services" element={ <Medical$services/> } />
        <Route path="Orthopaedic$therapy" element={ <Orthopaedic$therapy/> } />
        <Route path="Rent$chair$in$salon" element={ <Rent$chair$in$salon/> } />
        <Route path="Rent$chair$in$salon$2" element={ <Rent$chair$in$salon$2/> } />
        <Route path="Rent$house" element={ <Rent$house/> } />
        <Route path="Rent$office" element={ <Rent$office/> } />
        <Route path="Restaurant" element={ <Restaurant/> } />
        <Route path="Robert$kane" element={ <Robert$kane/> } />
        <Route path="Salon$and$spa" element={ <Salon$and$spa/> } />
        <Route path="Saptherapy$physical$rehab" element={ <Saptherapy$physical$rehab/> } />
        <Route path="Seller" element={ <Seller/> } />
        <Route path="Seller$login" element={ <Seller$login/> } />
        <Route path="Services" element={ <Services/> } />
        <Route path="Shop" element={ <Shop/> } />
        <Route path="Sports" element={ <Sports/> } />
        <Route path="Sports$fitness" element={ <Sports$fitness/> } />
        <Route path="Things$to$do" element={ <Things$to$do/> } />
        <Route path="Travel$tour" element={ <Travel$tour/> } />
        <Route path="User$dashboard" element={ <User$dashboard/> } />
        <Route path="User$signup" element={ <User$signup/> } />
        <Route path="Vendor$signup" element={ <Vendor$signup/> } />
      </Routes>
    </div>
  )
}





// Below is render to call pages at same time

// ReactDOM.render(
//   <>
//   <Header/>
//   <Home/>
//   <Footer/>
//   </>,

// document.getElementById('root')
// );




export default App;

import Home from './pages/home';
// import logo from './logo.svg';
import './App.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Header from './pages/header';
import Footer from './pages/footer';



{/* <Router>
      <Header/>      
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/users" component={Users} />
        <Route path="/contact" component={Contact} />
        <Route component={Notfound} />
      </Switch>
      <Footer/>
</Router> */}



function App() {
    return <Home/>;
    return <Header/>;
    return <Footer/>;
}

export default App;

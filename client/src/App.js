import React from "react";
// import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from "react-router-dom";

//import css in order
import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.css';
// import './img/icons/css/ionicons.css';
// import './img/font-awesome/css/font-awesome.css';
// import 'lightbox2/dist/css/lightbox.min.css'
import './css/generalstyle.css';


//import js libraries

// import * as serviceWorker from './serviceWorker';

//import components
import {Coalesce} from 'ambient-cbg';

//import pages
import Navbar from './containers/Navbar.js';
import ProtectedRoute from "./routes/ProtectedRoute";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import HomePage from "./pages/UserPage";
import Contact from "./pages/ContactPage";
import About from "./pages/AboutPage";


function App() {
  return (
    <div>
       <Coalesce/>
          <BrowserRouter>
      <Switch>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route exact path="/signup">
          <SignupPage />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <ProtectedRoute exact path="/">
          <HomePage />
        </ProtectedRoute>
      </Switch>
    </BrowserRouter>
    </div>

  );
}



export default App;


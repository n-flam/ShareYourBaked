import React from "react";
// import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from "react-router-dom";

//import css in order
import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.css';
// import './img/icons/css/ionicons.css';
// import 'lightbox2/dist/css/lightbox.min.css'
import './css/general-style.css';
import './css/pages.css';
import './css/container-general.css';
import './css/components-general.css';

//import js libraries

// import * as serviceWorker from './serviceWorker';

//import components
import {Shift} from 'ambient-cbg';

//import pages
// import Navbar from './containers/Navbar.js';
import ProtectedRoute from "./routes/ProtectedRoute";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import UserPage from "./pages/UserPage";
import Contact from "./pages/ContactPage";
import About from "./pages/AboutPage";


function App() {
  return (
    <div>
       <Shift/>
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
          <UserPage />
        </ProtectedRoute>
      </Switch>
    </BrowserRouter>
    </div>

  );
}

export default App;


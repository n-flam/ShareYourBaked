import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import ProtectedRoute from "./routes/ProtectedRoute";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import HomePage from "./pages/HomePage";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route exact path="/signup">
          <SignupPage />
        </Route>
        <ProtectedRoute exact path="/">
          <HomePage />
        </ProtectedRoute>
        <ProtectedRoute exact path="/contact">
          <Contact />
        </ProtectedRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

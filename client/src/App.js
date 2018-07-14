import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import Main from "./containers/Main";
import Events from './containers/Events';
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const App = () => (
  <Router>
    <div>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route path="/events/:event" component={Events} />
        <Route path="/events" component={Events} />
        <Route component={Main} />
      </Switch>
      <Footer />
    </div>
  </Router>
);

export default App;

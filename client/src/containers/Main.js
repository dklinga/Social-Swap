import React, {Component} from "react";
import {Redirect} from "react-router-dom";
import API from "../utils/API";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

class Main extends Component {
  state = {
    isLoggedIn: true,
    username: ""
  }

  // Check login status on load
  componentDidMount() {
    this.loginCheck();
  }

  // Check login status
  loginCheck = () => {
    API
      .loginCheck()
      .then(res => this.setState({
        isLoggedIn: res.data.isLoggedIn, username: res.data.username
      }))
      .catch(err => {
        console.log(err);
        this.setState({isLoggedIn: false})
      })
  }

  render() {
    
    // If user isn't logged in, don't let them see this page
    if (!this.state.isLoggedIn) {
      return <Redirect to="/login"/>
    }

    return (
      <div>
      <Hero backgroundImage="https://cdn.makeawebsitehub.com/wp-content/uploads/2016/04/social_media.jpg">
        <h1>Social Swap</h1>
        <h2>The One Stop Shop for Networking!</h2>
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1 class="text-center">Welcome To Social Swap!</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <p class="text-center">
  This can be the landing page with a short description of what the app does.
            </p>
          </Col>
        </Row>
        <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
        </div>
      </div>
    </nav>
    <div className="container alert alert-dark">
<Container style={{ marginTop: 30 }}>
<div className="row mt-5 mx-auto text-center content-row">
<div className="col-md-6 col-sm-6">
  <h3 className="mb-4 page-text">Create an Event</h3>
  <button className="btn btn-warning mr-2" id="newEventButton" type="button">New Event</button>
  <span id="newEventCode"></span>
</div>
<div className="col-md-4 col-sm-4">
  <h3 className="mb-4 page-text">Join an Event</h3>
  <div className="input-group">
    <input type="text" className="form-control" id="eventInput" placeholder="Event Code" />
    <div className="input-group-append">
      <button className="btn btn-outline-primary" id="joinEventButton" type="button">Submit</button>
    </div>
  </div>
</div>
</div>

</Container>


    </div>
      </Container>
    </div>
    )
  }
}

export default Main;
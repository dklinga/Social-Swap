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
    username: "",
    eventCode: "",
    codeInput: ""
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

  // randomly generate 4 char event code
  // only works syncronously
  // codeGenerator = () => {
  //   const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZ";
  //   let eventCode = '';
  //   for (let i = 0; i < 4; i++) {
  //     let rnum = Math.floor(Math.random() * chars.length);
  //     eventCode += chars.substring(rnum, rnum + 1);
  //   }
  //   this.setState({eventCode: eventCode});
  //   // return eventCode;
  //   console.log(eventCode);
  // }

  handleInputChange = event => {
    console.log(event.target.value);
    const value = event.target.value;
    this.setState({ 
        codeInput: value
    });
  };

  // displays newly created event code
  handleCreateEventSubmit = (event) => {
    event.preventDefault();
    // this.codeGenerator();
    const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZ";
    let eventCode = '';
    for (let i = 0; i < 4; i++) {
      let rnum = Math.floor(Math.random() * chars.length);
      eventCode += chars.substring(rnum, rnum + 1);
    }
    this.setState({eventCode: eventCode});
    API
      .createEvent({
        Code: eventCode
      })
  }

  handleJoinEventSubmit = event => {
    event.preventDefault();
    API
      .joinEvent(this.state.codeInput);
    window.location.assign(`/events/${this.state.codeInput}`);
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
              <h1 className="text-center">Welcome To Social Swap!</h1>
            </Col>
          </Row>
          <Row>
            <Col size="md-12">
              <p className="text-center">
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
            <Container style={{ marginTop: 30, marginBottom: 30 }}>
              <div className="row mx-auto text-center content-row">
                <div className="col-md-6 col-sm-6">
                  <h3 className="mb-4 page-text">Create an Event</h3>
                  <button className="btn btn-warning mr-2"        
                    id="newEventButton" 
                    type="button"
                    onClick={this.handleCreateEventSubmit}
                    >New Event</button>
                  <span id="newEventCode">{this.state.eventCode}</span>
                </div>
                <div className="col-md-4 col-sm-4">
                  <h3 className="mb-4 page-text">Join an Event</h3>
                  <div className="input-group">
                    <input 
                      type="text" 
                      name="code-input"
                      // value={this.state.codeInput}
                      className="form-control" 
                      // id="eventInput" 
                      placeholder="Event Code"
                      onChange={this.handleInputChange} />
                    <div className="input-group-append">
                      <button 
                        className="btn btn-outline-primary" 
                        id="joinEventButton" 
                        type="button"
                        onClick={this.handleJoinEventSubmit}
                        >Submit</button>
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
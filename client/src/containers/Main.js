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
    codeInput: "",
    goToEvent: false
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

  // handle input change for state
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
    const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZ";
    let eventCode = '';
    for (let i = 0; i < 4; i++) {
      let rnum = Math.floor(Math.random() * chars.length);
      eventCode += chars.substring(rnum, rnum + 1);
    }
    // creates event in db
    this.setState({eventCode: eventCode});
    API
      .createEvent({
        Code: eventCode
      })
  }

  // check to see if event exist
  // send user to event page if event exist
    // else display error message
  // edit url to display event path
  handleJoinEventSubmit = event => {
    event.preventDefault();
    API
      .checkIfEventExist(this.state.codeInput)
      .then(
        setTimeout(() => { this.addUserHelper() }, 500)
      )
      .catch(err => {
        console.log(err);
        // error modal
      })
    setTimeout(() => { this.setState({goToEvent: true}) }, 800);
  }

  addUserHelper = () => {
    API
      .findByUserName(this.state.username)
      .then(res => {
        API
          .addUserToEvent(this.state.codeInput, res.data)
      })
  }

  render() {    
    // If user isn't logged in, don't let them see this page
    if (!this.state.isLoggedIn) {
      return <Redirect to="/login"/>
    }

    // on join submit, 
    if (this.state.goToEvent) {
      return <Redirect to={{
        pathname: `/events/${this.state.codeInput}`,
      }}
      />
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
              <h1 className="text-center">Create or Join an Event!</h1>
            </Col>
          </Row>
          <Row>
            <Col size="md-12">
              <p className="text-center">Click 'New Event' to create a new event.</p>
              <p className="text-center">Enter a 4 character code to join an event.</p>
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
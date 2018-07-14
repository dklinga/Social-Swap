import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import API from "../utils/API";
import Hero from "../components/Hero";
import Cards from '../components/Card';

class Events extends Component {
  state = {
    isLoggedIn: true,
    username: "",
    event: "",
    eventUsers: []
  }

  // Check login status on load
  componentDidMount() {
    this.loginCheck();
    this.handleEvent(this.props.match.params.event);
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

  handleEvent = (code) => {
    this.setState({event: code})
    // TODO: figure out error message for no event
      API
        .getEventUsers(code)
        .then(res => {
          console.log(res.data[0]._users);
          this.setState({eventUsers: res.data[0]._users})
        })
  }

  render() {
    if (!this.state.isLoggedIn) {
      return <Redirect to="/login"/>
    }

    return (
      <div> 
        <Hero backgroundImage="https://cdn.makeawebsitehub.com/wp-content/uploads/2016/04/social_media.jpg">
          <h1>Social Swap</h1>
          <h2>The One Stop Shop for Networking!</h2>
        </Hero>

        <div className="container my-5">
          <div className="row justify-content-center">
            <h1>{this.state.event}</h1>
          </div>
          <div className="row">
          {/* add users here */}
          <Cards eventUsers={this.state.eventUsers}/>
          </div>
        </div>
      </div>
    )
  }
}

export default Events;
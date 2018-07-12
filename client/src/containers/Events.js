import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import API from "../utils/API";
import Hero from "../components/Hero";

class Events extends Component {
  state = {
    isLoggedIn: true,
    username: "",
    event: "",
  }

  // Check login status on load
  componentDidMount() {
    this.loginCheck();

    // this.timerID = setInterval(
    //   () => this.eventCheck(), 50
    // );
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

  checkEvents = () => {
    API
      .getEventUsers()
  }
  // eventCheck = () => {
  //   API
  //     .searchEvents(this.state.username)
  //     .then(res => this.setState({
  //       event: res.data.code
  //     }))
  //     .catch(err => {
  //       console.log(err);
  //     })
  //   clearInterval(this.timerID);
  // }

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
        </div>
      </div>
    )
  }
}

export default Events;
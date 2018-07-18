import React, {Component} from "react";
import {Redirect} from "react-router-dom";
import API from "../utils/API";


class Logout extends Component {
  state = {
    isLoggedIn: false,
    username: "",
    password: "",
  }

    // Check login status on load
    componentDidMount() {
      // this.loginCheck();
      this.logout();
    }
  
    // Check login status
    // loginCheck = () => {
    //   API
    //     .loginCheck()
    //     .then(res => this.setState({
    //       isLoggedIn: res.data.isLoggedIn, username: res.data.username
    //     }))
    //     .catch(err => {
    //       console.log(err);
    //       this.setState({isLoggedIn: false})
    //     })
    // }

  logout = () => {
    // e.preventDefault();
    API
      .logout({username: this.state.username, password: this.state.password})
      .then(res => {
        // console.log(res.data);
        this.setState({isLoggedIn: res.data})

      })
      .catch(err => console.log(err.response));
  }

  render() { 
    // if (!this.state.isLoggedIn) {
      return <Redirect to="/login"/>
      // }
    }
  }
  
  export default Logout;
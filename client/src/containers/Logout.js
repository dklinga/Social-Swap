import React, {Component} from "react";
import {Redirect} from "react-router-dom";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import API from "../utils/API";


class Logout extends Component {
  state = {
    isLoggedIn: false,
    username: "",
    password: "",
    redirect: false
  }

    componentDidMount() {
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
        this.setState({isLoggedIn: res.data})

      })
      .catch(err => console.log(err.response));
    setTimeout(() => { this.setState({redirect: true}) }, 800);
  }

  render() { 
    if (this.state.redirect) {
      return <Redirect to="/login"/>
    }

      return (
        <div>
          <div className="container-fluid mt-5">
            <div className="row justify-content-center">
              <h1>Logging you out....</h1>
            </div>
          </div>
        </div>
      ) 
    }
  }
  
  export default Logout;
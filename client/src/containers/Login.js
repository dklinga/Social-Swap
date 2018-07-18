import React, {Component} from "react";
import {Redirect} from "react-router-dom";
import API from "../utils/API";
import Hero from "../components/Hero";
// import Container from "../components/Container";
import Carousel from 'nuka-carousel';

class Login extends Component {
  state = {
    isLoggedIn: false,
    username: "",
    password: "",
  }

  handleInputChange = e => {
    const { name, value } = e.target;

    this.setState({
      [name]: value
    })
  }

  // Method to handle user login, should redirect to main page when done
  login = (e) => {
    e.preventDefault();
    API
      .login({username: this.state.username, password: this.state.password})
      .then(res => {
        // console.log(res.data);
        this.setState({isLoggedIn: res.data})

      })
      .catch(err => console.log(err.response));
  }

  render() {
    // If user is logged in, take them to main page
    if (this.state.isLoggedIn) {
      return <Redirect to="/"/>
    }

    return (
      <div> 
      <Hero backgroundImage="https://cdn.makeawebsitehub.com/wp-content/uploads/2016/04/social_media.jpg">
      <h1>Social Swap</h1>
      <h2>The One Stop Shop for Networking!</h2>
    </Hero>

      <div className="container my-5">
        <div className="row justify-content-left">
        <div className="col-sm-4">
          <form>
            <h3>Login!</h3>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                value={this.state.username}
                onChange={this.handleInputChange}
                className="form-control"
                placeholder="Username"/>
              <small id="usernameHelp" className="form-text text-muted">Enter your username</small>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleInputChange}
                className="form-control"
                placeholder="Password"
              />
            </div>

            <button type="submit" className="btn btn-success" onClick={this.login}>Login</button>
            <div>
            <span>Don't have an account?<a href="/signup"> Signup</a></span>
            </div>
          </form>
          </div>

          <div className="col-sm-8">
            <Carousel>
              <img src="https://venturebeat.com/wp-content/uploads/2017/07/untitled-design.jpg?fit=578%2C409&strip=all" alt="carousel-1" />
              <img src="https://cdn.makeawebsitehub.com/wp-content/uploads/2016/04/social_media.jpg" alt="carousel-2" />
              <img src="https://image.freepik.com/free-vector/social-network-background-with-icons_23-2147497535.jpg" alt="carousel-3" />
            </Carousel>
    
          </div>

        </div>
      </div>
      </div>
    )
  }
}

export default Login;
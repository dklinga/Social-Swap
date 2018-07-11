import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import API from "../utils/API";
import Hero from "../components/Hero";

class Login extends Component {
  state = {
    success: false,
    username: "",
    password: ""
  }
  
  handleInputChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name] : value
    })
  }

  // Method to register a new user
  register = (e) => {
    e.preventDefault();
    API
      .register({ username: this.state.username, password: this.state.password })
      .then(res => {
        console.log(res.data);
        this.setState({ success: res.data })

      })
      .catch(err => console.log(err.response.data));
  }

  render() {
    // If Signup was a success, take them to the Login page
    if (this.state.success) {
      return <Redirect to="/login" />
    }

    return (

      <div> 
      <Hero backgroundImage="https://cdn.makeawebsitehub.com/wp-content/uploads/2016/04/social_media.jpg">
      <h1>Social Swap</h1>
      <h2>The One Stop Shop for Networking!</h2>
    </Hero>

      <div className="container my-5">
        {/* <div className="row justify-content-left"> */}
          <form>
            <h3>Sign Up!</h3>
            <div className="form-row">
              <div className="col-md-5">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  name="username"
                  value={this.state.username}
                  onChange={this.handleInputChange}
                  className="form-control"
                  placeholder="Username" />
                <small id="usernameHelp" className="form-text text-muted">Enter your username</small>
              </div>
              <div className="col-md-5">
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
              <div className="col-md-2">
                {/* <button type="submit" className="btn btn-success" onClick={this.register}>Sign Up!</button> */}
              </div>
            </div>
          </form>
        {/* </div> */}
      </div>
      <div className="container my-5">
      <h3>Update Profile!</h3>
      <form> 
      <div className="form-row">
        <div className="col-md-6 mb-3">
          <label for="nameInput">Name</label>
          <input type="text" class="form-control" id="nameInput" placeholder="Name" required />
          <div className="invalid-feedback">
            Please provide your name
          </div>
        </div>
    
        <div className="col-md-6 mb-3">
          <label for="photoInput">Upload a Photo</label>
          <div className="custom-file">
            <input type="file" class="custom-file-input" id="userPhoto" />
            <label className="custom-file-label" for="userPhoto">Choose file</label>
          </div>
        </div>
      </div>
   
      <div className="form-row">
        <div className="col-md-6 mb-3">
          <label for="emailInput">Email</label>
          <input type="text" class="form-control" id="emailInput" placeholder="Email" required />
          <div className="invalid-feedback">
            Please provide your email address
          </div>
        </div>
    
        <div className="col-md-4 mb-3">
          <label for="phoneInput">Phone Number</label>
          <input type="text" className="form-control" id="phoneInput" placeholder="555-222-1337" />
        </div>
      </div>
  
      <div className="form-row">
        <div className="col-md-3 mb-3">
          <label for="twitterInput">Twitter</label>
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text" id="inputGroupPrepend">@</span>
            </div>
            <input type="text" className="form-control" id="twitterInput" placeholder="jimbosmith" aria-describedby="inputGroupPrepend" />
          </div>
        </div>
    
        <div className="col-md-3 mb-3">
          <label for="facebookInput">Facebook</label>
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text" id="inputGroupPrepend">facebook.com/</span>
            </div>
            <input type="text" className="form-control" id="facebookInput" placeholder="janesmith" aria-describedby="inputGroupPrepend" />
          </div>
        </div>
      
        <div className="col-md-3 mb-3">
          <label for="linkedInput">Linked In</label>
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text" id="inputGroupPrepend">linkedin.com/in/</span>
            </div>
            <input type="text" className="form-control" id="linkedInput" placeholder="willsmith" aria-describedby="inputGroupPrepend" />
          </div>
        </div>
  
        <div className="col-md-3 mb-3">
          <label for="githubInput">Github</label>
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text" id="inputGroupPrepend">github.com/</span>
            </div>
            <input type="text" className="form-control" id="githubInput" placeholder="cooljames" aria-describedby="inputGroupPrepend" />
          </div>
        </div>
      </div>
      <button 
        className="btn btn-primary mt-2" 
        id="contactInfoSubmit" 
        type="submit"
        onClick={this.register}
      >Submit</button>
    </form>
    </div>
      </div>
    )
  }
}

export default Login;
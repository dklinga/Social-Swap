import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import API from "../utils/API";
import Hero from "../components/Hero";

class Login extends Component {
  state = {
    isLoggedIn: true,
    success: false,
    username: "",
    password: "",
    name: "",
    photo: "",
    email: "",
    phone: "",
    twitter: "",
    fb: "",
    linked: "",
    github: "",

  }
  
  componentDidMount(){
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

  handleInputChange = event => {
    const { name, value } = event.target;
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

  addUserToDb = () => {
    API
      .findByUserName(this.username)
      .then(res => {
        console.log(res);
        // API.addUserToDb(res.data._id, {
        //   Name: this.state.name,
        //   Email: this.state.email,
        //   Photo: this.state.photo,
        //   Phone: this.state.phone,
        //   Twitter: this.state.twitter,
        //   Fb: this.state.fb,
        //   Link: this.state.linked,
        //   Git: this.state.github
        // })

      })
  }

  handleFormSubmit = (e) => {
    this.register(e);
    setTimeout(() => { this.addUserToDb() }, 500)
    // this.addUserToDb();
  }

  render() {
    // If Signup was a success, take them to the Login page
    if (this.state.success) {
      return <Redirect to="/login" />
    }

    // const to check if logged in

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
                  // ternary values?
                  value={this.state.username}
                  onChange={this.handleInputChange}
                  className="form-control"
                  // ternary placeholders ?
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
          <label htmlFor="nameInput">Name</label>
          <input 
          type="text" 
          className="form-control" 
          id="nameInput" 
          name="name"
          value={this.state.name}
          onChange={this.handleInputChange}
          placeholder="Name" 
          required />
          <div className="invalid-feedback">
            Please provide your name
          </div>
        </div>
    
        <div className="col-md-6 mb-3">
          <label htmlFor="photoInput">Upload a Photo</label>
          <div className="custom-file">
            <input 
            type="file" 
            className="custom-file-input" 
            id="userPhoto"
            name="photo"
            value={this.state.photo}
            onChange={this.handleInputChange}
             />
            <label className="custom-file-label" htmlFor="userPhoto">Choose file</label>
          </div>
        </div>
      </div>
   
      <div className="form-row">
        <div className="col-md-6 mb-3">
          <label htmlFor="emailInput">Email</label>
          <input 
          type="text" 
          className="form-control" 
          id="emailInput" 
          name="email"
          value={this.state.email}
          onChange={this.handleInputChange}
          placeholder="Email" 
          required />
          <div className="invalid-feedback">
            Please provide your email address
          </div>
        </div>
    
        <div className="col-md-4 mb-3">
          <label htmlFor="phoneInput">Phone Number</label>
          <input type="text" className="form-control" id="phoneInput" placeholder="555-222-1337" />
        </div>
      </div>
  
      <div className="form-row">
        <div className="col-md-3 mb-3">
          <label htmlFor="twitterInput">Twitter</label>
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text" id="inputGroupPrepend">@</span>
            </div>
            <input 
            type="text" 
            className="form-control" 
            id="twitterInput" 
            name="twitter"
            value={this.state.twitter}
            onChange={this.handleInputChange}
            placeholder="jimbosmith" 
            aria-describedby="inputGroupPrepend" />
          </div>
        </div>
    
        <div className="col-md-3 mb-3">
          <label htmlFor="facebookInput">Facebook</label>
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text" id="inputGroupPrepend">facebook.com/</span>
            </div>
            <input 
            type="text" 
            className="form-control" 
            id="facebookInput" 
            name="fb"
            value={this.state.fb}
            onChange={this.handleInputChange}
            placeholder="janesmith" 
            aria-describedby="inputGroupPrepend" />
          </div>
        </div>
      
        <div className="col-md-3 mb-3">
          <label htmlFor="linkedInput">Linked In</label>
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text" id="inputGroupPrepend">linkedin.com/in/</span>
            </div>
            <input 
            type="text" 
            className="form-control" 
            id="linkedInput" 
            name="linked"
            value={this.state.linked}
            onChange={this.handleInputChange}
            placeholder="willsmith" 
            aria-describedby="inputGroupPrepend" />
          </div>
        </div>
  
        <div className="col-md-3 mb-3">
          <label htmlFor="githubInput">Github</label>
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text" id="inputGroupPrepend">github.com/</span>
            </div>
            <input 
            type="text" 
            className="form-control" 
            id="githubInput" 
            name="github"
            value={this.state.github}
            onChange={this.handleInputChange}
            placeholder="cooljames" 
            aria-describedby="inputGroupPrepend" />
          </div>
        </div>
      </div>
      <button 
        className="btn btn-primary mt-2" 
        id="contactInfoSubmit" 
        type="submit"
        onClick={this.handleFormSubmit}
      >Submit</button>
    </form>
    </div>
      </div>
    )
  }
}

export default Login;
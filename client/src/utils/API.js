import axios from 'axios';

export default {
  /* 
    loginCreds = {username: "alex", "password": 12345Password!}
  */
  login: function(loginCreds) {
    return axios.post('/api/users/login', loginCreds)
  },
  /* 
    Path to check if user is logged in
  */
  loginCheck: function() {
    return axios.get('/api/users/login')
  },
  /* 
    Path to log out
  */
  logout: function() {
    return axios.get('/api/users/logout')
  },
  /* 
    Path to register new user, you can have more fields than this but "username" and "password" must exist

    userInfo = {
      username: "alex",
      password: 12345Password!
    }
  */
  register: function(userInfo) {
    console.log(userInfo);
    return axios.post("/api/users/register", userInfo)
  },

  // create event
  createEvent: function(code){
    return axios.post('/api/events', code)
  },

  // join event
  checkIfEventExist: function(code){
    return axios.get(`/api/events/${code}`)
  },

  // grab users from event
  getEventUsers: function(event) {
    return axios.get(`/api/events/all/${event}`)
  },

  // add user to event
  addUserToEvent: function(event, userInfo) {
    return axios.post(`/api/events/add/${event}`, userInfo)
  },

  // find user by username
  findByUserName: function(userId) {
    return axios.get(`/api/users/${userId}`)
  },

  // add user to db
  //addUserToDb: function(id, userInfo) {
    //return axios.put(`/api/users/${id}`, userInfo)
  //}

}
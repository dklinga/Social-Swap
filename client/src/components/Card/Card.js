import React from "react";
import "../Card/Card.css";

const Card = props => (
  <div className="main-card-div">
    {props.eventUsers.map(user => (
      <div key={user.id}>
        <div className="card">
          <div className="card-header bg-info"></div>
          <div className="card-body">
            <div className="header-div">
              <div className="user-photo-div">
                <img src={user.Photo} className="user-photo" alt="Card"/>
              </div>
              <div className="header-info">
                <h3>{user.Name}</h3>
                <h5>{user.Email}</h5>
                <p>{user.Phone}</p>
              </div>
            </div>
            <div className="social-div">
              <div className="social-inner twitter">
                <div className="contact-image mr-2">
                  <i className="fab fa-twitter"></i>
                </div>
                <a href="http://www.twitter.com/@twitter" target="_blank" rel="noopener noreferrer" className="links">@twitter</a>
              </div>
              <div className="social-inner fb">
                <div className="contact-image mr-2">
                  <i className="fab fa-facebook"></i>
                </div>
                <a href="http://www.facebook.com/@facebook" target="_blank" rel="noopener noreferrer" className="links">@facebook</a>
              </div>
              <div className="social-inner linkedin">
                <div className="contact-image mr-2">
                  <i className="fab fa-linkedin"></i>
                </div>
                <a href="http://www.linkedin.com/in/@linked in" target="_blank" rel="noopener noreferrer" className="links">@linked in</a>
              </div>
              <div className="social-inner github">
                <div className="contact-image mr-2">
                  <i className="fab fa-github"></i>
                </div>
                <a href="http://www.github.com/@github" target="_blank" rel="noopener noreferrer" className="links">@github</a>
              </div>
              <button className="btn btn-danger export-button">Export
                <i className="fas fa-download"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
);
  
  export default Card;
import React from "react";
import "./Card.css";

const Card = props => (
<div>
<div class="card">
<div class="card-header bg-info"></div>
<div class="card-body">
<div class="header-div">
<div class="user-photo-div">
<img src="./../img/cw-round2.png" class="user-photo" />
</div>
<div class="header-info">
<h3>Dan Klinga</h3>
<h5>dklinga@text.com</h5>
<p>555 5785</p>
</div>
</div>
<div class="social-div">
<div class="social-inner twitter">
<div class="contact-image mr-2">
<i class="fab fa-twitter"></i>
</div>
<a href="http://www.twitter.com/@twitter" target="_blank" class="links">@@twitter</a>
</div>
<div class="social-inner fb">
<div class="contact-image mr-2">
<i class="fab fa-facebook"></i>
</div>
<a href="http://www.facebook.com/@facebook" target="_blank" class="links">@facebook</a>
</div>
<div class="social-inner linkedin">
<div class="contact-image mr-2">
<i class="fab fa-linkedin"></i>
</div>
<a href="http://www.linkedin.com/in/@linked in" target="_blank" class="links">@linked in</a>
</div>
<div class="social-inner github">
<div class="contact-image mr-2">
<i class="fab fa-github"></i>
</div>
<a href="http://www.github.com/@github" target="_blank" class="links">@github</a>
</div>
<button class="btn btn-danger export-button">Export
<i class="fas fa-download"></i>
</button>
</div>
</div>
</div>
</div>
  );
  
  export default Card;
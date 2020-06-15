import React from 'react';
import '../App.css';

function Contact() {

  return (
    <div className="py-4 bg-dark text-white" id="contactSect">
    <div className="container" id="contact">
      <h2 className="contact text-center">Contact Me</h2>

      <form>
        <div className="form-group">
          <label>Name</label>
          <input type="text" className="form-control" id="exampleInputName1" placeholder="Bob Smith" />
        </div>

        <div className="form-group">
          <label>Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" placeholder="email@gmail.com" />
        </div>

        <div className="form-group">
          <label>Message</label>
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="6"></textarea>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      <div className="contactInfo text-center">
        <span>Email: </span><a href="mailto:alexcoulter.unc@gmail.com">alexcoulter.unc@gmail.com</a><br />
        <span>Call: </span><a href="tel:(919)698-9039">(919)698-9039</a><br />
        <div className="social-links">
          <span><a href="https://github.com/alexcoulter" target="_blank" rel="noopener noreferrer"><i className="fa fa-github fa-3x"></i></a></span>
          <span><a href="https://www.linkedin.com/in/alex-coulter/" target="_blank" rel="noopener noreferrer"><i
                className="fa fa-linkedin fa-2x"></i></a></span>

        </div>
      </div>
    </div>
  </div>

  );
}
export default Contact
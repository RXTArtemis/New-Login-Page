import React from 'react';
// import './starwars-btn';
import './otherStyles.css';




export default class NewLoginForm extends React.Component{
    render(){
        return (

        <div className="card w-60">
            <div className="card-header bg-dark text-white">
                <h3>Welcome back! Enter login information.</h3>
            </div>
            <div className= "card-body" id="color">
            <br/>
            <form>
            <div className="form-group">
              <label htmlFor="username"></label>
              <input type="username" className="form-control" id="inputUsername" placeholder="Enter Username"></input>
            </div>
            <div className="form-group">
              <label htmlFor="inputPassword"></label>
              <input type="password" className="form-control" id="inputPassword" placeholder="Password"></input>
            </div>
          </form>
          <br/>
        </div>
        <div className="card-footer" id="footer-color">
          <h4>Join the lightside or darkside, if you dare..</h4>
        <br/>
            </div>
        </div>
       ) 
    }
}
import React from 'react';
import './coolStylesheet.css';



//in welcome message ask about using template literal to customize welcome message

export default class NewNavbar extends React.Component{
    render(){
        return (
          <div className="container-fluid">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark" id="navbar-spacing">
            <a className="navbar-brand" href="#">Star Wars Force Masters</a>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav" >
                <a className="nav-item nav-link"  href="#">Home <span className="sr-only"></span></a>
                <a className="nav-item nav-link"  href="#">Profile</a>
                <a className="nav-item nav-link"  href="#">Account Settings</a>
                <a className="nav-item nav-link"  href="#">Inbox</a>
              </div>
            </div>
          </nav> 
         </div>   
        );
    }
}


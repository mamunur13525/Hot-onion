import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo2.png';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

const Nabvar = () => {
    return (
        <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
            <Link to="/home"><img className="logo img-fluid" src={logo} alt="logo"/></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
                    
             <FontAwesomeIcon icon={faCartPlus} />
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="#">LogIn</a>
            </li>
    
            <li className="nav-item ">
              <a className="btn btn-danger">Sign up</a>
            </li>
          </ul>
        
        </div>
      </nav>
      </div>
    );
};

export default Nabvar;
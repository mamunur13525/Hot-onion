import React from 'react';
import './Footer.css';
import logo from '../../../images/logo.png';

const Footer = () => {
    return (
        <footer className="py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <img className="img-fluid w-25 mt-5" src={logo} alt="logo"/>
                    </div>
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-md-5">
                                <ul className="list">
                                    <li><a href="#">About Online food</a></li>
                                    <li><a href="#">Read our blog</a></li>
                                    <li><a href="#">Sign up to deliver</a></li>
                                    <li><a href="#">Add your restaurant</a></li>
                                </ul>
                            </div>
                            <div className="col-md-5">
                                <ul className="list">
                                        <li><a href="#">Get help</a></li>
                                        <li><a href="#">Read FAQs</a></li>
                                        <li><a href="#">View all cities</a></li>
                                        <li><a href="#">Restaurants new me</a></li>
                                    </ul>
                            </div>
                        </div>
                    </div>
                </div>
               <div className="d-flex justify-content-between mt-5">
               <p>copyright @ 2020 Online food</p>
                <ul style={{listStyle:'none',}}>
                    <li style={{display:'inline',margin:'0px 20px', color:'white'}}>Privary Policy.</li>
                    <li style={{display:'inline',margin:'0px 20px', color:'white'}}>Terms of Use</li>
                    <li style={{display:'inline',margin:'0px 20px', color:'white'}}>Pricing</li>
                </ul>
               </div>
            </div>
        </footer>
    );
};

export default Footer;
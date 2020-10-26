import React from 'react';
import './Choose.css';
import first from '../../../images/first.png';
import second from '../../../images/second.png';
import third from '../../../images/third.png';
import icon1 from '../../../images/icon/Group204.png';
import icon2 from '../../../images/icon/Group1133.png';
import icon3 from '../../../images/icon/Group245.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Choose = () => {
    return (
        <section className="py-5 my-5">
            <div className="container">
                <h2>Why you choose us!</h2>
                <p className="para">Barton waited twenty always repair in within we do. An delighted offernding <br/> curiosity my dashwoods at. Boy properous increasing surrounded.</p>

                <div className="row mt-5">
                    <div className="col-md-4 box">
                        <img className="img-fluid" src={first} alt=""/>
                        <div className="d-flex mt-4 ">
                            <img src={icon1} className="icon img-fluid mr-4" alt=""/>
                            <div>
                                <h4>Fast Delevery</h4>
                                <p className="tiny-font">Keep your systems in sync with automated web hook based notifications each time link is paid <br/> and how we dream about out future.</p>
                                <a className="font-weight-bold" href="#"><span>See more</span>  <FontAwesomeIcon className="font-icon" icon={faArrowRight} /> </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 box">
                        <img className="img-fluid" src={second} alt=""/>
                        <div className="d-flex mt-4 ">
                            <img src={icon2} className="icon img-fluid mr-4" alt=""/>
                            <div>
                                <h4>A Good Auto Responder</h4>
                                <p className="tiny-font">Keep your systems in sync with automated web hook based notifications each time link is paid <br/> and how we dream about out future.</p>
                                <a className="font-weight-bold" href="#"><span>See more</span>  <FontAwesomeIcon className="font-icon" icon={faArrowRight} /> </a>                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 box">
                        <img className="img-fluid" src={third} alt=""/>
                        <div className="d-flex mt-4 ">
                            <img src={icon3} className="icon img-fluid mr-4" alt=""/>
                            <div>
                                <h4>Home Delevery</h4>
                                <p className="tiny-font">Keep your systems in sync with automated web hook based notifications each time link is paid <br/> and how we dream about out future.</p>
                                <a className="font-weight-bold" href="#"><span>See more</span>  <FontAwesomeIcon className="font-icon" icon={faArrowRight} /> </a>                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
                
        </section>
    );
};

export default Choose;
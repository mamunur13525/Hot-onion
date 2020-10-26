import React from 'react';
import './Fooditems.css';
import breakFast from '../../../images/Breakfast/breakfast1.png';

const Fooditems = () => {
    return (
        <section>
            
            <div className="food_time">
                <ul className='ul'>
                    <li>Breakfast</li>
                    <li>Lunch</li>
                    <li>Dinner</li>
                </ul>
            </div>
            <div className="food_items">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 text-center  p-5">
                            <div className="container">
                            <img className='w-50' src={breakFast} alt="breakfast"/>
                            <h3 className='mt-3'>Healthy Meal Plan</h3>
                            <p className="lead">How we dream about our future</p>
                            <h2>$23.99</h2>
                            </div>
                        </div>
                        <div className="col-md-4 text-center p-5">
                            <div className="container">
                            <img className='w-50' src={breakFast} alt="breakfast"/>
                            <h3 className='mt-3'>Healthy Meal Plan</h3>
                            <p className="lead">How we dream about our future</p>
                            <h2>$23.99</h2>
                            </div>
                        </div>
                        <div className="col-md-4 text-center  p-5">
                            <div className="container">
                            <img className='w-50' src={breakFast} alt="breakfast"/>
                            <h3 className='mt-3'>Healthy Meal Plan</h3>
                            <p className="lead">How we dream about our future</p>
                            <h2>$23.99</h2>
                            </div>
                        </div>
                        <div className="col-md-4 text-center  p-5">
                            <div className="container">
                            <img className='w-50' src={breakFast} alt="breakfast"/>
                            <h3 className='mt-3'>Healthy Meal Plan</h3>
                            <p className="lead">How we dream about our future</p>
                            <h2>$23.99</h2>
                            </div>
                        </div>
                        <div className="col-md-4 text-center p-5">
                            <div className="container">
                            <img className='w-50' src={breakFast} alt="breakfast"/>
                            <h3 className='mt-3'>Healthy Meal Plan</h3>
                            <p className="lead">How we dream about our future</p>
                            <h2>$23.99</h2>
                            </div>
                        </div>
                        <div className="col-md-4 text-center p-5">
                            <div className="container">
                            <img className='w-50' src={breakFast} alt="breakfast"/>
                            <h3 className='mt-3'>Healthy Meal Plan</h3>
                            <p className="lead">How we dream about our future</p>
                            <h2>$23.99</h2>
                            </div>
                        </div>
                       
                    </div>
                </div>
               <div className="button"> 
                   <button className="btn btn-success m-auto" type="submit">CheckOut Your Foods</button>
                </div>
            </div>

        </section>
    );
};

export default Fooditems;
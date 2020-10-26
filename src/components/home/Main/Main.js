import React from 'react';
import './Main.css'

const Main = () => {
    return (
        <main>
            <h1 className='main-heading'>Best food waiting your belly</h1>
            {/* <div className='text-center'>
                <input type="text" placeholder='search food items'/>
                <button className='btn btn-danger'>Search</button>
            </div> */}
            <div className="input-group mb-3 w-25 m-auto">
                <input type="text" className="form-control" placeholder='search food items' aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                <div className="input-group-append">
                    <span className="input-group-text btn btn-danger" id="basic-addon2">Search</span>
                </div>
            </div>
        </main>
    );
};

export default Main;
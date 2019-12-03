import React from 'react';
import './App.css';

const Form = (props) => {
    return (
    <div className="row">
        
        <div className="col-lg-4 col-sm-12 mx-auto mt-3 weather-input">
        <h3 className="mt-5 text-center mb-3 text-white">WEATHER APP</h3>
        <form onSubmit={props.getWeather} className="form-group mb-2">
        <div >
        <input
        type="text"
        placeholder="City"
        name="city"
        className=" form-control w-75 mx-auto mt-4 mb-3"
        />
        </div>
        <div>
        <input
        type="text"
        placeholder="Country"
        name="country"
        className="form-control w-75 mx-auto mb-3"
        />
        </div>
        <button type="submit" className="btn border-0 btn-light mb-4">Submit</button>
    </form>
        </div>
    </div>
    );
}

export default Form;
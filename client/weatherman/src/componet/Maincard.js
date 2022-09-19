import React from 'react';
import '../App.css';

export default function Login() {
    return (
<div className='maincardcontainer'>
    <div className='card'>
        <input type="text" placeholder='search' className='search-bar'/>
        <button className='search-button'>Search</button>
    </div>
    <div className='weather'>
        
        <h2 className ="city"><label>City:</label> de</h2>
        
        <div class="temp"><label>tempature:</label> 51</div>
        <label>Condition:</label>
        <img src="" alt="" class="icon" />
        <div className= "description"> Cloudy</div>
        <div className="humidity"><label>humidity</label> 60%</div>
        
        <div className="wind"><label>Wind:</label> 6.2 km</div>
    </div>
</div>
  
    )
}
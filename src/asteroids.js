import React from "react";
import "./main-content.css";
import "./asteroids.css";

function Asteroids( { asteroidJSON } ){

      return (
            <div className="asteroid-content">
               <h3>Near Earth Object</h3>
               <p>Name: {asteroidJSON['name']}</p>
               <p>Magnitude: {asteroidJSON['absolute_magnitude_h']}</p>
               <a href={asteroidJSON['nasa_jpl_url']}>NASA JPL LinK</a> 
               <button id="neo_search">Show Another NEO</button> 
            </div>
      
      )
   }

export default Asteroids;
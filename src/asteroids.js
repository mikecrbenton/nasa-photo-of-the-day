import React from "react";
import "./main-content.css";

function Asteroids( props ){

//THIS WORKS - JUST THE ARRAY
console.log( 'asteroid in component = ', props.asteroidJSON.near_earth_objects ) 

//THIS DOESN'T WORK******I can't access [0] for array index
//console.log( 'asteroid in component = ', props.asteroidJSON[0] ) 

   return (

      <div className="wrapper-class-asteroids">
         <div className="asteroid-content">
         </div>
      </div>
   )
}

export default Asteroids;
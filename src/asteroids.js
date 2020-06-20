import React from "react";
import "./main-content.css";

function Asteroids( props ){

//THIS DOESN'T WORK************************************** adding [0] for array index
console.log( 'asteroid in component = ', props.asteroidJSON ) 

   return (

      <div className="wrapper-class-asteroids">
         <div className="asteroid-content">
         </div>
      </div>
   )
}

export default Asteroids;
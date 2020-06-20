import React from "react";
import "./main-content.css";

function Mars( props ){

//THIS WORKS******************************
console.log( 'mars in component = ', props.marsJSON )
//THIS DOESN'T WORK************ adding ['550'] for object key value
//console.log( 'mars in component = ', props.marsJSON['550'] )

   return (

      <div className="wrapper-class-mars">
         <div className="mars-content">
         </div>
      </div>
   )
}

export default Mars;
import React from "react";
import "./main-content.css";

function Mars( props ){

//THIS DOESN'T WORK************************************** adding ['550'] for object key value
console.log( 'mars in component = ', props.marsJSON )

   return (

      <div className="wrapper-class-mars">
         <div className="mars-content">
         </div>
      </div>
   )
}

export default Mars;
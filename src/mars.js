import React from "react";
import "./main-content.css";
import "./mars.css";

function Mars( {marsJSON, sol} ){

   return (
 
         <div className="mars-content">
            <h3>Mars Weather</h3>
            <p>Current Sol: {sol}</p>
            <p>MIN: { ((marsJSON.mn) * 9 / 5 + 32).toFixed(0) }</p>
            <p>MAX: { ((marsJSON.mx) * 9 / 5 + 32).toFixed(0)}</p>
         </div>
      
   )
}

export default Mars;




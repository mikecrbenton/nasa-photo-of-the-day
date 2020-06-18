import React from "react";
import "./main-content.css";

function Main( {data} ){

console.log('PROPS: ', data.date );

   return (
      <div className="main-content">
         <img className="main-image" src={data['url']}/>
         <p></p>
      </div>
   )
}

export default Main;
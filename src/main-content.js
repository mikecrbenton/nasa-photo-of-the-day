import React from "react";
import "./main-content.css";

function Main( {data} ){

//console.log('MAIN: ', data.date );

   return (

      <div className="wrapper-class-main">

         <div className="main-content">
            <div className="headline-container">
               <img className="main-image" src={data['url']}/>
               <p className="image-date">Today's Date: {data['date']}</p>
               <p className="photographer">Credit: {data['copyright']}</p>
               <p className="explanation">About: {data['explanation']}</p>
            </div>
         </div>

      </div>
   )
}

export default Main;
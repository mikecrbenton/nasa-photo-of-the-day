import React from "react";
import "./main-content.css";

function Main( props ){

//console.log('MAIN: ', data.date );


   return (

      <div className="wrapper-class-main">

         <div className="main-content">
            <div className="headline-container">
               <img className="main-image" src={props.data['url']}/>
               <p className="image-date">{props.data['title']}</p>
               <p className="image-date">Today's Date: {props.data['date']}</p>
               <p className="photographer">Credit: {props.data['copyright']}</p>
               <p className="explanation">About: {props.data['explanation']}</p>
               <input type="text" name="searchdate" placeholder="YYYY-MM-DD"/>
               <button id="apod_search">Submit</button> 
            </div>
         </div>

      </div>
   )
}

export default Main;
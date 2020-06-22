import React, {useState, useEffect} from "react";
import "./App.css";
import Header from "./header";
import Main from "./main-content";
import axios from "axios";
import Asteroids from "./asteroids";
import Mars from "./mars";
import neoData from "./neo.json";


function App() {

   //SET INITIAL SEARCH STRING FOR APOD PICTURE-----------

   //GET TODAYS DATE
   let todaysDate = new Date();
   let month = todaysDate.getMonth()+1;

   //FORMAT MONTH TO 2 DIGIT FORMAT ( IF UNDER 10 )
   if( month < '10' ){
      month = '0' + month;
   }
   let currentDay = `${todaysDate.getFullYear()}-${month}-${todaysDate.getDate()}`; 


   //STATE SETTINGS----------------------------------
   const [data, setData] = useState({});
   const [query, setQuery] = useState(currentDay);

   //THESE ARE CURRENTLY NOT WORKING 6/21/20
   const [asteroid, setAsteroid] = useState({});
   const [mars, setMars] = useState({});


   // THIS IS ANOTHER WAY TO GET THE INITIAL APOD PICTURE //==================================== 

   //  useEffect( () => {
   //      axios
   //        .get(`https://api.nasa.gov/planetary/apod?api_key=wcuqfoE4RfwZWGw3RRhT3pnRzQX0q8Mw90FcnKig`)
   //        .then( response => { 
   //           console.log(' APOD RESPONSE ', response.data)
   //           setData(response.data)
   //        })
   //        .catch( e => console.log("ERROR = ", e));
 
   //     },[]); 
   //============================================================================================

       
      /*SEARCH NASA PICTURE WITH USER INPUT */
      useEffect( () => {

         //GET THE SEARCH STRING FROM USER INPUT
         let submit_apod= () => {
            let userDate = document.getElementsByName("searchdate")[0].value;
            let regEx = /^\d{4}-\d{2}-\d{2}$/;

            if( userDate.match(regEx) === null ){
               alert("WRONG FORMAT - PLEASE USE: YYYY-MM-DD");
            }        
            setQuery(userDate);
         }

         //SEARCHING WITH USER INPUT STRING
         axios
         .get(`https://api.nasa.gov/planetary/apod?api_key=wcuqfoE4RfwZWGw3RRhT3pnRzQX0q8Mw90FcnKig&date=${query}`)
         .then( response => { 
            console.log(' APOD RESPONSE ', response.data)
            setData(response.data)
         })
         .catch( e => console.log("ERROR = ", e));

         // ADD CLICK TO THE SUBMIT BUTTON - GET USER INPUT
         document.getElementById('apod_search').addEventListener("click", submit_apod);
     
         // REMOVE THE EVENT LISTENER
         return () => {
            document.getElementById('apod_search').removeEventListener("click", submit_apod);
         };
       }, [query]); 



   //THESE ARE CURRENTLY NOT WORKING 6/21/20   
   //-----------------------------------------------------------------------------------------------------------------------
   /* ASTEROID JSON - NEAR-EARTH OBJECTS*/
   useEffect( () => {
      axios
         .get("https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=wcuqfoE4RfwZWGw3RRhT3pnRzQX0q8Mw90FcnKig")
         .then( response => { 

            //THIS WORKS***************************************************
            //console.log('ASTEROID IN APP ',response.data.near_earth_objects[0]); // object at index 0 in neo in response
            //console.log('JSON FILE DATE NEO ' , neoData)

            //setAsteroid( response.data.near_earth_objects )
            //setAsteroid( response.data.near_earth_objects[0] )
            setAsteroid( neoData );
         })
         .catch( e => console.log("ERROR = ", e));

      },[]);

   /* MARS WEATHER*/
   useEffect( () => {
      axios
         .get("https://api.nasa.gov/insight_weather/?api_key=wcuqfoE4RfwZWGw3RRhT3pnRzQX0q8Mw90FcnKig&feedtype=json&ver=1.0")
         .then( response => { 

            //THIS WORKS******************************
            //console.log('MARS IN APP ',response.data['550']); //550 object from data object in response

            //console.log( "TYPE = ", typeof(response) );
            setMars( response.data )
         })
         .catch( e => console.log("ERROR = ", e));

      },[]);
      //-----------------------------------------------------------------------------------------------------------------------
      
   return (
     <div className="global-container">
        <Header />
        <Asteroids asteroidJSON={asteroid} />
        <Main data={data} />
        <Mars marsJSON={mars}/>
     </div>
   );
 }




export default App;

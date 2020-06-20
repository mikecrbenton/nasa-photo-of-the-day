import React, {useState, useEffect} from "react";
import "./App.css";
import Header from "./header";
import Main from "./main-content";
import axios from "axios";
import Asteroids from "./asteroids";
import Mars from "./mars";

function App() {

   const [data, setData] = useState({});
   const [asteroid, setAsteroid] = useState();
   const [mars, setMars] = useState();

   {/* MAIN PICTURE JSON*/}
   useEffect( () => {
       axios
         .get("https://api.nasa.gov/planetary/apod?api_key=wcuqfoE4RfwZWGw3RRhT3pnRzQX0q8Mw90FcnKig")
         .then( response => { 
            //console.log('RESPONSE ',response.data)
            setData(response.data)
         })
         .catch( e => console.log("ERROR = ", e));
 
      },[]);

    {/* ASTEROID JSON - NEAR-EARTH OBJECTS*/}
   useEffect( () => {
      axios
         .get("https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=wcuqfoE4RfwZWGw3RRhT3pnRzQX0q8Mw90FcnKig")
         .then( response => { 

            //THIS WORKS***************************************************
            console.log('ASTEROID IN APP ',response.data.near_earth_objects[0]); // object at index 0 in neo in response

            //console.log( "TYPE = ", typeof(response.data.near_earth_objects) );
            setAsteroid( response.data.near_earth_objects )
         })
         .catch( e => console.log("ERROR = ", e));

      },[]);

   {/* MARS WEATHER*/}
   useEffect( () => {
      axios
         .get("https://api.nasa.gov/insight_weather/?api_key=wcuqfoE4RfwZWGw3RRhT3pnRzQX0q8Mw90FcnKig&feedtype=json&ver=1.0")
         .then( response => { 

            //THIS WORKS******************************
            console.log('MARS IN APP ',response.data['550']); //550 object from data object in response


            //console.log( "TYPE = ", typeof(response) );
            setMars( response.data )
         })
         .catch( e => console.log("ERROR = ", e));

      },[]);

      
   return (
     <div className="global-container">
        <Header />
        {/* {console.log( "OBJECT: " , data['url'])}  */}
        <Asteroids asteroidJSON={asteroid} />
        <Main data={data} />
        <Mars marsJSON={mars}/>
     </div>
   );
 }




export default App;

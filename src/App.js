import React, {useState, useEffect} from "react";
import "./App.css";
import Header from "./header";
import Main from "./main-content";
import axios from "axios";
import Asteroids from "./asteroids";
import Mars from "./mars";
import { Container, Row, Col } from 'reactstrap';
import styled from 'styled-components';


function App() {

   //SET INITIAL SEARCH STRING FOR APOD PICTURE-----------

      //GET TODAYS DATE TO SET APOD PICTURE
      let todaysDate = new Date();
      let month = todaysDate.getMonth()+1;

      //FORMAT MONTH TO 2 DIGIT FORMAT ( IF UNDER 10 )
      if( month < '10' ){
         month = '0' + month;
      }
      let currentDay = `${todaysDate.getFullYear()}-${month}-${todaysDate.getDate()}`; 

   
   // THIS WAS ANOTHER WAY TO GET THE INITIAL APOD PICTURE - MAKING AN INITIAL CALL WITHOUT DATE PARAMS
   //  useEffect( () => {
   //      axios
   //        .get(`https://api.nasa.gov/planetary/apod?api_key=wcuqfoE4RfwZWGw3RRhT3pnRzQX0q8Mw90FcnKig`)
   //        .then( response => { 
   //           console.log(' APOD RESPONSE ', response.data)
   //           setData(response.data)
   //        })
   //        .catch( e => console.log("ERROR = ", e));
   //     },[]); 


   //APOD STATE SETTINGS----------------------------------
   const [data, setData] = useState({});
   const [query, setQuery] = useState(currentDay);

   //ASTEROID STATE SETTINGS
   const [asteroid, setAsteroid] = useState({});
   const [neoIndex, setNeoIndex] = useState(0);

   //MARS STATE SETTINGS
   const [mars, setMars] = useState({});
   const [sol, setSol] = useState()

   
   /*SEARCH NASA PICTURE WITH USER INPUT */
   useEffect( () => {

      //GET THE SEARCH STRING FROM USER INPUT ON THE EVENT LISTENER
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


   // ASTEROID JSON - NEAR-EARTH OBJECTS
   /* UseEffect makes an axios call and gets an array of 20 objects ( response.data.near_earth_objects )
      Due to an inability to access more than one layer deep in my objects ( an error I spent a few hours
      debugging and research) I store the initial data in state, and access the objects with an event
      listener that increments the array index of the "neo" each time the button is pressed 
      
      SOLUTION: Data isn't always present when component is rendered - need a ternary or similar for loading data
      NEEDED ->  { response.data.near_earth_objects[index] ? response.data.near_earth_objects[index] : "Loading..." 
   */

   useEffect( () => {
     
      let submit_neo = () => {
         console.log( neoIndex )
         if(neoIndex === 19){
            setNeoIndex(0);
         }

         setNeoIndex( (neoIndex + 1) )
      }
            axios
               .get("https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=wcuqfoE4RfwZWGw3RRhT3pnRzQX0q8Mw90FcnKig")
               .then( response => { 
                  console.log("RESPONSE -  ",response)
                  setAsteroid( response.data.near_earth_objects[neoIndex] )
                  console.log( "NEO DATA -",response.data.near_earth_objects[neoIndex])
               })
               .catch( e => console.log("ERROR = ", e));
       
               // ADD CLICK TO THE SUBMIT BUTTON - GET USER INPUT
               document.getElementById('neo_search').addEventListener("click", submit_neo);
         
               // REMOVE THE EVENT LISTENER
               return () => {
                  document.getElementById('neo_search').removeEventListener("click", submit_neo);
               }
            
   },[neoIndex]); //USEEFFECT()

   // MARS WEATHER
   /* Due to inability to access props more than one level deep from props within my components, I got the initial data from the
      request - the min and max temp from the current day(sol).  To get the current sol, I accessed the last index in the 'sol_keys'
      array.  The API always returns an array of 7 sols, with the last index(6) being the current day */
   useEffect( () => {
      axios
         .get("https://api.nasa.gov/insight_weather/?api_key=wcuqfoE4RfwZWGw3RRhT3pnRzQX0q8Mw90FcnKig&feedtype=json&ver=1.0")
         .then( response => { 

            //API RETURNS AN ARRAY OF "SOL" DATES, THE LAST ONE BEING THE CURRENT DATE
            let currentSol = response.data['sol_keys'][6];

            //SET THE TEMP DATA, AND THE CURRENT "SOL"
            setMars( response.data[currentSol]['AT'] );
            setSol( currentSol );

         })
         .catch( e => console.log("ERROR = ", e));

      },[]);


   return (
     <div className="global-container">
        <Header />
        <Container className="content-container">
           <Row>
            <Asteroids asteroidJSON={asteroid} />
            <Main data={data} />
            <Mars marsJSON={mars} sol={sol} />
           </Row>
        </Container>
     </div>
   );
 }




export default App;

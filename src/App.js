import React, {useState, useEffect} from "react";
import "./App.css";
import Header from "./header";
import Main from "./main-content";
import axios from "axios";

function App() {

   const [data, setData] = useState({});
   

   useEffect( () => {

       axios
         .get("https://api.nasa.gov/planetary/apod?api_key=wcuqfoE4RfwZWGw3RRhT3pnRzQX0q8Mw90FcnKig")
         .then( response => { 
            console.log('RESPONSE ',response.data)
            setData(response.data)
         })
         .catch( e => console.log("ERROR = ", e));
 
      },[]);




   return (
     <div className="global-container">
        <Header />
        {/* {console.log( "OBJECT: " , data['url'])}  */}
        <Main data={data} />
     </div>
   );
 }




export default App;

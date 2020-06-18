import React, {useState} from "react";
import "./App.css";
import axios from "axios";

function App() {
   const [data, setData] = useState();
   
       axios
         .get("https://api.nasa.gov/planetary/apod?api_key=wcuqfoE4RfwZWGw3RRhT3pnRzQX0q8Mw90FcnKig")
         .then( response => { 
            console.log(response.data)
            return setData(response.data)
         })
         .catch( e => console.log("ERROR = ", e));
 
   return (
     <div>
        {data}
     </div>
   );
 }

export default App;

import React from "react";
import styled from 'styled-components';
import { Card, CardBody, Row, Col } from 'reactstrap';


const MarsTitle = styled.p`
   font-weight: 700;
   font-size: 1.5em;
   margin-bottom: .2em;
   text-align: center;
`;
const SolText = styled.p`
   font-weight: 500;
   font-size: 1.2em;
   margin-bottom: .3em;
   text-align: center;
`;
export const BoldSpan = styled.span`
   font-weight: 700;
`;


function Mars( {marsJSON, sol, example} ){

   //=======================================================================================================
   // VINCE - IN THE CODE BELOW I'M STILL NOT ABLE TO ACCESS MORE THAN ONE LEVEL DEEP
   // IN MY OBJECT, EVEN AFTER IT HAS RETRIEVED - 
   // WILL NOT ACCESS EITHER:
   //    - example.data['sol_keys'][6]    //returns the current sol
   //    - example.data['***MIKE--FILL IN THE CURRENT SOL HERE***']['AT'] 

   console.log( 'IN MARS:  ', example.data )

   // THIS IS THE RECOMMENDATION FROM LAMBDA ON GIT HUB- I 
   // STILL GET AN UNDEFINED ERROR
   
   if(!example.data){
      return (
         <h3>Loading...</h3>
      )
   }
    //=======================================================================================================

   return (
      <Col lg="3">
            <Card>
               <CardBody>
                  <MarsTitle>Mars Weather</MarsTitle>
                  <hr></hr>
                  <p>EXAMPLE: </p>
                  <SolText><BoldSpan>Current Sol: </BoldSpan>{sol}</SolText>
                  <SolText><BoldSpan>MAX:  </BoldSpan>{ ((marsJSON.mx) * 9 / 5 + 32).toFixed(0)}</SolText>
                  <SolText><BoldSpan>MIN: </BoldSpan>{ ((marsJSON.mn) * 9 / 5 + 32).toFixed(0) }</SolText>
               </CardBody>
            </Card>
      </Col>
   )
}

export default Mars;






//ORIGINAL CODE---------------------------------------------

// <div className="mars-content">
//    <h3>Mars Weather</h3>
//    <p>Current Sol: {sol}</p>
//    <p>MIN: { ((marsJSON.mn) * 9 / 5 + 32).toFixed(0) }</p>
//    <p>MAX: { ((marsJSON.mx) * 9 / 5 + 32).toFixed(0)}</p>
// </div>


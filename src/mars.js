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
const DeleteThis = styled.p`
   color:red
`;

function Mars( {marsJSON, sol, example} ){

   //=======================================================================================================
   // VINCE - IN THE CODE BELOW I'M STILL NOT ABLE TO ACCESS MORE THAN ONE LEVEL DEEP
   // IN MY OBJECT, EVEN AFTER MY API HAS BEEN UPLOADED - 

   // IN MY APP.JS I CAN ACCESS ANY LEVEL OF DATA I NEED AND PASS IT DOWN AS PROPS, BUT
   // WHEN I DRILL DOWN IN THIS MARS.JS COMPONENT FILE, I GET AN UNDEFINED ERROR

   // I CANNOT ACCESS EITHER OF THESE HERE ( WHICH ARE ACCESSED IN THE APP.JS ):
   //    - example.data['sol_keys'][6]    // returns the current sol
   //    - example.data['561']['AT']      // gives access to temp info as object keys 

      console.log( 'THE RESPONSE OBJECT IN MARS.JS:  ', example )

   //     example.data['sol-keys'][6]    ACCESSES -->    ['555', '556', '557', '558', '559', '560', 561']
   //     example.data['561']['AT']      ACCESSES -->     {AT : { av: ---  , ct: --- ,  mn: ---  , mx: ---  }

   // BELOW IS THE RECOMMENDATION FROM LAMBDA ON GIT HUB- I 
   // STILL GET AN UNDEFINED ERROR IF IF DRILL DOWN PAST .data 
   // AND TRY TO ACCESS THE DEEPER ARRAY OR OBJECT

   if( !example.data  ){
      return (
         <h3>LOADING...</h3>
      )
   }
   //=======================================================================================================

   return (
      <Col lg="3">
            <Card>
               <CardBody>
                  <MarsTitle>Mars Weather</MarsTitle>
                  <hr></hr>
                  <DeleteThis>EXAMPLE: {} </DeleteThis>
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


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

function Mars( {mars} ){

   
   //=======================================================================================================
   // <SomeTag> Regular HTML Text: { props.object.data ? <span> {mars.data['561']['AT'].mx} </span> : <span> LOADING </span>} </SomeTag>
   //=======================================================================================================

   return (
      <Col lg="3">
            <Card>
               <CardBody>
                  <MarsTitle>Mars Weather</MarsTitle>
                  <hr></hr>
                  <SolText>
                     <BoldSpan>Current Sol: </BoldSpan>
                        { mars.data ?
                        <span>{ mars.data['sol_keys'][6] }</span> :
                        <span>LOADING</span> }
                  </SolText>
                  <SolText>
                     <BoldSpan>MAX:  </BoldSpan>
                        { mars.data ?
                        <span>{ ( mars.data['561']['AT'].mx * 9 / 5 + 32 ).toFixed(0) }</span> :
                        <span> LOADING </span> }
                  </SolText>
                  <SolText>
                     <BoldSpan>MIN:  </BoldSpan>
                        { mars.data ?
                        <span>{ ( mars.data['561']['AT'].mn * 9 / 5 + 32 ).toFixed(0) }</span> :
                        <span> LOADING </span> }
                  </SolText>
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


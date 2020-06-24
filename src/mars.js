import React from "react";
import "./main-content.css";
import styled from 'styled-components';
import "./mars.css";
import { 
   Button, 
   Card, 
   CardBody, 
   CardTitle, 
   CardText,
   Container,
   Row,
   Col } from 'reactstrap';

function Mars( {marsJSON, sol} ){

   return (
      <Col lg="3">
            <Card>
               <CardBody>
                  <CardTitle>Mars Weather</CardTitle>
                  <CardText>Current Sol: {sol}</CardText>
                  <CardText>MAX: { ((marsJSON.mx) * 9 / 5 + 32).toFixed(0)}</CardText>
                  <CardText>MIN: { ((marsJSON.mn) * 9 / 5 + 32).toFixed(0) }</CardText>
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


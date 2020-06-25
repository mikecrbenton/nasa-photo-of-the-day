import React from "react";
import styled, { css } from 'styled-components';
//EXAMPLE OF {IMPORT} OF STYLED-COMPONENT
import {BoldSpan} from './mars';
import { Button, Card, CardBody, Col } from 'reactstrap';



//STYLES--------------------------
//EXAMPLE OF PROPS USED***
const AsteroidTitle = styled.p`
   font-weight: 700;
   font-size: 1.5em;
   margin-bottom: .2em;
`;
const AsteroidText = styled.p`
   font-weight: 500;
   font-size: 1.2em;
   margin-bottom: .3em;
`;
const AsteroidLink = styled.a`
   font-weight: 700;
   font-size: 1.2em;
   margin-bottom: 1em;
   display: block;

   ${ props =>
      props.anyValue === 'argumentName' && 
      css`
         text-align: center;
      `}
`;
//STYLES--------------------------



function Asteroids( { asteroidJSON } ){

   return (

    <Col lg="3">
      <Card>
      <CardBody>
         <AsteroidTitle>Near Earth Object</AsteroidTitle>
         <hr></hr>
         <AsteroidText><BoldSpan>Name: </BoldSpan> {asteroidJSON['name']}</AsteroidText>
         <AsteroidText><BoldSpan>Magnitude: </BoldSpan> {asteroidJSON['absolute_magnitude_h']}</AsteroidText>
         <hr></hr>
         <AsteroidLink anyValue="argumentName" href={asteroidJSON['nasa_jpl_url']}>NASA JPL LINK</AsteroidLink>
         <Button outline color="primary" block id="neo_search">Show Another NEO</Button> 
      </CardBody>
      </Card>
    </Col>

      )
   }

export default Asteroids;




// ORIGINAL CODE-------------------------------------------------------

// <div className="asteroid-content">
//    <h3>Near Earth Object</h3>
//    <p>Name: {asteroidJSON['name']}</p>
//    <p>Magnitude: {asteroidJSON['absolute_magnitude_h']}</p>
//    <a href={asteroidJSON['nasa_jpl_url']}>NASA JPL LinK</a> 
//    <Button color="primary" id="neo_search">Show Another NEO</Button> 
// </div>
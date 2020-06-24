import React from "react";
import "./main-content.css";
import "./asteroids.css";
import styled from 'styled-components';
import { 
   Button, 
   Card, 
   CardBody, 
   CardTitle, 
   CardText, 
   CardLink,
   Container,
   Row,
   Col } from 'reactstrap';

function Asteroids( { asteroidJSON } ){

   return (

    <Col lg="3">
      <Card>
      <CardBody>
         <CardTitle>Near Earth Object</CardTitle>
         <CardText>Name: {asteroidJSON['name']}</CardText>
         <CardText>Magnitude: {asteroidJSON['absolute_magnitude_h']}</CardText>
         <CardLink href={asteroidJSON['nasa_jpl_url']}>NASA JPL LINK</CardLink>
         <Button color="primary" id="neo_search">Show Another NEO</Button> 
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
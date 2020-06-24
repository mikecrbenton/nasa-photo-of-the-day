import React from "react";
import "./main-content.css";
import styled from 'styled-components';
import { 
   Button, 
   Card, 
   CardImg, 
   CardBody, 
   CardTitle, 
   CardSubtitle, 
   CardText,
   Container,
   Row,
   Col } from 'reactstrap';




function Main( props ){

   return (

     <Col lg="6">
         <Card>
            <CardImg top width="100%" src={props.data['url']}  />
            <CardBody>
               <CardTitle>{props.data['title']}</CardTitle>
               <CardSubtitle>Today's Date: {props.data['date']}</CardSubtitle>
               <CardSubtitle>Credit: {props.data['copyright']}</CardSubtitle>
               <CardText>About: {props.data['explanation']}</CardText>
               <input type="text" name="searchdate" placeholder="YYYY-MM-DD"/>
               <Button color="primary" id="apod_search">Submit</Button> 
            </CardBody>
         </Card>
     </Col>

   )
};

export default Main;



// ORIGINAL CODE-------------------------------------------------------

// <div className="main-content">
//    <div className="headline-container">
//       <img className="main-image" src={props.data['url']}/>
//       <p className="image-title">{props.data['title']}</p>
//       <p className="image-date">Today's Date: {props.data['date']}</p>
//       <p className="photographer">Credit: {props.data['copyright']}</p>
//       <p className="explanation">About: {props.data['explanation']}</p>
//       <input type="text" name="searchdate" placeholder="YYYY-MM-DD"/>
//       <Button color="primary" id="apod_search">Submit</Button> 
//    </div>
// </div>  
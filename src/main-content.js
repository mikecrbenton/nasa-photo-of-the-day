import React from "react";
import "./main-content.css";
import styled from 'styled-components';
import { 
   Button, 
   Card, 
   CardImg, 
   CardBody, 
   CardSubtitle, 
   CardText,
   Container,
   Row,
   Col } from 'reactstrap';


const MainHeader = styled.div`
   font-weight: 900;
   font-size: 2em;
   margin-bottom: .3em;
`;
const TodaysDate = styled.p`
   font-weight: 700;
   font-size: 1.5em;
   margin-bottom: .3em;
`;
const Credit = styled.p`
   font-weight: 500;
   font-size: 1.2em;
   margin-bottom: .3em;
`;
const AboutTitle = styled.span`
   font-weight: 500;
   font-size: 1.2em;
`;
const TextBody = styled.p`
   letter-spacing: .2px;
   line-height: 1.8;
   font-weight:300;
   font-size: 1.2em;
   margin-bottom: 1em;
`;
const DateInput = styled.input`
   margin-right: 1em;
   font-weight: 900;
`;

function Main( props ){

   return (

     <Col lg="6">
         <Card>
            <CardImg top width="100%" src={props.data['url']}  />
            <CardBody>
               <MainHeader>{props.data['title']}</MainHeader>
               <hr></hr>
               <TodaysDate>Today's Date: {props.data['date']}</TodaysDate>
               <Credit>Credit: {props.data['copyright']}</Credit>
               <TextBody><AboutTitle>About: </AboutTitle>{props.data['explanation']}</TextBody>
               <DateInput type="text" name="searchdate" placeholder="YYYY-MM-DD"/>
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
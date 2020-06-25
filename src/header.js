import React from "react";
import styled from 'styled-components';
import { Container, Row, Col } from 'reactstrap';
import nasaPhoto from './nasa.png';



//STYLES--------------------------
const NasaHeader = styled.div`
   box-shadow: 1px 1px 5px black;
   padding: .8em 0;
   margin-bottom: 2em;
`;
const HeaderDiv = styled.div`
   display:flex;
   justify-content: center;
   align-items: center;
`;
const NasaH1 = styled.h1` 
   text-align: center;
   font-weight: 700;
`;
const NasaImg = styled.img`
   width: 65px;
`;
//STYLES--------------------------



function Header(){
   return (
      <NasaHeader>
         <HeaderDiv>
            <NasaImg src={nasaPhoto}/>
            <NasaH1>NASA News</NasaH1>
         </HeaderDiv>
      </NasaHeader>
   )
}

export default Header;
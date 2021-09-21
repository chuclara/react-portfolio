import React from 'react';
import {Link} from 'react-router-dom';
import styled from "styled-components";

function HomeButtons(){
	return(
    <Container>

        <Link to="/about">About</Link>
        <Link to="/work">Work</Link>

    </Container>
	)
}


const Container = styled.div`
  padding: 2rem;
  a {
    text-decoration: none;
  	margin-top: 2rem;   
    background: #81d1ff;
    border: none;
    padding: 0.9rem 1.1rem;
    color: #fff;
    border-radius: 1rem;
    box-shadow: 0px 13px 24px -7px #81d1ff;
    transition: all 0.3s ease-in-out;
    margin: 0.5rem;
    font-size: 0.8rem;
    cursor: pointer;
    &:hover {
      box-shadow: 0px 17px 16px -11px #81d1ff;
      transform: translateY(-5px);
          color: #81d1ff;
    background: transparent;
    border: 3px solid #81d1ff;
    &:hover {
      box-shadow: 0px 17px 16px -11px #81d1ff;
      transform: translateY(-5px);
    }
`;

export default HomeButtons;
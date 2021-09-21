import React from "react";
import styled from "styled-components";
import SkillsText from "./SkillsText";

const AboutText = () => {
  return (
    <Container>
      <h1>🧧 About Me </h1>
      <h5>Hi I’m Clara and I like to try my hand at all things tech. </h5> 
      <h5>I’m lucky to have completed my software engineering degree in one of the world’s greatest cities, Adelaide  
      <a href="https://www.growthstate.sa.gov.au/news/adelaide-is-australias-most-liveable-city" target="_blank">(if you want to fact check)</a>.</h5>
      <h5>Here, is where I delved into the world of data and haven’t looked back since!</h5>
      <SkillsText />
    </Container>
  );
};

const Container = styled.div`
  padding: 1rem;
  h1 {
    color: #1e2250;
    font-size: 2.3rem;
    font-weight: 900;
    margin-bottom: 1rem;
  }
  h5 {
    font-family: 'Roboto', sans-serif;
//    letter-spacing: 1px;
    text-align: left;
    color: #1e2250;
    margin-bottom: 1.5rem;
    margin-top: 1.5rem;
    margin-right: 1.5rem;
    margin-left: 1.5rem;
    font-size: 1.0rem;
    font-weight: 500;
    &:nth-of-type(1) {
      color: #1e2250;
    }
  }
  border-radius: 1rem;
  background-color: rgba(255, 255, 255, 0.9);
  @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
    -webkit-backdrop-filter: blur(35px);
    backdrop-filter: blur(35px);
    background-color: rgba(255, 255, 255, 0.5);
  }
`;


export default AboutText;
import React from "react";
import styled from "styled-components";

import { Link, withRouter, Route } from "react-router-dom";

//import NavBar from "../NavBar";
const HomeFeatText = () => {
  return (
    <Container>
      <h5>Hello and welcome!</h5>
      <h1>I&apos;m Clara 👋</h1>
      <h1>Play around with</h1>
      <h1>this site to learn</h1>
      <h1>more about me.</h1>

    </Container>
  );
};

const Container = styled.div`
  padding: 1rem;
  h5 {
    color: #515151;
    font-weight: 500;
    font-size: 0.9rem;
    margin-bottom: 1rem;
  }
  h1 {
    font-size: 2.85rem;
    font-weight: 900;
    &:nth-of-type(1) {
      //color: #9a55e0;
      color: #1e2250;
      font-weight: 700;
    }
    &:nth-of-type(2) {
      //color: #8849c7;
      //color: #524c8f;
      color: #2d3379;
    }
    &:nth-of-type(3) {
      //color: #651fac;
      color: #3d45a3;
    }
    &:nth-of-type(4) {
      //color: #3c0473;
      color: #5861c1;
    }
  }
`;

export default HomeFeatText;
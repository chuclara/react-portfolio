import React, { useState } from "react";
import styled from "styled-components";

const SkillsText= () => {
  const [visible, setVisible] = React.useState(false);
  return (
    <div>
      <BtnContainer>
      <button onClick={() => setVisible(!visible)}>
        {visible ? 'Hide ' : 'Check Out My Skills'}
      </button>
      </BtnContainer>
      {visible && <div>
        <Container>
      <ul>
        <li>📕 Software Engineering Practices
      <ul>
        <li>Agile, Scrum, TDD and BDD Methodologies, CI/CD tooling</li>
      </ul>
        </li>
        <li>📗 Programming Languages
      <ul>
        <li>C++, Python, SQL</li>
        <li>+ slowly learning React as you can see! 😋</li>
      </ul>
        </li>
        <li>📘 Data Visualisation
        <ul>
          <li>ELK Stack, Tableau, Figma</li>
        </ul>
          </li>
          <li>📙 Presentation Skills
        <ul>
          <li>Enterprise Design Thinking Framework, Business Value Orchestration, Delivering Showcases</li>
        </ul>
          </li>
          <li>📔 Enterprise Ways of Working Tools
        <ul>
          <li>Jira, Confluence, Mural, Miro</li>
        </ul>
          </li>
        </ul>  
          </Container>
      </div>}
    </div>
  );
}

const Container = styled.div`
  padding: 1rem;
  ul li {
    text-align: left;
    font-size: 1.0rem;
    font-weight: 550;
    list-style-type: none;
    padding: 0;
    margin: 0;
    &:nth-of-type(1) {
      color: #1e2250;
    }
    list-style-type: none;
    padding: 0;
    margin: 0;
    color: #1e2250;
}
ul li li {
    text-align: left;
    font-size: 0.8rem;
    font-weight: 350;
    &:nth-of-type(1) {
      color: #1e2250;
    }
    list-style-type: none;
    padding: 0;
    margin: 0;
}
  border-radius: 1rem;
  background-color: rgba(255, 255, 255, 0.9);
  @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
    -webkit-backdrop-filter: blur(35px);
    backdrop-filter: blur(35px);
    background-color: rgba(255, 255, 255, 0.5);
  }
`;

const BtnContainer = styled.div`
  button {
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
    }
  }
`;

export default SkillsText;
import React, { useState } from "react";
import styled from "styled-components";
import { withStyles } from '@material-ui/core/styles';

import { IconButton } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';

import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import HomeIcon from '@material-ui/icons/Home';

import LogoIcon from '../assets/logo.svg';

const HeaderBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Nav>
      <Container>
      <img src={LogoIcon} />
        <Hamburger onClick={() => setIsOpen(!isOpen)}>
          <span />
          <span />
          <span />
        </Hamburger> 
        <Menu isOpen={isOpen}>
          <LinkWrapper>
          <IconButton aria-label="LinkedIn Profile" >
            <HomeIcon onClick={() => window.open('http://chuclara.com', '_blank')} /> 
          </IconButton>

          <IconButton aria-label="LinkedIn Profile" >
            <LinkedInIcon onClick={() => window.open('https://au.linkedin.com/in/clara-chu', '_blank')} /> 
          </IconButton>

          <IconButton aria-label="Link to email">
            <EmailIcon onClick={() => window.open('mailto:claradnchu@gmail.com', '_blank')} />
          </IconButton>

          <IconButton aria-label="GitHub Profile">
            <GitHubIcon onClick={() => window.open('https://github.com/chuclara', '_blank')} />
          </IconButton>
          </LinkWrapper>
        </Menu>
      </Container>
    </Nav>

  );
};

export default HeaderBar;


const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  max-width: 1000px;
  margin: auto;
  width: 100%;
  padding: 2rem;
  svg {
    height: 1.4rem;
    cursor: pointer;
  }
`;

const Nav = styled.div`
  display: flex; 
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 3;
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  @media (max-width: 768px) {
    background-color: rgba(255, 255, 255, 0.9);
    @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
      -webkit-backdrop-filter: blur(35px);
      backdrop-filter: blur(15px);
      background-color: rgba(255, 255, 255, 0.4);
    }
    border-radius: 1rem;
    margin-top: 1rem;
    box-shadow: -4px 8px 15px 1px rgba(0, 0, 0, 0.07);
    overflow: hidden;
    flex-direction: column;
    max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
    transition: max-height 0.3s ease-in;
    width: 100%;
  }
`;

const LinkWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding: 1.5rem 0;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  span {
    height: 2px;
    width: 25px;
    background: #f774c5;
    margin-bottom: 4px;
    border-radius: 5px;
  }
  @media (max-width: 768px) {
    display: flex;
  }
`;
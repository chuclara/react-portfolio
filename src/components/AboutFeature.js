import React from "react"
import styled from "styled-components";
import image from "../assets/aboutpic.png";
import bg from "../assets/bg.jpg";
import Tilt from "react-tilt";  
import AboutText from "./AboutText";

const AboutFeature = () => {
  return (
    <Container bg={bg}>
      <Wrapper>
        <InnerWrapper>
          <Left>
            <AboutText />
          </Left>
          <TiltWrapper options={{ max: 25 }}>
           <Img src={image} alt="@gouthamgtronics" />
          </TiltWrapper>
        </InnerWrapper>
      </Wrapper>
    </Container>
  );
};



const Left = styled.div`
  width: 40%;
  @media (max-width: 670px) {
    width: 100%;
    /* padding: 1rem; */
  }
`;

const TiltWrapper = styled(Tilt)`
  width: 60%;
  min-width: 400px;
  @media (max-width: 670px) {
    display: none;
  }
`;

const Img = styled.img`
  width: 60%;
  border-radius: 1rem;
`;

const InnerWrapper = styled.div`
  max-width: 1000px;
  height: 100%;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  /* margin: 2rem; */
 
  }
`;

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${({ bg }) => bg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export default AboutFeature;

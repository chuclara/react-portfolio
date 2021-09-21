import './App.css';
import React from 'react';
import logo from './logo.svg';
import styled from "styled-components";
import bg from "./assets/bg.jpg";
import AboutFeature from "./components/AboutFeature";

class About extends React.Component {
    render() {
        return (
            <div className="App">
		<AboutFeature />
            </div>
            
        );
    }

}

export default About;
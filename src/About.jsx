import './App.css';
import React from 'react';
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
import React from "react";
import styled from "styled-components";
import bg from "../assets/bg3.jpg";

import Tilt from "react-tilt";
//import WorkText from "./WorkText";

import { Timeline } from '@mui/lab';
import { TimelineItem } from '@mui/lab';
import { TimelineSeparator } from '@mui/lab';
import { TimelineConnector } from '@mui/lab';
import { TimelineContent} from '@mui/lab';
import { TimelineOppositeContent } from '@mui/lab';
import { TimelineDot } from '@mui/lab';
import { Typography } from '@mui/material';

import WorkIcon from '@material-ui/icons/Work';
import DirectionsBoatIcon from '@material-ui/icons/DirectionsBoat';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import StarIcon from '@material-ui/icons/Star';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';

function WorkFeature() {
  return (
    <Container bg={bg}>
    <Timeline position="alternate">
      <TimelineItem >
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="text.secondary"
        >2021 - Present
        </TimelineOppositeContent>
        <TimelineSeparator >
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }}/>
          <TimelineDot color="secondary">
            <WorkIcon />
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }}/>
        </TimelineSeparator >
        <TimelineContent sx={{ py: '12px', px: 2 }}>
            <h3>Business Transformation Consultant: Data Analytics</h3>
            <h4>IBM</h4>
             <h5>Worked with enterprise-sized clients, across the telecommunication and banking sectors to deliver major digital transformations.
             <p><b>Key Roles & Responsibilities</b></p>
             <p><i><b>Technical Business Analyst:</b> </i>Responsible for requirements elicitation and analysis for data engineering squads.</p>
             <p><i><b>Junior Project Manager/Scrum Master: </b></i>Responsible for managing the Jira board across different squads, and running scrum ceremonies.</p>
             <p><i><b>Developer: </b></i>Created a framework to integrate Watson Assistant and Microsoft Teams (Nodejs).</p>
             <p><i><b>Cognitive Consultant:</b> </i> Worked with variety of stakeholders to produce an in-depth business value orchestration report.</p></h5>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.secondary"
        >2018 - 2020
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }}/>
          <TimelineDot color="secondary">
            <DirectionsBoatIcon />
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }}/>
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
            <h3>Software Engineer</h3>
            <h4>Defence Science and Technology</h4>
             <h5>Part of the National Security Intelligence/US Navel Team to conduct experimental trials using a hyperspectral sensor.
             <p><b>Key Roles & Responsibilities</b></p>
             <p>Developed software to collect and visualise maritime vessels (C#, Python, Tableau).</p>
             <p>Assisted in the planning the experimental trials in Adelaide and Townsville.</p>
             </h5>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.secondary"
        >2018 - 2020
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }}/>
          <TimelineDot color="secondary">
            <WorkIcon />
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }}/>
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
            <h3>Head Teacher</h3>
            <h4>Code Camp</h4>
             <h5>Teaching primary school students how to create gaming applications to explain fundamental coding concepts in an engaging manner.
             <p><b>Key Roles & Responsibilities</b></p>
             <p>Developed lesson plans to map out coding concepts and timeline of courses to ensure success. </p>
             <p>Led small team of teaching assistants.</p>
             </h5>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.secondary"
        >2017 - 2020
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
          <TimelineDot color="secondary">
            <SportsEsportsIcon />
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }}/>
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
            <h3>Hospitality Attendant</h3>
            <h4>Adelaide Oval</h4>
             <h5>Part of the events function team, working as a waitress and bartender for functions ranging from in the tens to thousands.
             <p><b>Key Roles & Responsibilities</b></p>
             <p>Responsible for serving and forming relationships high profile guests, such as the Governor and the Premier of South Australia</p>
             </h5>
        </TimelineContent>
      </TimelineItem>

            <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.secondary"
        >2016 - 2019
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }}/>
          <TimelineDot color="secondary">
            <FastfoodIcon />
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }}/>
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
            <h3>Engineering Student</h3>
            <h4>University of Adelaide</h4>
             <h5>Completed a Bachelor of Engineering (Honours) (Software), First Class Honours. Industry Sponsored Thesis: Dark Web Monitoring Marketplace and Forums. 
             <p><b>Key Roles & Responsibilities</b></p>
             <p>Web scraper (Java) connected to Kibana and Elasticsearch to create dashboards and data insight for law enforcement.</p>
             </h5>
        </TimelineContent>
      </TimelineItem>

            <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.secondary"
        >
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }}/>
          <TimelineDot color="secondary">
            <StarIcon />
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }}/>
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
          </Typography>

        </TimelineContent>
      </TimelineItem>
    </Timeline>

    </Container>
  );
}

const Container = styled.div`
  padding: 1rem;
  h3 {
    font-family: 'Roboto', sans-serif;
    color: #1e2250;
    font-weight: 560;
    font-size: 1.0rem;
  }
  h4 {
    font-family: 'Roboto', sans-serif;
    color:  #1e2250;
    font-weight: 560;
    font-size: 1rem;
  }
  h5 {
    font-family: 'Roboto', sans-serif;
    color:  #1e2250;
    font-weight: 500;
    font-size: 0.8rem;
      list-style-type: none;
  }
  }
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${({ bg }) => bg});
  background-repeat: repeat;
  background-size: cover;
  background-position: center;
}
`;


export default WorkFeature;

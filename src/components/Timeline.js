import React from 'react'
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import gradcap from "/Users/alihaidar/Projects/my-portfolio/src/images/grad-cap.png";
import project from "/Users/alihaidar/Projects/my-portfolio/src/images/project.png"
import volunteer from "/Users/alihaidar/Projects/my-portfolio/src/images/volunteer.png"

import logo from "/Users/alihaidar/Projects/my-portfolio/src/logo.svg"

import 'react-vertical-timeline-component/style.min.css';
import '/Users/alihaidar/Projects/my-portfolio/src/styles/Timeline.css'


function Timeline() {
    return (

        <VerticalTimeline>

            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(128,0,32)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(128,0,32)' }}
                date="September 2015"
                iconStyle={{ background: 'rgb(128,0,32)', color: '#fff' }}
                // icon={<WorkIcon />}
                
            >
                <h3 className="vertical-timeline-element-title">Started at uOttawa</h3>
                <h4 className="vertical-timeline-element-subtitle">Ottawa, ON</h4>
                {/* <img src={logo} alt="logo"/> */}
                <p>
                Moved to Ottawa to begin my bachelor's in Computer Engineering
                </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#D1B000', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid #D1B000' }}
                date="November 2016"
                iconStyle={{ background: '#D1B000', color: '#fff' }}
                
            >
                <h3 className="vertical-timeline-element-title"> Python Hackathon </h3>
                <h4 className="vertical-timeline-element-subtitle">University of Ottawa</h4>
                <p>
                    Attended my first hackathon at the University of Ottawa. Using Turtle graphics, my partner and I developed
                    the classic Snake game. We went on to win first place.
                </p>
            </VerticalTimelineElement>
            
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="January 2018"
                iconStyle={{ background: '#D1B000', color: '#fff' }}
                contentStyle={{ background: '#D1B000', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  #D1B000' }}
                
            >
                <h3 className="vertical-timeline-element-title">Canadian University Software Engineering Conference</h3>
                <h4 className="vertical-timeline-element-subtitle">Montreal, QC</h4>
                <p>
                    Attended my first tech conference where I had the chance to sit in on various keynotes and learn from 
                    people with different backgrounds. I also had the chance to network with individuals from big companies
                    such as Unity and RBC.
                </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="February 2019"
                iconStyle={{ background: '#D1B000', color: '#fff' }}
                contentStyle={{ background: '#D1B000', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  #D1B000' }}
                
            >
                <h3 className="vertical-timeline-element-title">uOttaHack Volunteer</h3>
                <h4 className="vertical-timeline-element-subtitle">Ottawa, ON</h4>
                <p>
                    Volunteered for the first time at the local uOttaHack hackathon.
                </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="February 2019"
                iconStyle={{ background: 'rgb(128,0,32)', color: '#fff' }}
                contentStyle={{ background: 'rgb(128,0,32)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                
            >
                <h3 className="vertical-timeline-element-title"> Department of National Defence </h3>
                <h4 className="vertical-timeline-element-subtitle"> Nepean, ON </h4>
                <p>
                    Began my first job as a developer at the Departmennt of National Defence.
                </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="Fall 2019"
                iconStyle={{ background: '#004E5D', color: '#fff' }}
                contentStyle={{ background: '#004E5D', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid #004E5D' }}
                
            >
                <h3 className="vertical-timeline-element-title"> Crime Data Mart </h3>
                <h4 className="vertical-timeline-element-subtitle"> University of Ottawa </h4>
                <p>
                Created a data mart using public crime data from the cities of Vancouver and Denver as part of my 
                Fundamentals of Data Science class. The data was cleaned, processed and then analyzed.
                </p>
            </VerticalTimelineElement> 

            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="Jan - April 2020"
                iconStyle={{ background: '#004E5D', color: '#fff' }}
                contentStyle={{ background: '#004E5D', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid #004E5D' }}
                
            >
                <h3 className="vertical-timeline-element-title"> Competition Leaderboard </h3>
                <h4 className="vertical-timeline-element-subtitle"> University of Ottawa </h4>
                <p>
                    Implemented a leaderboard that kept track of competitions run by partners in which athletes
                    would compete. The scores, as well as the event and competition are tracked.
                </p>
            </VerticalTimelineElement>       
        
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="September 2020"
                iconStyle={{ background: 'rgb(128,0,32)', color: '#fff' }}
                contentStyle={{ background: 'rgb(128,0,32)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid rgb(128,0,32)' }}
                
            >
                <h3 className="vertical-timeline-element-title"> Graduated from uOttawa </h3>
                <h4 className="vertical-timeline-element-subtitle"> University of Ottawa </h4>
                <p>
                    Implemented a leaderboard that kept track of competitions run by partners in which athletes
                    would compete. The scores, as well as the event and competition are tracked.
                </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="November 2020"
                iconStyle={{ background: 'rgb(128,0,32)', color: '#fff' }}
                contentStyle={{ background: 'rgb(128,0,32)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid rgb(128,0,32)' }}
                
            >
                <h3 className="vertical-timeline-element-title"> End of job at National Defence </h3>
                <h4 className="vertical-timeline-element-subtitle"> Nepean, ON </h4>
                <p>
                    Implemented a leaderboard that kept track of competitions run by partners in which athletes
                    would compete. The scores, as well as the event and competition are tracked.
                </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="Oct - Nov 2020"
                iconStyle={{ background: '#004E5D', color: '#fff' }}
                contentStyle={{ background: '#004E5D', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  #004E5D' }}
                
            >
                <h3 className="vertical-timeline-element-title"> Fantasy Premier League App </h3>
                <h4 className="vertical-timeline-element-subtitle">  </h4>
                <p>
                    Created a simple web app allowing you to view and compare the stats of different
                    soccer players during the 2020/2021 Premier League season. 
                </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="January 2021"
                iconStyle={{ background: '#004E5D', color: '#fff' }}
                contentStyle={{ background: '#004E5D', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  #004E5D' }}
                
            >
                <h3 className="vertical-timeline-element-title"> My Portfolio </h3>
                <h4 className="vertical-timeline-element-subtitle">  </h4>
                <p>
                    Learning to use React by building my personal portfolio website.
                </p>
            </VerticalTimelineElement>
        
        </VerticalTimeline>
        
        
    )

}

export default Timeline
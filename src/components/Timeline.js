import React from 'react'
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import logo from "/Users/alihaidar/Projects/my-portfolio/src/logo.svg"

import 'react-vertical-timeline-component/style.min.css';




function Timeline() {
    return (

        <VerticalTimeline>

            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(128,0,32)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date="September 2015"
                iconStyle={{ background: 'rgb(128,0,32)', color: '#fff' }}
                
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
                date="2010 - 2011"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                
            >
                <h3 className="vertical-timeline-element-title">Art Director</h3>
                <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
                <p>
                Creative Direction, User Experience, Visual Design, SEO, Online Marketing
                </p>
            </VerticalTimelineElement>

            
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2008 - 2010"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                
            >
                <h3 className="vertical-timeline-element-title">Web Designer</h3>
                <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
                <p>
                User Experience, Visual Design
                </p>
            </VerticalTimelineElement>
            
        </VerticalTimeline>
        
        
    )

}

export default Timeline
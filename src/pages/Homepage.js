import React, {/*useState*/} from 'react'
import { Carousel, /*Container*/ } from 'react-bootstrap';

import FirstCover from '../components/FirstCover';
import SecondCover from '../components/SecondCover.js';
import EducationExperience from '../components/EducationExperience'

import '/Users/alihaidar/Projects/my-portfolio/src/styles/Homepage.css'

function Homepage() {
    return (
        <div className="background_grey"> 
            <Carousel>
                <Carousel.Item>
                    <FirstCover />
                </Carousel.Item>
                <Carousel.Item>
                    <SecondCover />
                </Carousel.Item>
            </Carousel>
            
            <EducationExperience />

        </div>
        
    );

}

export default Homepage
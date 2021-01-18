import React, {/*useState*/} from 'react'
import { Carousel, /*Container*/ } from 'react-bootstrap';
import Timeline from '../components/Timeline'

import FirstCover from '../components/FirstCover';
import SecondCover from '../components/SecondCover.js';

import '/Users/alihaidar/Projects/my-portfolio/src/styles/Homepage.css'

function Homepage() {
    return (
        <div>
            
            <Carousel>
                <Carousel.Item>
                    <FirstCover />
                </Carousel.Item>
                <Carousel.Item>
                    <SecondCover />
                </Carousel.Item>
            </Carousel>
            
            <Timeline />

        </div>
        
    );

}

export default Homepage
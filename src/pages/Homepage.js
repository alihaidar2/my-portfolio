import React, {/*useState*/} from 'react'
import { Carousel, /*Container*/ } from 'react-bootstrap';

import FirstCover from '../components/FirstCover';
import SecondCover from '../components/SecondCover.js';
// import EducationCover from '../components/EducationCover';
// import ExperienceCover from '../components/ExperienceCover';

import pic from "/Users/alihaidar/Projects/my-portfolio/src/images/pic.webp" 

import '/Users/alihaidar/Projects/my-portfolio/src/styles/Homepage.css'

function Homepage() {

    // const [index, setIndex] = useState(0);

    // const handleSelect = (selectedIndex, e) => {
    //     setIndex(selectedIndex);
    // }

    return (
        <div className="homepage">
            <Carousel>
                <Carousel.Item>
                    <FirstCover />
                </Carousel.Item>
                <Carousel.Item>
                    <SecondCover />
                </Carousel.Item>
            </Carousel>
            <div className="experience"> 
                Experience
                <img src={pic} alt="pic" />
            </div>
            <div className="education"> Education </div>
        </div>
        
    );

}

export default Homepage
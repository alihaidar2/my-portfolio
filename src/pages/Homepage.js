import React, {useState} from 'react'
import { Carousel, Container } from 'react-bootstrap';

import Cover from '../components/Cover';
import EducationCover from '../components/EducationCover';
import ExperienceCover from '../components/ExperienceCover';


function Homepage() {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    }

    return (
        <Carousel className="fullscreen">
            <Carousel.Item>
                <Cover />
            </Carousel.Item>
            <Carousel.Item>
                <EducationCover />
            </Carousel.Item>
        </Carousel>
    );

}

export default Homepage


{/* 
<Carousel.Item>
<ExperienceCover />
</Carousel.Item> */}
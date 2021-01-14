import React from 'react'
import { Container } from 'react-bootstrap';
import MyCover from '../components/Cover'
import EduCover from '../components/EduCover'

function Homepage() {
    return (
        <div>
            <MyCover />
            <EduCover />
        </div>  
    );
}

export default Homepage
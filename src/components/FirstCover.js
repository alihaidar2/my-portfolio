import React from 'react'
import ali from "../images/ali.jpg"

import '../styles/FirstCover.css'

function FirstCover() {
    return (
        <div className="cover1">
            <img src={ali} alt="me"/>
            <p className="welcome"> 
                Welcome <br />
                Bienvenue <br />
                مرحبا </p>
        </div>
    );
}
export default FirstCover
import React from 'react'
import ali from "../images/ali.jpg"

import '../styles/FirstCover.css'
import 'animate.css/animate.css'

function FirstCover() {
    return (
        <div className="cover1">
            <img src={ali} alt="me"/>
            <h2 className="welcome animate__animated"> Welcome! </h2>
            <h2 className="welcome_fr animate__animated"> Bienvenue! </h2>
            <h2 className="welcome_ar animate__animated "> !مرحبا </h2>
        </div>
    );
}

export default FirstCover
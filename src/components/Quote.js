import React from 'react'
import '../styles/Quote.css'
// import '/Users/alihaidar/Projects/my-portfolio/src/scss/bling/_puffIn.scss'

function Quote() {
    return (
        <div className="quote-box ">
            <main role="main" class="main-content" id="main-content">
            <div class="titleCont">
                <h1 class="main-title" id="main-title">
                <em>
                <span style={{paddingRight : '100px'}}> "Only one who devotes himself to a cause with </span> <br />
                <span style={{paddingLeft : '100px'}}>his whole strength and soul can be a true master. </span> <br />
                <span style={{paddingRight : '100px'}}>For this reason mastery demands all of a person.” </span> <br />
                <span style={{paddingLeft : '600px', fontSize:'80%'}}> <em>- Muhammad Ali </em> </span> <br />

                </em>
                
                </h1>
                {/* <canvas id="noise vignette" class="noise"></canvas> */}
                {/* <div class="vignette"></div> */}
            </div>
        </main>
            {/* <h5 className="quote"> 
            “Only one who devotes himself to a cause with his whole strength and soul can be a true master. 
            <br /> For this reason mastery demands all of a person.” 
            <br /> – Albert Einstein </h5> */}
        </div>
    )
}

export default Quote
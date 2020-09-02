import React from 'react';
import './About.css';

function About(props){
    console.logs(props)
    return (
        <div className = "about__container">
    <span>
        "If you are going through hell, just keep going." 
    </span>

    <span>
        -Winston Churchill
    </span>
    
    </div>);
}

export default About;
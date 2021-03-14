import React from 'react';
import Hero from '../components/Hero'

let text = "I grew up in Washington State in a small town in Skagit County where I grew up with a father in Construction and mother in Web Administrations. I grew up with a passion in technology where since four years old, I always knew that I wanted to work with technology."
let text2 = "Fast forward to when I moved out to Arizona, I met a group of collegues that helped pursue my passion in Computers and led me to enroll at Mesa Community College as a Computer Science student and then to go onto Arizona State University to get my Bachelor's in Computer Science"

function AboutPage(props) {
    return (
        <div> 
            <Hero title={props.title} subTitle={props.subTitle} text={text} text2={text2}/>
            
        </div>
    );
}

export default AboutPage;
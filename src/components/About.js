import React from 'react';
import hspic from './zhspicture.jpg';

function About() {
    return (
        <div class='aboutPage'>
            <h1 class='aboutHead'>
                About Me
            </h1>
            <p class='aboutText'>
                My name is Charles Alders, but everyone calls me Charlie. I was born 
                in SanFrancisco, California, but moved to Colorado when I was 3 years old. 
                I played a lot of sports when I was younger, but mainly football and baseball, 
                which I continued to play into highschool. I also used to go snowboarding very 
                frequently, which was one of my favorite hobbies. I dislocated my knee during 
                a baseball game, which made me prone to dislocation even more. After that,
                I have become less of an "outdoorsy" person and main spend my time on the 
                computer playing video games, etc. I am currently attending Colorado Mesa
                for Computer Information Systems, with hopes of going into the IT, Networking,
                or Cyber Security fields after school.
            </p>
            <img src={hspic} class='aboutPic' alt='highschool'/>
            <p class='imgDesc'>
                A picture of me from before my highschool graduation, in 2018.
            </p>

        </div>
    );
}

export default About;
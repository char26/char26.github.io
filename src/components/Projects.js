import React from 'react';

function Projects() {
    return (
        <div class='projectsPage'>
            <h1 class='projectsHead'>
                Projects
            </h1>
            <p class='projectsText'>
                Below are some screenshots and explanations of projects I have
                done in this Advanced Javascript class, including this project!
            </p>
            <p class='p1Text'>
                <a href='https://gyazo.com/4607396f0f8c2106af31a8f9bb3c4aee' style={{color:'black'}}>HERE</a> is my first project of the class. I had to set up my initial
                Github repository and edit the README to show my class, section,
                semester, etc.
            </p>
            <p class='p2Text'>
                <a href='https://gyazo.com/9520bfba41d1b905cfb6cfd59315c25d' style={{color:'black'}}>HERE</a> is my second project of the class. This was the first real programming
                exercise I had ever done in JavaScript, and we had to create a game. I made a 
                Tic Tac Toe game for 2 players that counts the stats and winrate of each player
                for playing multiple games.
            </p>
            <p class='p3Text'>
                <a href='https://gyazo.com/5d20dc88a74f460762deab60f996b473' style={{color:'black'}}>HERE</a> is my third project of the class. We had to choose programming problems
                from the Kattis website and solve and test them, then submit to the site to get
                approved. My favorite one was the "aaah" one, where I had to determine if a 
                patient was able to hold the "aaah" sound long enough for a doctor.
            </p>
            <p class='p4Text'>
                Finally, <a href='https://gyazo.com/8132003d5c9d2c41bedd57ccc95996b2' style={{color:'black'}}>HERE</a> is this project that you are looking at right now. I am horrible
                at this, but it is actually pretty fun. We had to make a client side website using
                react components. For some reason, images would not load on this page specifically
                so that's why you are clicking links to images instead of them showing up, sorry!
            </p>

        </div>
    );
}

export default Projects;
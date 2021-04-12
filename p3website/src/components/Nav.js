import React from 'react';
import {Link} from 'react-router-dom';

function Nav() {
    return(
        <nav class="navbar navbar-inverse">
            <div id="navMainMenu" class="navbar-collapse collapse">
                <div class="navbar-header">
                        <Link to='/' className="nav-item nav-link active" style={{color:'black'}}>Home</Link>
                        |
                        <Link to='/About' className="nav-item nav-link active" style={{color:'black'}}>About</Link>
                        |
                        <Link to='/Projects' className="nav-item nav-link active" style={{color:'black'}}>Projects</Link>
                        |                     
                        <Link to='/Github' className="nav-item nav-link active" style={{color:'black'}}>Github</Link>
                </div>
            </div>
        </nav>
    );
}

export default Nav;
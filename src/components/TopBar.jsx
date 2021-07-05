 //component for showing the top bar.
 //this component can take html elements to show inside.
 import React from 'react';   
 import {Link} from 'react-router-dom';

    const TopBar = function ({children}){
        return  <header className="header">
          <Link to="/">
            <img
              src="https://fontmeme.com/permalink/190707/fd4735271a0d997cbe19a04408c896fc.png"
              alt="netflix-font"
              border="0"
            />
          </Link>
          <div id="navigation" className="navigation">
            <nav>
              <ul>
                <li><Link to="/my-list">My List</Link></li>
              </ul>
            </nav>
          </div>
          {children}
        </header>
    } 
export default TopBar
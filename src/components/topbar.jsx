   import React from 'react';   
   import {Link} from 'react-router-dom';

   export const topbar = function (){
        return  <header class="header">
          <Link to="/">
            <img
              src="https://fontmeme.com/permalink/190707/fd4735271a0d997cbe19a04408c896fc.png"
              alt="netflix-font"
              border="0"
            />
          </Link>
          <div id="navigation" class="navigation">
            <nav>
              <ul>
                <li><Link to="/my-list">My List</Link></li>
              </ul>
            </nav>
          </div>
          <form id="search" class="search">
            <input type="search" placeholder="Search for a title..." value="" />
            <div class="searchResults"></div>
          </form>
        </header>
    } 

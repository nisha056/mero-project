import React from 'react'
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
   
       
			
       
        <div id="Nav-content">
        

            <h1>Welcome!</h1>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/skills'>Skills</Link>
              </li>
              <li>
                <Link to='/experience'>Experience</Link>
              </li>
              <li>
                <Link to='/education'>Education</Link>
              </li>
              <li>
                <Link to='/about'>About</Link>
              </li>
            </ul>
            
        

          {/* <a href='/'>Home</a>
          <a href='/skills'>Skills</a>
          <a href='/experience'>Experience</a>
          <a href='/education'>Education</a>
          <a href='/about'>About </a>
          </nav> */}

          </div>

      
        

     
      
  )
}

export default Navbar
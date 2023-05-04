import React,{ useState } from "react";
import Navbar from "./navbar";



// import image1 from '../image/Nisha.jpg'


const Home = () => {
  const image1 = require('../Image/Nisha.jpg');


   
    
    return (

      
      <div className="main-content" >
      
        <Navbar/>
        <div id='Image-content'>
        <img src={image1}/>
        <h2> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          <br></br>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          <br></br> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </h2>
        
        </div>
        
        
       <h1>Nisha Sharma</h1>
        <h2> Computer Engineer, IOE Pulchowk</h2>
        
        </div>
       
       
       

       

       
        


      );
}
 
export default Home;

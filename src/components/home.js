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
        <h2> Life gives you thousands of reasons to cry
          <br></br>
          but just a single reason for smile is enough for
          everything. 
          <br></br>
          So cheer up one day everything will be fine !!!!
        </h2>
        
        </div>
        
        
       <h1>Nisha Sharma</h1>
        <h2> Computer Engineer, IOE Pulchowk</h2>
        
        </div>
       
       
       

       

       
        


      );
}
 
export default Home;

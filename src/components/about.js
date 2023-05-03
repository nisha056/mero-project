import React,{ useState } from "react";
import Quote from "./quote";
import Navbar from "./navbar";

const About = (props) => {

    const[quote,setQuote]=useState(
        [
            {title:'Hello', body: 'Whats up..............',id :1},
            {title: 'Lorem ipsum dolor sit amet', body: 'consectetur adipiscing elit', id:2}
        ]
    );  
   
    
    return (
        <>
        <div className='About'>
            <Navbar/>
            
            <Quote quote={quote} title={<h2 style={{color: 'violet', textDecoration: 'underline', textAlign:'center'}}>About Me</h2>} />
            

       
        </div>
        </>


      );
}
 
export default About;
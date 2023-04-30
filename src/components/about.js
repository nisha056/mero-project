import React,{ useState } from "react";
import Quote from "./quote";

const About = (props) => {

    const[quote,setQuote]=useState(
        [
            {title:'Good things take time in life', body: 'So just donot worry my dear',id :1},
            {title: 'Knowledge gained from personal experince is a crucial learning for lifetime', body: 'Everything will be good', id:2}
        ]
    );  
   
    
    return (
        <div className='About'>
            
            <Quote quote={quote} title="My motivation for life" />
            

       
        </div>


      );
}
 
export default About;
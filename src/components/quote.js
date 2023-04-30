import React,{ useState } from "react";

const Quote = ({quote,title}) => {
    // const quote = props.quote;
    // const title= props.title;
  

    
   
    
    return (
        <div className="Quote">
          <h2> {title} </h2>
          {quote.map( (quote) => (
            <div className ="quote-list" key= {quote.id}>
                <h2>{quote.title} </h2>
               
            </div>
          ))}

       
        </div>


      );
}
 
export default Quote;
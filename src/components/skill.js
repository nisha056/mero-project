import React , {useState} from "react";
import Box from "../Image/box";
import Navbar from "./navbar";

const Skill = (props) => {
    const[box,setBox]=useState(
        [
            {title: ' Programming :', body: " C/C++, Python", id:1},
            {title:'Web Development :',body: "HTML, CSS, JavaScript, Django React",id:2},
            {title:' Android Development :', body : " Flutter",id:3},
            {title: ' Additional :', body: "Project Management ,Communication", id:3}

        ]
    )
    
    return ( 
        <>
        <Navbar/>
        <div className='boxes'>
            <Box box= {box} 
            title={ <h2 style= {{color:'purple', textAlign:'center'}}> Not skilled fully..... still learning</h2>}/>
            
       

        
            
       
        </div>
        </>
     );
}
 
export default Skill;

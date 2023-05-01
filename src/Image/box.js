

const Box = ({box,title}) => {
    
    return ( 
        <div className="Box">
            <h2> {title}</h2>
            {box.map((box) => (
                <div className= "box-list" key ={box.id}>
                    <h2>{box.title}</h2>
                    <ul>
                        {box.body.split(",").map((box,index) => (
                            <li key={index}>{box.trim()}</li>
                        ))}

                    </ul>
                    
                    
                    </div>
            ))}
        </div>


     );
}
 
export default Box;
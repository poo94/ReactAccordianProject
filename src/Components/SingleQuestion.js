import React ,{useState} from 'react'
import { GrAdd,GrSubtract } from "react-icons/gr";

function SingleQuestion({title,info}) {
    const[ShowInfo, setShowInfo] =useState(false)
    return (
        <article className="question"><header>
            <h4>
              {title}
            </h4>
            <button className="btn" onClick={()=>setShowInfo(!ShowInfo)}>{ShowInfo?<GrSubtract/>:<GrAdd/>}</button>
            </header>
            {ShowInfo&&<p>{info}</p>}
            
            </article>
        
    )
}

export default SingleQuestion

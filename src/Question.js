import { useState } from "react";
import { AiOutlinePlus , AiOutlineMinus } from "react-icons/ai";

function Question({title,info}) 
{

    const[showInfo , setShowInfo] = useState(false);

    return (
        <div className="question">
            <header>
        <h4>{title}</h4>
        <button onClick={() =>  setShowInfo(!showInfo )}>
            {showInfo ? <AiOutlineMinus /> : < AiOutlinePlus />}
        </button>
            </header>
            {
                showInfo && <p>{info}</p>
            }
        </div>
    )
}

export default Question;
import React from "react";
import "./options.css"
import languages from "./languagesData";
const option = (props)=>{
    //console.log(props)
    const handleClick = ()=>{
       props.set(props.language.code)
       props.setData(languages[props.language.code].sample)
    }
    
    return(
             <div className="optionBtns">
            <button className="image-button" type="button" onClick = {handleClick}>
                <img src={props.language.img} alt={props.language.name}/>
            </button>
            </div>
    )
}

export default option
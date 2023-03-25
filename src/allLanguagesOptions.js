import React from "react";
import languagesData from "./languagesData";
import Lang from "./options";
import "./languages.css"
const allLanguages = (props)=>{
    let languages = languagesData.map((languagedata, index)=>{
        return <Lang language = {languagedata} set = {props.command} key= {index} setData = {props.setData}/>
    })
    return(
        <div className="languages">
            {languages}
        </div>
    )
}

export default allLanguages
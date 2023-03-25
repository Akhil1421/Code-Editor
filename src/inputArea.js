import React from "react";
import "./inputArea.css"
const inputs = (props)=>{
    const handleChange = (e)=>{
        props.setInputData(e.target.value)
    }
    return (
        <div className="inputArea">
            <h3>Enter Input Here</h3>
            <textarea className="input" rows = "6" onChange= {handleChange}
                placeholder="Enter Input Here">
            </textarea>
        </div>
    )
}

export default inputs
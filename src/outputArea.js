import React from "react";
import "./outputArea.css"
const outputArea = (props)=>{
    return(
        <div className="output">
            <h3>Output</h3>
            <div className="receivedOutput">
            <textarea readOnly={true} value={props.output} key='000101' rows = '6'></textarea>    
            </div>
        </div>
    )
}

export default outputArea
import AllLanguages from "./allLanguagesOptions";
import CodingArea from "./codeArea"
import InputArea from "./inputArea"
import React from "react";

const Head = (props)=>{
    let obj = {
        code : props.obj.code,
        setData : props.obj.setData,
        setOutput : props.obj.setOutput,
        data: props.obj.data,
        output: props.obj.output,
        inputData: props.obj.inputData
    }
    return(
        <div className="containers">
            <AllLanguages command = {props.command} setData = {props.obj.setData} 
                          inputData = {props.obj.inputData}/>
            <div className="inputs">
                <CodingArea obj = {obj}/>
            </div>
                <InputArea setInputData = {props.setInputData}/>
        </div>
    )
}

export default Head
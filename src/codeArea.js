import React  from "react";
import language from './languagesData';
import "./codeArea.css"
import TopBar from "./topBar";
const CodingArea = (props)=>{
    let appearance = {
            background:"#1C2130",
            // color: "#832BCF",
            color: "#16f158",
            resize: "none" ,
            marginTop: "1.24rem",
            fontSize: "1rem",
            paddingLeft: "0.5rem"
    }
    let obj = {
        code : props.obj.code,
        setData : props.obj.setData,
        setOutput : props.obj.setOutput,
        data: props.obj.data,
        output: props.obj.output,
        inputData: props.obj.inputData
    }    
    const handleChange = (e)=>{
        return props.obj.setData(e.target.value)
    }
    return(
        <div className="codeArea ">
            <div className="inside">
         
                <label style={{color: "white"}}> Write Your Code Here </label>
            
                <TopBar obj = {obj}/>
         
                <span style={{color: "white"}}>{`Language :\t${language[props.obj.code].name} `}</span>
            
                
            </div>
         <textarea className="code" key={[language[props.obj.code].key]} 
                   style={appearance}  defaultValue={language[props.obj.code].sample} 
                   onChange={handleChange} rows="17"
                   spellCheck= "false"/>
        </div>
    )
}

export default CodingArea
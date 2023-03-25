import React from "react";
import languages from "./languagesData";
import axios from "axios"
const topBar = (props)=>{
    let handleClick = ()=>{
        let options;
            const encodedParams = new URLSearchParams();
            let data = props.obj.data
            console.log(`Data in coding area is ${data}`)
            encodedParams.append("LanguageChoice", languages[props.obj.code].numbers);
            encodedParams.append("Program", data);
            encodedParams.append("Input", props.obj.inputData)
            props.obj.setOutput("Loading........")
            options = {
            method: 'POST',
            url: 'https://code-compiler.p.rapidapi.com/v2',
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
                'X-RapidAPI-Key': 'd005f56712msh15f8f9a4c925fcfp1b1410jsnc1bfd5139513',
                'X-RapidAPI-Host': 'code-compiler.p.rapidapi.com'
            },
            data: encodedParams
            };
            
        axios.request(options).then(function (response) {
            console.log(response.data);

            props.obj.setOutput(response.data.Result!==null ? response.data.Result: response.data.Errors)
        }).catch(function (error) {
            console.error(error);
        })
    //console.log(props.output)
    //props.setOutput("I set this")
}
console.log(`output on other is ${props.obj.output}`)
console.log(props)
    return(
        <div className="bar" style={{color: "white", 
        fontFamily: "Calibri"}}>
            <button onClick={handleClick}>Run</button>
        </div>
    )
}
export default topBar
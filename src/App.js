import React from "react"
import Head from "./inputs";
import OutputArea from "./outputArea";
import "./app.css"
import TopBar from "./topBar";
import languages from "./languagesData";
function App() {
  let [language, setLanguage] = React.useState(0)
  
  let [data, setData] = React.useState(languages[language].sample)
  
  let [output, setOutput] = React.useState("Output Will Load Here")
  
  let [inputData, setInputData] = React.useState(" ")

  let obj= {
        code : language,
        setData : setData,
        setOutput : setOutput,
        data: data,
        output: output,
        inputData: inputData
  }  
  return (
    <div className="App">
      <Head  command = {setLanguage} setInputData = {setInputData} obj={obj}/>
      <OutputArea output = {output} key='108'/>
    </div>
  );
}

export default App;

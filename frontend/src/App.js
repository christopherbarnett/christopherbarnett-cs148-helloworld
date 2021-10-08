import logo from './logo.svg';
import './App.css';
import * as React from "react";

function App() {
  const [textValue, setTextValue] = React.useState()
  const [imgValue, setImgValue] = React.useState()


  React.useEffect(helloWorld, [])

  async function helloWorld() {
    const response = await fetch('/hello_world')
    const jsonResponse = await response.json()

    setTextValue(jsonResponse["text"])
    setImgValue(jsonResponse["image"])
  }

  async function switchWolf() {
    const response = await fetch('/wolf_manga')
    const jsonResponse = await response.json()

    setTextValue(jsonResponse["text"])
    setImgValue(jsonResponse["image"])
    
  }
  
  return (
    <div className="App">
      <p><b>{textValue}</b></p>
      <button onClick = {switchWolf}>
        Switch to Wolf Manga
      </button>
      <button onClick = {helloWorld}>
        Switch to Hello World
      </button>
      <img src={imgValue}></img>
    </div>
  );
}

export default App;

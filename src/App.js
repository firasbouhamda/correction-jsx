import react from 'react';
import './App.css';
import { stayel } from "./stayel.jsx";
import { javascript } from './javascript.png';
import { nod } from "./nod.png";
function App() {
  return (
    <div className="App">
      <div style={{border:('1px'),blackMaxWidth:'100vw'}}/>
<h1 className="title red">Firas Bouhamda</h1>
<br/ >
<img src="/src/javascript.png" alt='javascript.png'/>
<img src="/src/nod.png" alt="nod.png"/>
<br/>
      <video width="320" height="240" controls >
      <source src="..Videos/video1.mp4" type="video/mp4"/> </video>

 </div>

  );
}

export default App;

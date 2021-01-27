import react from 'react';
import './App.css';
import { stayel } from "./stayel.jsx";
import  java  from './javascript.png';
function App() {
  return (
    <div className="App">
      <div style={{border:('1px'),blackMaxWidth:'100vw'}}/>
<h1 className="title red">Firas Bouhamda</h1>
<br/ >
<img src={java} alt='javascript' width={400}/>
<img src="/nod.png" width={600}/>
<br/>
      <video width="320" height="240" controls >
      <source src="..Videos/video1.mp4" type="video/mp4"/> </video>

 </div>

  );
}

export default App;

import Navbar from './components/Navbar';
import './App.css';
import Forms from './components/Forms';
import Footer from './components/Footer';
import { useState } from 'react';
function App() {
  const [mode,setmode] = useState("light");
  const toggleMode = ()=>{
    var textElement1 = document.getElementById("lable-text");
    var textElement2 = document.getElementById("output-text");
  

    if(mode === 'light'){
      setmode('dark')
      document.body.style.backgroundColor = `#066163`;

      textElement1.style.color = "white";
      textElement2.style.color = "white";


    }else{
      setmode('light')
      document.body.style.backgroundColor = '#F3FDE8';

      textElement1.style.color = "black";
      textElement2.style.color = "black";
   
    }

  }
  return (
    <>
    <Navbar toggleMode={toggleMode} mode={mode} />
    <Forms />
    <Footer/>
    </>
  );
}

export default App;

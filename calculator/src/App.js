import {  useState } from 'react';
import './App.css'

function App() {
 const [input,setInput]= useState("")
function handleChanged(e){
  setInput(e.target.value)
}
function Clear(){
  setInput("")
}

function Equals(){
  setInput(eval(input).toString());
}

function handleClick(e){
  setInput(input.concat(e.target.name))

}
 function Remove(e){
   setInput(input.slice(0,input.length-1)) // or -1 also can be written
 }
  return (
    <>
    
    <nav className="navbar navbar-expand-lg bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="/" style={{color : "white",fontWeight:"bolder"}}>Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" style={{color:"white"}}  aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" style={{color:"white"}} href="/">about</a>
        </li>
       
      </ul>
      
    </div>
  </div>
</nav>
<div className="boxes my-5">
  <input value={input} onChange={handleChanged} type="text" className='inputValue'/>
    <div className="box1">
      <button name='7' onClick={handleClick}>7</button>
      <button name='8' onClick={handleClick}>8</button>
      <button name='9' onClick={handleClick}>9</button>
      <button name='÷' style={{backgroundColor:"orangered",border:"2px solid black",borderRadius:"5px"}} onClick={handleClick}>÷</button>
    </div>
    <div className="box2">
      <button name='4' onClick={handleClick}>4</button>
      <button name='5' onClick={handleClick}>5</button>
      <button name='6' onClick={handleClick}>6</button>
      <button name='*' style={{backgroundColor:"orangered",border:"2px solid black",borderRadius:"5px"}} onClick={handleClick}>*</button>
    </div>
    <div className="box3">
       <button name='1' onClick={handleClick}>1</button>
       <button name='2' onClick={handleClick}>2</button>
       <button name='3' onClick={handleClick}>3</button>
       <button name='+' style={{backgroundColor:"orangered",border:"2px solid black",borderRadius:"5px"}} onClick={handleClick}>+</button>
    </div>
    <div className="box4">
      <button name='0' onClick={handleClick}>0</button>
      <button name='.' onClick={handleClick}>.</button>
      <button name='-' style={{backgroundColor:"orangered",border:"2px solid black",borderRadius:"5px"}} onClick={handleClick}>-</button>
      <button  onClick={Equals}  style={{backgroundColor:"orangered",border:"2px solid black",borderRadius:"5px",width:"58px"}}>=</button>
    </div>
    <div className="box5">
      <button className='lowerButton'  style={{backgroundColor:"orangered",border:"2px solid black",borderRadius:"5px",fontSize:"25px"}} onClick={Remove}>BackSpace</button>
      <button className='lowerButton'  style={{backgroundColor:"orangered",border:"2px solid black",borderRadius:"5px"}} onClick={Clear}>Clear</button>
    </div>
</div>
<div className="onButton">
  <button>ON Calculator</button>
</div>
    </>
  );
}

export default App;

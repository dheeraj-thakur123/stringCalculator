import './App.css';
import { useState } from 'react';

function App() {
  const [userInput,setUserInput] = useState('');
  const[result,setResult] = useState('');

  const handleAdd = ()=>{
    //base case user input is empty
    if(userInput==''){
      setResult(0)
    }
  }

  return (
    <div className="App">
     <div className='calc_box'>
     <h2 className='calc_heading'>String - Calculator</h2>
      <div className='calc_input'>
       
        <div className='calc_result'>{result}</div>
        <hr/>
        <div className=''>
        <input className='input_box' onChange = {(e)=>{setUserInput(e.target.value)}} type='text' value={userInput}/>
        <button className='add_btn' onClick={handleAdd}>add</button>
        </div>
      </div>
     </div>
    </div>
  );
}

export default App;

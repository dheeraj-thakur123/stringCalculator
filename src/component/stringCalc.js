import '../App.css';
import { useState } from 'react';

const StringCalc = () => {
  const [userInput,setUserInput] = useState('');
  const[result,setResult] = useState('');
  const[error,setError] = useState('')

  const handleAdd = ()=>{
    //base case user input is empty
    if(userInput==''){
      setResult(0)
    }else{
        const numbers = userInput.split(',').map(Number);
        const sum = numbers.reduce((acc, curr) => acc + curr, 0);
        setResult(sum);

    }
  }

  return (
     <div className='calc_box'>
     <h2 className='calc_heading'>String - Calculator</h2>
      <div className='calc_input'>
        <div className='calc_result'>{result}</div>
        <hr/>
       <div>
        <input className='input_box' onChange = {(e)=>{setUserInput(e.target.value)}} type='text' value={userInput}/>
        {error && <span className='input_err'>{error}</span>}
       </div>
       <div>
        <button className='add_btn' onClick={handleAdd}>add</button>
       </div>
      </div>
     </div>
  );
}

export default StringCalc;

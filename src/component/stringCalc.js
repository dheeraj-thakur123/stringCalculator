import '../App.css';
import { useState } from 'react';

const StringCalc = () => {
  const [userInput,setUserInput] = useState('');
  const[result,setResult] = useState('');
  const[error,setError] = useState('')

  const handleAdd = ()=>{
    //base case user input is empty
     setUserInput('');
     setResult('');
     setError('')
    if(userInput==''){
      setResult(0)
    }else{
        
         // Split the input by new lines or commas
    const numbers = userInput.split(/[\n,]+/).map(str => str.trim());

    // Check for non-numeric inputs and negative numbers
    const invalidChars = numbers.filter(num => num !== '' && isNaN(Number(num)));
    const negativeNumbers = numbers.filter(num => num !== '' && Number(num) < 0);
        if(invalidChars.length>0){
            setUserInput('');
            setResult('');
            setError(`Invalid input: ${invalidChars.join(', ')}`);
        }else if(negativeNumbers.length>0){
            setUserInput('');
            setResult('');
            setError(`Invalid input: ${negativeNumbers.join(', ')}`);
        }else{
            const sum = numbers.reduce((acc, curr) => acc + Number(curr), 0).toString();;
            setResult(sum);
        }

    }
  }

  return (
     <div className='calc_box'>
     <h2 className='calc_heading'>String - Calculator</h2>
        <div className='calc_result'>{result}</div>
        <hr/>
       <div className='input_container'>
        <input className='input_box' onChange = {(e)=>{setUserInput(e.target.value)}} type='text' value={userInput}/>
        {error && <span className='input_err'>{error}</span>}
       </div>
       <div>
        <button className='add_btn' onClick={handleAdd}>add</button>
       </div>
     </div>
  );
}

export default StringCalc;

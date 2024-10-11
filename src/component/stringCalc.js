import '../App.css';
import { useState } from 'react';

const StringCalc = () => {
  const [userInput,setUserInput] = useState('');
  const[result,setResult] = useState('');
  const[error,setError] = useState('')

  const handleAdd = ()=>{
     setUserInput('');
     setResult('');
     setError('')
    if(userInput==''){
      setResult(0);
      return;
    }else{
         let numbers;
         let userInputStr=userInput.replace(/["\n\\\/;]+/g, ',')
        const delimiterMatch = userInputStr.match(/^\/\/(.+?)\n([\s\S]*)$/);
        if (delimiterMatch) {
            const delimiter = delimiterMatch[1].trim(); 
            const numberString = delimiterMatch[2]; 
            const regex = new RegExp(`[${delimiter.replace(/[-\/\\^$.*+?()[\]{}|]/g, '\\$&')}\n]+`, 'g');
            numbers = numberString.split(regex).map(str => str.trim());
        } else {
            numbers = userInputStr.split(/[\n,\\n]+/).map(str => str.trim());
        }
        const invalidChars = numbers.filter(num => num !== '' && isNaN(Number(num)));
        const negativeNumbers = numbers.filter(num => num !== '' && Number(num) < 0);
            if(invalidChars.length>0){
                setUserInput('');
                setResult('');
                setError(`Invalid input: ${invalidChars.join(', ')}`);
                return;
            }else if(negativeNumbers.length>0){
                setUserInput('');
                setResult('');
                setError(`Invalid input: ${negativeNumbers.join(', ')}`);
                return;
            }else{
                const sum = numbers.reduce((acc, curr) => acc + Number(curr), 0);
                // Convert the sum to a string with no scientific notation
                setResult(sum.toLocaleString('fullwide', { useGrouping: false }));
                return;
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

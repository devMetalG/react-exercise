import { useState } from 'react'

const FormVars:React.FC = () => {
  const [name, setName] = useState('Memo');
  const [age, setAge] = useState(25);

  const handleName = (e:React.ChangeEvent<HTMLInputElement>) => setName(e.target.value);
  const handleAge = () => setAge(age + 1);

  return (
    <>
      <label>
        Enter text:
        <input 
          type="text" 
          placeholder="Type something..." 
          onChange={ handleName }
        />
      </label>
      <br />
      <br />
      <button onClick={ handleAge }>Increase age</button> 
      <br />
      <p>Hello { name }. You're { age }. </p>   
    </>
  )
}

export default FormVars;

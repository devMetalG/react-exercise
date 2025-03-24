import React, { useState } from 'react'

const Text:React.FC = () => {
  const [text, setText] = useState('Hello');

  const handleText = (e: React.ChangeEvent<HTMLInputElement>) => setText(e.target.value);
  

  return (
    <>
    <label htmlFor="textInput">Enter text:</label>
    <input
      id="textInput"
      type="text"
      onChange={ handleText }
      value={ text }
      placeholder="Type something here..."
    />
      <h1>You wrote: {text} </h1>
    </>
  )
}

export default Text;

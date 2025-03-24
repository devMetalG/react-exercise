import React, { useState } from 'react';

const Boolean:React.FC = () => {
  const [liked, setLiked] = useState(true);

  const handleLiked = (e:React.ChangeEvent<HTMLInputElement>) => {
    setLiked(e.target.checked)
  }

  return (
    <>
      <label>
        <input 
          type="checkbox"  
          checked = { liked }
          onChange={ handleLiked } 
        />
        I like that
      </label>
      <p> I { (liked) ?  '':`don't`} like that. </p>
    </>
  )
}

export default Boolean;

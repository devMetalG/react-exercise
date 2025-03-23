import { useState } from "react";
import * as z from "zod";

interface FormValues {
  name: string;
  lastName: string;
  email: string;
}
function Form(){
 
  const [data, setData] = useState<FormValues>({
    name: '',
    lastName: '',
    email: ''
  });

  const [errors, setErrors] = useState<{[key:string]:string}>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    })); 
  }

  return(
    <form>
      <input type="text" name="name" placeholder="name" value={data.name} onChange={handleChange}/>
      <p style={{ color: 'red' }}>{'Invalid name.'}</p>
      <input type="text" name="lastName" placeholder="lastName" value={data.lastName}  onChange={handleChange}/>
      <p style={{ color: 'red' }}>{'Invalid last name.'}</p>
      <input type="text" name="email" placeholder="email" value={data.name}  onChange={handleChange}/>
      <p style={{ color: 'red' }}>{'Invalid email.'}</p>

      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
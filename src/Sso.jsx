import './Sso.css'
import { useState } from 'react';
import {Link} from 'react-router-dom';

function Sso()
{

  const [username, setUsername] = useState('');
 
  const [errors, setErrors] = useState({});

  const validate = () => {
      const errors = {};
      if (username.length <6) {
          errors.username = 'The email field is required';
      }
     
      return errors;
  };

  const handleSubmit = (event) => {
      event.preventDefault();
      const validationErrors = validate();
      if (Object.keys(validationErrors).length > 0) {
          setErrors(validationErrors);
      } else {
          console.log('Username:', username);
       // Here you can handle login (e.g., send a request to your API)
          setErrors({}); // Clear errors on successful submission
      }
  };

  return(
    <div>
      <form className='ssoform'>
        <label><h3>Log In Using Single Sign On</h3></label>
        <div className='ssoingrp'>
      <label>Email</label>
      <input type="Email" value={username}  placeholder="Email" onChange={(e)=>{setUsername(e.target.value)}}/>
      <div className="ssoerror">{errors.username}</div>
      </div>
    
      <button onClick={handleSubmit} className='ssobutton'>Continue</button>
      <button type="submit" className='ssogoo'><nav><Link to="/">Back to Log In Page</Link></nav></button>
    </form>
    </div>
  )
}


export default Sso;
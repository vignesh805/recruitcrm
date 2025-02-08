import './Homepage.css'
import { useState } from 'react';
import { Link} from 'react-router-dom';

function Homepage()
{

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
      const errors = {};
      if (username.length < 6) {
          errors.username = 'The email field is required';
      }
      if (password.length < 6) {
          errors.password = 'Password must be at least 6 characters long.';
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
          console.log('Password:', password);
          // Here you can handle login (e.g., send a request to your API)
          setErrors({}); // Clear errors on successful submission
      }
  };



  return(
    <div>
      <form className='Homeform'>
        <div className='ingrp'>
      <label>Email</label>
      <input type="text" value={username}  placeholder="Email" onChange={(e)=>{setUsername(e.target.value)}}/>
      <div className="homeerror">{errors.username}</div>
      </div>
      <div className='ingrp2'>
      <label>Password</label><input type="text" value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder="Password"/>
      <div className='pass'><Link to="/Forgot">Forget password</Link></div>
      <div className="homeerror">{errors.password}</div>
      </div>
      <button onClick={handleSubmit} className='homebutton'>Login</button>
      <button className='goo'>
        <nav>
        <Link to="/Sso">Login in using single sign on</Link>
        </nav>
        </button>
      
      <div className='signup'> 
      <nav>
      <Link to="/Register">Signup</Link>
    </nav>
      </div>
  
    </form>
  
    </div>
  )
}


export default Homepage;
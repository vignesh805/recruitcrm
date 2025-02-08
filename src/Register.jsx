import  { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, updateUser } from './FormSlice';
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Register.css';

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    whatsappNumber: '',
    email: '',
    password: '',
  });

  const { id } = useParams(); // Get the user id from URL parameters for edit
  const users = useSelector((state) => state.form.users); // Get users from Redux state
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      const userToEdit = users.find((user) => user.id === id);
      if (userToEdit) {
        setFormData(userToEdit);
      }
    }
  }, [id, users]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      dispatch(updateUser({ id, formData }));
    } else {
      const newUser = { id: Date.now().toString(), ...formData };
      dispatch(addUser(newUser));
    }

    navigate('/dashboard'); // Navigate to dashboard after submission
  };

  return (
    <div className='registerform'>
      <form onSubmit={handleSubmit}>
        <div className='registering'>
          <div className='registeringr'>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className='registeringrp'>
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className='registeringrp2'>
          <input
            type="text"
            name="phoneNumber"
            placeholder="Phone Number"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className='registeringrp2'>
          <input
            type="text"
            name="whatsappNumber"
            placeholder="Whatsapp Number"
            value={formData.whatsappNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className='registeringrp2'>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className='registeringrp2'>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <button className='registerbutton' type="submit">
          {id ? 'Update your account' : 'Create your account'}
        </button>

        <div className='registersign'> 
          <label>Already have an Account with CRM?</label>
          <nav>
            <Link to="/">Log In</Link>
          </nav>
        </div>
      </form>
    </div>
  );
};

export default Register;

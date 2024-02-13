import React, { useState } from "react";
import {Link} from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function SignUp() {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()


    // const [formData, setFormData] = useState({
    //   username: '',
    //   email: '',
    //   password: ''
    // });
  
    // const handleChange = (e) => {
    //   const { name, value } = e.target;
    //   setFormData(prevState => ({
    //     ...prevState,
    //     [name]: value
    //   }));
    // };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      axios.post('http://localhost:3001/register',{name,email,password})
      .then( result => {console.log(result)
    navigate('/login')
    })
      .catch(err=> console.log(err))
    //   console.log(formData); // You can perform form submission logic here
    };
  
    return (
        <div style={{ maxWidth: '400px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center' }}>Sign Up</h2>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ marginBottom: '1rem' }}>
            <label htmlFor="username" style={{ marginBottom: '0.5rem', display: 'block' }}>Username:</label>
            <input
              type="text"
              id="username"
              name="username"
            //   value={formData.username}
              onChange={(e) => setName(e.target.value)}
            //   onChange={handleChange}
              required
              style={{ padding: '0.5rem', fontSize: '1rem', borderRadius: '4px', border: '1px solid #ccc' }}
            />
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label htmlFor="email" style={{ marginBottom: '0.5rem', display: 'block' }}>Email:</label>
            <input
              type="email"
              id="email"
              name="email"
            //   value={formData.email}
              onChange={(e) => setEmail(e.target.value)}
            //   onChange={handleChange}
              required
              style={{ padding: '0.5rem', fontSize: '1rem', borderRadius: '4px', border: '1px solid #ccc' }}
            />
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label htmlFor="password" style={{ marginBottom: '0.5rem', display: 'block' }}>Password:</label>
            <input
              type="password"
              id="password"
              name="password"
            //   value={formData.password}
              onChange={(e) => setPassword(e.target.value)}
            //   onChange={handleChange}
              required
              style={{ padding: '0.5rem', fontSize: '1rem', borderRadius: '4px', border: '1px solid #ccc' }}
            />
          </div>
          <button type="submit" style={{ padding: '0.5rem 1rem', fontSize: '1rem', borderRadius: '4px', backgroundColor: '#007bff', color: '#fff', border: 'none', cursor: 'pointer' }}>Sign Up</button>
          {/* <label htmlFor="email" style={{ marginBottom: '0.5rem', display: 'block' }}>Already have an account?</label>
          <link to ='/login' type="submit" style={{ padding: '0.5rem 1rem', fontSize: '1rem', borderRadius: '4px', backgroundColor: '#007bff', color: '#fff', border: 'none', cursor: 'pointer' }}>Login</link> */}
        </form>
        
      </div>
    );
  }
  export default SignUp;
import React, { useState } from "react";
import {Link} from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
function Login(){
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()
   
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/login',{email,password})
        .then( result => {console.log(result)
            if(result.data === 'success'){
                navigate('/home')
            }
     
      })
        .catch(err=> console.log(err))
      //   console.log(formData); // You can perform form submission logic here
      };
    
   
    return (
        <div style={{ maxWidth: '400px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center' }}>Login</h2>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
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
          <button type="submit" style={{ padding: '0.5rem 1rem', fontSize: '1rem', borderRadius: '4px', backgroundColor: '#007bff', color: '#fff', border: 'none', cursor: 'pointer' }}>Login</button>
          {/* <label htmlFor="email" style={{ marginBottom: '0.5rem', display: 'block' }}>Already have an account?</label>
          <link to ='/login' type="submit" style={{ padding: '0.5rem 1rem', fontSize: '1rem', borderRadius: '4px', backgroundColor: '#007bff', color: '#fff', border: 'none', cursor: 'pointer' }}>Login</link> */}
        </form>
        
      </div>
    )
}
export default Login;
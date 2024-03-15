import { Link } from "react-router-dom";
import { useState } from 'react';
import { getUserInforLogin } from "./data/apiconfig";

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    console.log(e.target[0].value)
    e.preventDefault();
    try {
      const response = await getUserInforLogin(email, password);
      console.log(response);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      window.location.href = '/dashboard'; // 
    } catch (error) {
      console.error('Error logging in:', error);
    } 
  };

  

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target[0]?.value)} />
        <input type="password" placeholder="Password"  onChange={(e) => setPassword(e.target[1]?.value)} />
        <button type="submit">Submit</button>
        <Link to="/todo">Submit</Link>
      </form>
    </div>
  );
}
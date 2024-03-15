import { Link } from "react-router-dom";
import { useState } from 'react';
import { getSignUpUser } from "./data/apiconfig";

export default function SignUp() {
  const [user_name, setUser_name] = useState('');
  const [first_name, setFirst_name] = useState('');
  const [sur_name, setSur_name] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [birth, setBirth] = useState('');
  const [password, setPassword] = useState('');
  const [conf_password, setConf_password] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await getSignUpUser(user_name, first_name, sur_name, email, age, birth, password, conf_password);

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
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
      <input type="text" placeholder="User Name" value={user_name} onChange={(e) => setUser_name(e.target.value)} />
        <input type="text" placeholder="First Name" value={first_name} onChange={(e) => setFirst_name(e.target.value)} />
        <input type="text" placeholder="Surname" value={sur_name} onChange={(e) => setSur_name(e.target.value)} />
        <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="text" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} />
        <input type="date" placeholder="Birth" value={birth} onChange={(e) => setBirth(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <input type="password" placeholder="Confirm Password" value={conf_password} onChange={(e) => setConf_password(e.target.value)} />
        <Link to="/todo">Submit</Link>
      </form>
    </div>
  );
}

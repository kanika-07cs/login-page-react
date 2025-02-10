import React, { useState } from 'react'
import "../styles/login.css"
import { useNavigate } from 'react-router-dom'
import useUserStore from '../Store'

export default function Login() {

  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [password, setPassword] = useState("");
  const [mobile,setMobile]=useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const setUser = useUserStore((state) => state.setUser);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser(name, email); 
    setIsLoggedIn(true);
    navigate('/'); 
  };

  function handleNameChange(e) {
    setName(e.target.value);
  }
  function handleEmailChange(e) {
    setEmail(e.target.value);
  }
  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }
  function handleMobileChange(e) {
    setMobile(e.target.value);
  }

  return (
    <div className='login'>
        <h3> Login Page </h3>
        <form className='form' onSubmit={handleSubmit}>
            <input type="text" placeholder='Enter your name' required value={name} onChange={handleNameChange}></input><br/>
            <input type="email" placeholder='Enter your email' required value={email} onChange={handleEmailChange}></input><br/>
            <input type="password" placeholder='Enter your password' required value={password} onChange={handlePasswordChange}></input><br/>
            <input type="tel" placeholder='Enter your phone number' required value={mobile} onChange={handleMobileChange}></input><br/>
            <button type="submit">Login</button>
        </form>

    </div>
  )
}

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../context/auth';

function Login() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isError, setIsError] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setAuthTokens } = useAuth();

  function postLogin() {
    // TODO!
  }
  return(
    <div>
      { isError && <div>The email or password provided were incorrect!</div> }
      <from>
        <input 
          type='email'
          value={ email }
          onChange={ e => {
            setEmail(e.target.value);
          }}
          placeholder='email' />
        <input 
          type='password'
          value={ password }
          onChange={ e => {
            setPassword(e.target.value);
          }}
          placeholder='password' />
        <button onClick={ postLogin }>Log in</button>
      </from>
      <div>
        <span>Don’t have an account?</span>
        <Link to='/signup'>Sign up</Link>
      </div>
    </div>
  )
}

export default Login;
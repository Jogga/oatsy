import React from 'react';
import { Link } from 'react-router-dom';

function SignUp() {
  return(
    <div>
      <form>
        <input type='name' placeholder="name" />
        <input type='email' placeholder='email' />
        <input type='password' placeholder='password' />
        <button>Create Account</button>
      </form>
      <div>
        <span>Already have an account?</span>
        <Link to='/login'>Log in</Link>
      </div>
    </div>
  );
}

export default SignUp;
import React, { useState } from 'react';
import './Login.css';
import { Link, useNavigate} from 'react-router-dom';
import LoginIcon from '@mui/icons-material/Login';
import { auth } from '../firebase.js'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';


function Login() {
    const history = useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        signInWithEmailAndPassword(auth, email, password)
            .then(auth => {
                history('/');
            })
            .catch(error => alert(error.message))
            
    }

    const register = e => {
        e.preventDefault();

        createUserWithEmailAndPassword(auth, email, password)
            .then((auth) => {
                if(auth) {
                    history('/');
                }
            })
            .catch(error => alert(error.message))
    }

  return (
    <div className="login">
        <Link to='/' style={{ textDecoration: "none" }}>
            <div className="login_logo">
                <LoginIcon className='login_logoImage' fontSize='large' />
                <h2 className='login_logoTitle'>SUBWAY GM</h2>
            </div>
        </Link>
        
        <div className="login_container">
            <h1>Sign-in</h1>

            <form>
                <h5>E-mail</h5>
                <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                <h5>Password</h5>
                <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                <button type='submit' className='login_signInButton' onClick={signIn}>Sign In</button>
            </form>

            <p>
                By signing-in you are agreeing withe the SUBWAY GM Conditions of Use & Sale. 
                Please checkout our Privacy Notivce, our Cookies Notice and our Interest Based Ads Notice.
            </p>

            <button className='login_registerButton' onClick={register}>Create an Account</button>
        </div>
    </div>
  )
}

export default Login
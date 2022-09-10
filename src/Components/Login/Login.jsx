import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../../firebase";

function Login() {

const history = useHistory();

const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

const signIn = e => {
e.preventDefault();

auth
.signInWithEmailAndPassword(email,password)
.then(auth => {
    history.push('/')
})
.catch(error => alert(error.message))

}

const register = e => {
    e.preventDefault();
    
auth
.createUserWithEmailAndPassword(email,password)
.then((auth) => {
    if(auth) {
        history.push('/')
    }
})
.catch(error => alert(error.message))

    }

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login_logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </Link>

      <div className="login_container">
        <h1>Sing-in</h1>

        <form action="">
          <h5>E-mail</h5>
          <input type="text" value={email} 
          onChange={e => setEmail(e.target.value)}/>

          <h5>Password</h5>
          <input type="password" value={password}
          onChange={e => setPassword(e.target.value)}/>

          <button onClick={signIn} type='submit' className="login_signInButton" >Sign In</button>
        </form>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse distinctio dolorum quia eveniet ullam! Quaerat est voluptatibus temporibus saepe unde fugit repellendus eligendi pariatur officia minus libero, vitae, fugiat ut?</p>
     <button onClick={register}className="login_registerButton">Create your Amazon Account</button>
      </div>
    </div>
  );
}

export default Login;

import logo from './logo.svg';
import './App.css';
import {useState} from "react";

import { Link } from 'react-router-dom';

import Logged from './logged';

function Login() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  function clearFields() {
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
  }
    function login(e) {
      e.preventDefault();
    }

  return (
    
    <div className="App">
    <div class="container">
        <h1>Login</h1>
        <form action={login} method="post">
            <input type="text" id="username" name="username" placeholder="Username" onChange={(event) => {setUsername(event.target.value);}}/>
            <input type="password" id="password" name="password" placeholder="Password" onChange={(event) => {setPassword(event.target.value);}}/>
            <div>            {/* <input type="submit" value="Login" /> */}
            {(username == "username") && (password == "password") ? <div><Link to='/logged.html' id="login" type="button">Login</Link></div>
             :             <div><Link to='/wrong.html' type="button" id="login">Login</Link></div>
            }
            <input type="button" value="Cancel" id="cancel_button" onclick={clearFields}/></div>
          

            
        </form>
    </div>

    </div>
  );
}

export default Login;
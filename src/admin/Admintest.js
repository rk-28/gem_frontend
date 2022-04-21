import '../App.js';
import './css/styles.css';
import './js/scripts.js';

import { useNavigate   } from "react-router-dom";
import  { useState } from "react";
import React from 'react';
import { StatusBar } from 'react-native';
import ReactDOM from 'react-dom';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
const config = require('../config.js');

function Admintest() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showResults, setShowResults] = React.useState(false)
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

    
    function login(e)
    {
    e.preventDefault();
    if (email==null || email==""){  
    alert("email can't be blank"); 
            
    return false;  
    }else if(password == null|| password==""){  
    alert("password can't be blank");   
    return false;  
    }            
    if (email && password) {        
    fetch(config.APP_BASE_URL + "/auth/login", {
    method: "POST",      
    headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'  
    }, 
    body: JSON.stringify({
    email: email,
    password: password,
    })
    })
    .then((response) => response.json())
    .then((responseData) => {
    if(responseData.Status  == 200)
    {
    localStorage.setItem('Secure', responseData.token);
    localStorage.setItem('email', responseData.email);
    navigate('/dashboard');
    } 
    else
    {   
    alert("incorect password");
    }
    });  
    }  
    }

    function forgetpassword()
    {
        navigate('/password')
    }
  return (

     <body class="bg-primary">
              <div id="layoutAuthentication">
                  <div id="layoutAuthentication_content">
                      <main>
                          <div class="container">
                              <div class="row justify-content-center">
                                  <div class="col-lg-5">
                                      <div class="card shadow-lg border-0 rounded-lg mt-5">
                                          <div class="card-header"><h3 class="text-center font-weight-light my-4">Gems Quiz</h3></div>
                                          <div class="card-body">

                                         

                                              <form autoComplete='on'>
                                                  <div class="form-floating mb-3">
                                                      <input class="form-control" id="email" autocomplete="email" onChange={(e) => setEmail(e.target.value)} type="email" placeholder="name@example.com" />

                                                      <label for="inputEmail">Email address </label>
                                                  </div>
                                                  <div class="form-floating mb-3">
                                                      <input class="form-control" id="password" autocomplete="password" onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
                                                      <label for="inputPassword">Password</label>
                                                  </div>
                                                  <div class="form-check mb-3">
                                                      <input class="form-check-input" id="inputRememberPassword" type="checkbox" value="" />
                                                      <label class="form-check-label" for="inputRememberPassword">Remember Password</label>
                                                  </div>
                                                  <div class="d-flex align-items-center justify-content-between mt-4 mb-0">
                                                      <a class="small" onClick={forgetpassword}>Forgot Password?</a>
                                                      <button class="btn btn-primary" onClick={login}>login</button>
                                                  </div>
                                              </form>

                                          </div>
                                          {/*  <div class="card-footer text-center py-3">
         <div class="small"><a href="register.html">Need an account? Sign up!</a></div>
     </div> */}
     
    
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </main>
                  </div>
                  <div id="layoutAuthentication_footer">
                      <footer class="py-4 bg-light mt-auto">
                          <div class="container-fluid px-4">
                              <div class="d-flex align-items-center justify-content-between small">
                                  <div class="text-muted">Copyright &copy; Gems Quiz 2022</div>
                                  <div>
                                      <a href="#">Privacy Policy</a>
                                      &middot;
                                      <a href="#">Terms &amp; Conditions</a>
                                  </div>
                              </div>
                          </div>
                      </footer>
                  </div>
              </div>
              <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" crossorigin="anonymous"></script>
              <script src="js/scripts.js"></script>
          </body>

          
  );
}

export default Admintest;

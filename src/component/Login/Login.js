import React  from 'react';
import Cookie from 'js-cookie'
import '../Login.css'

function Login() {

    function isLogin(){

            fetch('http://localhost:3216/loginforreact' , {method : 'POST' , headers :{
                    'Content-Type' : 'application/json'
            },
            credentials : 'include', // gui kem cookie len server de su dung duoc session
            body : JSON.stringify({username : document.getElementById('username').value , password : document.getElementById('password').value})
        })
        .then(res => res.json())
        .then(data => {
            if(data.message){
                alert(data.message)
            }
            else{
                    Cookie.set('iduser' , data._id , {expires : 1/24});
                    Cookie.set('nameuser' , data.fullname , {expires : 1/24});
                   window.location.href = '/';
            }
        })
    }

    return (
        <div>
        <div className="login">
          <img src="person-icon.png" className="avatar" alt='none' />
          <h1 style={{color: 'rgb(30, 10, 56)'}}>Sign in</h1>
          <div style={{color: 'red', fontStyle: 'italic', fontSize: '14px', fontWeight: 400, marginBottom: '10px'}}>
          </div>
          <input id="username" type="text" placeholder="Email" />
          <input id="password" type="password" placeholder="Password" />
          <div className="submit">
            <input type="submit" onClick={isLogin} defaultValue="Login" />
          </div>
          <div className="container__body" style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', margin: '0 16px'}}>
            <div className="text">
              <a href="/forgotpass">Forgot Password ?</a>
            </div>
            <div className="submit">
              <a href="/register">Sign up</a>
            </div>
          </div>
          <div className="link">
            <a href="/restaurant"><img src="/W.WR.png" alt='none' style={{width: '50px', height: '50px'}} /></a>
            <a href="/auth/facebook"><img src="/fb-icon.png" alt='none' /></a>
            <a href="/auth/gmail"><img src="/gmail-icon.png" alt='none' /></a>      
          </div>
        </div>
        <div id="overlay-area" />
      </div>
      
  
    );
}

export default Login;
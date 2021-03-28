import React from 'react';
import Axios from 'axios'
import '../Login.css'
import Cookies from 'js-cookie';

Axios.defaults.withCredentials = true;
function Loginforres(props) {

    function isLogin(){
         async function fetchData(){
                    let respone =await Axios.post('http://localhost:3216/restaurant/loginresforreact' , {username : document.getElementById('username').value , password : document.getElementById('password').value});
                    if(respone.data.message){
                        alert(respone.data.message)
                    }
                    else{
                        Cookies.set('idres' , respone.data._id , {expires : 1/24});
                        Cookies.set('nameres' , respone.data.fullname , {expires : 1/24});
                        window.location.href = '/restaurant/homeforres'
                    }
         }
         fetchData()
    }
    return (
        <div>
        <div className="login">
          <img src="person-icon.png" className="avatar" alt='none' />
          <h1 style={{color: 'rgb(30, 10, 56)'}}>Sign in for Restaurant</h1>
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
        </div>
        <div id="overlay-area" />
      </div>
    );
}

export default Loginforres;
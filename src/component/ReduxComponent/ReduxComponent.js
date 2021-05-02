import React, { useEffect } from 'react'
import { useSelector , useDispatch } from 'react-redux';
import {accionDelete, acctionAdd } from '../../action/acctionforprofile'
import {accionDeleteAccount, acctionAddAccount ,actionSetItem } from '../../action/actionforproduct'

function Redux(){
    let profile = useSelector(state => state.profile.profile)
    let product = useSelector(state => state.product.account)
    console.log(product);
    let dispatch = useDispatch()
    function AddProfile(){
        let name = document.getElementById('name').value
        let age = document.getElementById('age').value
        let fullname = document.getElementById('fullname').value
        dispatch(acctionAdd({name,age ,fullname}))
    }
    function AddProduct(){
        let username = document.getElementById('username').value
        let password = document.getElementById('password').value
        let phone = document.getElementById('phone').value
        dispatch(acctionAddAccount({username , password , phone}))
    }

    useEffect(()=>{
       dispatch(actionSetItem())
    } , [dispatch])
    
    return(
        <div>
            <input type='text' id='name' placeholder='nhap name'></input>
            <input type='text' id='age' placeholder='nhap age'></input>
            <input type='text' id='fullname' placeholder='nhap fullname'></input>
            <button onClick={AddProfile}>Them profile</button>
            <input type='text' id='username' placeholder='nhap username'></input>
            <input type='text' id='password' placeholder='nhap password'></input>
            <input type='text' id='phone' placeholder='nhap phone'></input>
            <button onClick={AddProduct}>Them product</button>
                {profile.map(item => 
                <div>
                <ul>
                    <li>{item.name}</li>
                    <li>{item.age}</li>
                    <li>{item.fullname}</li>
                </ul>
                    <button onClick={()=>{dispatch(accionDelete(item.name))}} >Delete</button>
                </div>
                ) 
                }
            {product.map(item => 
                <div>
                <ul>
                    <li>{item.username}</li>
                    <li>{item.password}</li>
                    <li>{item.phone}</li>
                </ul>
                    <button onClick={()=>{dispatch(accionDeleteAccount(item.username))}} >Delete</button>
                </div>
                ) 
                }


        </div>
    )
}

export default Redux ; 
// import React from 'react';
import React, { useState } from 'react';
import firebase from '../Firebase';

export default function Register() {

    const [ name, setName] = useState('');
    const [ email, setEmail] = useState('');
    const [ password, setPassword] = useState('');

    const handleOnChangen = (e) => {
        setName(e.target.value);
    };

    const handleOnChangee = (e) => {
        setEmail(e.target.value);
    };

    const handleOnChangep = (e) => {
        setPassword(e.target.value);
    };

    const createUser = () => {
        
        const create = firebase.database().ref('Admins');
        const put = {
            name,
            email,
            password
        };

        create.child(name).set(put);
    }
    
    return(
        //this React . Fragments tag helps to combine the all tags into one...
    <> 
    <input className="inputs" placeholder="username" onChange={handleOnChangen} value={name}/><br/>
      <input className="inputs" placeholder="email" onChange={handleOnChangee} value={email}/><br/>
      <input className="inputs" placeholder="password" onChange={handleOnChangep} value={password}/><br/>
      <input className="inputs" placeholder="confirm password"/><br/>
      <button onClick={createUser}>Register</button>
    </>
    )
}
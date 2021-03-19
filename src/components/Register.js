// import React from 'react';
import React, { useState } from 'react';
import firebase from '../Firebase';

export default function Register() {

    const [ name, setName] = useState(''); // set the local state 
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

    const createUser = () => {  //check for the validation and enter on the DB

        var Cpassword = document.getElementById('password').value;
        var confirmPassword = document.getElementById('confirm').value;

        if(Cpassword !== confirmPassword){
            document.getElementById('displayMessage').style.display = "block";
            document.getElementById('displayMessage').style.color = "blue";
            document.getElementById('displayMessage').innerHTML = "confirm password doesn't matches!";
        }
        else{
            if(name && email && password !== ""){

                const create = firebase.database().ref('Admins');
                const put = {
                    name,
                    email,
                    password
                };
        
                create.child(name).set(put); // push function for firebase creates the auto generate key, hence set function used here.
                
                document.getElementById('displayMessage').style.display = "block";
                document.getElementById('displayMessage').innerHTML = `${name}, your mediapp admin account created successfully!`;
                document.getElementById('username').value = "";
                document.getElementById('email').value = "";
                document.getElementById('password').value = "";
                document.getElementById('confirm').value = "";
        
                }
                else{
                    document.getElementById('displayMessage').style.display = "block";
                    document.getElementById('displayMessage').style.color = "red";
                    document.getElementById('displayMessage').innerHTML = " Enter all the details correctly!";
                }
        }

       
    }

    return(
        //this React . Fragments tag helps to combine the all tags into one parent element...
    <> 
     <input className="inputs" id="username" placeholder="username" onChange={handleOnChangen} value={name}/><br/>
     <input className="inputs" id="email" placeholder="email" onChange={handleOnChangee} value={email}/><br/>
     <input className="inputs" id="password" placeholder="password" onChange={handleOnChangep} value={password}/><br/>
     <input className="inputs" id="confirm" placeholder="confirm password"/><br/>
     <button onClick={createUser}>Register</button>
     <h2 id="displayMessage">Admin account created successfully!</h2>
    </>
    )
}
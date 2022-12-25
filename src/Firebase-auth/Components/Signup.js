import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {createUserWithEmailAndPassword} from 'firebase/auth';
import { auth } from '../Firebase/firebase';

const Signup =()=>{

    const [email, setEmail] = useState(""); 
    const [password, setPassword] = useState("");
    // Using useNavigate, we can define the path to navigate.This is the inbuild function of react.
    const navigate = useNavigate();
    const handleSubmit= async(e)=>{
        e.preventDefault();
        // This method, contains the e-mail, password whivh we have given in form and this is the state variabe.
        // using this method we send the data from the orm to the database.
        await createUserWithEmailAndPassword(auth, email, password).then((userCredential)=>{
            const user= userCredential.user;
            console.log(user);
            // After submitng the form, the email and password get reset in the form.
            setEmail("");
            setPassword("");
            // After reseting, the page is redirect to login page using "useNavigate()".
            navigate("/login");
        }).catch((e) => console.log(e));
    };
    return(
        <div>
            <h2>Signup Component</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <div>
                        <label htmlFor="email">Enter E-mail</label>
                        <input type="text" onChange={(e)=> setEmail(e.target.value)} value={email}/>
                    </div>
                    <div>
                        <label htmlFor="password">Enter Password</label>
                        <input type="password" onChange={(e)=> setPassword(e.target.value)} value={password}/>
                    </div>
                    <div>
                        <button>Signup</button>
                    </div>
                    <div>
                        <p>Already registered? <Link to="/login">Login</Link></p>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Signup;
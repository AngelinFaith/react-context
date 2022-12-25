import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword} from 'firebase/auth';
import { auth } from '../Firebase/firebase';
const Login =()=>{
    const [email, setEmail] = useState(""); 
    const [password, setPassword] = useState("");
    // Using useNavigate, we can define the path to navigate.This is the inbuild function of react.
    const navigate = useNavigate();

    const handleSubmit= async(e)=>{
        e.preventDefault();
        await signInWithEmailAndPassword(auth, email, password).then((userCredential)=>{
            const user= userCredential.user;
            console.log(user.email);
            console.log(user.uid);
            setEmail("");
            setPassword("");
            // After reseting, the page is redirect to home page using "useNavigate()".
            navigate("/");
        })
    }
    return(
        <div>
            <h2>Login Component</h2>
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
                        <button>Login</button>
                    </div>
                    <div>
                        <p>Not Yet registered? <Link to="/signup">Signup</Link></p>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Login;
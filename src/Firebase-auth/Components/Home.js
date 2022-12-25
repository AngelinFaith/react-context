// Need to display the logged user details and logout button.

import { onAuthStateChanged, signOut } from "firebase/auth";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from '../Firebase/firebase';
const Home =()=>{

    const [user, setUser] = useState("");
    const navigate = useNavigate();
    useEffect(()=> {
        onAuthStateChanged(auth,(user) =>{
            if(user){
                setUser(user.email);
            }
        })
    }, []);

    const handleLogOut=(e)=>{
        signOut(auth).then(()=>{
            navigate("/login");
            alert("You have successfully logged out")
        }).catch((err)=>console.log(err))
    }
    return(
        <div>
            <h2>Welcome {user}</h2>
            <div>
                <button onClick={handleLogOut}>LogOut</button>
            </div>
        </div>
    )
}













export default Home;
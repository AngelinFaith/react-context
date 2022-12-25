import Profile from "./Profile";
import { useContext } from "react";
import {UserContext} from "../userContext";

const About =()=>{
    const user= useContext(UserContext);
    return(
        <div>
            <div>About</div>
            <p>About: {user.firstName}</p>
            <Profile />
        </div>
    )
}

export default About;
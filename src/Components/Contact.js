import { useContext } from "react";
import {UserContext, DetailsContext} from "../userContext";


const Contact =()=>{

    const user= useContext(UserContext);
    const details=useContext(DetailsContext);
    return(
        <div>
            <div>Contact</div>
            <p>Contact: {user.lastName}</p>
            <p>Details: {details.age}</p>
        </div>
    )
}

export default Contact;
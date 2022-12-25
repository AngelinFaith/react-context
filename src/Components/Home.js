import About from "./About";
import { useContext } from "react";
import {DetailsContext} from "../userContext";

const Home =()=>{
    const details=useContext(DetailsContext);
    return(
        <div>
            <div>Home</div>
            <p>Detail: {details.name}</p>
            <About />
        </div>
        
    )
}

export default Home;
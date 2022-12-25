import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";
const Auth =()=>{
    return(
        <div>
        <Router>
             <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/signup">Sign-up</Link></li>
                <li><Link to="/login">Log-in</Link></li>
            </ul>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/signup" element={<Signup/>}/>
                <Route path="/login" element={<Login/>}/>
            </Routes>
        </Router>
        </div>
    )
}

export default Auth;
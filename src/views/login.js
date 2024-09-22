import axios from "axios";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import axiosClient from "../axiosClient";
import { useStateContext } from "../contexts/contextprovider";


// Notice the capitalized 'Login'
export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { setUser, setToken } = useStateContext();

    const Submit =  (ev) =>{
        ev.preventDefault();
        const payload = {email, password}
        
        axiosClient.post("/login",payload).then(({data})=>{
            setUser(data.user);
            setToken(data.token);
           
    }).catch(err => {
        const response = err.response;
        if(response && response.status === 422){
            console.log(response.data.errors);
        }
    });
    }

    return (
        <div className="login-signup-form animated fadeinDown">
            <div className="form">
                <h1 className="title">Login To Your Account</h1>
                <form onSubmit={Submit}>
                    <input type="text" required name="email"  value={email} id="email" onChange={(e)=> setEmail(e.target.value)}/>
                    <input type="password" required name="password"  value={password} id="password" onChange={(e)=> setPassword(e.target.value)}/>
                   
                    <input type="submit" className="btn btn-block" />
                    <p className="message">
                        Not Registered? <Link to="/register">Create a new account</Link>
                    </p>
                </form>
            </div>
        </div>
    );
}

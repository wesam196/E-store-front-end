import axios from "axios";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import axiosClient from "../axiosClient";
import { useStateContext } from "../contexts/contextprovider";

export default function Register() {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [password_confirmation, setPasswordCon] = useState();


    const { setUser, setToken } = useStateContext();

    const submit = (ev) => {
        ev.preventDefault();
        const payload =  {name, email, password, password_confirmation};
        
        axiosClient.post("/register", payload)
            .then(({ data }) => {
                setUser(data.user);
                setToken(data.token);
            })
            .catch(err => {
                const response = err.response;
                if (response) {
                    if (response.status === 422) {
                        console.log(response.data.errors);
                    } else {
                        console.error('Error status:', response.status);
                        console.error('Error data:', response.data);
                    }
                } else {
                    console.error('Error message:', err.message);
                }
            });
    };

    return (
        <div className="login-signup-form animated fadeinDown">
            <div className="form">
                <h1 className="title">
                    Create A New Account
                </h1>
            {/*
                <form onSubmit={submit}>
                    <input ref={nameRef} type="text" placeholder="Name" name="name"/>
                    <input ref={emailRef} type="email" placeholder="Email" name="email"/>
                    <input ref={passwordRef} type="password" placeholder="Password" name="password"/>
                    <button className="btn btn-block">Register</button>
                    <p className="message">
                        Already Have An Account? <Link to='/login'>Login</Link>
                    </p>
                </form>
                */}
                <form onSubmit={submit}>
                <input type="text" required   value={name} id="name" onChange={(e)=> setName(e.target.value)}/>
                <input type="text" required   value={email} id="email" onChange={(e)=> setEmail(e.target.value)}/>
                <input type="password" required   value={password} id="password" onChange={(e)=> setPassword(e.target.value)}/>
                <input type="password" required   value={password_confirmation} id="password_confirmation" onChange={(e)=> setPasswordCon(e.target.value)}/>


                    <input type="submit"/>
                    <p class="message">
                        Already Have An Account? <a href="{{ url('/login') }}">Login</a>
                    </p>
                </form>
                <p>{name} - {email} - {password}</p>
            </div>
        </div>
    );
}

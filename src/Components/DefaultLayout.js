import axios from "axios";
import { useEffect } from "react";
import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import axiosClient from "../axiosClient";
import { useStateContext } from "../contexts/contextprovider";
import Navigation from "./navigation";
import Products from "../views/products";

export default function DefaultLayout() {
    const { user, token, setUser, setToken } = useStateContext();

    // Always call the hook, not conditionally
    useEffect(() => {
        
        if (token) {
            axiosClient.get('/user')
                .then(({ data }) => {
                    setUser(data);
                });
        }
       console.log(token);
    }, [token]); // Only run the effect when the token changes

    // Conditionally render part of the UI instead of calling return early
    if (!token) {
        return <Navigate to='/login' />;
    }

    const onLogout = (ev) => {
        ev.preventDefault();
        axiosClient.get('/logout')
            .then(() => {
                setUser(null);
                setToken(null);
            });
    };

    return (
        <div id="defaultLayout">
            <div className="content">
                <header>
                    <div>
                    <Navigation/>
                    </div>
                    <div>
                        {user ? user.name : 'Loading...'}
                        <a href="#" onClick={onLogout} className="btn-logout"> Logout</a>
                    </div>
                </header>
                <main>

                    <Products/>
                    <Outlet />
                </main>
            </div>
        </div>
    );
}

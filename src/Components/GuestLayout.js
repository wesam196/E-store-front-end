import { useStateContext } from "../contexts/contextprovider";
import { Navigate, Outlet } from "react-router-dom";
import TestAPI from "../views/testAPI";
import Navigation from "./navigation";

export default function GuestLayout(){
    const {token} = useStateContext();
    if(token){
       return <Navigate to='/'/>
    }

    return(
        <div>
            <Navigation/>
            <div>
           guest Layout
            </div>
            
            <Outlet />
        </div>
    )
}
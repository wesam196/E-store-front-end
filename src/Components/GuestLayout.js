import { useStateContext } from "../contexts/contextprovider";
import { Navigate, Outlet } from "react-router-dom";
import TestAPI from "../views/testAPI";

export default function GuestLayout(){
    const {token} = useStateContext();
    if(token){
       return <Navigate to='/'/>
    }

    return(
        <div>
            <div>
           guest Layout
            </div>
            <Outlet />
        </div>
    )
}
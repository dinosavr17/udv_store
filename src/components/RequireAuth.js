import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const RequireAuth = ({ allowedRoles }) => {
    const location = useLocation();
    return (
        <>
            {JSON.parse(localStorage.getItem("userData")).accessToken
                ? <Outlet/>
                : <Navigate to='/sign-in' state={{from: location}} replace/>}}
        </>

    );
}

export default RequireAuth;
import { useContext, useEffect } from "react";

import * as authService from '../../services/authService'
import { useNavigate } from "react-router-dom";
import Path from "../../paths";
import AuthContext from "../../contexts/authContext";

export default function Logout(){
    const navigate = useNavigate();
    const {logOutHandler} = useContext(AuthContext);

    useEffect(() => {
        authService.logout()
        .then(() => {
            logOutHandler();
            navigate(Path.Home)
        })
        .catch(() => navigate(Path.Home))

    }, [])

    return null;

}
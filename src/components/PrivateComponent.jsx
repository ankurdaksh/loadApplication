
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const PrivateComponent = ({ children }) => {
  const userLogged = JSON.parse(localStorage.getItem("loginData"));
    const navigate = useNavigate();
    useEffect(() => {
        if (userLogged === null) {
            navigate("/login");
        }
    }, [])
    return (
        <>{children}</>
    )
}

export default PrivateComponent
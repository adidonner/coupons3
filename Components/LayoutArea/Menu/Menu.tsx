import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import ClientType from "../../../Models/ClientType";
import { authStore } from "../../../Redux/AuthState";
import "./Menu.css";

function Menu(): JSX.Element {

    const [clientType, setClientType] = useState<ClientType>();

    useEffect(() => {

        setClientType(authStore.getState().user?.clientType);
        
        const unsubscribe = authStore.subscribe(() => {
            setClientType(authStore.getState().user?.clientType);
        });

        return unsubscribe;

    }, []);

    return (
        <div className="Menu">

			<NavLink to="/home">Home</NavLink>
            <span> | </span>
            <NavLink to="/about">About</NavLink>
            <span> | </span>

            {clientType === ClientType.CUSTOMER && <>
                <NavLink to="customer">Customer Home</NavLink>
                
            </>}

            {clientType === ClientType.COMPANY && <>
                <NavLink to="company">Company Services</NavLink>
            </>}

            {clientType === ClientType.ADMINISTRATION && <>
                <NavLink to="admin">Admin Services</NavLink>
            </>}

        </div>
    );
}

export default Menu;

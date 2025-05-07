import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import UserModel from "../../../Models/UserModel";
import { authStore } from "../../../Redux/AuthState";
import authService from "../../../Services/AuthService";
import "./AuthMenu.css";
import notificationService from "../../../Services/NotificationService";

function AuthMenu(): JSX.Element {

    const [user, setUser] = useState<UserModel>();
    useEffect(() => {
        
        setUser(authStore.getState().user); // First update

        const unsubscribe = authStore.subscribe(()=>{
            setUser(authStore.getState().user); // Any other update
        });

        // Will be called when component destroyed
        return unsubscribe; // Stop listening

    }, []);

    function logout(): void {
        authService.logout();
        notificationService.success("Bye Bye...");
    }

    return (
        <div className="AuthMenu">
            {!user &&
                <>
                    <span>Hello Guest | </span>
                    <NavLink to="/login">Login</NavLink>
                </>
            }
            
            {user &&
                <>            
                    <span>Client Status: {user.clientType} | </span>
                    <NavLink to="/home" onClick={logout}>Logout</NavLink>
                </>
            }
        </div>
    );
}

export default AuthMenu;

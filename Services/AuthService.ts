import axios from "axios";
import CredentialsModel from "../Models/CredentialsModel";
import { AuthActionType, authStore } from "../Redux/AuthState";
import appConfig from "../Utils/AppConfig";

class AuthService {

    // Login to backend:
    public async login(credentials: CredentialsModel): Promise<void> {
        
        // Send credentials to backend, get back response: 
        const response = await axios.post<string>(appConfig.loginUrl, credentials);
        
        // get the token:   
        const token = response.data;
        

        // Update redux:
        authStore.dispatch({ type: AuthActionType.Login, payload: token });
    }

        // Logout: 
        public logout(): void {

        // Update redux: 
        authStore.dispatch({ type: AuthActionType.Logout });
    }
}

const authService = new AuthService();

export default authService;

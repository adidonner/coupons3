import jwtDecode from "jwt-decode";
import { createStore } from "redux";
import ClientType from "../Models/ClientType";
import UserModel from "../Models/UserModel";

// 1. Application State - the data in the application level
export class AuthState {
    public user: UserModel = null;
    public token: string = null;

    public constructor() {
        this.token = sessionStorage.getItem("token");
        if(this.token) {
            this.user = extractUser(this.token);
        }
    }
}

// 2. Action Type - what we can do with that data
export enum AuthActionType {
    Login, // saves the token + update the user
    Logout // delete the token + clear the user
}

// 3. Action - An object describing one action to perform on that data
export interface AuthAction {
    type: AuthActionType;
    payload?: string; // For Login the payload is the token, for Logout we don't have a payload
}

// 4. Reducer - The function performing the needed operation
// When we call dispatch redux calls this function
export function authReducer(currentState = new AuthState(), action: AuthAction): AuthState {

    // a. Duplicate the state:
    const newState = { ...currentState }; // Spread Operator.

    // b. Perform the action on the duplicated state: 
    switch (action.type) {
        case AuthActionType.Login: // Here the payload is the token.
            newState.token = action.payload; // token
            newState.user = extractUser(newState.token);
            sessionStorage.setItem("token", newState.token);
            break;
            case AuthActionType.Logout: // Here we don't have a payload.
            newState.token = null;
            newState.user = null;
            sessionStorage.removeItem("token");
            break;
        }
        
        // c. Return the duplicated state: 
        return newState;
    }
    
    function extractUser(token: string): UserModel {
        let user: UserModel;
        const container: any = jwtDecode(token);         
        user = new UserModel(container.id, container.sub,container.clientType,
             container.name, container.lastName, container.userName); 
                  
    return user;
}

// 5. Store - The manager which can do dispatch, getState and subscribe
export const authStore = createStore(authReducer);

import axios from "axios";
import { authStore } from "../Redux/AuthState";

class Interceptors {

    public create(): void {

        // On any request, this function will be called:
        axios.interceptors.request.use(requestObject => {
            
            // Only if we have a token - send it to backend:
            if (authStore.getState().token) {
                                
                // Add authorization header containing the token:
                requestObject.headers.Authorization = "Bearer " + authStore.getState().token; // Don't forget the space after "Bearer "
            }

            // Return changed request: 
            return requestObject;

        });

        // If backend response with 401 or 403 - auth error
        axios.interceptors.response.use(responseObject => {
            if (responseObject.status === 401 || responseObject.status === 403) {
                // Redirect to login:
                window.location.href = "/login";
            }
            return responseObject;
        });

    }

}

const interceptors = new Interceptors();

export default interceptors;

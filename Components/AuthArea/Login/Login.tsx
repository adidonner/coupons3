import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import ClientType from "../../../Models/ClientType";
import CredentialsModel from "../../../Models/CredentialsModel";
import authService from "../../../Services/AuthService";
import notificationService from "../../../Services/NotificationService";
import "./Login.css";
import background from "../../../Assets/images/background1.jpg";

function Login(): JSX.Element {

    const { register, handleSubmit } = useForm<CredentialsModel>();
    const navigate = useNavigate();

    async function send(credentials: CredentialsModel) {
        
        try {
            await authService.login(credentials);
            notificationService.success("Welcome!");
            if(credentials.clientType == ClientType.CUSTOMER){
                navigate("/customer");
            }
            if(credentials.clientType == ClientType.COMPANY){
                navigate("/company");
            }
            if(credentials.clientType == ClientType.ADMINISTRATION){
                navigate("/admin");
            }   
            // navigate("/home");
        }
        catch(err: any) {
            notificationService.error(err);
        }
    }

    return (
            <div style={{backgroundImage: `url(${background})`,
            backgroundSize: "cover"
                }}>
             <div className="Login">

                <form onSubmit={handleSubmit(send)}>
                    
                    <label>Client Type: </label>
                    <select defaultValue="" required {...register("clientType")}>
                        <option disabled value="">Select Client Type...</option>
                        <option value={ClientType.CUSTOMER}>Customer</option>
                        <option value={ClientType.COMPANY}>Company</option>
                        <option value={ClientType.ADMINISTRATION}>Administration</option>
                    </select>

                    <label>Email: </label>
                    <input type="email" required {...register("email")} />

                    <label>Password: </label>
                    <input type="password" required {...register("password")} />

                    <button>Login</button>

                </form>
            </div>
         </div>
    );
}

export default Login;

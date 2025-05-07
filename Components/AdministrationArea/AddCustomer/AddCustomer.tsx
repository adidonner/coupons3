import { useForm } from "react-hook-form";
import "./AddCustomer.css";
import { useNavigate } from "react-router-dom";
import adminService from "../../../Services/AdminService";
import CustomerModel from "../../../Models/CustomerModel";
import notificationService from "../../../Services/NotificationService";

function AddCustomer(): JSX.Element {
    const { register, handleSubmit, formState } = useForm<CustomerModel>();
    const navigate = useNavigate();

    async function send(customer: CustomerModel) {
        try {
            
            await adminService.addCustomer(customer);
            notificationService.success("Customer Added");
            navigate("/admin/all-customers")
        } catch (error: any){
            console.dir(error);
            notificationService.error("error add customer")
        }
    }

    return (
        <div className="addCustomer Box">
            <form>
                <h4>Add Customer</h4>

                <label>First Name: </label>
                <input type="text" {...register("firstName",
                {
                    required: {value: true, message: "Missing firstName"},
                    minLength: {value:2, message:"Name too short"}
                }
                )} />

                <span>{formState.errors?.firstName?.message}</span>

                <label>Last Name: </label>
                <input type="text" {...register("lastName",
                {
                    required: {value: true, message: "Missing lastName"},
                    minLength: {value:2, message:"Name too short"}
                }
                )} />

                <span>{formState.errors?.lastName?.message}</span>

                <label>User Name: </label>
                <input type="text" {...register("userName")} />

                

                <label>Email: </label>
                <input type="text" {...register("email",
                {
                    required: {value: true, message: "Missing email"}, 
                    minLength: {value:2, message:"Email too short"},
                    
                }
                )} />
                
                <span>{formState.errors?.email?.message}</span>

                <label>Password: </label>
                <input type="text" {...register("password",
                {
                    required: {value: true, message: "Missing password"}, 
                    minLength: {value:4, message:"password too short"},
                    maxLength: {value:4, message:"password too long"},
                    
                }
                )} />
                
                <span>{formState.errors?.password?.message}</span>
                
                <button onClick={handleSubmit(send)}>Add</button>
            </form>
        </div>
    );
}

export default AddCustomer;

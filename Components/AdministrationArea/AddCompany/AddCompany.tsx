import "./AddCompany.css";
import { useForm } from "react-hook-form";
import CompanyModel from "../../../Models/CompanyModel";
import { useNavigate } from "react-router-dom";
import adminService from "../../../Services/AdminService";
import notificationService from "../../../Services/NotificationService";

function AddCompany(): JSX.Element {
    const { register, handleSubmit, formState } = useForm<CompanyModel>();
    const navigate = useNavigate();

    async function send(company: CompanyModel) {
        try {
            await adminService.addCompany(company);
            notificationService.success("Company Added");
            navigate("/admin/all-companies")
        } catch (error: any){
            console.dir(error);
            notificationService.error("error add company")
        }
    }

    return (
        <div className="addCompany Box">
            <form>
                <h4>Add Company</h4>

                <label>Name: </label>
                <input type="text" {...register("name",
                {
                    required: {value: true, message: "Missing name"},
                    minLength: {value:2, message:"Name too short"}
                }
                )} />

                <span>{formState.errors?.name?.message}</span>
                

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
                    
                }
                )} />
                
                <span>{formState.errors?.password?.message}</span>
                
                <label>logoImage: </label>
                <input type="text" {...register("logoImage")} />
                

                <button onClick={handleSubmit(send)}>Add</button>
            </form>
        </div>
    );
}

export default AddCompany;

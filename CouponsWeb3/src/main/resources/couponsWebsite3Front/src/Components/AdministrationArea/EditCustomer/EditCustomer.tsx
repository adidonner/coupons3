import { useForm } from "react-hook-form";
import "./EditCustomer.css";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import adminService from "../../../Services/AdminService";
import CustomerModel from "../../../Models/CustomerModel";
import notificationService from "../../../Services/NotificationService";

function EditCustomer(): JSX.Element {

    const { register, handleSubmit, formState, setValue} = useForm<CustomerModel>();
    const navigate = useNavigate();

    const params = useParams();
    const id = +params.customerId; // get the id from the path

    useEffect(() => {
        adminService.getOneCustomer(id)

        .then((p) => {
            setValue("firstName", p.firstName);
            setValue("lastName", p.lastName);
            setValue("userName", p.userName);
            setValue("email", p.email);
            setValue("password", p.password);
        })

        .catch((err) => alert(err.message));
    }, [])

    async function send(customer: CustomerModel) {
        // customer.id = id;
        try {
            customer.id = id;           
            await adminService.updateCustomerId(customer);
            notificationService.success("Customer updated");
            navigate("/admin/all-customers")
        } catch (error: any){
            console.dir(error);
            alert(error.message)
        }
    }
    return (
        <div className="editCustomer Box">
			<form>
                <h4>Edit Customer</h4>

                <label>First Name: </label>
                <input type="text"  {...register("firstName",
                    {
                        required: { value: true, message: "Missing first Name" },
                        minLength: { value: 2, message: "Name too short" }
                    }
                )} />

                <span>{formState.errors?.firstName?.message}</span>
                
                <label>Last Name: </label>
                <input type="text"  {...register("lastName",
                    {
                        required: { value: true, message: "Missing last Name" },
                        minLength: { value: 2, message: "Name too short" }
                    }
                )} />

                <span>{formState.errors?.lastName?.message}</span>

                <label>User Name: </label>
                <input type="text"  {...register("userName")} />

                <label>Email: </label>
                <input type="text"  {...register("email",
                    {
                        required: { value: true, message: "Email is required" },
                        minLength: { value: 2, message: "Name too short" }
                    }
                )} />

                <span>{formState.errors?.email?.message}</span>

               
                <button onClick={handleSubmit(send)}>Edit</button>
            </form>
        </div>
    );
}

export default EditCustomer;

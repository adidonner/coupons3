import { useForm } from "react-hook-form";
import "./EditCompany.css";
import CompanyModel from "../../../Models/CompanyModel";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import adminService from "../../../Services/AdminService";
import notificationService from "../../../Services/NotificationService";

function EditCompany(): JSX.Element {

    const { register, handleSubmit, formState, setValue} = useForm<CompanyModel>();
    const navigate = useNavigate();

    const params = useParams();
    const id = +params.companyId; // get the id from the path

    useEffect(() => {
        adminService.getOneCompany(id)

        .then((p) => {
            setValue("email", p.email);
            setValue("name", p.name);
            setValue("logoImage", p.logoImage);
        })

        .catch((err) => notificationService.error(err.message));
    }, [])

    async function send(company: CompanyModel) {
        try {
            company.id = id;
            await adminService.updateCompanyId(company);
            notificationService.success("Company updated");
            navigate("/admin/all-companies")
        } catch (error: any){
            console.dir(error);
            notificationService.error(error.message)
        }
    }
    return (
        <div className="editCompany Box">
			<form>
                <h2>Edit Company</h2>

                <label>Name: </label>
                <input type="text"  {...register("name",
                    {
                        required: { value: true, message: "Missing name" },
                        minLength: { value: 2, message: "Name too short" }
                    }
                )} />

                <span>{formState.errors?.name?.message}</span>

                <label>email: </label>
                <input type="text"  {...register("email",
                    {
                        required: { value: true, message: "Email is required" },
                        minLength: { value: 2, message: "Name too short" }
                    }
                )} />

                <span>{formState.errors?.email?.message}</span>

                <label>logoImage: </label>
                <input type="text"  {...register("logoImage")} />

                <button onClick={handleSubmit(send)}>Edit</button>
            </form>
        </div>
    );
}

export default EditCompany;

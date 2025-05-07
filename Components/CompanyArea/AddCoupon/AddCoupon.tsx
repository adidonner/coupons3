import "./AddCoupon.css";

import CouponModel from "../../../Models/CouponModel";
import companyService from "../../../Services/CompanyService";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import notificationService from "../../../Services/NotificationService";

function AddCoupon(): JSX.Element {
    const { register, handleSubmit, formState } = useForm<CouponModel>();
    const navigate = useNavigate();

    async function send(coupon: CouponModel) {
        try {
                
            await companyService.addCoupon(coupon);
            notificationService.success("Coupon Added");
            navigate("/company/all-coupons")
        } catch (error: any){
            console.dir(error);
            alert(error.message)
        }
        // console.log(coupon);
        
    }
    return (
        <div className="addCoupon">
            <form>
                <h5>Add Coupon</h5>
            
                <label>Title: </label>
                <input type="text"  {...register("title",
                    {
                        required: { value: true, message: "Missing Title" },
                        minLength: { value: 2, message: "Name too short" }
                    }
                    )} />

                <span>{formState.errors?.title?.message}</span>

                <label>Amount: </label>
                <input type="number" min={0}  {...register("amount",
                    {
                        required: { value: true, message: "Missing amount" }
                    }
                    )} />
                <span>{formState.errors?.price?.message}</span>

                <label>Category: </label>
                <select {...register("category")}>
                    <option >SPORTS</option>
                    <option>CLOTHINGS</option>
                    <option>ELECTRICITY</option>
                    <option>CAMPING</option>
                    <option>FOOD</option>
                    <option>RESTAURANTS</option>
                    <option>VACATIONS</option>
                </select>
            
                <label>Description: </label>
                <input type="text"  {...register("description")} />

                <label>Start date: </label>
                <input type="date"  {...register("startDate",
                    {required: { value: true, message: "Missing start date" }}
                    )} />
                
                <span>{formState.errors?.startDate?.message}</span>

                <label>End Date: </label>
                <input type="date"  {...register("endDate",
                    {required: { value: true, message: "Missing end date" }}
                    )} />
                
                <span>{formState.errors?.endDate?.message}</span>
                
                <label>Price: </label>
                <input type="number" min={0} {...register("price",
                    {
                        required: { value: true, message: "Missing price" },
                        min: { value: 0, message: "Price cannot be negative" },
                        max: { value: 1000, message: "Price cannot exceed 1000" }
                    }
                    )} step="1" />

                    <span>{formState.errors?.price?.message}</span>
                
                <label>Image: </label>
                <input type="text"  {...register("image")} />
                
                <button onClick={handleSubmit(send)}>Add</button>
            </form>
        </div>
    );
}

export default AddCoupon;

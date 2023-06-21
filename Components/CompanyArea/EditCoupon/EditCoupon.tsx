import "./EditCoupon.css";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
// import { useEffect, useState } from "react";
import CouponModel from "../../../Models/CouponModel";
import companyService from "../../../Services/CompanyService";
import Category from "../../../Models/Category";
// import UserModel from "../../../Models/UserModel";
// import { authStore } from "../../../Redux/AuthState";
import notificationService from "../../../Services/NotificationService";

function EditCoupon(): JSX.Element {

    const { register, handleSubmit, formState, setValue} = useForm<CouponModel>();
    const navigate = useNavigate();

    const params = useParams();
    const id = +params.couponId; // get the id from the path

    useEffect(() => {
        companyService.getOneCoupon(id)

        .then((p) => {
            setValue("id", p.id);
            // setValue("company", p.company);
            setValue("category", p.category);
            setValue("title", p.title);
            setValue("description", p.description);
            setValue("startDate", p.startDate);
            setValue("endDate", p.endDate);
            setValue("amount", p.amount);
            setValue("price", p.price);
            setValue("image", p.image);
            
        })

        .catch((err) => alert(err.message));
    }, [id, setValue])

    async function send(coupon: CouponModel) {
        
        try {
            //  = user.id;
            coupon.id = id;
            await companyService.updateCouponId(coupon);
            notificationService.success("Coupon updated");
            navigate("/company/all-coupons")
        } catch (error: any){
            console.dir(error);
            alert(error.message)
        }
    }
    return (
        <div className="EditCoupon Box">
			<form>
                <h4>Edit Coupon</h4>

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
                    <option disabled value="">Select Category Type...</option>
                    <option value={Category.SPORTS} >SPORTS</option>
                    <option value={Category.CLOTHINGS}>CLOTHINGS</option>
                    <option value={Category.ELECTRICITY}>ELECTRICITY</option>
                    <option value={Category.CAMPING}>CAMPING</option>
                    <option value={Category.FOOD}>FOOD</option>
                    <option value={Category.RESTAURANTS}>RESTAURANTS</option>
                    <option value={Category.VACATIONS}>VACATIONS</option>
                </select>
            
                <label>Description: </label>
                <input type="text"  {...register("description")} />

                <label>StartDate: </label>
                <input type="date"  {...register("startDate")} />

                <label>EndDate: </label>
                <input type="date"  {...register("endDate")} />

                <label>Price: </label>
                <input type="number" min={0} {...register("price",
                    {
                        required: { value: true, message: "Missing price" },
                        min: { value: 0, message: "Price cannot be negative" },
                        max: { value: 1000, message: "Price cannot exceed 1000" }
                        
                    }
                 )} step="0.1" />

                <label>Image: </label>
                <input type="text"  {...register("image")} />

                <button onClick={handleSubmit(send)}>Edit</button>
            </form>
        </div>
    );
}

export default EditCoupon;

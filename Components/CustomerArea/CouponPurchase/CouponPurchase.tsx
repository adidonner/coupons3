import { NavLink, useNavigate, useParams } from "react-router-dom";
import "./CouponPurchase.css";
import { useEffect, useState } from "react";
import customerService from "../../../Services/CustomerService";
import CouponModel from "../../../Models/CouponModel";
import { useForm } from "react-hook-form";
import { Notyf } from "notyf";
import notificationService from "../../../Services/NotificationService";

function CouponPurchase(): JSX.Element {
    const params = useParams();
    const couponId = +params.couponId;

    const[coupon, setCoupon] = useState<CouponModel>();
    const { handleSubmit} = useForm<CouponModel>();
    const navigate = useNavigate();

    async function send(coupon: CouponModel) {
        try {
                
            await customerService.purchaseCoupon(couponId);
            notificationService.success("You Bought the Coupon!")
            navigate("/customer/coupons")
        } catch (error: any){
            console.dir(error);
            notificationService.error("this coupon was already purchased")
        }
    }
    useEffect(()=>{
        customerService
        .getOneCoupon(couponId)   
            .then((p) => setCoupon(p))
            .catch((e) => alert(e.message));
    },[]);
  

    return (
        <div className="couponPurchase" >
            <h3>Coupon Purchase: </h3>
			{coupon && (
                <>        
                    <h5>Id: {coupon.id}</h5>
                    <h5>Amount: {coupon.amount}</h5>
                    <h5>Category: {coupon.category}</h5>
                    <h5>Description: {coupon.description}</h5>
                    <h5>Start Date {coupon.startDate.toString()}</h5>
                    <h5>End Date {coupon.endDate.toString()}</h5>
                    <h5>Title: {coupon.title}</h5>
                    <h5>Price: {coupon.price}$</h5>
                    <button onClick={handleSubmit(send)}>Purchase Coupon</button>
                    <br />
                    <NavLink to="/customer/all-companies-coupons" >Back to all Coupons</NavLink>
                    </>
            )}
        </div>
    );
}

export default CouponPurchase;

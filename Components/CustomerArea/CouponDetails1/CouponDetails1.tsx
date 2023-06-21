import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./CouponDetails1.css";
import CouponModel from "../../../Models/CouponModel";
import customerService from "../../../Services/CustomerService";


function CouponDetails1(): JSX.Element {
    
    const params = useParams();
    const couponId = +params.couponId;
    
    const [coupon, setCoupon] = useState<CouponModel>();

    useEffect(() =>{
        customerService
            .getOneCoupon(couponId)
            .then((p) => setCoupon(p))
            .catch((e) => alert("This coupon isn't in your stock"));
    }, []);
    
    
    return (
        <div className="couponDetails1">
            <h3>Coupon Details</h3>
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
                </>
            )}
        </div>
    );
}

export default CouponDetails1;

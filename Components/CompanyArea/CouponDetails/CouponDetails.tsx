
import { NavLink, useNavigate, useParams} from "react-router-dom";
import "./CouponDetails.css";
import { useEffect, useState } from "react";
import companyService from "../../../Services/CompanyService";
import CouponModel from "../../../Models/CouponModel";
import notificationService from "../../../Services/NotificationService";


function CouponDetails(): JSX.Element {
   
    const params = useParams();
    const couponId = +params.couponId;
    
    const [coupon, setCoupon] = useState<CouponModel>();
    const navigate = useNavigate();
    
    async function deleteCoupon() {
        
        if (window.confirm("Do you confirm deleting coupon - "
            + coupon.title + "?")) {
            try {
                await companyService.deleteCouponId(couponId);
                notificationService.success("Coupon deleted");
                navigate("/company/all-coupons");
            } catch (error: any){
                notificationService.error("coupon not deleted")
            }
        }
    }
    useEffect(() => {
        companyService
            .getOneCoupon(couponId)
            .then((p) => setCoupon(p))
            .catch((e) => alert("Coupon with this id is not registered in your stock"))
    },[couponId]);
    console.log(coupon);

    return (
        <div className="CouponDetails">
			<h3>Coupon Details</h3>
            {coupon && (
                <>
                    <h5>Id: {coupon.id}</h5>
                    <h5>Company: {coupon.company.name}</h5>
                    <h5>Amount: {coupon.amount}</h5>
                    <h5>Category: {coupon.category}</h5>
                    <h5>Description: {coupon.description}</h5>
                    <h5>Start Date {coupon.startDate.toString()}</h5>
                    <h5>End Date {coupon.endDate.toString()}</h5>
                    <h5>Title: {coupon.title}</h5>
                    <h5>Price: {coupon.price}$</h5>
               
                <NavLink to="/company/all-coupons">Back to all Coupons</NavLink>
                <span> | </span>
                <NavLink to="" onClick={deleteCoupon}>Delete Coupon</NavLink>
                <span> | </span>
                <NavLink to={"/company/edit-coupon/" + couponId} >Edit Coupon</NavLink>
                </>

 
            )}
                
        </div>
    );
}

export default CouponDetails;
